const increse=document.getElementById("increse");
const decrese=document.getElementById("decrese");
const reset=document.getElementById("reset");
const num=document.getElementById("num");

let count=0;


increse.onclick=function(){
    count++;
    num.textContent=count;
}
decrese.onclick=function(){
    count--;
    num.textContent=count;

}
reset.onclick=function(){
    count=0;
    num.textContent=count;

}