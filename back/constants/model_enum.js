const enum_product_type = [
  "clothes",
  "stuff",
  "beauty",
  "electronics",
  "stationery",
  "food",
  "etc",
];
const enum_store_type = [
  "room_temperature",
  "low_temperature",
  "refrigerated_storage",
  "fronze_storage",
]; //상온보관,저온보관,냉장보관,냉동보관

const enum_have_barcode = ["have_barcode", "no_barcode", "part_barcode"]; //있다,없다,일부만있다

const enum_store_type = ["pallet", "box"]; //박스,파레트

const enum_delivery_box_size = ["mini", "smaill", "medium", "large", "giant"]; //극소,소,중간,큰,특대

const enum_service_use = ["fisrt", "using"]; //처음,이용중?

const enum_release_packaging = ["total_packaing", "only_packaing"]; //합포장, 단독포장

const enum_courier_bag = ["have", "none", "need"]; //택배봉투 여부

const enum_processing_need = ["need", "not_need"]; //임가공 필요여부

module.exports = {
  enum_product_type,
  enum_store_type,
  enum_have_barcode,
  enum_delivery_box_size,
  enum_service_use,
  enum_release_packaging,
  enum_courier_bag,
  enum_processing_need,
};
