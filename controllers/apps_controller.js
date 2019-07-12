var db = require("../models");

exports.index = function(req, res) {
  db.App.findAll({
    where: {
      UserId: req.user.id,
    },
  }).then(function(dbApp) {
    console.log(dbApp);
    res.render("trips/trips", {
      layout: "main-trips",
      trip: dbApp,
    });
  });
};

exports.createTrip = function(req, res) {
  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.App.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};
