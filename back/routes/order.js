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
const sendMail = require("../lib/nodemailer").SendmailTransport;

//잔디
let jandi_order_info_str = [];
let setJandiStrFunc = (title, description) => {
  jandi_order_info_str.push({
    title: title,
    description: description,
  });
};
const jandi_production_uri = "https://wh.jandi.com/connect-api/webhook/18447744/6a8dfa0cad56835de45724b61415ecdd";
const jandi_test_uri = "https://wh.jandi.com/connect-api/webhook/18447744/6f4ca941899922f6c7a94460abf62a35";

//한글화

const arrProductType_enToKr = [
  {
    clothes: "의류",
    stuff: "잡화",
    beauty: "뷰티",
    stationery: "문구류",
    electronics: "가전/가구",
    food: "식음료",
    etc: "기타",
  },
];

const arrStoreType_enToKr = [
  {
    room_temperature: "상온보관",
    low_temperature: "저온보관",
    refrigerated_storage: "냉장보관",
    fronze_storage: "냉동보관",
  },
];

const arrCautionType_enToKr = [
  {
    fragile: "파손주의",
    discoloration: "변색주의",
    highprice: "고가품",
    fitness_product: "20kg이상중량물",
    largefurniture: "대형가구",
  },
];

const arrLogisticsServiceKinds_enToKr = [
  {
    fullfillment: "풀필먼트",
    storeproduct: "상품보관",
    processing: "임가공",
    etc: "기타문의",
  },
];

//간단주문견적
router.post("/order_info", async (req, res, next) => {
  try {
    setJandiStrFunc("회사명", `${req.body.customer_company}`);
    setJandiStrFunc("담당자", `${req.body.customer_manager_name}`);
    setJandiStrFunc("전화번호", `${req.body.customer_phone}`);
    setJandiStrFunc("이메일", `${req.body.customer_email}`);
    setJandiStrFunc("요청사항", `${req.body.customer_memo}`);
    console.log("들어오기전");
    if (req.body.customer_email.match(/([@])\w+/g)) {
      sendMail(req.body.customer_email); //nodemailer
    }
    
    

    await axios.post(req.body.customer_company === "테스트" ? jandi_test_uri : jandi_production_uri,
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
  jandi_order_info_str = [];
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
      detail_product_type: req.body.detail_product_type,
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

    const findSeq = await Detail_order_info.findOne({
      where: detailOrderInfo.seq,
      attributes: ["seq"],
    });
    const seq = findSeq.getDataValue("seq");
    const arrCategory = req.body.category;
    const arrCautiontype = req.body.cautiontype;
    const arrStoreType = req.body.storetype;
    const arrServiceKinds = req.body.servicekinds;
    for (const category of arrCategory) {
      await Product_category.create({
        category: category,
        DetailOrderInfoSeq: seq,
      });
    }
    for (const cautiontype of arrCautiontype) {
      await Production_caution.create({
        cautiontype: cautiontype,
        DetailOrderInfoSeq: seq,
      });
    }
    for (const storetype of arrStoreType) {
      await Store_type.create({
        storetype: storetype,
        DetailOrderInfoSeq: seq,
      });
    }
    for (const servicekinds of arrServiceKinds) {
      await Logistics_service_kind.create({
        servicekinds: servicekinds,
        DetailOrderInfoSeq: seq,
      });
    }

    setJandiStrFunc("회사명", `${req.body.customer_company}`);
    setJandiStrFunc("담당자", `${req.body.customer_manager_name}`);
    setJandiStrFunc("전화번호", `${req.body.customer_phone}`);
    setJandiStrFunc("이메일", `${req.body.customer_email}`);
    setJandiStrFunc("요청사항", `${req.body.customer_memo}`);
    setJandiStrFunc("상품종류", `${arrCategory}`);
    setJandiStrFunc("상세품목", `${req.body.detail_product_type}`);
    setJandiStrFunc("보관형태", `${arrStoreType}`);
    setJandiStrFunc("바코드여부", `${req.body.barcode_have}`);
    setJandiStrFunc("상품URL", `${req.body.product_url}`);
    setJandiStrFunc("서비스런칭여부", `${req.body.service_launching_status}`);
    setJandiStrFunc("상품취급주의사항", `${arrCautiontype}`);
    setJandiStrFunc("문의할물류서비스", `${arrServiceKinds}`);
    setJandiStrFunc("보관타입", `${req.body.input_store_type}`);
    setJandiStrFunc("물류보관량", `${req.body.input_store_num}`);
    setJandiStrFunc("박스사이즈", `${req.body.input_box_size}`);
    setJandiStrFunc("sku양", `${req.body.input_sku_store_num}`);
    setJandiStrFunc("입고예정일", `${req.body.input_store_date}`);
    setJandiStrFunc("출고박스크기", `${req.body.output_delivery_box_size}`);
    setJandiStrFunc("월택배건수", `${req.body.output_delivery_box_amount}`);
    setJandiStrFunc("물류대행이용여부", `${req.body.use_service}`);
    setJandiStrFunc("출고패키징", `${req.body.output_packaing}`);
    setJandiStrFunc("출고용박스여부", `${req.body.courier_bag}`);
    setJandiStrFunc("임가공여부", `${req.body.processing_need}`);
    if (req.body.customer_email.match(/([@])\w+/g)) {
      sendMail(req.body.customer_email); //nodemailer
    }
    await axios
      .post(
        "https://wh.jandi.com/connect-api/webhook/18447744/6a8dfa0cad56835de45724b61415ecdd",
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
    jandi_order_info_str = [];
    res.status(200).send("정상적으로 등록되었습니다");
    return detailOrderInfo;
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
