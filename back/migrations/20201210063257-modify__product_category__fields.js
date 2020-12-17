'use strict';
const DataTypes = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('detail_order_infos','customer_company', {
        type: DataTypes.STRING(100),
        allowNull: false,
      }),
      queryInterface.changeColumn('detail_order_infos','customer_manager_name', {
        type: DataTypes.STRING(100),
        allowNull: false,
      }),
      queryInterface.changeColumn('detail_order_infos','customer_phone', {
        type: DataTypes.STRING(100),
        allowNull: false,
      }),
      queryInterface.changeColumn('detail_order_infos','customer_email', {
        type: DataTypes.STRING(100),
        allowNull: false,
      }),
      queryInterface.changeColumn('detail_order_infos','detail_product_type', {
        type: DataTypes.STRING(100),
        allowNull: false,
      }),
      queryInterface.changeColumn('detail_order_infos','use_service', {
        type: DataTypes.ENUM,
        values:["first", "using"],
        allowNull: true,
      }),
      queryInterface.changeColumn('detail_order_infos','output_packaing', {
        type: DataTypes.ENUM,
        values:["total_packaing", "only_packaing"],
        allowNull: true,
      }),
      queryInterface.changeColumn('detail_order_infos','courier_bag', {
        type: DataTypes.ENUM,
        values:["have", "none", "need"],
        allowNull: true,
      }),
      queryInterface.changeColumn('detail_order_infos','processing_need', {
        type: DataTypes.ENUM,
        values:["need", "not_need"],
        allowNull: true,
      }),

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
    queryInterface.changeColumn('detail_order_infos','customer_company'),
    queryInterface.changeColumn('detail_order_infos','customer_manager_name'),
    queryInterface.changeColumn('detail_order_infos','customer_phone'),
    queryInterface.changeColumn('detail_order_infos','customer_email'),
    queryInterface.changeColumn('detail_order_infos','detail_product_type'),
    queryInterface.changeColumn('detail_order_infos','use_service'),
    queryInterface.changeColumn('detail_order_infos','output_packaing'),
    queryInterface.changeColumn('detail_order_infos','courier_bag'),
    queryInterface.changeColumn('detail_order_infos','processing_need'),
  
  
  ]);
  }
};
