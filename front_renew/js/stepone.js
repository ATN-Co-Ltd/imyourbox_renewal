//상품종류
const product_category = [];
const buttons_category = document.querySelectorAll("ul.stepone__category__list > li>input");
const CLICKED_CLASS = "clicked";

buttons_category.forEach(e=> {
    e.addEventListener('click',()=> {
      const inputParenet = e.parentElement;
    //   console.log(e.parentNode);
        const splitCategory =e.className.split(" ")[1];
        // console.log(`${splitCategory}`)
        // console.log(product_category.includes(splitCategory));
        if(product_category.includes(splitCategory))
        {
            product_category.splice(product_category.indexOf(splitCategory),1);
            inputParenet.style.backgroundColor = "#ffffff";
        }
        else {
            product_category.push(splitCategory);
            inputParenet.style.backgroundColor = "#ffa63f";
          
        }
    console.log(product_category);
    e.classList.toggle(CLICKED_CLASS);
    
    })
});


//보관형태
const arr_storage_type = [];
const buttons_storage_type = document.querySelectorAll("ul.storageType__container__buttons > li> input");

buttons_storage_type.forEach(e=> {
    e.addEventListener('click',()=> {
        const splitStorageType =e.className.split(" ")[1];
        console.log(`${splitStorageType}`)
        console.log(arr_storage_type.includes(splitStorageType));
        if(arr_storage_type.includes(splitStorageType))
        {
            arr_storage_type.splice(arr_storage_type.indexOf(splitStorageType),1);
            e.style.backgroundColor = "#ffffff";
            e.style.color="#474747"
        }
        else {
            arr_storage_type.push(splitStorageType);
            e.style.backgroundColor = "#ffa63f";
            e.style.color="#ffffff"
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
    const white = "#ffffff"
    const black = "#000000"
    const selectedColor = "#ff9948";
    barcodeValue = e.target.value;
    // console.log(barcodeValue);
    switch (e.target.value) {
        case "have_barcode":
            // console.log(selected[0]);
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


//상품취급 주의사항
const arr_caution_product_type = [];
const buttons_caution_product_type = document.querySelectorAll("ul.productCaution__list > li> input");

buttons_caution_product_type.forEach(e=> {
    console.log(e)
    e.addEventListener('click',()=> {
        const splitStorageType =e.className.split(" ")[1];
        console.log(`${splitStorageType}`)
        console.log(arr_caution_product_type.includes(splitStorageType));
        if(arr_caution_product_type.includes(splitStorageType))
        {
            arr_caution_product_type.splice(arr_caution_product_type.indexOf(splitStorageType),1);
            e.style.backgroundColor = "#ffffff";
            e.style.color="#474747"
        }
        else {
            arr_caution_product_type.push(splitStorageType);
            e.style.backgroundColor = "#ffa63f";
            e.style.color="#ffffff"
        }
    console.log(arr_caution_product_type);
    e.classList.toggle(CLICKED_CLASS);
    
    })
});



