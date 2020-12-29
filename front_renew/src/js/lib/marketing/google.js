// <!-- 구글 광고 -->
// <!-- Global site tag (gtag.js) - Google Analytics -->

window.dataLayer = window.dataLayer || [];

export function gtag() {
    dataLayer.push(arguments);
}


const googleScriptone = document.createElement('script');
googleScriptone.async = true;
googleScriptone.src= 'https://www.googletagmanager.com/gtag/js?id=AW-611833307';
document.getElementsByTagName("script")[0].parentNode.appendChild(googleScriptone);



// <!-- Global site tag (gtag.js) - Google Ads: 611833307 -->
const googleScripttwo = document.createElement('script');
googleScripttwo.async = true;
googleScripttwo.src= 'https://www.googletagmanager.com/gtag/js?id=UA-146580343-1';
document.getElementsByTagName("script")[0].parentNode.appendChild(googleScripttwo);




gtag("js", new Date());
gtag("config", "UA-146580343-1");
gtag("config", "AW-611833307");