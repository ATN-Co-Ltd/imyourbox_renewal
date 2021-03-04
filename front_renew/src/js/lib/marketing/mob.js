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
}

//전환데이터 상세견적

export const mobConvScriptDetailOrder =() => {
  let detailCompanyName = document.querySelector(".customer_company").value;
  (function(a,g,e,n,t){
    a.enp=a.enp||function(){(a.enp.q=a.enp.q||[]).push(arguments)};
    n=g.createElement(e);
    n.defer=!0;
    n.src="https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
    t=g.getElementsByTagName(e)[0];
    t.parentNode.insertBefore(n,t)}
    )(window,document,"script");
    enp('create', 'conversion', 'imyourbox', { device: 'w', btnSelector: '.stepBtn__nextBtn', convType: 'etc', productName: detailCompanyName });
}



