window.onload = function(){
    var boxs = document.getElementsByClassName("box");
    var events = [
        "元旦：1月1日至3日放假三天。",
		"春节：2月2日至8日放假7天。",
		"妇女节：3月8日妇女节，与我无关。",
		"清明节：4月3日至5日放假3天",
		"劳动节：4月30日至5月2日放假3天。",
		"端午节：6月4日至6日放假3天。",
		"小暑：7月7日小暑。不放假。",
		"七夕节：8月6日七夕节。不放假。",
		"中秋节：9月10日至12日放假3天。",
		"国庆节：10月1日至7日放假7天。",
		"立冬：11月8日立冬。不放假。",
		"艾滋病日:12月1日<br />废除奴隶制国际日:12月2日。"
    ];
    var h1 = document.getElementsByTagName("h1")[0];
    var span = document.getElementsByTagName("span")[0];
    for(var i=0; i<boxs.length; i++){
        (function(j){
            boxs[j].onmouseover = function(){
           
            h1.innerHTML = j+1+"月节日";
            span.innerHTML= events[j];
            };
        })(i);
    }
}