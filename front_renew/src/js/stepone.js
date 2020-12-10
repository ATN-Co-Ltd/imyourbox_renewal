
import flatpickr from 'flatpickr';
import wNumb from 'wnumb';
require("flatpickr/dist/themes/material_green.css");
import {Korean} from 'flatpickr/dist/l10n/ko';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
flatpickr(".calendar-inputStoreDate",{
    "locale" :Korean,
});

//상품종류
const product_category = [];
const buttons_category = document.querySelectorAll("ul.stepone__category__list > li>input");
const CLICKED_CLASS = "clicked";
buttons_category.forEach(e=> {
    e.addEventListener('click',()=> {
      const checked__icon = e.parentElement.childNodes[2];
        const splitCategory =e.className.split(" ")[1];
        if(product_category.includes(splitCategory))
        {
            product_category.splice(product_category.indexOf(splitCategory),1);
            checked__icon.style.color ="#ffffff";
            checked__icon.style.opacity =0.7;
        }
        else {
            product_category.push(splitCategory);
            checked__icon.style.color ="#f18b24";
            checked__icon.style.opacity =0.7;
          
        }
    // console.log(product_category);
    e.classList.toggle(CLICKED_CLASS);
    })
});

//상세 품목
let detailInput = "";
const input_detail = document.querySelector(".detail__input");
input_detail.addEventListener('input',e=> {
    detailInput = e.target.value;
    console.log(detailInput);
})


//보관형태
const arr_storage_type = [];
const buttons_storage_type = document.querySelectorAll("ul.storageType__container__buttons > li> input");

buttons_storage_type.forEach(e=> {
    e.addEventListener('click',()=> {
        const checked__icon = e.parentElement.childNodes[2];
        console.log(checked__icon);
        const splitStorageType =e.className.split(" ")[1];
        console.log(`${splitStorageType}`)
        console.log(arr_storage_type.includes(splitStorageType));
        if(arr_storage_type.includes(splitStorageType))
        {
            arr_storage_type.splice(arr_storage_type.indexOf(splitStorageType),1);
             e.style.color="#474747"
            checked__icon.style.color ="#ffffff";
            checked__icon.style.opacity =0.7;
        }
        else {
            arr_storage_type.push(splitStorageType);
            checked__icon.style.color ="#f18b24";
            checked__icon.style.opacity =0.7;
            e.style.color="#f18b24"
        }
    console.log(arr_storage_type);
    e.classList.toggle(CLICKED_CLASS);
    })
});

//바코드여부
let barcodeValue = "";
 const radio__havebarcode = document.querySelector(".barcode__radio__groups");
radio__havebarcode.addEventListener('change',(e)=> {
    const selected = document.querySelectorAll('.barcode__radio__groups > li');
    const black = "#000000"
    const selectedColor = "#f18b24";
    barcodeValue = e.target.value;
    console.log(barcodeValue);
    switch (barcodeValue) {
        case "have_barcode":
            selected[0].style.boxShadow = "0px 0px 5px 0px #ff9948";
            selected[1].style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
            selected[2].style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
            selected[0].style.color =selectedColor;
            selected[1].style.color =black;
            selected[2].style.color =black;
            break;
        case "no_barcode":
            selected[1].style.boxShadow = "0px 0px 5px 0px #ff9948";
            selected[0].style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
            selected[2].style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
            selected[0].style.color =black;
            selected[1].style.color =selectedColor;
            selected[2].style.color =black;
            break;
        case "part_barcode":
            selected[2].style.boxShadow = "0px 0px 5px 0px #ff9948";
            selected[1].style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
            selected[0].style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.15)";
            selected[0].style.color =black;
            selected[1].style.color =black;
            selected[2].style.color =selectedColor;
            break;
        default:
            break;
    }
})


//상품취급 주의사항
const arr_caution_product_type = [];
const buttons_caution_product_type = document.querySelectorAll("ul.productCaution__list > li> input");

buttons_caution_product_type.forEach(e=> {
    // console.log(e)
    e.addEventListener('click',()=> {
        const checked__icon = e.parentElement.childNodes[2];
        const splitStorageType =e.className.split(" ")[1];
        // console.log(`${splitStorageType}`)
        // console.log(arr_caution_product_type.includes(splitStorageType));
        if(arr_caution_product_type.includes(splitStorageType))
        {
            arr_caution_product_type.splice(arr_caution_product_type.indexOf(splitStorageType),1);
            checked__icon.style.color ="#ffffff";
            checked__icon.style.opacity =0.7;
        }
        else {
            arr_caution_product_type.push(splitStorageType);
            checked__icon.style.color ="#f18b24";
            checked__icon.style.opacity =0.7;
        }
    // console.log(arr_caution_product_type);
    e.classList.toggle(CLICKED_CLASS);
    
    })
});



// //step2


// //문의할 물류 서비스
// const arr_logistics_service_kinds =[];
// const buttons_logistics_service_kinds_type =  document.querySelectorAll("ul.logistics_service_kinds__container > li >div");
// buttons_logistics_service_kinds_type.forEach(e=> {
//     e.addEventListener('click',()=> {
//         const checked__icon = e.parentElement.childNodes[1];
//         const splitStorageType =e.className.split(" ")[1];
//         // console.log(`${splitStorageType}`)
//         // console.log(arr_logistics_service_kinds.includes(splitStorageType));
//         if(arr_logistics_service_kinds.includes(splitStorageType))
//         {
//             arr_logistics_service_kinds.splice(arr_logistics_service_kinds.indexOf(splitStorageType),1);
//             checked__icon.style.color ="#ffffff";
//             checked__icon.style.opacity =0.7;
//         }
//         else {
//             arr_logistics_service_kinds.push(splitStorageType);
//             checked__icon.style.color ="#f18b24";
//             checked__icon.style.opacity =0.7;
//         }
//     console.log(arr_logistics_service_kinds);
//     e.classList.toggle(CLICKED_CLASS);
//     })
// })


// //물류보관량
// let inputStoreValue = "pallet";
// const boxItem = document.querySelector('.box__checked__container');
// boxItem.style.display ='none';
//  const radio_inputStores = document.querySelector(".inputStoreType__radio__groups");
//  radio_inputStores.addEventListener('change',(e)=> {
//     const selected = document.querySelectorAll('.inputStoreType__radio__groups > li');
   
//     const black = "#000000"
//     const selectedColor = "#f18b24";
//     inputStoreValue = e.target.value;
//     switch (inputStoreValue) {
//         case "pallet":
//             selected[0].style.boxShadow = "0px 0px 5px 0px #ff9948";
//             selected[0].childNodes[0].childNodes[3].childNodes[0].style.color =selectedColor;
//             selected[0].childNodes[0].childNodes[3].childNodes[2].style.color =selectedColor;
//             selected[1].style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
//             selected[1].childNodes[0].childNodes[3].childNodes[0].style.color =black;
//             selected[1].childNodes[0].childNodes[3].childNodes[2].style.color =black;
//             boxItem.style.display ='none';
//             break;
//         case "box":
//             selected[1].style.boxShadow = "0px 0px 5px 0px #ff9948";
//             selected[1].childNodes[0].childNodes[3].childNodes[0].style.color =selectedColor;
//             selected[1].childNodes[0].childNodes[3].childNodes[2].style.color =selectedColor;
//             selected[0].style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
//             selected[0].childNodes[0].childNodes[3].childNodes[0].style.color =black;
//             selected[0].childNodes[0].childNodes[3].childNodes[2].style.color =black;
//             boxItem.style.display = "";
//             break;
//         default:
//             break;
//     }
// })



// //박스크기
// let inputStoreBoxsizeValue = "";
//  const radio_inputStoreBoxsize = document.querySelector(".box__inputStoreRadio__lists");
//  radio_inputStoreBoxsize.addEventListener('change',(e)=> {
//     const selected = document.querySelectorAll('.box__inputStoreRadio__lists > li > label > input');
//     const black = "#000000"
//     const selectedColor = "#f18b24";
//     inputStoreBoxsizeValue = e.target.value;
//     selected.forEach((e)=> {
//         const box = e.parentElement.parentElement;
//         const titleText = e.parentElement.childNodes[4];
//         const descriptionText = e.parentElement.childNodes[6];
//         if(e.value === inputStoreBoxsizeValue)
//         {
//             box.style.boxShadow = "0px 0px 5px 0px #ff9948";
//             titleText.style.color =selectedColor;
//             descriptionText.style.color =selectedColor;
//         }
//         else {
//             titleText.style.color =black;
//             descriptionText.style.color =black;
//             box.style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
//         }
//     })
// })

// //inputStoreCount
// let indicatorInputStore = document.querySelector(".indicator__inputStore__range");
// let inputStoreCount = 0;
// let range__inputStore = document.getElementById('inputStore__range');
// noUiSlider.create(range__inputStore,{
//     start:[500],
//     connect:[true,false],
//     // behaviour:'snap',
//     range:{
//         'min':0,
//         'max':1000
//     },
//     format: wNumb({
//         decimals:0,
//     })
// });
// range__inputStore.noUiSlider.on('update',(value)=> {
//     indicatorInputStore.value = value;
//     inputStoreCount = indicatorInputStore.value;
//     console.log(inputStoreCount);
// });
// indicatorInputStore.addEventListener('input',(e)=> {
//     range__inputStore.noUiSlider.set(e.target.value);
//     inputStoreCount = range__inputStore.noUiSlider.get();
//     console.log(inputStoreCount);
// });



// //inputStoreCountSKU
// let sku__range__inputStore = document.querySelector(".inputStore__sku__range");
// let indicatorSKUInputStore = document.querySelector(".indicator__inputStore__sku__range");
// let skuInputStoreCount = 0;
// noUiSlider.create(sku__range__inputStore,{
//     start:[250],
//     connect:[true,false],
//     // behaviour:'snap',
//     range:{
//         'min':0,
//         'max':1000
//     },
//     format: wNumb({
//         decimals:0,
//     })
// });
// sku__range__inputStore.noUiSlider.on('update',(value)=> {
//     indicatorSKUInputStore.value = value;
//     skuInputStoreCount = indicatorSKUInputStore.value;
//     console.log(skuInputStoreCount);
// });
// indicatorSKUInputStore.addEventListener('input',(e)=> {
//     sku__range__inputStore.noUiSlider.set(e.target.value);
//     skuInputStoreCount = sku__range__inputStore.noUiSlider.get();
//     console.log(skuInputStoreCount);
// });



// //출고택배
// let outputBoxsizeValue = "";
//  const radio_outputBoxsize = document.querySelector(".outputBoxsize__Radio__lists");
//  radio_outputBoxsize.addEventListener('change',(e)=> {
//     const selected = document.querySelectorAll('.outputBoxsize__Radio__lists > li > label > input');
//     const black = "#000000"
//     const selectedColor = "#f18b24";
//     outputBoxsizeValue = e.target.value;
//     selected.forEach((e)=> {
//         const box = e.parentElement.parentElement;
//         const titleText = e.parentElement.childNodes[4];
//         const descriptionText = e.parentElement.childNodes[6];
//         if(e.value === outputBoxsizeValue)
//         {
//             box.style.boxShadow = "0px 0px 5px 0px #ff9948";
//             titleText.style.color =selectedColor;
//             descriptionText.style.color =selectedColor;
//         }
//         else {
//             titleText.style.color =black;
//             descriptionText.style.color =black;
//             box.style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.15)";
//         }
//     })
// });

// //inputStoreCountSKU
// let outputRangeSlider = document.querySelector(".output__range");
// let indicatorOutputBox = document.querySelector(".indicator__output__range");
// let outputBoxCount = 0;
// noUiSlider.create(outputRangeSlider,{
//     start:[250],
//     connect:[true,false],
//     // behaviour:'snap',
//     range:{
//         'min':0,
//         'max':1000
//     },
//     format: wNumb({
//         decimals:0,
//     })
// });
// outputRangeSlider.noUiSlider.on('update',(value)=> {
//     indicatorOutputBox.value = value;
//     outputBoxCount = indicatorOutputBox.value;
// });
// indicatorOutputBox.addEventListener('input',(e)=> {
//     outputRangeSlider.noUiSlider.set(e.target.value);
//     outputBoxCount = outputRangeSlider.noUiSlider.get();
// });











































//값이 비어있을때 메세지
function errMsg(msg,scrollY) {
    alert(msg);
    window.scrollTo(0,scrollY);
}

//앞뒤버튼
const stepone = document.querySelector("#stepone");
const steptwo = document.querySelector("#steptwo");
const preBtn = document.querySelector(".stepBtn__preBtn");
const nextBtn = document.querySelector(".stepBtn__nextBtn");
const stepbar__two = document.querySelector(".stepbox__two");
const stepbar__one = document.querySelector(".stepbox");
steptwo.style.display='none';
stepbar__two.style.display="none";
let stepStatus = 1;
nextBtn.addEventListener('click',()=> {
    console.log(window.scrollY)
    console.log(detailInput.length);
    window.scrollTo(0,0);
    //step1
    // if(product_category.length <1)
    // {
    //     errMsg('상품종류 하나이상을 선택해주세요!',161);
    //     return;
    // }
    // else if(detailInput.length <1)
    // {
    //     errMsg('상세품목을 입력해주세요!',361);
    //     return;
    // }
    // else if(arr_storage_type.length <1)
    // {
    //  errMsg('보관형태 하나이상을 선택해주세요!',500);
    //  return;
    // }
    // else if(barcodeValue.length<1)
    // {
    //     errMsg('바코드 여부를 선택해주세요!',700);
    //     return;
    // }
    stepStatus++;
    if(stepStatus === 2)
    {
        preBtn.style.visibility='visible';
        stepone.style.display = "none";
        steptwo.style.display = '';
        stepbar__two.style.display='';
        stepbar__one.style.display='none'
        console.log(steptwo);   
    }
})
preBtn.addEventListener('click',()=> {
    window.scrollTo(0,0);
    stepStatus--;
    console.log(stepStatus);
    if(stepStatus === 1)
    {
        preBtn.style.visibility='hidden';
        stepone.style.display = '';
        steptwo.style.display = 'none';
        stepbar__two.style.display='none';
        stepbar__one.style.display=''
    }
})



