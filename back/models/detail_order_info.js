//상세 주문저보 테이블
const DataTypes = require("sequelize");
const { Model } = DataTypes;
const {
  enum_product_type,
  enum_store_type,
  enum_have_barcode,
  enum_delivery_box_size,
  enum_service_use,
  enum_release_packaging,
  enum_courier_bag,
  enum_processing_need,
} = require("../constants/model_enum");

module.exports = class DETAIL_ORDER_INFO extends Model {
  static init(sequelize) {
    return super.init(
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
        ß,
      },
      {
        modelName: "Detail_order_info",
        tableName: "detail_order_infos",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
};
