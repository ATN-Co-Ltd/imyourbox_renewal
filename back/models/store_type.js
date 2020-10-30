const DataTypes = require("sequelize");
const { Model } = DataTypes;
const { enum_store_type } = require("../constants/model_enum");
module.exports = class Store_type extends Model {
  static init(sequelize) {
    return super.init(
      {
        storetype: {
          type: DataTypes.ENUM(enum_store_type),
          allowNull: false,
        },
      },
      {
        modelName: "Store_type",
        tableName: "store_types",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Store_type.belongsTo(db.Detail_order_info);
  }
};
