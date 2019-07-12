module.exports = function(app) {
  const application = require("./routes/application");
  const users = require("./routes/users");
  const apps = require("./routes/apps");
  // const pricing = require("./routes/pricing");

  app.use("/", application);
  app.use("/users", users);
  app.use("/apps", apps);
  // app.use("/pricing", pricing);
  //other routes..
};
