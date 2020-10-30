const DataTypes = require("sequelize");
const { Model } = DataTypes;
const { enum_caution_product_tpye } = require("../constants/model_enum");
module.exports = class PRODUCTION_CAUTION extends Model {
  static init(sequelize) {
    return super.init(
      {
        cautiontype: {
          type: DataTypes.ENUM(enum_caution_product_tpye),
          allowNull: false,
        },
      },
      {
        modelName: "Production_caution",
        tableName: "production_cautions",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Production_caution.belongsTo(db.Detail_order_info);
  }
};
