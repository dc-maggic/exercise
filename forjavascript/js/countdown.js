window.onload = function(){
    var button = document.getElementsByTagName("input")[0];
    var spans = document.getElementsByTagName("span");
    //i:时间
    var i = 90;
    //flag：开始/暂停
    var flag = 0;
    var timer;
    button.onclick = function(){
        flag = flag===0?1:0;
        if(flag===1){
            button.value="取消";
            //timer：开启倒计时/停止倒计时函数
            timer = setInterval(count,1000);
        } else {
            button.value = "开始";
            clearInterval(timer);
        }
    }
    function count(){
        --i;
        if(i>59){
            spans[1].innerHTML = i - 60;
        } else if( i>=0) {
            spans[0].innerHTML = 0;
            spans[1].innerHTML = i;
        } else{
            alert("倒计时结束！")
            clearInterval(timer);
            i =90;
            button.value = "开始";
            flag = 0;
            spans[0].innerHTML = 1;
            spans[1].innerHTML = 30;
        }
    }
}