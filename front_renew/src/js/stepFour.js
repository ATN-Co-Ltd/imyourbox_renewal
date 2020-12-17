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


//데이터보내기
const postDetailOrderInfoBtn= document.querySelector(".stepBtn__nextBtn");
postDetailOrderInfoBtn.addEventListener('click',()=> {
    if(stepStatus === 5)
    {

        if(customer_company.length<1)
        {
            Swal.fire({
                icon:'warning',
                text:`회사명을 입력해주세요`,
                confirmButtonText:'확인'
                
            }).then((result)=> {
                if(result.isConfirmed) {
                    stepStatus =4;
                    return;
                }
            })
            console.log(stepStatus);
        }
       else if(customer_phone.length<1)
        {
            Swal.fire({
                icon:'warning',
                text:`연락처를 입력해주세요`,
                confirmButtonText:'확인'
                
            }).then((result)=> {
                if(result.isConfirmed) {
                    stepStatus =4;
                    return;
                }
            })
        }
       else if(customer_email.length<1)
        {
            Swal.fire({
                icon:'warning',
                text:`이메일을 입력해주세요`,
                confirmButtonText:'확인'
                
            }).then((result)=> {
                if(result.isConfirmed) {
                    stepStatus = 4;
                    return;
                }
            })
        }
       else if(customer_manager_name.length<1)
        {
            Swal.fire({
                icon:'warning',
                text:`담당자명을 입력해주세요`,
                confirmButtonText:'확인'
                
            }).then((result)=> {
                if(result.isConfirmed) {
                    stepStatus = 4;
                    return;
                }
            })
          
        }
        else if(!permissionPersonalInfo)
        {
            Swal.fire({
                icon:'warning',
                text:"개인정보 수집 및 이용목적에 동의해주세요.\n 동의 후 예상견적 확인이 가능합니다.",
                confirmButtonText:'확인'
            }).then((result)=> {
                if(result.isConfirmed)
                {
                    stepStatus = 4;
                    return;
                }
            })
        }else {
//상세견적정보
const detailOrderData = {
    customer_company,
    customer_manager_name,
    customer_phone,
    customer_email,
    customer_memo,
    "detail_product_type":detailInput,
    "category":product_category,
    "storetype":arr_storage_type,
    "barcode_have":barcodeValue,
    "product_url":product_url,
    "cautiontype":arr_caution_product_type,
    "service_launching_status":service_launching_status,
    "servicekinds":arr_logistics_service_kinds,
    "input_store_type":inputStoreValue,
    "input_box_size":inputStoreBoxsizeValue,
    "input_store_num":inputStoreCount,
    "input_sku_store_num":skuInputStoreCount,
    "input_store_date" :inputStoreDate,
    "output_delivery_box_size":outputBoxsizeValue,
    "output_delivery_box_amount":outputBoxCount,
    "use_service" : use_service,
    "output_packaing":releasepackaing,
    "courier_bag" :courier_bag,
    "processing_need" : processing_need,
}


// console.log(detailInput);
// console.log(product_category);
// console.log(arr_storage_type);
// console.log(barcodeValue);
// console.log(product_url);
// console.log(arr_caution_product_type);
// console.log(service_launching_status);
// console.log(arr_logistics_service_kinds);
// console.log(inputStoreValue);
// console.log(inputStoreBoxsizeValue);
// console.log(inputStoreCount);
// console.log(skuInputStoreCount);
// console.log(inputStoreDate);
// console.log(outputBoxsizeValue);
// console.log(outputBoxCount);
// console.log(use_service);
// console.log(releasepackaing);
// console.log(courier_bag);
// console.log(processing_need);

detailOrderInfo(detailOrderData).then((r)=> {
    console.log(r.data);
}).catch((e)=> {
    console.log(e);
})   
}  
}

})

export {
    customer_company,
    customer_phone,
    customer_email,
    customer_manager_name,
    customer_memo,
}