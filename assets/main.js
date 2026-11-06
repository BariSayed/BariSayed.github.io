// year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu: close on link click
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
  const t=document.getElementById('navtoggle'); if(t) t.checked=false;
}));

// scroll reveal
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// animated stat counters
function animate(el){
  const to=+el.dataset.to; if(!to){return;} let n=0; const step=Math.max(1,Math.ceil(to/40));
  const t=setInterval(()=>{n+=step; if(n>=to){n=to; clearInterval(t);} el.textContent=n;},25);
}
const so=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){animate(e.target);so.unobserve(e.target);}});},{threshold:.5});
document.querySelectorAll('.stat .num[data-to]').forEach(el=>{el.textContent='0';so.observe(el);});

// active nav highlight
const secs=[...document.querySelectorAll('main section, section[id]')].filter(s=>s.id);
const links=new Map([...document.querySelectorAll('.nav a')].map(a=>[a.getAttribute('href').slice(1),a]));
const no=new IntersectionObserver((es)=>{es.forEach(e=>{const l=links.get(e.target.id);
  if(l&&e.isIntersecting){document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));l.classList.add('active');}});},
  {rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>no.observe(s));

// back to top
const btn=document.getElementById('top-btn');
window.addEventListener('scroll',()=>{btn.classList.toggle('show',window.scrollY>500);});
btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
