


//전환데이터 간단견적
export const mobConvScriptSimpleOrder =() => {
    let mobSimpleOrderScript = document.createElement('script');
    mobSimpleOrderScript.addEventListener('load',()=> {
        let simpleCompanyName = document.querySelector(".simple_customer_company").value;
        var cn = new EN();
        cn.setData("uid", "imyourbox");
        cn.setData("ordcode", "");
        cn.setData("qty", "1");
        cn.setData("price", "1");
        cn.setData("pnm", simpleCompanyName);
        cn.setSSL(true);
        cn.sendConv();
    })
    mobSimpleOrderScript.src =
      "https://cdn.megadata.co.kr/js/en_script/3.6/enliple_min3.6.js";
    mobSimpleOrderScript.async = true;
    document
      .getElementsByTagName("script")[0]
      .parentNode.appendChild(mobSimpleOrderScript);

}
//전환데이터 상세견적
export const mobConvScriptDetailOrder =() => {
  
    let mobDetailOrderScript = document.createElement('script');
    mobDetailOrderScript.addEventListener('load',()=> {
        let detailCompanyName = document.querySelector(".customer_company").value;
        var cn = new EN();
        cn.setData("uid", "imyourbox");
        cn.setData("ordcode", "");
        cn.setData("qty", "1");
        cn.setData("price", "1");
        cn.setData("pnm", detailCompanyName);
        cn.setSSL(true);
        cn.sendConv();
    })
    mobDetailOrderScript.src =
      "https://cdn.megadata.co.kr/js/en_script/3.6/enliple_min3.6.js";
    mobDetailOrderScript.async = true;
    document
      .getElementsByTagName("script")[0]
      .parentNode.appendChild(mobDetailOrderScript);

}
