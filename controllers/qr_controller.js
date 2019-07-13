var db = require("../models");
var Jimp = require("jimp");
var fs = require("fs");
var path = require("path");
var QrCode = require("qrcode-reader");
var buffer = fs.readFileSync(path.join(__dirname, "../img/qrimg.jpeg"));

var qrProduct = function(result) {
  Jimp.read(buffer, function(err, image) {
    if (err) {
      console.error(err);
      // TODO handle error
    }
    var qr = new QrCode();
    module.exports = qr.callback = function(err, value) {
      if (err) {
        console.error(err);
        // TODO handle error
      }

      var imgde = value.result;
      var proInf = imgde.split(",");
      console.log(proInf);
      var prod = proInf[0];
      var qunt = proInf[1];

      addProduct = function(req, res) {
        db.Inven.create({
          product: prod,
          quantity: qunt
        });
        // .then(function() {
        //   res.send({ redirect: "/" });
        // })
        // .catch(function(err) {
        //   res.json(err);
        // });
      };
      addProduct();
      // console.log(value);
    };

    qr.decode(image.bitmap);
  });
};
qrProduct();
