'use strict';
const DataTypes = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    
    queryInterface.addColumn('detail_order_infos','manager', {
      type: DataTypes.ENUM,
      values:["1", "2","3","4"],
      allowNull: true,
    }),
    queryInterface.addColumn('detail_order_infos',"estimateDoc",{
      type: DataTypes.UUID,
      allowNull:true,
    }),
    queryInterface.addColumn('detail_order_infos',"contractDoc",{
      type: DataTypes.UUID,
      allowNull:true,
    }),
    queryInterface.addColumn('others_order_infos',"createdAt",{
      type: DataTypes.DATE,
      allowNull:true,
    }),
    queryInterface.addColumn('others_order_infos',"updateAt",{
      type: DataTypes.DATE,
      allowNull:true,
    }),


    queryInterface.createTable('others_order_infos',
    {
      seq: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      manager: { type: DataTypes.ENUM, values:["1","2","3","4","5"],allowNull: true },
      customer_company: { type: DataTypes.STRING(100), allowNull: true },
      customer_manager_name: { type: DataTypes.STRING(100), allowNull: true },
      customer_phone: { type: DataTypes.STRING(100), allowNull: true },
      customer_email: { type: DataTypes.STRING(100), allowNull: true },
      customer_product: { type: DataTypes.STRING(1000), allowNull: true },
      input_store_num: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      output_delivery_box_amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      customer_memo: { type: DataTypes.STRING(1000), allowNull: true },
      contract_status: {
        type: DataTypes.ENUM,
        values:["no_response", "no_negotiation","compare_otherCompany","inquire_storeType","ongoing_negotiation","complete_negotiation"],
        allowNull: true,
      },
      reg_date: { type: DataTypes.DATE, allowNull: false },
     
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('detail_order_infos','manager'),
    queryInterface.addColumn('detail_order_infos','estimateDoc'),
    queryInterface.addColumn('detail_order_infos','contractDoc'),
    queryInterface.addColumn('others_order_infos','createdAt'),
    queryInterface.addColumn('others_order_infos','updateAt'),
    queryInterface.createTable('others_order_infos')
  }
};
