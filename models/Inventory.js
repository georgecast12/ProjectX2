module.exports = function(sequelize, DataTypes) {
  var Inven = sequelize.define("Inven", {
    product: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      len: [1]
    }
  });

  // Inven.associate = function(models) {
  //   // We're saying that a Inven should belong to an Author
  //   // A Inven can't be created without an Author due to the foreign key constraint
  //   Inven.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };

  return Inven;
};
