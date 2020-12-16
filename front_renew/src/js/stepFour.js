import { orderInfo } from "./lib/api/order_info";
import { stepStatus } from "./button";
import Swal from 'sweetalert2';

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
const white = "#ffffff"
const inputHook = (value,element) => {
    element.addEventListener('input',e=> {
        value = e.target.value;
        element.style.backgroundColor = white;
        console.log(value);
    })
}


const input_customer_company = document.querySelector(".customer_company");
input_customer_company.addEventListener('input',e=> {
    customer_company = e.target.value;
    input_customer_company.style.backgroundColor = white;
    console.log(customer_company);
})


const input_customer_phone = document.querySelector(".customer_phone");
input_customer_phone.addEventListener('input',e=> {
    input_customer_phone.style.backgroundColor = white;
    customer_phone = e.target.value;
    console.log(customer_phone);
})



const input_customer_email = document.querySelector(".customer_email");
input_customer_email.addEventListener('input',e=> {
    input_customer_email.style.backgroundColor = white;
    customer_email = e.target.value;
    console.log(customer_email);
})



const input_customer_manager_name = document.querySelector(".customer_manager_name");
input_customer_manager_name.addEventListener('input',e=> {
    input_customer_manager_name.style.backgroundColor = white;
    customer_manager_name = e.target.value;
    console.log(customer_manager_name);
})


const input_customer_memo = document.querySelector(".customer_memo");
input_customer_memo.addEventListener('input',e=> {
    input_customer_memo.style.backgroundColor = white;
    customer_memo = e.target.value;
    console.log(customer_memo);
})



//개인정보동의
let permissionPersonalInfo = false;
const checkbox = document.querySelector('#permission');
checkbox.addEventListener('change',(e)=> {
    permissionPersonalInfo = e.target.checked;
    console.log(permissionPersonalInfo);
})



//데이터보내기
const postDetailOrderInfoBtn= document.querySelector(".stepBtn__nextBtn");
postDetailOrderInfoBtn.addEventListener('click',()=> {
    if(stepStatus === 5)
    {
        function checkNull(value,msg) {
            if(value.length<1)
            {
                Swal.fire({
                    icon:'warning',
                    text:`${msg} 를 입력해주세요`,
                    confirmButtonText:'확인'
                })
                return value.length;
            }
        }
        checkNull(customer_company,"회사명");
        checkNull(customer_phone,"연락처");
        checkNull(customer_email,"이메일");
        checkNull(customer_manager_name,"담당자명");
        checkNull(customer_memo,"상담내용");
        if( checkNull(customer_company,"회사명") ||  checkNull(customer_phone,"연락처") || checkNull(customer_email,"이메일") ||   checkNull(customer_manager_name,"담당자명") ||  checkNull(customer_memo,"상담내용") <1)
        {
            return;
        }
        stepStatus--;
        //주문정보
        if(permissionPersonalInfo)
        {
        const orderDate ={
            customer_company,
            customer_manager_name,
            customer_phone,
            customer_email,
            customer_memo,
        }
        orderInfo(orderDate).then((r)=> {
            console.log(r.data);
        }).catch((e)=> {
            console.log(e);
        })
    } else {
        Swal.fire({
            icon:'warning',
            text:"개인정보 수집 및 이용목적에 동의해주세요.\n 동의 후 예상견적 확인이 가능합니다.",
            confirmButtonText:'확인'
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