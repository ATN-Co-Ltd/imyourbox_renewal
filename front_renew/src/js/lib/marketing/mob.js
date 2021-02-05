

//전환데이터

export const mobConvScript =() => {
    (function(a,g,e,n,t){a.enp=a.enp||function(){(a.enp.q=a.enp.q||[]).push(arguments)};
    n=g.createElement(e);
    n.defer=!0;
    n.src="https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
    t=g.getElementsByTagName(e)[0];
    t.parentNode.insertBefore(n,t)})(window,document,"script");
    enp('create', 'conversion', 'imyourbox', { device: 'w', btnSelector: '해당 버튼의 selector', convType: 'etc', productName: '광고주에서 커스텀 할 상품명'});
}

//console.log(typeof document.querySelector('.callSimpleOrderBtn'));


//공용데이터


const mobCommonScript = document.createElement('script');
mobCommonScript.addEventListener('load',()=> {
    (function(a,g,e,n,t){a.enp=a.enp||function(){(a.enp.q=a.enp.q||[]).push(arguments)};
    n=g.createElement(e);
    n.async=!0;
    n.defer=!0;
    n.src="https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
    t=g.getElementsByTagName(e)[0];t.parentNode.insertBefore(n,t)})(window,document,"script");
    enp('create', 'common', 'imyourbox', { device: 'W' }); // W:웹, M: 모바일, B: 반응형
    enp('send', 'common', 'imyourbox');
});
mobCommonScript.type='text/javascript';
mobCommonScript.defer= true;

document.getElementsByTagName("script")[0].parentNode.appendChild(mobCommonScript);



