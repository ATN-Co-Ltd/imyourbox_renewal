'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('orderInfos',"manager",{
      type: DataTypes.ENUM, 
      values:["1","2","3","4","5"],
      allowNull: true,
    }),
    queryInterface.addColumn('orderInfos',"estimateDoc",{
      type: DataTypes.STRING,
      allowNull:true,
    }),
    queryInterface.addColumn('orderInfos',"contractDoc",{
      type: DataTypes.STRING,
      allowNull:true,
    }),
    queryInterface.addColumn('orderInfos',"contract_status",{
      type: DataTypes.ENUM,
      values:["no_response", "no_negotiation","compare_otherCompany","inquire_storeType","ongoing_negotiation","complete_negotiation"],
      allowNull: true,
    }),
    queryInterface.addColumn('orderInfos',"history",{
      type: DataTypes.STRING,
      allowNull:true,
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('orderInfos',"manager"),
    queryInterface.addColumn('orderInfos',"estimateDoc"),
    queryInterface.addColumn('orderInfos',"contractDoc"),
    queryInterface.addColumn('orderInfos',"contract_status"),
    queryInterface.addColumn('orderInfos',"history")
  }
};
