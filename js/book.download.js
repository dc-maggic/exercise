addLoadEvent(download);
//用于头部“下载豆瓣客户端”按钮扫描二维码
function download(){
    var qr = document.getElementById("qr");
    var download = document.getElementById("download");
    download.onmouseover = function(){
        qr.style.display = "block";
    }
    download.onmouseout = function(){
        qr.style.display = "none"
    }
}