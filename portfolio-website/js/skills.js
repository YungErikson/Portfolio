document.addEventListener("DOMContentLoaded",function(){
const progressBars=document.querySelectorAll('.progress-bar');
progressBars.forEach(progressBar=>{
const target=parseInt(progressBar.getAttribute('data-target'));
const duration=2000;
let start=null;
function animateCount(timestamp){
if(!start)start=timestamp;
const progress=timestamp-start;
const percent=Math.min((progress/duration)*target,target);
progressBar.textContent=Math.floor(percent)+'%';
if(progress < duration) {
requestAnimationFrame(animateCount);
}else{
progressBar.textContent=target+'%';
}
}
requestAnimationFrame(animateCount);
});
});
document.addEventListener('DOMContentLoaded',function(){
const faders=document.querySelectorAll('.hobby-card.fade-out');
const options={
threshold:0.2
};
const appearOnScroll=new IntersectionObserver(function(entries,observer){
entries.forEach(entry=>{
if(!entry.isIntersecting)return;
entry.target.classList.remove('fade-out');
entry.target.classList.add('fade-in');
observer.unobserve(entry.target);
});
},options);
faders.forEach(fader=>{
appearOnScroll.observe(fader);
});
});