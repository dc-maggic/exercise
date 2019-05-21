window.onload = function(){
    var cover = document.getElementById("cover").getElementsByTagName("img")[0];
    var photos = document.getElementsByClassName("photos");
    for(var i=0; i<photos.length; i++){
        (function(j){
            photos[j].onmouseover = function(){
                cover.src =photos[j].src;
            }
        })(i);
    }
}