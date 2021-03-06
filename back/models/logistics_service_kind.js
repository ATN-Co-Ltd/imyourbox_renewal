const DataTypes = require("sequelize");
const { Model } = DataTypes;
const { enum_logistics_service_kinds } = require("../constants/model_enum");
module.exports = class Logistics_service_kind extends Model {
  static init(sequelize) {
    return super.init(
      {
        servicekinds: {
          type: DataTypes.ENUM,
          values: ["fullfillment","storeproduct","processing","etc"],
          allowNull: false,
        },
      },
      {
        modelName: "Logistics_service_kind",
        tableName: "logistics_service_kinds",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Logistics_service_kind.belongsTo(db.Detail_order_info);
  }
};
