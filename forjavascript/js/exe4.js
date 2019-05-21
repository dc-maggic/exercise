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
addLoadEvent(changeBox);
function changeBox(){
    var button = document.getElementsByTagName("button")[0];
    var box = document.getElementById("box");
    var boxs = box.getElementsByTagName("div");
    var color = ["red","orange","yellow","green","blue","indigo","purple"];
    var index = 1;
    button.onclick = function(){
            index = index==7 ? 0 : index;
        for( let i=0; i<boxs.length; i++){
            boxs[i].style["background"] = color[index];
        }
        index++;
    }
}