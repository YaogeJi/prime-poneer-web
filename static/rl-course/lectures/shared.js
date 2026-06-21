/* ============================================================
   PASTEL LAB — shared slide controller
   Navigation, progress, animations for all skeleton lectures.
   ============================================================ */

class SlidePresentation{
  constructor(){
    this.slides=[...document.querySelectorAll('.slide')];
    this.current=0;
    this.buildNav();
    this.observe();
    this.bindKeys();
    this.slides[0].classList.add('visible');
    this.updateProgress(0);
  }
  buildNav(){
    const nav=document.getElementById('nav');
    if(!nav)return;
    this.slides.forEach((s,i)=>{
      const btn=document.createElement('button');
      btn.title=s.dataset.name||'Slide '+(i+1);
      btn.addEventListener('click',()=>this.goTo(i));
      if(i===0)btn.classList.add('active');
      nav.appendChild(btn);
    });
    this.dots=[...nav.children];
  }
  observe(){
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
          const idx=this.slides.indexOf(e.target);
          if(idx>=0){
            this.current=idx;
            this.updateProgress(idx);
          }
        }
      });
    },{threshold:0.5});
    this.slides.forEach(s=>io.observe(s));
  }
  bindKeys(){
    document.addEventListener('keydown',e=>{
      const tag=document.activeElement && document.activeElement.tagName;
      if(tag==='INPUT'||tag==='TEXTAREA')return;
      if(e.key==='ArrowDown'||e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){
        e.preventDefault();this.next();
      }else if(e.key==='ArrowUp'||e.key==='ArrowLeft'||e.key==='PageUp'){
        e.preventDefault();this.prev();
      }else if(e.key==='Home'){
        e.preventDefault();this.goTo(0);
      }else if(e.key==='End'){
        e.preventDefault();this.goTo(this.slides.length-1);
      }
    });
  }
  next(){if(this.current<this.slides.length-1)this.goTo(this.current+1)}
  prev(){if(this.current>0)this.goTo(this.current-1)}
  goTo(i){
    this.current=i;
    this.slides[i].scrollIntoView({behavior:'smooth',block:'start'});
    this.updateProgress(i);
  }
  updateProgress(i){
    const pct=((i+1)/this.slides.length)*100;
    const p=document.getElementById('progress');
    if(p)p.style.width=pct+'%';
    if(this.dots)this.dots.forEach((d,j)=>d.classList.toggle('active',j===i));
  }
}

document.addEventListener('DOMContentLoaded',()=>new SlidePresentation());
