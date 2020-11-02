//주문정보 테이블
const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class OrderInfo extends Model {
  static init(sequelize) {
    return super.init(
      {
        seq: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        customer_company: { type: DataTypes.STRING(100), allowNull: true },
        customer_manager_name: { type: DataTypes.STRING(100), allowNull: true },
        customer_phone: { type: DataTypes.STRING(100), allowNull: true },
        customer_email: { type: DataTypes.STRING(100), allowNull: true },
        customer_memo: { type: DataTypes.STRING(1000), allowNull: true },
        reg_date: { type: DataTypes.DATE, allowNull: false },
      },
      {
        modelName: "OrderInfo",
        tableName: "orderInfos",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
};
