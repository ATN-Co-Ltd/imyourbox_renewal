//상세 주문저보 테이블

const {} = require("../constants/model_enum");

module.exports = (sequelize, DataTypes) => {
  const orderInfo = sequelize.define(
    "DETAIL_ORDER_INFO",
    {
      seq: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      store_type: {
        type: DataTypes.ENUM(),
      },
      reg_date: { type: DataTypes.DATE, allowNull: false },
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: false,
      freezeTableName: true,
      tableName: "DETAIL_ORDER_INFO",
    }
  );

  return orderInfo;
};
