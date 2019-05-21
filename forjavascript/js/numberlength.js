window.onload = function(){
    var list = document.getElementsByTagName("input");
    var show = document.getElementsByTagName("span")[0];
    list[0].onkeyup = function(){
        this.value = this.value.replace(/[^(\d)|(,)|(\.)]/,"").replace(/(\.){2,}|(\.)(\d)*(\.)/,"");
    };
    list[1].onclick = function(){
        let re = parseFloat(list[0].value,10);
        if(re===0){
            show.innerHTML = "0";
        } else if(re<1) {
            show.innerHTML = "小于1的小数";
        } else {
            show.innerHTML = re.toFixed(0).length+"位";
        }
    }
}