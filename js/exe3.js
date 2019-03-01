function addLoadEvent(func){
    var oldload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function(){
            oldload();
            func();
        }
    }
}
addLoadEvent(inputWhat);

function inputWhat(){
    var sure = document.getElementsByTagName("button")[0];
    var infor = document.getElementsByTagName("input");
    sure.onclick = function(){
        for(let i=0; i<infor.length; i++) {
            if(infor[i].value){
                alert(infor[i].value);
            }
        }
    } 
    
}