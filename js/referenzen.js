document.addEventListener("DOMContentLoaded",function(){
const hash=window.location.hash.substring(1);
if(hash){
const target=document.getElementById(hash);
if(target){
target.classList.add("highlight");
setTimeout(()=>target.classList.remove("highlight"),4000);
}}});