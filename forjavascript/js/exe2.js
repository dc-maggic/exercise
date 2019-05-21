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
addLoadEvent(changeColor);
function changeColor(){
    var bgcolor = document.getElementById("bgcolor");
    var links = bgcolor.getElementsByTagName("li");
    var sevencolor = ["red","orange","yellow","green","blue","indigo","purple"];
    var bg = ["#fdd","#fbe893","#f8fbc1","#a1f089","#9389f0","#b99eff","#d69eff"];
    var nav = document.getElementById("nav");
    var bodybg = document.getElementsByTagName("body")[0];
    for(var i=0; i<links.length; i++){
        links[i].index = i;
        links[i].onclick = function(){
            var current = document.getElementsByClassName("current");
            current[0].classList.remove("current");
            this.setAttribute("class","current");
            bodybg.style["background"] = bg[this.index];
            nav.style["background"] = sevencolor[this.index];
        }
    }
}