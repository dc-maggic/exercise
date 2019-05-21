window.onload = function(){
    var tabs = document.getElementById("title").getElementsByTagName("li");
    var contents = document.getElementById("content").getElementsByTagName("ul");
    for(var i=0; i<tabs.length; i++){
        (function(j){
            tabs[j].onmouseover=function(){
                if(tabs[j].classList.contains("show")){
                    return true;
                } else {
                    document.getElementsByClassName("show")[0].classList.remove("show");
                    document.getElementsByClassName("list")[0].classList.remove("list");
                    tabs[j].classList.add("show");
                    contents[j].classList.add("list");
                }
            }
        })(i);
    }
}