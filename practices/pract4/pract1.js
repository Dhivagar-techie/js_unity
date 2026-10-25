
const PI=3.14;
let radius;
let circum;




document.getElementById("bt").onclick=function(){
    radius=document.getElementById("user").value;
    radius=Number(radius);

    circum=2*PI*radius;

    document.getElementById("result").textContent=circum+" cm "

}