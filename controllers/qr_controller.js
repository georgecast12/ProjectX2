var db = require("../models");
var Jimp = require("jimp");
var fs = require("fs");
var path = require("path");
var QrCode = require("qrcode-reader");
var buffer = fs.readFileSync(path.join(__dirname, "../img/qrimg.jpg"));

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
      var prod = value.result;
      console.log(prod);

      // exports.addProduct = function(req, res) {
      //   db.Inven.create({
      //     product: value.result,
      //   })
      //     .then(function() {
      //       res.send({ redirect: "/" });
      //     })
      //     .catch(function(err) {
      //       res.json(err);
      //     });
      // };

      // console.log(value);
    };

    qr.decode(image.bitmap);
  });
};
qrProduct();
