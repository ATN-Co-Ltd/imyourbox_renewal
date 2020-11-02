const express = require("express");
const router = express.Router();
const { Order } = require("../models");

let jandi_order_info_str = [];
let setJandiStrFunc = (title, description) => {
  jandi_order_info_str.push({
    title: title,
    description: description,
  });
};

//간단주문견적
router.post("/order_info", async (req, res, next) => {
  try {
    setJandiStrFunc("회사명", `${req.body.customer_company}`);
    setJandiStrFunc("담당자", `${req.body.customer_manager_name}`);
    setJandiStrFunc("전화번호", `${req.body.customer_phone}`);
    setJandiStrFunc("이메일", `${req.req.body.customer_email}`);
    setJandiStrFunc("요청사항", `${req.body.customer_memo}`);

    await axios
      .post(
        "https://wh.jandi.com/connect-api/webhook/18447744/6f4ca941899922f6c7a94460abf62a35",
        {
          headers: {
            Accept: "application/vnd.tosslab.jandi-v2+json",
            "Content-Type": "application/json",
          },
          body: `[[${data.customer_comapny}]](https://www.imyourbox.com/admin/detail?seq=${data.seq})`,
          connectColor: "#FAC11B",
          connectInfo: jandi_order_info_str,
        }
      )
      .then((r) => {
        console.log(r);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }

  try {
    //기본견적주문 디비에넣기
    await Order.create({
      customer_company: req.body.customer_company,
      customer_manager_name: req.body.customer_manager_name,
      customer_phone: req.body.customer_phone,
      customer_email: req.body.customer_email,
      customer_memo: req.body.customer_memo,
      reg_date: new Date(),
    });
  } catch (error) {
    console.log(error);
  }
});

//상세주문견적
router.post("/detail_order_info", async (req, res, next) => {});

module.exports = router;
