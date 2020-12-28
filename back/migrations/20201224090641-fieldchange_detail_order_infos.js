'use strict';
const DataTypes = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('detail_order_infos',"estimateDoc",{
      type: DataTypes.STRING,
      allowNull:true,
    }),
    queryInterface.changeColumn('detail_order_infos',"contractDoc",{
      type: DataTypes.STRING,
      allowNull:true,
    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('detail_order_infos','estimateDoc'),
    queryInterface.changeColumn('detail_order_infos','contractDoc')
  }
};
