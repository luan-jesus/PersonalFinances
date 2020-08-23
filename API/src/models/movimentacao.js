"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movimentacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movimentacao.belongsTo(models.tipos_mov);
      movimentacao.belongsTo(models.sub_categoria);
    }
  }
  movimentacao.init(
    {
      sub_categoria_id: DataTypes.INTEGER,
      desc: DataTypes.STRING,
      valor: DataTypes.DECIMAL,
      tipo_mov: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "movimentacao",
    }
  );
  return movimentacao;
};
