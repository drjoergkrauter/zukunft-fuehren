/* Kleine Helfer ohne Abhängigkeiten. Nichts wird gespeichert oder übertragen außer der gewählten Ansicht (lokal im Browser). */
(function(){
  var d=document;
  function setMode(kurz){
    d.body.classList.toggle('kurz',kurz);
    d.querySelectorAll('[data-mode]').forEach(function(b){b.setAttribute('aria-pressed',String((b.dataset.mode==='kurz')===kurz))});
    try{localStorage.setItem('zf-modus',kurz?'kurz':'voll')}catch(e){}
  }
  d.querySelectorAll('[data-mode]').forEach(function(b){b.addEventListener('click',function(){setMode(b.dataset.mode==='kurz');window.scrollTo(0,0)})});
  try{ if(new URLSearchParams(location.search).get('ansicht')==='kurz' || localStorage.getItem('zf-modus')==='kurz') setMode(true); }catch(e){}
  // Ihre Einschätzung: zeigt die Grafik nach der Wahl, ohne Sieger
  var fig=d.getElementById('grafik');
  if(fig){
    var reveal=fig.querySelector('.reveal'), fb=fig.querySelector('.feedback');
    fig.querySelectorAll('.opt').forEach(function(o){o.addEventListener('click',function(){
      fig.querySelectorAll('.opt').forEach(function(x){x.setAttribute('aria-pressed','false')});
      o.setAttribute('aria-pressed','true');
      if(fb){fb.textContent='Ihre Einschätzung: „'+o.textContent.trim()+'“. '+fb.dataset.text;}
      reveal.hidden=false; var sk=fig.querySelector('.skip'); if(sk) sk.hidden=true;
    })});
    var sk=fig.querySelector('.skip'); if(sk) sk.addEventListener('click',function(){reveal.hidden=false;sk.hidden=true;});
  }
  // Ihre Stimme auf der Website: zeigt die Antwort der Redaktion; gezählt wird in der E-Mail-Ausgabe
  var st=d.getElementById('stimme');
  if(st){
    st.querySelectorAll('.vote').forEach(function(v){v.addEventListener('click',function(ev){
      ev.preventDefault();
      st.querySelectorAll('.vote').forEach(function(x){x.setAttribute('aria-pressed','false')});
      v.setAttribute('aria-pressed','true');
      var r=st.querySelector('.voteres'); r.textContent=v.dataset.antwort; r.hidden=false;
    })});
  }
  // Weiterleiten per E-Mail
  var fw=d.getElementById('weiterleiten');
  if(fw){fw.href='mailto:?subject='+encodeURIComponent(fw.dataset.subject)+'&body='+encodeURIComponent(fw.dataset.body+'\n\n'+location.href.split('?')[0]);}
})();
