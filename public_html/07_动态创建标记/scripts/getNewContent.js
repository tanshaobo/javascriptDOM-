function getNewContent(){
    var request=getHTTPObject();
    if(request){
        request.open("GET","example.txt",true);
        request.onreadystatechange = function(){
            if(request.readyState === 4){
                alert(1);
                var para =document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("抱歉，你的low比浏览器不支持XMLHttpRequest");
    }
    alert(2);
}
addLoadEvent(getNewContent);