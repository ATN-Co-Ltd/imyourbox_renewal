"use strict"
import jQuery from 'jquery';
import {CountUp} from 'countup.js';

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



//간단견적버튼
const HTMLsimpleOrderButton = document.querySelector('.simpleOrderBtn');

HTMLsimpleOrderButton.addEventListener('click',(e)=> {
    const scrollTo = document.querySelector('.news-title');
    scrollTo.scrollIntoView({ behavior: "smooth" });
})
