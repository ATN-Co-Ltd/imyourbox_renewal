


//console.log(typeof document.querySelector('.callSimpleOrderBtn'));


//공용데이터

const mobCommonScript = document.createElement('script');
mobCommonScript.addEventListener('load',()=> {
    var rf = new EN();
    rf.setData("userid", "imyourbox");
    rf.setSSL(true);
    rf.sendRf();
});
mobCommonScript.type='text/javascript';
mobCommonScript.defer= true;
mobCommonScript.src ="https://cdn.megadata.co.kr/js/en_script/3.6/enliple_min3.6.js";
document.getElementsByTagName("script")[0].parentNode.appendChild(mobCommonScript);

// const mobCommonScript = document.createElement('script');
// mobCommonScript.addEventListener('load',()=> {
//     (function(a,g,e,n,t){a.enp=a.enp||function(){(a.enp.q=a.enp.q||[]).push(arguments)};
//     n=g.createElement(e);
//     n.async=!0;
//     n.defer=!0;
//     n.src="https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
//     t=g.getElementsByTagName(e)[0];t.parentNode.insertBefore(n,t)})(window,document,"script");
//     enp('create', 'common', 'imyourbox', { device: 'W' }); // W:웹, M: 모바일, B: 반응형
//     enp('send', 'common', 'imyourbox');
// });
// mobCommonScript.type='text/javascript';
// mobCommonScript.defer= true;
// mobCommonScript.src ="https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
// document.getElementsByTagName("script")[0].parentNode.appendChild(mobCommonScript);



//전환데이터 간단견적
export const mobConvScriptSimpleOrder =() => {
    // (function(a,g,e,n,t){a.enp=a.enp||function(){(a.enp.q=a.enp.q||[]).push(arguments)};
    // n=g.createElement(e);
    // n.defer=!0;
    // n.src="https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
    // t=g.getElementsByTagName(e)[0];
    // t.parentNode.insertBefore(n,t)})(window,document,"script");
    // enp('create', 'conversion', 'imyourbox', { device: 'w', btnSelector: 'callSimpleOrderBtn', convType: 'etc', productName: '상세견적'});
   
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
    // (function(a,g,e,n,t){a.enp=a.enp||function(){(a.enp.q=a.enp.q||[]).push(arguments)};
    // n=g.createElement(e);
    // n.defer=!0;
    // n.src="https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
    // t=g.getElementsByTagName(e)[0];
    // t.parentNode.insertBefore(n,t)})(window,document,"script");
    // enp('create', 'conversion', 'imyourbox', { device: 'w', btnSelector: 'stepBtn__nextBtn', convType: 'etc', productName: '상세견적'});
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


// mobConvScriptDetailOrder();