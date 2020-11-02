const express = require("express");
const router = express.Router();
const {
  OrderInfo,
  Detail_order_info,
  Product_category,
  Production_caution,
  Store_type,
  Logistics_service_kind,
} = require("../models");
const axios = require("axios");
//잔디
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
    setJandiStrFunc("이메일", `${req.body.customer_email}`);
    setJandiStrFunc("요청사항", `${req.body.customer_memo}`);
    await axios
      .post(
        "https://wh.jandi.com/connect-api/webhook/18447744/6f4ca941899922f6c7a94460abf62a35",
        {
          headers: {
            Accept: "application/vnd.tosslab.jandi-v2+json",
            "Content-Type": "application/json",
          },
          body: `[${req.body.customer_company}]`,
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
    await OrderInfo.create({
      customer_company: req.body.customer_company,
      customer_manager_name: req.body.customer_manager_name,
      customer_phone: req.body.customer_phone,
      customer_email: req.body.customer_email,
      customer_memo: req.body.customer_memo,
      reg_date: new Date(),
    });
    res.status(200).send("정상적으로 신청되었습니다.");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//상세주문견적
router.post("/detail_order_info", async (req, res, next) => {
  try {
    const detailOrderInfo = await Detail_order_info.create({
      customer_company: req.body.customer_company,
      customer_manager_name: req.body.customer_manager_name,
      customer_phone: req.body.customer_phone,
      customer_email: req.body.customer_email,
      customer_memo: req.body.customer_memo,
      sotre_type: req.body.sotre_type,
      barcode_have: req.body.barcode_have,
      product_url: req.body.product_url,
      service_launching_status: req.body.service_launching_status,
      input_store_type: req.body.input_store_type,
      input_box_size: req.body.input_box_size,
      input_store_num: req.body.input_store_num,
      input_sku_store_num: req.body.input_sku_store_num,
      input_store_date: req.body.input_store_date,
      output_delivery_box_size: req.body.output_delivery_box_size,
      output_delivery_box_amount: req.body.output_delivery_box_amount,
      use_service: req.body.use_service,
      output_packaing: req.body.output_packaing,
      courier_bag: req.body.courier_bag,
      processing_need: req.body.processing_need,
      reg_date: new Date(),
    });

    const seq = await Detail_order_info.findOne({
      where: detailOrderInfo.seq,
      attributes: ["seq"],
    });

    const arrCategory = req.body.category;
    const arrCautiontype = req.body.cautiontype;
    const arrStoreType = req.body.storetype;
    const Arrservicekinds = req.body.servicekinds;
    for (const category of arrCategory) {
      await Product_category.create({
        category: category,
        DetailOrderInfoSeq: seq.getDataValue("seq"),
      });
    }
    for (const cautiontype of arrCautiontype) {
      await Production_caution.create({
        cautiontype: cautiontype,
        DetailOrderInfoSeq: seq.getDataValue("seq"),
      });
    }
    for (const storetype of arrStoreType) {
      await Store_type.create({
        storetype: storetype,
        DetailOrderInfoSeq: seq.getDataValue("seq"),
      });
    }
    for (const servicekinds of Arrservicekinds) {
      await Logistics_service_kind.create({
        servicekinds: servicekinds,
        DetailOrderInfoSeq: seq.getDataValue("seq"),
      });
    }

    res.status(200).send("정상적으로 등록되었습니다");
    return detailOrderInfo;
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
