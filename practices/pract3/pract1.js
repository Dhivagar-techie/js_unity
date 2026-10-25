document.getElementById("bt").onclick=function(){
    username=document.getElementById("user").value;
    document.getElementById("hello").textContent=`Hello ${username}`
}