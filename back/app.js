const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const hpp = require("hpp");
const db = require("./models");
const helmet = require("helmet");
const orderRouter = require("./routes/order");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerOption = require("./swagger/swagger");
const swaggerSpec = swaggerJSDoc(swaggerOption);

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공!!");
  })
  .catch(console.error);

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: [
      "https://imyourbox.com",
      "https://imyourbox.co.kr",
      "https://www.imyourbox.co.kr",
      "https://www.imyourbox.com",
      "http://localhost:3000",
      "https://d3nb52okhkikjo.cloudfront.net",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/order", orderRouter);
app.listen(3065, () => {
  console.log("아임유어박스 실행중!");
});
