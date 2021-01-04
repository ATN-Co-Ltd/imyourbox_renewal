'use strict';
const DataTypes = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('detail_order_infos',"contract_status",{
      type: DataTypes.ENUM,
      values:["no_response", "no_negotiation","compare_otherCompany","inquire_storeType","ongoing_negotiation","complete_negotiation"],
      allowNull: true,
    }),
    queryInterface.addColumn('detail_order_infos',"history",{
      type: DataTypes.STRING,
      allowNull:true,
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('detail_order_infos',"contract_status"),
    queryInterface.addColumn('detail_order_infos',"history")
  }
};
