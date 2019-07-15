// const { spawn } = require("child_process");
const sdk = require("tellojs");

exports.runMission = function() {
  console.log("running mission");
  // const bindVideo = async () => {
  //   const h264encoder_spawn = {
  //     command: "mplayer",
  //     args: ["-gui", "-nolirc", "-fps", "35", "-really-quiet", "-"],
  //   };
  //   const h264encoder = spawn(
  //     h264encoder_spawn.command,
  //     h264encoder_spawn.args,
  //   );
  //   const videoEmitter = await sdk.receiver.video.bind();
  //   console.log(videoEmitter);
  //   videoEmitter.on("message", msg => h264encoder.stdin.write(msg));
  // };

  sdk.control
    .connect()
    // .then(() => bindVideo())
    .then(() => sdk.control.takeOff())
    // .then(() => sdk.control.move.front(20))
    // .then(() => sdk.control.move.front(20))
    // .then(() => sdk.control.move.right(76))
    // .then(() => sdk.control.move.up(140))
    // .then(() => sdk.control.move.back(20))
    // .then(() => sdk.control.move.front(70))
    // .then(() => sdk.control.move.right(76))
    // .then(() => sdk.control.move.back(20))
    // .then(() => sdk.control.move.front(20))
    // .then(() => sdk.control.move.back(70))
    // .then(() => sdk.control.flip.left())
    // .then(() => sdk.control.flip.left())
    // .then(() => sdk.control.flip.right())
    // .then(() => sdk.control.flip.right())
    // .then(() => sdk.control.flip.back())
    .then(() => sdk.control.rotate.clockwise(360))
    .then(() => sdk.control.land())
    // .then(() => location.reload())
    .then(result => console.log(result))

    .catch(error => console.error(error));
};
