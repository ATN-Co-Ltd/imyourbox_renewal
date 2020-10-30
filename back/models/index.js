const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config")[env];
const order_info = require("./order_info");
const detail_order_info = require("./detail_order_info");
const product_category = require("./product_category");
const production_caution = require("./production_caution");
const store_type = require("./store_type");
const logistics_service_kind = require("./logistics_service_kind");

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.OrderInfo = order_info;
db.Detail_order_info = detail_order_info;
db.Product_category = product_category;
db.Production_caution = production_caution;
db.Store_type = store_type;
db.Logistics_service_kind = logistics_service_kind;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
