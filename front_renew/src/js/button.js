import { arr_storage_type, barcodeValue, detailInput, product_category } from './stepone';
import { arr_logistics_service_kinds, inputStoreBoxsizeValue, inputStoreValue, outputBoxsizeValue } from './stepTwo';

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
steptwo.style.display='none';
stepthree.style.display='none';
stepfour.style.display='none';
stepbar__two.style.display="none";
stepbar__three.style.display="none";
stepbar__four.style.display="none";



nextBtn.addEventListener('click',()=> {
      //step1
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
        stepStatus--;
        errMsg('문의할 물류서비스를 하나 이상 선택해주세요!',200);
        console.log(stepStatus);
        return;
    }
    else if(inputStoreBoxsizeValue.length <1 && inputStoreValue === 'box')
    {
        console.log(inputStoreValue);
        stepStatus--;
        errMsg('박스크기를 선택해주세요!',600);
        return;
    }
    else if(outputBoxsizeValue.length <1)
    {
        stepStatus--;
        errMsg('출고택배 사이즈를 선택해주세요!',1300);
        console.log(stepStatus);
        return;
    }
    else if(stepStatus === 3 && arr_logistics_service_kinds.length >=1 || inputStoreBoxsizeValue.length>=1 && outputBoxsizeValue.length >=1) //step3이거나 step2필드를 다채웠을경우
    {
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
        stepone.style.display = "none";
        steptwo.style.display = 'none';
        stepthree.style.display = 'none';
        stepfour.style.display = '';
        stepbar__one.style.display='none';
        stepbar__two.style.display='none';
        stepbar__three.style.display='none';
        stepbar__four.style.display='';
        nextBtn.value ="예상견적 확인";
    }
    //stepresult
    else if(stepStatus === 5)
    {
        stepfour.style.display = 'none';
        stepbar__four.style.display='none';
        preBtn.style.visibility='hidden';
        nextBtn.style.visibility='hidden';
    }
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
    stepStatus,
}