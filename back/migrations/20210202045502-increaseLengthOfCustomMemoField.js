'use strict';
const DataTypes = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('detail_order_infos',"customer_memo",{
      type: DataTypes.STRING(999),
      allowNull:true,
    }),
    queryInterface.changeColumn('orderInfos',"customer_memo",{
      type: DataTypes.STRING(999),
      allowNull:true,
    })

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('detail_order_infos','customer_memo'),
    queryInterface.changeColumn('orderInfos','customer_memo')
  }
};
