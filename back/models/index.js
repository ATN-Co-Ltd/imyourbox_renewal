const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.ORDER_INFO = require("./order_info")(sequelize, Sequelize);
db.DETAIL_ORDER_INFO = require("./detail_order_info")(sequelize, Sequelize);
db.PRODUCT_CATEGORY = require("./product_category")(sequelize, Sequelize);
db.PRODUCTION_CAUTION = require("./production_caution")(sequelize, Sequelize);
db.STORE_TYPE = require("./store_type")(sequelize, Sequelize);
db.LOGISTICS_SERVICE_KIND = require("./logistics_service_kind")(
  sequelize,
  Sequelize
);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
