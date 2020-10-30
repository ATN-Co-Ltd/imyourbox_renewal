//주문정보 테이블

module.exports = (sequelize, DataTypes) => {
  const orderInfo = sequelize.define(
    "ORDER_INFO",
    {
      seq: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      customer_comapny: { type: DataTypes.STRING(100), allowNull: true },
      customer_manager_name: { type: DataTypes.STRING(100), allowNull: true },
      customer_phone: { type: DataTypes.STRING(100), allowNull: true },
      customer_email: { type: DataTypes.STRING(100), allowNull: true },
      customer_memo: { type: DataTypes.STRING(1000), allowNull: true },
      reg_date: { type: DataTypes.DATE, allowNull: false },
    },
    {
      timestamps: false,
      paranoid: true,
      underscored: false,
      freezeTableName: true,
      tableName: "ORDER_INFO",
    }
  );

  return orderInfo;
};
