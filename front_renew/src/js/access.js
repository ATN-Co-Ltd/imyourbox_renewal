import kakoChatBtn from "./lib/chat/kakaochat";



let termsOfService = JSON.parse(window.localStorage.getItem('termsOfService'));
let personalInfoProcessing = JSON.parse(window.localStorage.getItem('personalInfoProcessing'));


if(window.location.pathname === '/access.html')
{
    //카카오챗버튼
    kakoChatBtn();
    
    document.getElementById('access__tab1').checked =  termsOfService;
    document.getElementById('access__tab2').checked =  personalInfoProcessing;
}


