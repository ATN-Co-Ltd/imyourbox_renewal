// <!-- Enliple Common Tracker v3.6 [공용] start -->

const enlipleScript = document.createElement('script');
enlipleScript.addEventListener('load',()=> {
    let rf = new EN();
    rf.setData("userid", "imyourbox");
    rf.setSSL(true);
    rf.sendRf();
});
enlipleScript.type='text/javascript';
enlipleScript.defer= true;
enlipleScript.src="https://cdn.megadata.co.kr/js/en_script/3.6/enliple_min3.6.js";

document.getElementsByTagName("script")[0].parentNode.appendChild(enlipleScript);



// <!-- Enliple Tracker v3.6 [결제전환] start -->
export const mbConv = () => {
    let companyName = document.querySelector(".customer_company").value;
	var cn = new EN();
    cn.setData("uid", "imyourbox");
    cn.setData("ordcode", "");
    cn.setData("qty", "1");
    cn.setData("price", "1");
    cn.setData("pnm", companyName);
    cn.setSSL(true);
	cn.sendConv();
}