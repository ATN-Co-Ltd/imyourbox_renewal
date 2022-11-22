'use strict';
const DataTypes = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    queryInterface.addColumn('others_order_infos',"updatedAt",{
      type: DataTypes.DATE,
      allowNull:true,
    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('others_order_infos','updatedAt'),
    queryInterface.removeColumn('others_order_infos','updateAt')
  }
};
