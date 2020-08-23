"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sub_categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sub_categoria.belongsTo(models.categoria);
      sub_categoria.hasMany(models.movimentacao);
    }
  }
  sub_categoria.init(
    {
      categoria_id: DataTypes.INTEGER,
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "sub_categoria",
    }
  );
  return sub_categoria;
};
