//전환데이터 간단견적
export const mobConvScriptSimpleOrder =() => {
  let simpleCompanyName = document.querySelector(".simple_customer_company").value;
  
  (function(a,g,e,n,t){
    a.enp=a.enp||function(){(a.enp.q=a.enp.q||[]).push(arguments)};
    n=g.createElement(e);
    n.defer=!0;
    n.src="https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
    t=g.getElementsByTagName(e)[0];t.parentNode.insertBefore(n,t)}
    )(window,document,"script");
    enp('create', 'conversion', 'imyourbox', { device: 'w', btnSelector: '.callSimpleOrderBtn', convType: 'etc', productName: simpleCompanyName });

  //let mobSimpleOrderScript = document.createElement('script');
  // mobSimpleOrderScript.addEventListener('load',()=> {
  //     var cn = new EN();
  //     cn.setData("uid", "imyourbox");
  //     cn.setData("ordcode", "");
  //     cn.setData("qty", "1");
  //     cn.setData("price", "1");
  //     cn.setData("pnm", simpleCompanyName);
  //     cn.setSSL(true);
  //     cn.sendConv();
  // })
  // mobSimpleOrderScript.src =
  //   "https://cdn.megadata.co.kr/js/en_script/3.6/enliple_min3.6.js";
  // mobSimpleOrderScript.async = true;
  // document
  //   .getElementsByTagName("script")[0]
  //   .parentNode.appendChild(mobSimpleOrderScript);
  //})

}

//전환데이터 상세견적
export const mobConvScriptDetailOrder =() => {
  let detailCompanyName = document.querySelector(".customer_company").value;
  (function(a,g,e,n,t){
    a.enp=a.enp||function(){(a.enp.q=a.enp.q||[]).push(arguments)};
    n=g.createElement(e);
    n.defer=!0;
    n.src="https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
    t=g.getElementsByTagName(e)[0];t.parentNode.insertBefore(n,t)}
    )(window,document,"script");
    enp('create', 'conversion', 'imyourbox', { device: 'w', btnSelector: '.stepBtn__nextBtn', convType: 'etc', productName: detailCompanyName });
    
  // let mobDetailOrderScript = document.createElement('script');
  // mobDetailOrderScript.addEventListener('load',()=> {
  //     var cn = new EN();
  //     cn.setData("uid", "imyourbox");
  //     cn.setData("ordcode", "");
  //     cn.setData("qty", "1");
  //     cn.setData("price", "1");
  //     cn.setData("pnm", detailCompanyName);
  //     cn.setSSL(true);
  //     cn.sendConv();
  // })
  // mobDetailOrderScript.src =
  //   "https://cdn.megadata.co.kr/js/en_script/3.6/enliple_min3.6.js";
  // mobDetailOrderScript.async = true;
  // document
  //   .getElementsByTagName("script")[0]
  //   .parentNode.appendChild(mobDetailOrderScript);

}



