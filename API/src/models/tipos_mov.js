"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tipos_mov extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // tipos_mov.hasMany(models.movimentacao);
    }
  }
  tipos_mov.init(
    {
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tipos_mov",
      freezeTableName: true,
      name: {
        plural: 'tipos_mov',
        singular: 'tipos_mov'
      }
    }
  );
  return tipos_mov;
};
