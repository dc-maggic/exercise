window.onload = function(){
    var title = document.getElementById("title");
    var list = document.getElementById("list").classList;
    var span = document.getElementsByTagName("span");
    var show = span[0].classList;
    var hide = span[1].classList;
    title.onclick = function(){
        if(show.contains("hide")){
            show.remove("hide");
            list.remove("hide");
            hide.add("hide");
        } else {
            show.add("hide");
            list.add("hide");
            hide.remove("hide");
        }
    }
}