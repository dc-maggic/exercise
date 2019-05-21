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
addLoadEvent(mouseColor);
function mouseColor(){
    var box = document.getElementById("box");
    box.onmouseover = function(){
        
        box.style.color = "red";
        box.style.background = "#fdd";
    }
    box.onmouseout = function(){
        box.style.cssText = '';
    }
}