//상세 주문저보 테이블
const DataTypes = require("sequelize");
const { Model } = DataTypes;
const {
  enum_store_type,
  enum_have_barcode,
  enum_input_store_type,
  enum_delivery_box_size,
  enum_service_use,
  enum_release_packaging,
  enum_courier_bag,
  enum_processing_need,
} = require("../constants/model_enum");

module.exports = class Detail_order_info extends Model {
  static init(sequelize) {
    return super.init(
      {
        seq: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        customer_company: { type: DataTypes.STRING(100), allowNull: false },
        customer_manager_name: { type: DataTypes.STRING(100), allowNull: false },
        customer_phone: { type: DataTypes.STRING(100), allowNull: false },
        customer_email: { type: DataTypes.STRING(100), allowNull: false },
        customer_memo: { type: DataTypes.STRING(1000), allowNull: true },
        detail_product_type: { type: DataTypes.STRING(1000), allowNull: false },
        barcode_have: {
          type: DataTypes.ENUM,
          values:["have_barcode", "no_barcode", "part_barcode"],
          allowNull: false,
        },
        product_url: { type: DataTypes.STRING(512), allowNull: true },
        service_launching_status: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        input_store_type: {
          type: DataTypes.ENUM,
          values:["pallet", "box"],
          allowNull: false,
          default: "pallet",
        },
        input_box_size: {
          type: DataTypes.ENUM,
          values:["mini", "smaill", "medium", "large", "giant"],
          allowNull: true,
          default: "mini",
        },
        input_store_num: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        input_sku_store_num: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        input_store_date: { type: DataTypes.DATE, allowNull: true },
        output_delivery_box_size: {
          type: DataTypes.ENUM,
          values:["mini", "smaill", "medium", "large", "giant"],
          allowNull: false,
          default: "mini",
        },
        output_delivery_box_amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        use_service: {
          type: DataTypes.ENUM,
          values:["first", "using"],
          allowNull: true,
        },
        output_packaing: {
          type: DataTypes.ENUM,
          values:["total_packaing", "only_packaing"],
          allowNull: true,
        },
        courier_bag: {
          type: DataTypes.ENUM,
          values:["have", "none", "need"],
          allowNull: true,
        },
        processing_need: {
          type: DataTypes.ENUM,
          values:["need", "not_need"],
          allowNull: true,
        },
        reg_date: { type: DataTypes.DATE, allowNull: false },
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
  static associate(db) {
    db.Detail_order_info.hasMany(db.Product_category);
    db.Detail_order_info.hasMany(db.Production_caution);
    db.Detail_order_info.hasMany(db.Store_type);
    db.Detail_order_info.hasMany(db.Logistics_service_kind);
  }
};
