


let tab1 = JSON.parse(window.localStorage.getItem('tab1'));
let tab2 = JSON.parse(window.localStorage.getItem('tab2'));
let tab3 = JSON.parse(window.localStorage.getItem('tab3'));
let tab4 = JSON.parse(window.localStorage.getItem('tab4'));
let amazon = JSON.parse(window.localStorage.getItem('amazon'));
console.log(tab1);

if(window.location.pathname === '/service.html')
{
    document.getElementById('tab1').checked =  tab1;
    document.getElementById('tab2').checked =  tab2;
    document.getElementById('tab3').checked =  tab3;
    document.getElementById('tab4').checked =  tab4;
    console.log(amazon);
    if(amazon)
    {
        window.scrollTo(0,1635);
    }
}


