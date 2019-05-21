window.onload = function(){
    var spans = document.getElementsByTagName("span");
    //1s过后
    setInterval(getTime, 1000);
    //初始化的时候
    getTime();
    function getTime(){
        var date = new Date();
        var hms = [date.getHours(),date.getMinutes(),date.getSeconds()];
        for(var i in hms){
            (function(j){
                spans[j].innerHTML = hms[j];
            })(i);
        }
    }
}