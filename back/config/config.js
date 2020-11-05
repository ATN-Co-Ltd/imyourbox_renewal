const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "IMYOURBOX_OFFICIAL_DB",
    host: "imyourbox-db1.cojejpgfslhc.ap-northeast-2.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      ssl: "Amazon RDS",
    },
    pool: { maxConnections: 5, maxIdleTime: 30 },
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "IMYOURBOX_OFFICIAL_DB",
    host: "imyourbox-db1.cojejpgfslhc.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306,
    dialectOptions: {
      ssl: "Amazon RDS",
    },
    pool: { maxConnections: 5, maxIdleTime: 30 },
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "IMYOURBOX_OFFICIAL_DB",
    host: "imyourbox-db1.cojejpgfslhc.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306,
    dialectOptions: {
      ssl: "Amazon RDS",
    },
    pool: { maxConnections: 5, maxIdleTime: 30 },
  },
};
