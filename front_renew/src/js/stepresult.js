import {customer_company} from './stepFour'
import  {caclulateStoreFee,cacluateDeliveryFee,caclutateWMSfee} from './price'
import {outputBoxCount,inputStoreDate,arr_logistics_service_kinds,inputStoreValue,inputStoreBoxsizeValue,inputStoreCount,skuInputStoreCount,outputBoxsizeValue,service_launching_status} from './stepTwo';
import {product_category,detailInput,barcodeValue,product_url,arr_caution_product_type} from "./stepone"
import  {releasepackaing} from './stepThree'
import {stepStatus} from './button'



const enToKr = (obj,arr) => {

    const newArr = [];

    for (let key of arr)
    {
        newArr.push(obj[key])
    }
    return newArr.toString();
}


//stepOne

const clothMap = {
    "clothes": "의류",
    "stuff": "잡화",
    "beauty": "뷰티",
    "householdgoods": "생활용품",
    "electronics": "가전/가구",
    "stationery": "문구류",
    "food": "식음료",
    "etc": "기타",
  };

  //취급주의
const productCautionMap = {
    fragile:"유리 등의 파손주의 상품",
    discoloration:"인쇄물 등의 변색주의 상품",
    highprice:"시계,귀중품 등 고가품",
    fitness_product:"헬스용품 등 20kg 미만 중량물",
    largefurniture:"침대 등 대형가구",

}


//stepTwo

const serviceLaunching = (bool) => {
    if(bool)
    {
        return '서비스런칭'
    }
    else {
        return '서비스준비중'
    }
}


const storeTypeMap = {
    room_temperature:"상온보관",
    low_temperature:"저온보관",
    refrigerated_storage:"냉장보관",
    fronze_storage:"냉동보관",
};

const logistics_service_kindsMap = {
  fullfillment :'풀필먼트',
  storeproduct : "상품보관",
  processing :"임가공",
  etc :"기타",
};

const haveBarcodeMap = {
    have_barcode:"바코드있음",
    no_barcode:"바코드없음",
    part_barcode:"바코드 일부만 있음",
}

const deliveryBoxSizeMap = {
    mini:"극소",
    smaill:"소", 
    medium:"중",
    large:"대",
    giant:"특대"
}

const serviceUseMap = {
    first:"처음입니다",
    using:"이용중입니다",
}

const releasepackagingMap = {
    total_packaing:"합포장",
    only_packaing:"단독포장"
}

const courierBagMap = {
    have:"있음",
    none:"없음",
    need:'필요함'
}

//임가공필요여부
const processingNeedMap = {
    need:"필요함",
    not_need:"필요없음"
}



const customerCompany = document.querySelector('.avartar__title');
const totalPrice = document.querySelector('.avartar__price');
const stepResultButton = document.querySelector('.stepBtn__nextBtn');
const monthStoreFee = document.querySelector('.monthstore__fee');
const monthDeliveryFee = document.querySelector('.monthDelivery__fee');
const monthWMSFee = document.querySelector('.monthWMS__fee');

//stepOne
const HTMLproductCategory = document.querySelector('.productCategory');
const HTMLdetailInput = document.querySelector('.detailInput');
const HTMLhaveBarcode = document.querySelector('.haveBarcode');
const HTMLproductURL = document.querySelector('.productURL');
const HTMLproductCaution = document.querySelector('.proCaution');


//stepTwo

const HTMLserviceLaunching = document.querySelector('.serviceLaunching');
const HTMLlogisticsServiceKinds = document.querySelector('.logisticsServiceKinds');
const HTMLinputStoreCount = document.querySelector('.inputStoreCount');
const HTMLinputSKUcount = document.querySelector('.inputSKUcount');
const HTMLinputDateResult = document.querySelector('.inputDateResult');
const HTMLoutputDeliveryCount = document.querySelector('.outputDeliveryCount');







stepResultButton.addEventListener('click',()=> {
    if(stepStatus === 5)
    {
        let sumPrice = caclulateStoreFee(inputStoreValue,inputStoreCount,inputStoreBoxsizeValue) + cacluateDeliveryFee(outputBoxCount,outputBoxsizeValue,releasepackaing) + caclutateWMSfee(skuInputStoreCount);
        customerCompany.textContent = `"${customer_company}" 고객님의 예상 비용`;
        totalPrice.textContent = `월 ${sumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원`
        monthStoreFee.textContent = `${caclulateStoreFee(inputStoreValue,inputStoreCount,inputStoreBoxsizeValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        monthDeliveryFee.textContent = `${cacluateDeliveryFee(outputBoxCount,outputBoxsizeValue,releasepackaing).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        monthWMSFee.textContent = `${caclutateWMSfee(skuInputStoreCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원`;


        //상품정보
        HTMLproductCategory.textContent = `${enToKr(clothMap,product_category)}`;
        HTMLdetailInput.textContent = `${detailInput}`;
        HTMLhaveBarcode.textContent = `${haveBarcodeMap[barcodeValue]}`;
        HTMLproductURL.textContent = `${product_url}`;
        HTMLproductCaution.textContent = `${enToKr(productCautionMap,arr_caution_product_type)}`;

        //물류기본정보
        HTMLserviceLaunching.textContent = `${serviceLaunching(service_launching_status)}`;
        HTMLlogisticsServiceKinds.textContent = `${enToKr(logistics_service_kindsMap,arr_logistics_service_kinds)}`;
        HTMLinputStoreCount.textContent = `${inputStoreCount} ${inputStoreValue}`;
        HTMLinputSKUcount.textContent = `${skuInputStoreCount.toString()} 개`;
        HTMLinputDateResult.textContent = `${inputStoreDate}`;
        HTMLoutputDeliveryCount.textContent = `${outputBoxCount.toString()}${outputBoxsizeValue}`
    }
})









