'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movimentacao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subcategoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'subcategoria',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      desc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      valor: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tipo_movId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tipos_mov',
          key: 'id',
        },
        default: 2,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movimentacao');
  }
};