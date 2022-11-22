'use strict';
const DataTypes = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('others_order_infos',"estimateDoc",{
      type: DataTypes.STRING,
      allowNull:true,
    }),
    queryInterface.addColumn('others_order_infos',"contractDoc",{
      type: DataTypes.STRING,
      allowNull:true,
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('others_order_infos',"estimateDoc"),
    queryInterface.addColumn('others_order_infos',"contractDoc")
  }
};
