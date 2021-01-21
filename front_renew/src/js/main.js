"use strict"
import jQuery from 'jquery';
import {CountUp} from 'countup.js';
import { orderInfo } from './lib/api/order_info';

const white = "#ffffff";
let simpleOrderObj = {
    customer_company : "",
    customer_email: "",
    customer_manager_name : "",
    customer_phone : "",
    customer_memo : "",
}
//메인 첫번쨰 케러셀
jQuery(function($) {
    let ticker = function() {
        setTimeout(() =>{
            $('#ticker li:first').animate({
                marginTop: '-40px',
                color: 'black',
                
            }, 400, function() {
                $(this).detach().appendTo('ul#ticker').removeAttr('style');
            });
            ticker();
        }, 2000);
    };
    
    ticker();
});



//카운트js
const HTMLcon3 = document.querySelector('.counter1');
window.onscroll = myScroll;
let counter = 0;
function myScroll(){
    if(counter == 0)
    {
        if(window.pageYOffset>1550)
        {
            let countup1 = new CountUp('counter1',70);
            let countup2 = new CountUp('counter2',99);
            let countup3 = new CountUp('counter3',90);
            countup1.start();
            countup2.start();
            countup3.start();
            counter++;
        }
     
    }
}
myScroll();

//메인 뉴스 케러셀
$(()=> {
    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        prevArrow:'<button class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow:'<button class="slick-next"><i class="fas fa-angle-right"></i></button>',
        
})
})

//간편문의버튼
const HTMLsimpleOrderButton = document.querySelector('.simpleOrderBtn');

window.onload = function() {
    HTMLsimpleOrderButton.addEventListener('click',()=> {
        const scrollTo = document.querySelector('.news-title');
        scrollTo.scrollIntoView({ behavior: "smooth" });
    })
}




//간단문의신청
window.onload = function() {

    //업체명
    const simple_input_customer_company = document.querySelector(".simple_customer_company");
    console.log(simple_input_customer_company);
    simple_input_customer_company.addEventListener('input',e=> {
        simpleOrderObj.customer_company = e.target.value;
        simple_input_customer_company.style.backgroundColor = white;
    });

    //연락처
    const simple_input_customer_phone = document.querySelector(".simple_customer_phone");
    simple_input_customer_phone.addEventListener('input',e=> {
    simple_input_customer_phone.style.backgroundColor = white;
    simpleOrderObj.customer_phone = e.target.value;
    console.log(simpleOrderObj);
    })
    //이메일
    const input_customer_email = document.querySelector(".simple_customer_email");
    input_customer_email.addEventListener('input',e=> {
        input_customer_email.style.backgroundColor = white;
        simpleOrderObj.customer_email = e.target.value;
        
    })

    //담당자 성함
    const input_customer_manager_name = document.querySelector(".simple_customer_manager_name");
    input_customer_manager_name.addEventListener('input',e=> {
        input_customer_manager_name.style.backgroundColor = white;
        simpleOrderObj.customer_manager_name = e.target.value;
    })

    //상담내용
    const input_customer_memo = document.querySelector(".simple_customer_memo");
    input_customer_memo.addEventListener('input',e=> {
        input_customer_memo.style.backgroundColor = white;
        simpleOrderObj.customer_memo = e.target.value;
        console.log(simpleOrderObj);
    })

    //개인정보동의
      let permissionPersonalInfo = false;
      const checkbox = document.querySelector('#permission');
      checkbox.addEventListener('change',(e)=> {
          permissionPersonalInfo = e.target.checked;
      })

    //전화문의신청
     const HTMLcallSimpleOrderBtn = document.querySelector('.callSimpleOrderBtn');
     HTMLcallSimpleOrderBtn.addEventListener('click',()=> {
          console.log('hello?');
          orderInfo(simpleOrderObj).then((r)=> {
              console.log(r.data);
          }).catch((e)=> {
              console.log(e);
          })
      })
    
}