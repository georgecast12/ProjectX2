module.exports = function(app) {
  const application = require("./routes/application");
  const users = require("./routes/users");
  const trips = require("./routes/trips");
  const drone = require("./routes/drone");
  // const pricing = require("./routes/pricing");

  app.use("/", application);
  app.use("/users", users);
  app.use("/trips", trips);
  app.use("/drone", drone);
  // app.use("/pricing", pricing);
  //other routes..
};
