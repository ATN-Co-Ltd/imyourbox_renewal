// wcslog.js 파일 삽입
// 공통 적용 스크립트 , 모든 페이지에 노출되도록 설치. 단 전환페이지 설정값보다 항상 하단에 위치해야함 

const wcsLog = document.createElement('script');
wcsLog.addEventListener('load',()=> {
    console.log('script finished loading and executing');
    if (!wcs_add) var wcs_add = {};
    wcs_add["wa"] = "s_1083285baf10";
    if (!_nasa) var _nasa = {};
    wcs.inflow();
    wcs_do(_nasa);
});
wcsLog.type="text/javascript";
wcsLog.src="https://wcs.naver.net/wcslog.js";
wcsLog.async= true;



document.getElementsByTagName("script")[0].parentNode.appendChild(wcsLog);