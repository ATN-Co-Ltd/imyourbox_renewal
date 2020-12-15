import { orderInfo } from "./lib/api/order_info";
import { stepStatus } from "./button";
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