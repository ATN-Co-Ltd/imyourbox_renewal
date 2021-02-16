//네이버 전환스크립트 

export function naverConv(){
    let naverScript = document.createElement('script');
    naverScript.addEventListener("load",()=> {
        var _nasa={};
        _nasa["cnv"] = wcs.cnv("4","1"); // 전환유형, 전환가치 설정해야함. 설치매뉴얼 참고
        wcs_do(_nasa);
    })
    naverScript.type='text/javascript';
    naverScript.src="https://wcs.naver.net/wcslog.js";
    naverScript.async = true;
    document.getElementsByTagName("script")[0].parentNode.appendChild(naverScript);
}


const naverCommonScript = document.createElement('script');
naverCommonScript.addEventListener('load',()=> {
  
    if (!wcs_add) var wcs_add={};
    wcs_add["wa"] = "s_1083285baf10";
    if (!_nasa) var _nasa={};
    wcs.inflow();
    wcs_do(_nasa);
});
naverCommonScript.type='text/javascript';
naverCommonScript.defer= true;
naverCommonScript.src="https://wcs.naver.net/wcslog.js";

document.getElementsByTagName("script")[0].parentNode.appendChild(naverCommonScript);


