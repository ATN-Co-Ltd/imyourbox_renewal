'use strict';
const DataTypes = require("sequelize");
const { enum_product_type } = require("../constants/model_enum");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Product_category','category', {
        type: DataTypes.ENUM(enum_product_type),
        allowNull: false,
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.changeColumn('Product_category','category')]);
  }
};
