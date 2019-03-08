addLoadEvent(changeRank);
function changeRank() {
    if(!document.getElementById) return false;
    var jdRank = document.getElementById("jd-rank");
    var ddRank = document.getElementById("dd-rank");
    var choose = document.getElementById("choose");
    var links = choose.getElementsByTagName("li");
    var linksRank = [jdRank,ddRank];
    for( let i=0; i<links.length; i++){
        links[i].onclick = function() {
            var a = i ^ 1;
            links[a].removeAttribute("class");
            links[i].setAttribute("class","click-rank");
            linksRank[a].style.display = "none";
            linksRank[i].style.display = "block";
        };
    }
}