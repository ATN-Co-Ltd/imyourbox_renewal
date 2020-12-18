import {customer_company} from './stepFour'
import  {caclulateStoreFee,cacluateDeliveryFee,caclutateWMSfee} from './price'
import {inputStoreValue,inputStoreBoxsizeValue,inputStoreCount,skuInputStoreCount,outputBoxsizeValue,outputBoxCount} from './stepTwo';
import  {releasepackaing} from './stepThree'
import {stepStatus} from './button'
const customerCompany = document.querySelector('.avartar__title');
const totalPrice = document.querySelector('.avartar__price');
const stepResultButton = document.querySelector('.stepBtn__nextBtn');
const monthStoreFee = document.querySelector('.monthstore__fee');
const monthDeliveryFee = document.querySelector('.monthDelivery__fee');
const monthWMSFee = document.querySelector('.monthWMS__fee');


stepResultButton.addEventListener('click',()=> {
    if(stepStatus === 5)
    {
        
        let sumPrice = caclulateStoreFee(inputStoreValue,inputStoreCount,inputStoreBoxsizeValue) + cacluateDeliveryFee(outputBoxCount,outputBoxsizeValue,releasepackaing) + caclutateWMSfee(skuInputStoreCount);
        customerCompany.textContent = `"${customer_company}" 고객님의 예상 비용`;
        totalPrice.textContent = `월 ${sumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원`
        monthStoreFee.textContent = `${caclulateStoreFee(inputStoreValue,inputStoreCount,inputStoreBoxsizeValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        monthDeliveryFee.textContent = `${cacluateDeliveryFee(outputBoxCount,outputBoxsizeValue,releasepackaing).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        monthWMSFee.textContent = `${caclutateWMSfee(skuInputStoreCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원`;
    }
})









