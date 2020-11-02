const DataTypes = require("sequelize");
const { Model } = DataTypes;
const { enum_product_type } = require("../constants/model_enum");

module.exports = class Product_category extends Model {
  static init(sequelize) {
    return super.init(
      {
        category: {
          type: DataTypes.ENUM(enum_product_type),
          allowNull: false,
        },
      },
      {
        modelName: "Product_category",
        tableName: "product_categorys",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Product_category.belongsTo(db.Detail_order_info);
  }
};
