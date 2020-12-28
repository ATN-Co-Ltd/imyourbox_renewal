import { customer_company, customer_email, customer_manager_name, customer_phone,permissionPersonalInfo,customer_memo } from './stepFour';
import { arr_caution_product_type, arr_storage_type, barcodeValue, detailInput, product_category, product_url } from './stepone';
import { courier_bag, processing_need, releasepackaing, use_service } from './stepThree';
import { arr_logistics_service_kinds, inputStoreBoxsizeValue, inputStoreCount, inputStoreDate, inputStoreValue, outputBoxCount, outputBoxsizeValue, service_launching_status, skuInputStoreCount } from './stepTwo';
import {detailOrderInfo} from './lib/api/detail_order_info';
import Swal from 'sweetalert2';
let stepStatus = 1;

//값이 비어있을때 메세지
function errMsg(msg,scrollY) {
    alert(msg)
    window.scrollTo(0,scrollY);
}


//앞뒤버튼
const stepone = document.querySelector("#stepone");
const steptwo = document.querySelector("#steptwo");
const stepthree = document.querySelector("#stepthree");
const stepfour = document.querySelector("#stepfour");
const stepresult = document.querySelector("#stepresult");

const preBtn = document.querySelector(".stepBtn__preBtn");
const nextBtn = document.querySelector(".stepBtn__nextBtn");
const stepbar__two = document.querySelector(".stepbox__two");
const stepbar__three = document.querySelector(".stepbox__three");
const stepbar__four = document.querySelector(".stepbox__four");
const stepbar__one = document.querySelector(".stepbox");
const HTMLStepButtonContainer = document.querySelector('.stepBtn');

steptwo.style.display='none';
stepthree.style.display='none';
stepfour.style.display='none';
stepresult.style.display='none';
stepbar__two.style.display="none";
stepbar__three.style.display="none";
stepbar__four.style.display="none";


nextBtn.addEventListener('click',()=> {
      //step1
      console.log('hello button!');
   if(product_category.length <1)
   {    
       errMsg('상품종류 하나이상을 선택해주세요!',161);
       return;
   }
   else if(detailInput.length <1)
   {
       errMsg('상세품목을 입력해주세요!',361);
       return;
   }
   else if(arr_storage_type.length <1)
   {
       errMsg('보관형태 하나이상을 선택해주세요!',500);
       return;
   }
   else if(barcodeValue.length<1)
   {
       errMsg('바코드 여부를 선택해주세요!',700);
       return;
   }
    window.scrollTo(0,0);
    stepStatus++;
    
    if(stepStatus === 2) //step2일떄
    {
        preBtn.style.visibility='visible';
        stepone.style.display = "none";
        stepthree.style.display = 'none';
        stepfour.style.display = 'none';
        steptwo.style.display = '';
        stepbar__two.style.display='';
        stepbar__three.style.display='none';
        stepbar__four.style.display='none';
        stepbar__one.style.display='none';
    }
    else if(arr_logistics_service_kinds.length <1)
    {
        stepStatus = 2;
        errMsg('문의할 물류서비스를 하나 이상 선택해주세요!',200);
        console.log(stepStatus);
        return;
    }
    else if(inputStoreBoxsizeValue.length <1 && inputStoreValue === 'box')
    {
        console.log(inputStoreValue);
        stepStatus = 2;
        errMsg('박스크기를 선택해주세요!',600);
        return;
    }
    else if(outputBoxsizeValue.length <1)
    {
        stepStatus = 2;
        errMsg('출고택배 사이즈를 선택해주세요!',1300);
        console.log(stepStatus);
        return;
    }
    else if((arr_logistics_service_kinds.length >=1 || inputStoreBoxsizeValue.length>=1 && outputBoxsizeValue.length >=1) && stepStatus === 3  ) //step3이거나 step2필드를 다채웠을경우
    {
        console.log(stepStatus);
        console.log('3일로안들어오나??');
        stepone.style.display = "none";
        steptwo.style.display = 'none';
        stepthree.style.display = '';
        stepfour.style.display = 'none';
        stepbar__one.style.display='none';
        stepbar__two.style.display='none';
        stepbar__three.style.display='';
        stepbar__four.style.display='none';  
    }
    else if(stepStatus === 4)
    {
        console.log('일로안들어오나??');
        stepone.style.display = "none";
        steptwo.style.display = 'none';
        stepthree.style.display = 'none';
        stepfour.style.display = '';
        stepbar__one.style.display='none';
        stepbar__two.style.display='none';
        stepbar__three.style.display='none';
        stepbar__four.style.display='';
        // nextBtn.style.display="";
        nextBtn.value ="예상견적 확인";
    }
    //stepresult
    else if(stepStatus === 5)
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
                    console.log(` 버튼확인하기 : ${stepStatus}`);
                  
                    return;
                }
            })
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
            stepStatus = 4;
            Swal.fire({
                icon:'warning',
                text:"개인정보 수집 및 이용목적에 동의해주세요.\n 동의 후 예상견적 확인이 가능합니다.",
                confirmButtonText:'확인'
            }).then((result)=> {
                if(result.isConfirmed)
                {
                    // stepStatus = 4;
                    console.log(stepStatus);
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
detailOrderInfo(detailOrderData).then((r)=> {
    console.log(r.data);
    //초기화
    // customer_company="";
    // customer_manager_name="";
    // customer_phone="";
    // customer_email="";
    // customer_memo = "";
    // detailInput="";
    // product_category=[];
    // arr_storage_type=[];
    // arr_caution_product_type=[];
    // arr_logistics_service_kinds=[];
    // barcodeValue="";
    // product_url="";
    // service_launching_status=false,
    // inputStoreValue=0;
    // inputStoreBoxsizeValue="";
    // inputStoreCount=0;
    // skuInputStoreCount=0;
    // inputStoreDate="";
    // outputBoxsizeValue="";
    // outputBoxCount=0;
    // use_service="";

}).catch((e)=> {
    console.log(e);
});

        stepresult.style.display ='';
        stepone.style.display = "none";
        steptwo.style.display = 'none';
        stepthree.style.display = 'none';
        stepfour.style.display = 'none';
        stepbar__one.style.display='none';
        stepbar__two.style.display='none';
        stepbar__three.style.display='none';
        stepbar__four.style.display='none';
        preBtn.style.visibility='hidden';
        nextBtn.style.visibility='hidden';
        HTMLStepButtonContainer.style.visibility='hidden';
     
}
}
console.log(`스텝벨류 : ${stepStatus}`);
})
preBtn.addEventListener('click',()=> {
    window.scrollTo(0,0);
    stepStatus--;
    if(stepStatus === 1)
    {
        preBtn.style.visibility='hidden';
        stepone.style.display = '';
        steptwo.style.display = 'none';
        stepthree.style.display = 'none';
        stepfour.style.display = 'none';
        stepbar__two.style.display='none';
        stepbar__one.style.display=''
    }
    else if(stepStatus === 2)
    {
        stepone.style.display = "none";
        steptwo.style.display = '';
        stepthree.style.display = 'none';
        stepfour.style.display = 'none';
        stepbar__one.style.display='none';
        stepbar__two.style.display='';
        stepbar__three.style.display='none';
    }
    else if(stepStatus === 3)
    {
        stepone.style.display = "none";
        steptwo.style.display = 'none';
        stepthree.style.display = '';
        stepfour.style.display = 'none';
        stepbar__one.style.display='none';
        stepbar__two.style.display='none';
        stepbar__three.style.display='';
        stepbar__four.style.display='none';
        nextBtn.value ="다음";
        
    }
})





        






export {
    errMsg,
    stepStatus,
}