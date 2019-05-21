window.onload = function(){
    var counter = document.getElementsByTagName("input");
    var sum = document.getElementById("sum");
    var submit = document.getElementById("submit");
    submit.onclick = function(){
        var s = parseFloat(counter[0].value,10) + parseFloat(counter[1].value,10);
        sum.innerHTML = s ;
    }
}