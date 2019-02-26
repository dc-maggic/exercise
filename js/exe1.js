//必备函数
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
//修改样式
function change(){
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("box")) {alert("no")};
    var links = document.getElementsByTagName("input");
    var box = document.getElementById("box");
    var att = ["width","height","background","display","display"];
    var value = ["400px","500px","pink","none","block"];
    for (var i=0; i<links.length; i++){
        links[i].index = i;
        links[i].onclick = function(){
            this.index == links.length - 1 && (box.style.cssText = '');
            box.style[att[this.index]] = value[this.index];
        }
    }
}

addLoadEvent(change);