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
      movimentacao.belongsTo(models.tipos_mov, {foreignKey: 'tipo_movId'});
      movimentacao.belongsTo(models.subcategoria);
    }
  }
  movimentacao.init(
    {
      subcategoriaId: DataTypes.INTEGER,
      desc: DataTypes.STRING,
      valor: DataTypes.DECIMAL,
      data: DataTypes.DATE,
      tipo_movId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "movimentacao",
      freezeTableName: true,
      name: {
        plural: 'movimentacoes',
        singular: 'movimentacao'
      }
    }
  );
  return movimentacao;
};
