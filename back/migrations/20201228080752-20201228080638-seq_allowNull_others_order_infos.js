'use strict';
const DataTypes = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('others_order_infos','seq',{
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('others_order_infos','seq')
  }
};
