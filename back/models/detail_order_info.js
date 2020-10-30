//상세 주문저보 테이블

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
