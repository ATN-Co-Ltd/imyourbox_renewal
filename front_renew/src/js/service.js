import kakoChatBtn from "./lib/chat/kakaochat";



let tab1 = JSON.parse(window.localStorage.getItem('tab1'));
let tab2 = JSON.parse(window.localStorage.getItem('tab2'));
let tab3 = JSON.parse(window.localStorage.getItem('tab3'));
let tab4 = JSON.parse(window.localStorage.getItem('tab4'));
let amazon = JSON.parse(window.localStorage.getItem('amazon'));
let HTMLamazon = document.querySelector('.amazon');

if(window.location.pathname === '/service.html')
{
    //카카오챗버튼
    kakoChatBtn();

    document.getElementById('tab1').checked =  tab1;
    document.getElementById('tab2').checked =  tab2;
    document.getElementById('tab3').checked =  tab3;
    document.getElementById('tab4').checked =  tab4;
    if(amazon)
    {
       HTMLamazon.scrollIntoView({behavior:"smooth"});
    }
}


