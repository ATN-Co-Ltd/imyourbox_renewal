
require('normalize.css/normalize.css');
require('./styles/style.scss');
require('./js/all');
document.addEventListener("DOMContentLoaded", () => {

    const pluginsTriggerElement = document.getElementById('plugins-trigger');
    const pluginsElement = document.getElementById('plugins');
    const pluginsVisibleClass = "splash-overview-plugins__list--visible";
    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    }
});

//상품종류
const product_category = [];
const buttons_category = document.querySelectorAll("div.stepone__category__buttons > button");
const CLICKED_CLASS = "clicked";

buttons_category.forEach(e=> {
    e.addEventListener('click',()=> {
        const splitCategory =e.className.split(" ")[1];
        console.log(`${splitCategory}`)
        console.log(product_category.includes(splitCategory));
        if(product_category.includes(splitCategory))
        {
            product_category.splice(product_category.indexOf(splitCategory),1);
        }
        else {
            product_category.push(splitCategory);
        }
    console.log(product_category);
    e.classList.toggle(CLICKED_CLASS);
    
    })
});

//보관형태
const arr_storage_type = [];
const buttons_storage_type = document.querySelectorAll("div.stepone__storagetype__buttons > button");

buttons_storage_type.forEach(e=> {
    e.addEventListener('click',()=> {
        const splitStorageType =e.className.split(" ")[1];
        console.log(`${splitStorageType}`)
        console.log(arr_storage_type.includes(splitStorageType));
        if(arr_storage_type.includes(splitStorageType))
        {
            arr_storage_type.splice(arr_storage_type.indexOf(splitStorageType),1);
        }
        else {
            arr_storage_type.push(splitStorageType);
        }
    console.log(arr_storage_type);
    e.classList.toggle(CLICKED_CLASS);
    
    })
});

//바코드여부
let barcodeValue = "";
 const radio__havebarcode = document.querySelector(".stepone__havebarcode__radio__groups");
radio__havebarcode.addEventListener('change',(e)=> {
    const selected = document.querySelectorAll('label');
    const white = "#ffffff"
    const black = "#000000"
    const selectedColor = "#ff9948";
    barcodeValue = e.target.value;
    console.log(barcodeValue);
    switch (e.target.value) {
        case "have_barcode":
            selected[0].style.backgroundColor =selectedColor;
            selected[0].style.color =white;
            selected[1].style.color =black;
            selected[2].style.color =black;
            selected[1].style.backgroundColor =white;
            selected[2].style.backgroundColor =white;
            break;
        case "no_barcode":
            selected[1].style.backgroundColor =selectedColor;
            selected[0].style.backgroundColor =white;
            selected[2].style.backgroundColor =white;
            selected[0].style.color =black;
            selected[1].style.color =white;
            selected[2].style.color =black;
            break;
        case "part_barcode":
            selected[2].style.backgroundColor =selectedColor;
            selected[1].style.backgroundColor =white;
            selected[0].style.backgroundColor =white;
            selected[0].style.color =black;
            selected[1].style.color =black;
            selected[2].style.color =white;
            break;
        default:
            break;
    }
})

  


