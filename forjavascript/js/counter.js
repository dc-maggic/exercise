window.onload = function(){
    var counter = document.getElementsByTagName("input");
    for(var i=0; i<counter.length; i++){
        (function(j){
            counter[j].onclick = function(){
                this.value = parseInt(this.value,10)+1;
            };
        })(i);
    }
}