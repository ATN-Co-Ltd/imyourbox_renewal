import { stepStatus } from "./button";
import Swal from 'sweetalert2';
import { arr_caution_product_type, arr_storage_type, barcodeValue, detailInput, product_category, product_url } from "./stepone";
import { arr_logistics_service_kinds, service_launching_status ,inputStoreValue,inputStoreBoxsizeValue,inputStoreCount,skuInputStoreCount,inputStoreDate,outputBoxsizeValue,outputBoxCount} from "./stepTwo";
import { courier_bag, processing_need, releasepackaing, use_service } from "./stepThree";
import { detailOrderInfo } from "./lib/api/detail_order_info";

//업체명
let customer_company = "";
//연락처
let customer_phone = "";
//이메일
let customer_email = "";
//담당자명
let customer_manager_name = "";
//상담내용
let customer_memo = "";
const white = "#ffffff";

const input_customer_company = document.querySelector(".customer_company");
input_customer_company.addEventListener('input',e=> {
    customer_company = e.target.value;
    input_customer_company.style.backgroundColor = white;

})


const input_customer_phone = document.querySelector(".customer_phone");
input_customer_phone.addEventListener('input',e=> {
    input_customer_phone.style.backgroundColor = white;
    customer_phone = e.target.value;
    
})



const input_customer_email = document.querySelector(".customer_email");
input_customer_email.addEventListener('input',e=> {
    input_customer_email.style.backgroundColor = white;
    customer_email = e.target.value;
    
})



const input_customer_manager_name = document.querySelector(".customer_manager_name");
input_customer_manager_name.addEventListener('input',e=> {
    input_customer_manager_name.style.backgroundColor = white;
    customer_manager_name = e.target.value;
})


const input_customer_memo = document.querySelector(".customer_memo");
input_customer_memo.addEventListener('input',e=> {
    input_customer_memo.style.backgroundColor = white;
    customer_memo = e.target.value;
    
})

//개인정보동의
let permissionPersonalInfo = false;
const checkbox = document.querySelector('#permission');
checkbox.addEventListener('change',(e)=> {
    permissionPersonalInfo = e.target.checked;
})



export {
    customer_company,
    customer_phone,
    customer_email,
    customer_manager_name,
    customer_memo,
    permissionPersonalInfo
}