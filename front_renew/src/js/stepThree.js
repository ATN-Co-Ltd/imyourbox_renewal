








//물류대행서비스 이용여부
let use_service = "";
 const radio_inputUseSrvice = document.querySelector(".fullfillmentRadios");
 radio_inputUseSrvice.addEventListener('change',(e)=> {
    const selected = document.querySelectorAll('.fullfillmentRadios > li > label > input');
    const black = "#000000"
    const selectedColor = "#f18b24";
    use_service = e.target.value;
    selected.forEach((e)=> {
        const service = e.parentElement.parentElement;
        if(e.value === use_service)
        {
            service.style.boxShadow = "0px 0px 5px 0px #ff9948";
            service.style.color =selectedColor;
        }
        else {
            service.style.color =black;
            service.style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
        }
    })
})


//출고패키징
let releasepackaing = "";
 const radio_inputStores = document.querySelector(".output__radio__groups");
 radio_inputStores.addEventListener('change',(e)=> {
    const selected = document.querySelectorAll('.output__radio__groups > li');
    const black = "#000000"
    const selectedColor = "#f18b24";
    releasepackaing = e.target.value;
    switch (releasepackaing) {
        case "total_packaing":
            selected[0].style.boxShadow = "0px 0px 5px 0px #ff9948";
            selected[0].childNodes[0].childNodes[3].childNodes[0].style.color =selectedColor;
            selected[0].childNodes[0].childNodes[3].childNodes[2].style.color =selectedColor;
            selected[1].style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
            selected[1].childNodes[0].childNodes[3].childNodes[0].style.color =black;
            selected[1].childNodes[0].childNodes[3].childNodes[2].style.color =black;
            break;
        case "only_packaing":
            selected[1].style.boxShadow = "0px 0px 5px 0px #ff9948";
            selected[1].childNodes[0].childNodes[3].childNodes[0].style.color =selectedColor;
            selected[1].childNodes[0].childNodes[3].childNodes[2].style.color =selectedColor;
            selected[0].style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
            selected[0].childNodes[0].childNodes[3].childNodes[0].style.color =black;
            selected[0].childNodes[0].childNodes[3].childNodes[2].style.color =black;
            break;
        default:
            break;
    }
})

//택배봉투여부
let courier_bag = "";
 const radio_inputCourierBag = document.querySelector(".courierBag");
 radio_inputCourierBag.addEventListener('change',(e)=> {
    const selected = document.querySelectorAll('.courierBag > li > label > input');
    const black = "#000000"
    const selectedColor = "#f18b24";
    courier_bag = e.target.value;
    selected.forEach((e)=> {
        const courierBagRadios = e.parentElement.parentElement;
        if(e.value === courier_bag)
        {
            courierBagRadios.style.boxShadow = "0px 0px 5px 0px #ff9948";
            courierBagRadios.style.color =selectedColor;
        }
        else {
            courierBagRadios.style.color =black;
            courierBagRadios.style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
        }
    })
})

//임가공 필요여부
let processing_need = "";
 const radio_inputProcessingList = document.querySelector(".processinglist");
 radio_inputProcessingList.addEventListener('change',(e)=> {
    const selected = document.querySelectorAll('.processinglist > li > label > input');
    const black = "#000000"
    const selectedColor = "#f18b24";
    processing_need = e.target.value;
    // console.log(processing_need);
    selected.forEach((e)=> {
        const processingNeedRadios = e.parentElement.parentElement;
        if(e.value === processing_need)
        {
            processingNeedRadios.style.boxShadow = "0px 0px 5px 0px #ff9948";
            processingNeedRadios.style.color =selectedColor;
        }
        else {
            processingNeedRadios.style.color =black;
            processingNeedRadios.style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
        }
    })
})

//건너뛰기 버튼
const jumpToFourBtn = document.querySelector(".jumbFour_btn");

jumpToFourBtn.addEventListener('click',(e)=> {
    if(use_service.length || releasepackaing.length || courier_bag.length || processing_need.length >1)
    {
        confirm('작성중인 내용이있습니다.\n저장하지않고 이동하시겠습니까?');

    }
})


export {
    use_service,
    releasepackaing,
    courier_bag,
    processing_need
}