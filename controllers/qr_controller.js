var db = require("./models");
var Jimp = require("jimp");
var fs = require("fs");
var path = require("path");
var QrCode = require("qrcode-reader");
var buffer = fs.readFileSync(path.join(__dirname, "/img/qrimg.jpg"));
module.exports = Jimp.read(buffer, function(err, image) {
  if (err) {
    console.error(err);
    // TODO handle error
  }
  var qr = new QrCode();
  qr.callback = function(err, value) {
    if (err) {
      console.error(err);
      // TODO handle error
    }
    console.log(value.result);
    // console.log(value);
  };
  qr.decode(image.bitmap);
});
