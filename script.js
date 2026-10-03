var t0=Date.now(),tc=document.getElementById('tc');
setInterval(function(){var s=Math.floor((Date.now()-t0)/1000),p=function(n){return String(n).padStart(2,'0')};
tc.textContent=p(Math.floor(s/3600))+':'+p(Math.floor(s/60)%60)+':'+p(s%60)},1000);
var r=document.getElementById('rail');
document.getElementById('prev').onclick=function(){r.scrollBy({left:-280,behavior:'smooth'})};
document.getElementById('next').onclick=function(){r.scrollBy({left:280,behavior:'smooth'})};
document.getElementById('f').onsubmit=function(e){e.preventDefault();var d=new FormData(e.target);
var m='Hi Zaman Studio, I am '+d.get('n')+'. Package: '+d.get('p')+'. '+d.get('m');
var a=document.createElement('a');a.href='https://wa.me/923041302513?text='+encodeURIComponent(m);a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove()};
