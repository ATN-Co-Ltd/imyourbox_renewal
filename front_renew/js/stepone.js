//상품종류
const product_category = [];
const buttons_category = document.querySelectorAll("ul.stepone__category__list > li>input");
const CLICKED_CLASS = "clicked";
buttons_category.forEach(e=> {
    e.addEventListener('click',()=> {
      const checked__icon = e.parentElement.childNodes[3];
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
//보관형태
const arr_storage_type = [];
const buttons_storage_type = document.querySelectorAll("ul.storageType__container__buttons > li> input");

buttons_storage_type.forEach(e=> {
    e.addEventListener('click',()=> {
        const checked__icon = e.parentElement.childNodes[3];
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
        const checked__icon = e.parentElement.childNodes[3];
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


const stepone = document.querySelector("#stepone");
const steptwo = document.querySelector("#steptwo");
const preBtn = document.querySelector(".stepBtn__preBtn");
const stepbar__two = document.querySelector(".stepbox__two");
const stepbar__one = document.querySelector(".stepbox");
steptwo.style.display='none';
stepbar__two.style.display="none";
let stepStatus = 1;
const nextBtn = () => {
    stepStatus++;
    console.log(stepStatus);
   
    if(stepStatus === 2)
    {
        preBtn.style.visibility='visible';
        stepone.style.display = "none";
        steptwo.style.display = '';
        stepbar__two.style.display='';
        stepbar__one.style.display='none'
        console.log(steptwo);
    }

}

const prevBtn = () => {
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

}


