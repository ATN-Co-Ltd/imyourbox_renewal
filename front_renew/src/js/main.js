"use strict"
import jQuery from 'jquery';
import {CountUp} from 'countup.js';
import { orderInfo } from './lib/api/order_info';
import Swal from 'sweetalert2';
import kakoChatBtn from './lib/chat/kakaochat';
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
        // let  i=1;
        // let k = 1;
        setTimeout(() =>{
           // console.log(`머가문제야 ${i++}`);
            $('#ticker li:first').animate({
                marginTop: '-40px',
                color: 'black',
                
            }, 400, function() {
               // console.log(`아무문제없으 ${k++}`);
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



let isTab1Active = true;
let isTab2Active = false;
let isTab3Active = false;
let isTab4Active = false;
let isAmazonActive = false;
let isTermsOfService = false
let isPersonalInfoProcessing = false
//간단문의신청
window.onload = function() {

    window.localStorage.setItem('tab1',JSON.stringify(isTab1Active));
    window.localStorage.setItem('tab2',JSON.stringify(isTab2Active));
    window.localStorage.setItem('tab3',JSON.stringify(isTab3Active));
    window.localStorage.setItem('tab4',JSON.stringify(isTab4Active));
    window.localStorage.setItem('amazon',JSON.stringify(isAmazonActive));
    window.localStorage.setItem('termsOfService',JSON.stringify(isTermsOfService));
    window.localStorage.setItem('personalInfoProcessing',JSON.stringify(isPersonalInfoProcessing));

    //풋터개인정보처리
    const HTMLTermsOfService = document.getElementById('termsOfService')
    HTMLTermsOfService.style.cursor='pointer';
    HTMLTermsOfService.addEventListener('click',(e)=> {
        isTermsOfService = true;
        window.localStorage.setItem('termsOfService',JSON.stringify(isTermsOfService));
        location.href ="/access.html";
    })
    const HTMLPersonalInfoProcessing = document.getElementById('personalInfoProcessing')
    HTMLPersonalInfoProcessing.style.cursor='pointer';
    HTMLPersonalInfoProcessing.addEventListener('click',(e)=> {
        isPersonalInfoProcessing = true;
        isTermsOfService = false;
        window.localStorage.setItem('personalInfoProcessing',JSON.stringify(isPersonalInfoProcessing));
        window.localStorage.setItem('termsOfService',JSON.stringify(isTermsOfService));
        location.href ="/access.html";
    })
    //풋터개인정보처리 끝



    //해당서비스 버튼을 눌렸을때 해당 탭으로 이동하기
    //로직스 팩토리
    const HTMLLogicsFactoryAtag = document.getElementById("logisFactory");
    HTMLLogicsFactoryAtag.style.cursor='pointer';
    HTMLLogicsFactoryAtag.addEventListener('click',(e)=> {
        isTab1Active = false;
        isTab2Active = true;
        window.localStorage.setItem('tab1',JSON.stringify(isTab1Active));
        window.localStorage.setItem('tab2',JSON.stringify(isTab2Active));
        location.href ="/service.html";
    })
    //스마트물류시스템
    const HTMLSmartFulfillmentyAtag = document.getElementById("smartFulfillment");
    HTMLSmartFulfillmentyAtag.style.cursor='pointer';
    HTMLSmartFulfillmentyAtag.addEventListener('click',(e)=> {
        isTab1Active = false;
        isTab3Active = true;;
        window.localStorage.setItem('tab1',JSON.stringify(isTab1Active));
        window.localStorage.setItem('tab3',JSON.stringify(isTab3Active));
        location.href ="/service.html";
    })
    //오늘의픽업
    const HTMLTodayPickupAtag = document.getElementById("todaypickup");
    HTMLTodayPickupAtag.style.cursor='pointer';
    HTMLTodayPickupAtag.addEventListener('click',(e)=> {
        isTab1Active = false;
        isTab4Active = true;;
        window.localStorage.setItem('tab1',JSON.stringify(isTab1Active));
        window.localStorage.setItem('tab4',JSON.stringify(isTab4Active));
        location.href ="/service.html";
    })
    //아마존
    const HTMLAmazon = document.getElementById("amazon");
    HTMLAmazon.style.cursor='pointer';
    HTMLAmazon.addEventListener('click',(e)=> {
        isTab1Active = false;
        isTab4Active = true;;
        isAmazonActive = true;;
        window.localStorage.setItem('tab1',JSON.stringify(isTab1Active));
        window.localStorage.setItem('tab4',JSON.stringify(isTab4Active));
        window.localStorage.setItem('amazon',JSON.stringify(isAmazonActive));
        location.href ="/service.html";
    })
// 끝


    //간편문의버튼
    const HTMLsimpleOrderButton = document.querySelector('.simpleOrderBtn');
    HTMLsimpleOrderButton.addEventListener('click',()=> {
    const scrollTo = document.querySelector('.news-title');
    scrollTo.scrollIntoView({ behavior: "smooth" });
})
    //업체명
    const simple_input_customer_company = document.querySelector(".simple_customer_company");
    simple_input_customer_company.addEventListener('input',e=> {
        simpleOrderObj.customer_company = e.target.value;
        simple_input_customer_company.style.backgroundColor = white;
    });

    //연락처
    const simple_input_customer_phone = document.querySelector(".simple_customer_phone");
    simple_input_customer_phone.addEventListener('input',e=> {
    simple_input_customer_phone.style.backgroundColor = white;
    simpleOrderObj.customer_phone = e.target.value;
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
    })

    //개인정보동의
      let isAgreePersonalInfo = false;
      const checkbox = document.querySelector('#simpleOrder__permission');
      checkbox.addEventListener('change',(e)=> {
        isAgreePersonalInfo = e.target.checked;
      })


    //카카오버튼
    kakoChatBtn();

    //전화문의신청
     const HTMLcallSimpleOrderBtn = document.querySelector('.callSimpleOrderBtn');
     HTMLcallSimpleOrderBtn.addEventListener('click',()=> {

        if(simpleOrderObj.customer_company.length < 1 || simpleOrderObj.customer_email.length< 1 || simpleOrderObj.customer_manager_name.length<1 || simpleOrderObj.customer_phone.length<1)
        {
            Swal.fire({
                icon:'warning',
                text:`필수항목들을 모두 채워주세요`,
                confirmButtonText:'확인'
                
            }).then((result)=> {
                if(result.isConfirmed) {
                    return;
                }
            })
        }
        else if(!isAgreePersonalInfo) {
            Swal.fire({
                icon:'warning',
                text:`개인정보 수집에 동의해주세요`,
                confirmButtonText:'확인'
                
            }).then((result)=> {
                if(result.isConfirmed) {
                    return;
                }
            })
        }
        else {
            orderInfo(simpleOrderObj).then((r)=> {
                Swal.fire({
                    icon:'success',
                    text:`${r.data}`,
                    confirmButtonText:'확인'
                    
                }).then((result)=> {
                    location.reload();
                    if(result.isConfirmed) {
                        let simpleOrderObj = {
                            customer_company : "",
                            customer_email: "",
                            customer_manager_name : "",
                            customer_phone : "",
                            customer_memo : "",
                        }
                      //page reload
                       location.reload();
                        return;
                    }
                })
            }).catch((e)=> {
                console.log(e);
                Swal.fire({
                    icon:'error',
                    text:`${e}`,
                    confirmButtonText:'확인'
                }).then((result)=> {
                    if(result.isConfirmed) {
                        let simpleOrderObj = {
                            customer_company : "",
                            customer_email: "",
                            customer_manager_name : "",
                            customer_phone : "",
                            customer_memo : "",
                        }
                         //page reload
                       location.reload();
                        return;
                    }
                })
            })

           
          
        }
       
      })

      //footer

      let tell  = document.querySelector('.tell');
      if(screen.width < 450)
      {
        tell.style.cursor = 'pointer';
        tell.addEventListener('click',(e)=> [
            location.href="tel:0316351471"
        ])
      }
    


}