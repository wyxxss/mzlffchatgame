(()=>{
const IM={
  il:["./player.webp","player.webp"],
  bl:["./bullet.webp","bullet.webp"],
  hv:["./boss.webp","boss.webp"],
  a1:["./boss_idle.webp","boss_idle.webp","./7263.webp"],
  a2:["./boss_win.webp","boss_win.webp","./7262.webp"],
  a3:["./boss_hit.webp","boss_hit.webp","./7261.webp"],
  pp:["./poop.webp","poop.webp","./7264.webp"],
  cn:["./coin.webp","coin.webp"]
};
const COIN_SVG="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="17" cy="17" r="13" fill="#14142b"/><circle cx="15.5" cy="15.5" r="13" fill="#ffe600" stroke="#14142b" stroke-width="3"/><circle cx="15.5" cy="15.5" r="7.5" fill="none" stroke="#e0a800" stroke-width="2.4"/><path d="M9 13.5a6.8 6.8 0 0 1 5-5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg>');
const Q=[["Я не хотел репорт кидать","blue"],["Вот это уже пиздец настоящий, умри ебанутый","артем"],["я сосу","лайтム"],["я же гомосексуалист","поля фирудо"],["ухты звучит сексуально","астма29🥀"],["я хочу подхватить вич","версушка"],["я хочу ящик говна","данилка"],["ж","ілюша, кидтр"],["я ел гавно","ілюша"],["больше не будет фанфиков","мс верти"],["ребят ну уберите пенисы","xlit13ム"]];
// --- Скины. ch: il/ct/nc/gb персонажи, bl шарик · u: Telegram id художника (ник и ава подтягиваются из Firebase)
// d: стандартный скин · s: «сток» персонажа (открывает остальные его скины). Всё, кроме d, выпадает только из ящика.
const mk=(id,ch,n,f,u,x)=>({id,ch,n,f,u,...x}),UA='8432539534',UB='7042249253',UC='7520296747',UD='7636170713',UE='8399449955',UF='7509491579',UG='2059333472',UH='7379166823',UI='5196748446',UJ='1828659852';
let SK=[
mk('il0','il','Обычный Ілюша','player.webp','',{d:1}),
mk('bl0','bl','Обычный шарик','bullet.webp','',{d:1}),
mk('ct1','ct','Котик','omled_cat_1.webp',UB,{s:1}),
mk('nc1','nc','Нектарин','nectarin.webp','',{s:1}),
mk('gb1','gb','Голубая','golubaya.webp','',{s:1}),
mk('beach','il','Пляжный Ілюша','ilsuha_namore.webp',UA),
mk('bob','il','Ілюша Боб','ilusha_bob.webp',UA),
mk('girl','il','Ілюша-девочка','ilusha_devocka.webp',UA),
mk('cook','il','Ілюшка-кондитер','ilusha_gatovitmilo.webp',UA),
mk('dog','il','Ілюша песик','ilusha_pizdec.webp',UA),
mk('bunny','il','Ілюша кролик-официантка','ilusha_shluha.webp',UA),
mk('mik','il','Ілюша Микаса','milaya_ilusha.webp',UA),
mk('ny','il','Новогодний Ілюша','newyear_ilusha.webp',UA),
mk('bob2','il','Губка Ілюша','ilusha_bob2.webp',UB),
mk('zh7','il','Ілюша Ж (тазик 7)','ilusha_zh7.webp',UB),
mk('aiz','il','Ілюша Айзек','ilusha_aizek.webp',UB),
mk('rich','il','Рич флекс Ілюша','richflex_ilusha.webp',UB),
mk('bug','il','Ілюша жук','ilusha_zhuk.webp',UC),
mk('kat','il','Ілюша катенак','ilusha_chtoeto.webp',UD),
mk('lain','il','Ілюша Лейн','ilusha_lain.webp?v=2',UE),
mk('sb','bl','Хуесос','skin_sharikblue.webp',UB),
mk('ct2','ct','Котик вопросительный','omled_cat_2.webp',UB),
mk('ct3','ct','Котик интересный','omled_cat_3.webp',UB),
mk('ct4','ct','Котик с цветочками','omled_cat_4.webp',UB),
mk('ct5','ct','Котик треугольный','omled_cat_5.webp',UB),
mk('ct6','ct','Котик непридумал','omled_cat_6.webp',UB),
mk('ct7','ct','Котик непридумал 2','omled_cat_7.webp',UB),
mk('ct8','ct','Котик АДХД','omled_cat_8.webp',UB),
mk('ct9','ct','пушін','pushin.webp',UF),
mk('ct10','ct','Мэй','mei.webp',UE),
mk('kpss','il','Ілюша КПСС','ilusha_kpss.webp',UG),
mk('ncny','nc','NewYear Нектарин','nektarin_newyear.webp',UI),
mk('vrt','bl','Верити','veriti.webp',UB),
mk('ilsh','bl','Ілюша','ilusha_sharik.webp',UE),
mk('oksi','ex','Оксимирон','oksimiron.webp',UG),
mk('emo','ex','Безыменная','bezymyannaya.webp',UH),
mk('stint','ex','Стинт','stint.webp',UB),
mk('toha','ex','Тоха','toha.webp',UB),
mk('drake','ex','Дрейк','drake.webp',UB),
mk('mzlf','ex','Мазелов пидор','mazelov.webp',UB),
mk('blu','ex','Блу','blue.webp',UE),
mk('zsh','bl','Злой шарик','zloy_sharik.webp',UB),
mk('bsv','bl','Bad Svin','bad_svin.webp',UB),
mk('red','bl','Ред','red.webp',UB),
mk('saw','bl','Пила','pila.webp',UB),
mk('blch','ex','бля че это','blya_che_eto.webp',UJ),
mk('dasha_fan_kiry','gb','даша фан киры','skin_dasha_fan_kiry.webp',UA)
];
const CH=[['il','ІЛЮША'],['ct','КОТИК'],['nc','НЕКТАРИН'],['gb','ГОЛУБАЯ'],['bl','ШАРИК'],['ex','ЭКСКЛЮЗИВ']];/* ЭКОНОМИКА (ориентир: 1 минута активной игры ≈ 20 монет)
   Доход: монета в среднем 1.48 (88% по 1, 12% по 5), падает раз в ~2.4 с, ловится ~60% → ≈ 20-22 монеты/мин, плюс награда за босса 25..50.
   Ящик стоит фиксированные 100 монет. Цена не растёт и не зависит от числа открытий.
   Дубль возвращает DUP = 25% цены. После PITY = 4 дублей подряд следующий ящик гарантированно даёт новый скин.
   Полная коллекция (26 скинов) ≈ 60 ящиков ≈ 25к монет ≈ 20 часов игры. Цену любой новой штуки считай как минуты игры × 20.
   Firebase config/game может менять только отдельные параметры дубликатов и pity; box/ramp игнорируются. */
const EXW=.4; /* вес эксклюзивных скинов в ящике: 1 = как у всех, .4 = в 2.5 раза реже (поменяй число, если надо) */
const BOX=100;let DUP=25,RAMP=1,PITY=4;
const FB={apiKey:"AIzaSyBAnZWyL-ZrU3egfVbomay6G1DNA_zp5As",authDomain:"mzlffchat.firebaseapp.com",projectId:"mzlffchat",appId:"1:401998690106:web:4f1da7f73eb3993bb70203"};

let DK=document.documentElement.classList.contains('dk'),INK=DK?'#ece9ff':'#14142b',BG=DK?'#090920':'#47cef7';
const T=window.Telegram?.WebApp,$=s=>document.querySelector(s),R=(a,b)=>a+Math.random()*(b-a),C=(v,a,b)=>Math.max(a,Math.min(b,v));
try{T.ready();T.expand();T.disableVerticalSwipes?.();T.setHeaderColor?.(BG);T.setBackgroundColor?.(BG)}catch{}
const hz=(f,k)=>{try{T.HapticFeedback[f](k)}catch{}};
const hc=c=>{try{T.setHeaderColor?.(c);T.setBackgroundColor?.(c)}catch{}};
const setDK=v=>{DK=v;INK=v?'#ece9ff':'#14142b';BG=v?'#090920':'#47cef7';document.documentElement.classList.toggle('dk',v);try{localStorage.setItem('dk',v?'1':'0')}catch{}const m=document.querySelector('meta[name=theme-color]');if(m)m.content=BG;hc(BG)};
const swDK=v=>{const b=$('#moon'),r=b.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,R=Math.ceil(Math.hypot(Math.max(cx,innerWidth-cx),Math.max(cy,innerHeight-cy))),c0=`circle(0px at ${cx}px ${cy}px)`,cp=`circle(${R}px at ${cx}px ${cy}px)`;
b.classList.remove('spin');void b.offsetWidth;b.classList.add('spin');hz('impact','medium');
if(matchMedia('(prefers-reduced-motion:reduce)').matches){setDK(v);return}
if(document.startViewTransition){try{const t=document.startViewTransition(()=>setDK(v));t.ready.then(()=>document.documentElement.animate({clipPath:[c0,cp]},{duration:700,easing:'cubic-bezier(.45,0,.2,1)',pseudoElement:'::view-transition-new(root)'})).catch(()=>{});return}catch{}}
const o=document.createElement('div');o.className='tw';o.style.background=v?'linear-gradient(#090920,#1a1150)':'#47cef7';document.body.appendChild(o);
const a=o.animate({clipPath:[c0,cp]},{duration:520,easing:'cubic-bezier(.45,0,.2,1)',fill:'forwards'});
a.onfinish=()=>{setDK(v);o.animate({opacity:[1,0]},{duration:260,fill:'forwards'}).onfinish=()=>o.remove()}};
$('#moon')?.addEventListener('click',()=>swDK(!DK));
const U=(()=>{try{let u=T?.initDataUnsafe?.user;
if(!u){/* SDK не загрузился (telegram.org тормозит/блокируется) — достаём юзера прямо из данных запуска */
let srcs=[location.hash.slice(1)];try{const p=JSON.parse(sessionStorage.__telegram__initParams||'{}');if(p.tgWebAppData)srcs.push('tgWebAppData='+encodeURIComponent(p.tgWebAppData))}catch{}
for(const q of srcs){const d=new URLSearchParams(q).get('tgWebAppData'),j=d&&new URLSearchParams(d).get('user');if(j){try{u=JSON.parse(j);break}catch{}}}}
if(u&&u.id){try{localStorage.tgu=JSON.stringify({id:u.id,first_name:u.first_name,last_name:u.last_name,photo_url:u.photo_url})}catch{}}
else{try{const c=JSON.parse(localStorage.tgu||'null');if(c&&c.id)u=c}catch{}}
return u&&u.id?u:undefined}catch{return undefined}})();
const ADMIN_ID='7520296747';
const IS_ADMIN=!!U&&String(U.id)===ADMIN_ID;
// The button is hidden by default in CSS; explicitly reveal it for the owner.
if(IS_ADMIN){const entry=$('#adminEntry');if(entry){entry.style.display='inline-flex';entry.setAttribute('aria-label','Открыть админ-панель');}}
const uid=U?'t'+U.id:(localStorage.uid||=('l'+Math.random().toString(36).slice(2,10)));
const me={name:[U?.first_name,U?.last_name].filter(Boolean).join(' ')||'аноним',photo:/^https:\/\//.test(U?.photo_url||'')?U.photo_url:''};
const PHO=me.photo?{photo:me.photo}:{};
const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
addEventListener('error',e=>{const g=e.target;if(g.tagName!='IMG')return;if(g.classList.contains('ci')&&!g.dataset.f){g.dataset.f=1;g.src=COIN_SVG;return}g.classList.add('bad')},true);addEventListener('load',e=>{e.target.tagName=='IMG'&&e.target.classList.remove('bad')},true);
try{T.BackButton.onClick(()=>FVO?fvx():cs=='pr'?pback():menu())}catch{}

for(const id of['pr','fr'])if(!$('#'+id)){const e=document.createElement('section');e.id=id;e.className='scr';document.body.insertBefore(e,document.querySelector('script[src^="game.js"]'))}
{const r=$('#m .row');if(r&&!r.querySelector('[data-a=prof]')){const b=document.createElement('button');b.className='sec';b.dataset.a='prof';b.textContent='ПРОФИЛЬ';r.insertBefore(b,r.children[1]||null)}}
// --- Firebase ---
let db,FV,sid,sb=0;
try{firebase.initializeApp(FB);db=firebase.firestore();FV=firebase.firestore.FieldValue;
db.collection('scores').doc(uid).get().then(s=>{if(s.exists)sb=s.data().score}).catch(()=>{})}catch{}
let sess=null,scoreFlushPromise=null,scoreRetryTimer=null,scoreRetryDelay=1200;
const scoreNote=(message,isError=false)=>{const e=$('#scoreSyncNote');if(e){e.textContent=message;e.classList.toggle('error',!!isError)}};
const send=()=>{
  if(ok()&&Number.isFinite(a)&&a>0){const pending=Number(localStorage.pend)||0;if(a>pending)localStorage.pend=String(a);scoreNote('Отправляем результат в ТОП…')}
  return flush();
};
async function flush(){
  if(!db)return false;
  if(scoreFlushPromise)return scoreFlushPromise;
  const task=(async()=>{
    let allSaved=true;
    while(true){
      const v=Number(localStorage.pend)||0;
      if(!Number.isFinite(v)||v<=0)break;
      try{
        const ref=db.collection('scores').doc(uid);
        await db.runTransaction(async tx=>{
          const snap=await tx.get(ref),old=snap.exists?(snap.data()||{}):{};
          if(v>(Number(old.score)||0))tx.set(ref,{...old,name:me.name.slice(0,32),...PHO,score:v,sid:sid||old.sid||'',t:FV.serverTimestamp()},{merge:true});else if(U&&snap.exists&&(old.name!==me.name.slice(0,32)||(me.photo&&old.photo!==me.photo)))tx.set(ref,{name:me.name.slice(0,32),...PHO},{merge:true});
        });
        // Clear only the exact value that was saved; a newer score may have arrived meanwhile.
        if((Number(localStorage.pend)||0)<=v)localStorage.removeItem('pend');
        sb=Math.max(sb,v);scoreRetryDelay=1200;
        if(!(Number(localStorage.pend)||0))scoreNote('✓ Результат сохранён в ТОП');
      }catch(err){
        allSaved=false;console.warn('Не удалось сохранить рекорд в Firebase:',err);
        scoreNote('Не удалось сохранить результат. Повторим автоматически при соединении.',true);
        if(!scoreRetryTimer){scoreRetryTimer=setTimeout(()=>{scoreRetryTimer=null;flush()},scoreRetryDelay);scoreRetryDelay=Math.min(30000,scoreRetryDelay*2)}
        break;
      }
    }
    return allSaved;
  })();
  scoreFlushPromise=task.finally(()=>{
    scoreFlushPromise=null;
    // Covers a new score queued at the exact moment the previous flush was finishing.
    if((Number(localStorage.pend)||0)>0&&!scoreRetryTimer)setTimeout(()=>flush(),0);
  });
  return scoreFlushPromise;
}

// --- Картинки с авто-фоллбэком ---
const IMG={};
const ld=(k,l,cb)=>{const im=new Image();let i=0;im.onload=()=>{IMG[k]=im;cb?.()};im.onerror=()=>{if(++i<l.length)im.src=l[i]};im.src=l[0]};
for(const k in IM)ld(k,Array.isArray(IM[k])?IM[k]:[IM[k]]);
$('#i1').src=IM.il[0];
// --- Белая обводка спрайтов (только в тёмной теме): рисуется один раз и хранится в кэше ---
const OLK=new WeakMap(),OLN={il:1,bl:1,hv:1,a1:1,a2:1,a3:1,pp:1};
function olm(m){let o=OLK.get(m);if(o)return o;
  const s=Math.min(1,512/Math.max(m.naturalWidth,m.naturalHeight)),w=Math.round(m.naturalWidth*s),h=Math.round(m.naturalHeight*s),r=Math.max(2,Math.min(w,h)*.035),p=Math.ceil(r)+1,
  c=document.createElement('canvas'),t=document.createElement('canvas');
  c.width=t.width=w+p*2;c.height=t.height=h+p*2;
  const g=c.getContext('2d'),u=t.getContext('2d');
  u.drawImage(m,p,p,w,h);u.globalCompositeOperation='source-in';u.fillStyle='#f4f2ff';u.fillRect(0,0,t.width,t.height);
  for(let i=0;i<16;i++){const a=i/16*6.2832;g.drawImage(t,Math.cos(a)*r,Math.sin(a)*r)}
  g.drawImage(m,p,p,w,h);o={c,p,w,h};OLK.set(m,o);return o}
const dm=(k,m,X,Y,w,h)=>{const o=DK&&OLN[k]&&olm(m);o?x.drawImage(o.c,X-o.p*w/o.w,Y-o.p*h/o.h,o.c.width*w/o.w,o.c.height*h/o.h):x.drawImage(m,X,Y,w,h)};
const di=(k,X,Y,w,h)=>{const m=IMG[k];m?.complete&&m.naturalWidth&&dm(k,m,X,Y,w,h)};
const df=(k,X,Y,w,h,bt)=>{const m=IMG[k];if(!(m?.complete&&m.naturalWidth))return;const f=Math.min(w/m.naturalWidth,h/m.naturalHeight),dw=m.naturalWidth*f,dh=m.naturalHeight*f;dm(k,m,X+(w-dw)/2,Y+(bt?h-dh:(h-dh)/2),dw,dh)};
document.fonts?.load('900 20px Unbounded');

// --- Иконки в стиле игры: плоская заливка, тёмный контур, жёсткая тень ---
const ICP={
s:()=>{x.beginPath();for(let i=0;i<10;i++){const r=i%2?.5:1,q=-Math.PI/2+i*Math.PI/5;x[i?'lineTo':'moveTo'](Math.cos(q)*r,Math.sin(q)*r+.06)}x.closePath()},
h:()=>{x.beginPath();x.moveTo(0,.92);x.bezierCurveTo(-1.3,.1,-1.05,-.92,-.5,-.92);x.bezierCurveTo(-.2,-.92,0,-.72,0,-.5);x.bezierCurveTo(0,-.72,.2,-.92,.5,-.92);x.bezierCurveTo(1.05,-.92,1.3,.1,0,.92);x.closePath()},
d:()=>{x.beginPath();x.moveTo(0,-1);x.lineTo(.88,-.72);x.lineTo(.88,.1);x.bezierCurveTo(.88,.62,.42,.9,0,1.06);x.bezierCurveTo(-.42,.9,-.88,.62,-.88,.1);x.lineTo(-.88,-.72);x.closePath()}};
ICP.c=()=>{x.beginPath();x.arc(0,0,.95,0,7)};
const ICF={s:'#ffe600',h:'#ff2d55',d:'#5b3de0',c:'#ffe600'};
function ic(k,X,Y,r,rot=0,fill){x.save();x.translate(X,Y);x.rotate(rot);x.scale(r,r);x.lineJoin='round';x.lineCap='round';
const on=fill!==false,lw=2.6/r;
x.save();x.translate(.2,.2);ICP[k]();x.fillStyle=on?'#14142b':'rgba(20,20,43,.18)';x.fill();x.restore();
ICP[k]();x.fillStyle=on?ICF[k]:(DK?'#2a2a55':'rgba(255,255,255,.55)');x.fill();
x.lineWidth=lw;x.strokeStyle=on?INK:(DK?'#8a86c8':'#14142b');if(!on)x.setLineDash([.45,.35]);x.stroke();x.setLineDash([]);
if(on){x.strokeStyle='#fff';x.lineWidth=lw*.9;x.beginPath();
if(k=='h'){x.moveTo(-.72,-.2);x.quadraticCurveTo(-.7,-.55,-.4,-.6)}
else if(k=='s'){x.moveTo(-.34,-.28);x.lineTo(-.12,-.52)}
else if(k=='c'){x.moveTo(-.55,-.1);x.quadraticCurveTo(-.5,-.5,-.12,-.6);x.stroke();x.beginPath();x.arc(0,0,.5,0,7);x.strokeStyle='#e0a800'}
else{x.moveTo(-.42,.02);x.lineTo(-.1,.34);x.lineTo(.46,-.34);x.lineWidth=lw*1.3}
x.stroke()}
x.restore()}

// --- Кнопка паузы в фирменном стиле игры ---
function rr(X,Y,w,h,r){
  x.beginPath();
  x.moveTo(X+r,Y);
  x.arcTo(X+w,Y,X+w,Y+h,r);
  x.arcTo(X+w,Y+h,X,Y+h,r);
  x.arcTo(X,Y+h,X,Y,r);
  x.arcTo(X,Y,X+w,Y,r);
  x.closePath();
}
function pbtn(){
  const bx=W-42,by=8,bw=30,bh=30,br=9;
  x.save();
  x.lineJoin='round';x.lineCap='round';
  rr(bx+3,by+3,bw,bh,br);
  x.fillStyle='#14142b';x.fill();
  rr(bx,by,bw,bh,br);
  x.fillStyle=DK?'#ffe600':'#c3ff00';x.fill();
  x.lineWidth=2.6;x.strokeStyle=INK;x.stroke();
  x.strokeStyle='#fff';x.lineWidth=2;
  x.beginPath();x.moveTo(bx+5,by+9);x.quadraticCurveTo(bx+5,by+4.5,bx+10,by+4.5);x.stroke();
  x.fillStyle='#14142b';
  rr(bx+9,by+8.5,4.2,13,2);x.fill();
  rr(bx+16.8,by+8.5,4.2,13,2);x.fill();
  x.restore();
}

// --- Состояние ---
const W=390,GH=64,PW=58,PH=72,HW=76,HH=93,HT=62,cv=$('#cv'),x=cv.getContext('2d');
const KEY=(Math.random()*1e9)|0;
let H,K,gy,st='m',px=W/2,tx=px,a=0,b=KEY,best=+localStorage.best||0,lives,wave,hhp,hmax,bs=[],pk=[],pt=[],pp=[],rg=[],t=0,tk=0,ck=0,pkT=0,cd=0,inv=0,sh=0,fl=0,hj=0,hint=0,shd=0,hx=W/2,d=null,lock=0,bo=null,ps=[],am=0,hl=0,ht=0,tc=0,bw=4,bn=0;
const SKS=1.16,BW=92,BH=139,AM=6,mx=(A,B,u)=>{const f=i=>parseInt(A.slice(i,i+2),16),g=i=>parseInt(B.slice(i,i+2),16);return'rgb('+[1,3,5].map(i=>f(i)+(g(i)-f(i))*u|0)+')'};
const add=n=>{a+=n;b=a^KEY},ok=()=>b===(a^KEY);

// --- Кошелёк: монеты, купленные и надетые скины (localStorage + Firebase, коллекция wallets) ---
const CD={gap:[1.6,3.2],big:.12,v:1,vb:5,spd:[85,115]};
let WL={c:0,v:0,own:[],eq:{},ch:'il',bx:0,pt:0,sk:0,sd:0,pl:0,gm:0,bk:0,fr:'',bg:'',fv:[],wp:[],we:'palm',wv:{}},pld=0,cdr=[],cdT=3,crun=0,wd=0,cs='m',TB='il',SL=null,ob=0;
try{const sv=JSON.parse(localStorage.wl);Object.assign(WL,sv);if(sv.bx==null)WL.bx=(WL.own||[]).length}catch{}
const wal=db?db.collection('wallets').doc(uid):null;
const cshow=()=>{document.querySelectorAll('.cn').forEach(e=>{if(e._c!=null&&e._c!==WL.c){e.classList.remove('bmp');void e.offsetWidth;e.classList.add('bmp')}e._c=WL.c});document.querySelectorAll('.cv').forEach(e=>e.textContent=WL.c);try{const r=WL.c>=bpx()&&bp().some(z=>!ow(z));document.querySelectorAll('#m .row [data-a=shop],.nv [data-a=boxes]').forEach(e=>e.classList.toggle('rdy',r))}catch{}try{dchip()}catch{}};
const wsave=()=>{WL.v++;try{localStorage.wl=JSON.stringify(WL)}catch{}wd=1;cshow()};
const wsync=()=>{if(!wd||!wal)return;wd=0;wal.set({c:WL.c,v:WL.v,own:WL.own,eq:WL.eq,ch:WL.ch,bx:WL.bx,pt:WL.pt,sk:WL.sk|0,sd:WL.sd|0,pl:Math.round(WL.pl)||0,gm:WL.gm|0,bk:WL.bk|0,fr:WL.fr||'',bg:WL.bg||'',fv:(WL.fv||[]).slice(0,3),wp:WL.wp||[],we:WL.we||'palm',wv:WL.wv||{},...PHO,name:me.name.slice(0,32),t:FV.serverTimestamp()},{merge:true}).catch(()=>{wd=1})};
const cadd=n=>{WL.c+=n;crun+=n;wsave()};
wal?.get().then(q=>{const r=q.exists&&q.data();if(r&&r.v>WL.v){WL={c:r.c|0,v:r.v,own:r.own||[],eq:r.eq||{},ch:r.ch||'il',bx:r.bx==null?(r.own||[]).length:r.bx|0,pt:r.pt|0,sk:r.sk|0,sd:r.sd|0,pl:r.pl||0,gm:r.gm|0,bk:r.bk|0,fr:r.fr||'',bg:r.bg||'',fv:Array.isArray(r.fv)?r.fv.slice(0,3):[],wp:r.wp||[],we:r.we||'palm',wv:r.wv||{}};try{localStorage.wl=JSON.stringify(WL)}catch{}cshow();ap();if(cs=='s')rsk();if(cs=='x')rbx()}}).catch(()=>{});
const drc=(X,Y,r,sx=1)=>{const m=IMG.cn;x.save();x.translate(X,Y);x.scale(sx,1);if(m?.complete&&m.naturalWidth){const h=r*2*m.naturalHeight/m.naturalWidth;x.drawImage(m,-r,-h/2,r*2,h)}else ic('c',0,0,r*.8);x.restore()};

const sk_=id=>SK.find(q=>q.id==id),ow=q=>q.d||WL.own.includes(q.id),lk=q=>!ow(q),pic=q=>Array.isArray(q.f)?q.f[0]:q.f;
const eqS=ch=>sk_(WL.eq[ch])||SK.find(q=>q.ch==ch&&(q.d||q.s&&ow(q)));
const cu=c=>SK.some(q=>q.ch==c&&(q.d||q.s||c=='ex')&&ow(q)),bp=()=>SK.filter(q=>!q.d&&(q.s||q.ch=='ex'||cu(q.ch)));
const bpx=()=>100; // Цена ящика фиксированная: всегда 100 монет
const aby=q=>q.u||q.a?`<div class="by">${avt(q)}<span>арт: ${esc(anm(q))}</span></div>`:`<span class="al">${q.d?'стандартный скин':'базовый персонаж'}</span>`;
const abyModal=q=>q.u||q.a?`<div class="by">${avt(q)}<span>арт: ${esc(anm(q))}</span></div>`:'';
const CI=`<img class="ci" src="coin.webp" alt="">`;
const chip=()=>`<div class="cn">${CI}<span class="cv">${WL.c}</span></div>`;
const AU={},anm=q=>AU[q.u]?.name||q.a||'id '+q.u;
const avt=q=>{const ph=AU[q.u]?.photo||q.ai;return `<span class="av">${esc(([...anm(q)][0]||'?').toUpperCase())}${ph?`<img src="${esc(ph)}">`:''}</span>`};
const nav=k=>`<div class="gr"><div class="nv"><button class="sec${k=='s'?' dk':''}" data-a="shop">СКИНЫ</button><button class="sec${k=='x'?' dk':''}" data-a="boxes">ЯЩИК</button><button class="sec${k=='a'?' dk':''}" data-a="arsenal">ОРУЖИЕ</button><button class="sec${k=='f'?' dk':''}" data-a="frames">ПРОФИЛЬ</button></div></div>`;
const BK='<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const hdr=h=>`<div class="hd"><button class="sec bk" data-a="menu">${BK}</button><h2>${h}</h2>${chip()}</div>`;
const img=q=>`<img src="${esc(pic(q))}" alt="">`;

// надеть скины: игрок (активный персонаж) и шарик
function ap(){const q=eqS(WL.ch)||eqS('il'),b=eqS('bl');
if(q){const sn=$('#skinName');if(sn)sn.textContent=q.n;ld('il',q.d?IM.il:[q.f],()=>{const e=$('#i1');if(e)e.src=IMG.il.src})}
if(b)ld('bl',b.d?IM.bl:[b.f])}

// экран «Скины»
const on_=q=>eqS(q.ch)?.id==q.id&&(q.ch=='bl'||WL.ch==q.ch);
const act=q=>ow(q)?(on_(q)?'<button class="play ok static">✓ НАДЕТО</button>':`<button class="play" data-a="eq" data-i="${q.id}">НАДЕТЬ</button>`):'<button class="play yl" data-a="boxes">В ЯЩИК</button>';
function rsk(){const sy=$('#s .gd')?.scrollTop||0,L=SK.filter(q=>q.ch==TB).sort((a,b)=>!!(b.d||b.s)-!!(a.d||a.s)),tot=SK.filter(q=>!q.d),gt=tot.filter(ow).length;
if(!L.some(q=>q.id==SL))SL=(eqS(TB)||L[0])?.id;const q=sk_(SL),u=lk(q);
$('#s').innerHTML=hdr('СКИНЫ')+`<div class="tabs">${CH.map(c=>`<button class="sec${c[0]==TB?' yl':''}" data-a="tab" data-i="${c[0]}">${c[1]}${WL.ch==c[0]?' ★':cu(c[0])?'':' 🔒'}</button>`).join('')}</div>`+(q?`<div class="showcase"><div class="pv${u?' lk':''}${q.ch=='ex'?' ex':''}"><span class="cnt">${gt}/${tot.length}</span><div class="st">${img(q)}${u?'<i class="qm">?</i>':''}</div></div><div class="nm"><div class="ni"><h3 class="sn">${u?'???':esc(q.n)}</h3>${u?`<span class="al">${!q.s&&q.ch!='ex'&&!cu(q.ch)?'сначала выбей персонажа':'выпадает из ящика'}</span>`:aby(q)}</div>${act(q)}</div></div><div class="gd"><div class="gd-in">${L.map(z=>`<button class="gt${z.id==SL?' on':''}${on_(z)?' eq':''}${lk(z)?' lk':''}${z.ch=='ex'?' ex':''}" data-a="sel" data-i="${z.id}">${img(z)}${on_(z)?'<b class="tg e">✓</b>':''}</button>`).join('')}</div></div>`:'')+nav('s');
const g=$('#s .gd');if(g)g.scrollTop=sy;cshow()}

// экран «Ящики»
// --- Ящик: изометрический куб с наклейками. ВСЕ надписи меняются тут (или в Firebase: config/game → поле bxt). Длинный текст сам ужмётся.
const BOXTXT={top:'?',up:['СКИНЫ','ПЕРСЫ','СИСЬКИ'],frag:'ХРУПКО',head:['ВНУТРИ','ЛЕЖИТ:'],pics:['ilusha_lain.webp?v=2','omled_cat_1.webp','skin_sharikblue.webp','nectarin.webp','golubaya.webp','ilusha_bob.webp']};
function boxSvg(mini){const I='#14142b',U=BOXTXT,
 bt=(v,x,y,fs,w,lh,k,ex='')=>[].concat(v??[]).map((s,i)=>{s=String(s);const f=Math.min(fs,w/(Math.max(s.length,1)*k));return `<text x="${x}" y="${y+i*lh}" font-size="${f.toFixed(1)}" ${ex}>${esc(s)}</text>`}).join(''),
 pics=(()=>{const L=[].concat(U.pics??[]).slice(0,12),n=L.length,p=29,im=(s,i)=>`<image href="${esc(s)}" x="${8+i*p}" y="50" width="26" height="40" preserveAspectRatio="xMidYMax meet" filter="url(#bxk)"/>`;if(!n)return'';return `<g clip-path="url(#bxc)"><g${n>3?' class="bxs"':''} style="--bxd:${-n*p}px;--bxt:${n*1.3}s">${(n>3?[...L,...L]:L).map(im).join('')}</g></g>`})(),
 sk=`stroke="${I}" stroke-width="2.6" stroke-linejoin="round"`,ed=`stroke="${I}" stroke-width="3.2" stroke-linejoin="round"`,
 top=`<polygon points="100,20 160.6,55 100,90 39.4,55" fill="#fffdf0" ${ed}/><g transform="matrix(.606 -.35 .606 .35 39.4 55)"><g transform="rotate(-8 50 50)"><rect x="22" y="22" width="56" height="56" rx="11" fill="#c3ff00" ${sk}/>${bt(U.top,50,66,38,44,0,.98,`text-anchor="middle" fill="${I}"`)}</g></g>`,
 left=`<polygon points="39.4,55 100,90 100,160 39.4,125" fill="#fdf1b0" ${ed}/><g transform="matrix(.606 .35 0 .7 39.4 55)"><path d="M15 46V15M7 23l8-8 8 8" fill="none" stroke="${I}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><g transform="rotate(-7 62 21)"><rect x="34" y="10" width="56" height="22" rx="11" fill="#ff2d55" ${sk}/>${mini?'':bt(U.frag,62,25,11,46,0,.98,'text-anchor="middle" fill="#fff"')}</g>${mini?'':bt(U.up,8,62,11,86,13,.98,`fill="${I}"`)}</g>`,
 right=`<polygon points="100,90 160.6,55 160.6,125 100,160" fill="#ece3c4" ${ed}/><g transform="matrix(.606 -.35 0 .7 100 90)">${mini?'':bt(U.head,7,20,12,62,13,1.02,`fill="${I}"`)}<g transform="rotate(-1.5 50 67)"><rect x="6" y="40" width="88" height="54" rx="3" fill="#c3ff00" stroke="${I}" stroke-width="2.4"/>${mini?'':pics}</g><g transform="rotate(7 82 18)"><rect x="70" y="6" width="24" height="24" fill="#ffe600" stroke="${I}" stroke-width="2.2"/><path d="M76 24L88 12M82 12H88V18" fill="none" stroke="${I}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></g></g>`;
 return `<svg viewBox="26 6 148 168" font-family="Unbounded,sans-serif" font-weight="900">${mini?'':'<defs><filter id="bxk" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 .078 0 0 0 0 .078 0 0 0 0 .169 0 0 0 1 0"/></filter><clipPath id="bxc"><rect x="6" y="40" width="88" height="54" rx="3"/></clipPath></defs>'}<polygon points="105,25 165.6,60 165.6,130 105,165 44.4,130 44.4,60" fill="${I}" ${ed}/><polygon points="100,20 160.6,55 100,90 39.4,55" fill="#ffe600" ${ed}/>${left}${right}<g class="lid">${top}</g>${mini?'':'<g fill="#fff" stroke="'+I+'" stroke-width="2" stroke-linejoin="round"><path class="sp1" d="M158 8l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z"/><path class="sp2" d="M30 36l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></g>'}</svg>`}/*BOXEND*/
function rbx(){const sy=$('#x').scrollTop,P=bp(),gt=P.filter(ow).length,PR=bpx(),done=P.every(ow),can=!done&&WL.c>=PR,pr=Math.min(100,WL.c/PR*100);
$('#x').innerHTML=hdr('ЯЩИК')+`<div class="card bx"><div class="bxi" id="bxi">${boxSvg()}</div><h2>ЯЩИК</h2><p>внутри один случайный скин · эксклюзивные выпадают реже</p>${done?'<button class="play ok static">✓ КОЛЛЕКЦИЯ СОБРАНА</button>':`<div class="bxp"><span style="width:${pr}%"></span></div><div class="bxn"><span>${Math.min(WL.c,PR)} / ${PR}</span>${CI}</div>${can?`<button class="play yl" data-a="opn"><span>ОТКРЫТЬ · ${PR}</span>${CI}</button>`:`<button class="play off"><span>ЕЩЁ ${PR-WL.c}</span>${CI}</button>`}`}<small class="bs">${done?'новые скины появятся в ящике позже':['цена всегда 100 монет',DUP?'за дубль вернём '+DUP:'',PITY?'после '+PITY+' дублей подряд — новый':''].filter(Boolean).join(' · ')}</small></div><div class="card"><div class="hh"><h4>ЧТО ВНУТРИ</h4><span>${gt}/${P.length}</span></div><div class="dg">${P.map(q=>`<div class="dt${ow(q)?' got':' lk'}${q.ch=='ex'?' ex':''}">${img(q)}${ow(q)||q.s?`<b class="ok">${ow(q)?'✓':'★'}</b>`:''}</div>`).join('')||'<p>пока пусто</p>'}</div>${CH.some(c=>c[0]!='ex'&&!cu(c[0]))?'<p class="dn">★ — новый персонаж; его скины появятся в ящике, когда он выпадет</p>':''}</div>`+nav('x');$('#x').scrollTop=sy;cshow()}
const mo=h=>{$('#md').innerHTML=h;$('#md').classList.add('on')};
function mc(){$('#md').classList.remove('on')}
function shop(){st='m';rsk();scr('s')}
function boxes(){st='m';rbx();scr('x')}
function tab(i){TB=i;SL=null;hz('selectionChanged');rsk()}
function sel(i){SL=i;hz('selectionChanged');rsk()}
function wear(i){const q=sk_(i);if(!q||!ow(q)||!cu(q.ch))return;WL.eq[q.ch]=q.id;if(q.ch!='bl')WL.ch=q.ch;wsave();wsync();ap();hz('impactOccurred','light');mc();if(cs=='s'){TB=q.ch;SL=q.id;rsk()}}
function pick(P){const w=P.map(q=>q.ch=='ex'?EXW:1);let r=Math.random()*w.reduce((a,b)=>a+b,0);for(let i=0;i<P.length;i++)if((r-=w[i])<0)return P[i];return P[P.length-1]}
function roll(){return pick(bp())}
function opn(){if(ob)return;const pr=bpx(),fresh=bp().filter(z=>!ow(z));if(WL.c<pr||!fresh.length)return;const q=PITY&&WL.pt>=PITY?pick(fresh):roll();if(!q)return;mc();ob=1;WL.c-=pr;WL.bx++;const dp=ow(q);if(dp){WL.c+=DUP;WL.pt++}else{WL.own.push(q.id);WL.pt=0}wsave();wsync();hz('impactOccurred','heavy');$('#bxi')?.classList.add('shk');
setTimeout(()=>{ob=0;if(cs=='x')rbx();hz('notificationOccurred','success');if(q.ch=='ex')setTimeout(()=>hz('impactOccurred','heavy'),200);lock=performance.now()+250;
mo(`<div class="card${q.ch=='ex'?' exc':''}"><h2>${dp?'ДУБЛЬ!':q.s?'НОВЫЙ ПЕРС!':'ВЫПАЛО!'}</h2>${q.ch=='ex'?'<div class="exb">ЭКСКЛЮЗИВ</div>':''}<div class="dp">${img(q)}</div><h3>${esc(q.n)}</h3>${abyModal(q)}${dp?`<p class="dup-msg">уже было — вернули ${DUP} монет</p>`:`<button class="play" data-a="eq" data-i="${q.id}">НАДЕТЬ</button>`}<div class="row">${bp().some(z=>!ow(z))?WL.c>=bpx()?`<button class="sec yl" data-a="opn">ЕЩЁ · ${bpx()}</button>`:'<button class="sec off">МОНЕТ НЕТ</button>':'<button class="sec off">ВСЁ СОБРАНО</button>'}<button class="sec" data-a="mc">ЗАКРЫТЬ</button></div></div>`)},900)}
// --- Ежедневный бонус и серия «Огонёк» ---
// 7-дневный цикл; на 7-й день награда = цена ящика. Пропустил ровно один день при серии 3+ — огонёк можно спасти за SAVE монет.
const DR=[10,15,20,30,40,60,100,15,20,25,35,45,70,150],SAVE=50,TN=['','искра','огонёк','костёр','пожар'];
const tier=k=>k>=14?4:k>=7?3:k>=3?2:1;
const pl=n=>n%10==1&&n%100!=11?'день':n%10>1&&n%10<5&&(n%100<12||n%100>14)?'дня':'дней';
const dn=()=>{const d=new Date();return Math.floor((d-d.getTimezoneOffset()*6e4)/864e5)};
function dst(){const g=dn()-(WL.sd|0),sk=WL.sk|0;
 if(WL.sd&&g<=0)return{s:'done',k:sk,n:sk+1};
 if(WL.sd&&g==1)return{s:'rdy',k:sk,n:sk+1};
 if(WL.sd&&g==2&&sk>=3)return{s:'cold',k:sk,n:sk+1};
 return{s:'rdy',k:0,n:1,lost:sk>0}}
const flame=(k,dim,sad)=>`<svg class="fx ${dim?'dim':'t'+tier(k)}" viewBox="0 0 64 80" aria-hidden="true"><path class="fo" d="M32 6C35 18 58 28 58 51C58 68 47 76 32 76C17 76 6 68 6 51C6 40 14 33 19 28C19 36 25 40 28 40C25 28 28 15 32 6Z"/><path class="fi" d="M32 38C41 46 48 53 48 60C48 68 41 72 32 72C23 72 16 68 16 60C16 53 23 46 32 38Z"/>${dim?(sad?'<path class="fe" d="M22 57h6M36 57h6M28 66q4-3.5 8 0"/>':'<path class="fe" d="M22 56.5q3 3.2 6 0M36 56.5q3 3.2 6 0M29.5 64.5h5"/>'):'<ellipse class="fk" cx="24.5" cy="57" rx="2.6" ry="3.4"/><ellipse class="fk" cx="39.5" cy="57" rx="2.6" ry="3.4"/><path class="fe" d="M27.5 63.5q4.5 4 9 0"/>'}</svg>`;
function dchip(){const e=$('#fl');if(!e)return;const q=dst(),k=q.s=='done'?WL.sk:q.k,dim=!k||q.s=='cold';
 e.className='fl'+(q.s!='done'?' rdy':'')+(dim?' cold':'');e.innerHTML=flame(k,dim,q.s=='cold')+`<span>${k}</span>`}
function dmodal(fresh){const q=dst(),done=q.s=='done',cold=q.s=='cold',k=done?WL.sk:q.k,dim=!k||cold,ix=(q.n-1)%14,gi=done?(WL.sk-1)%14:-1,
 m=k<3?3:k<7?7:k<14?14:0,
 goal=m?`до «${TN[tier(m)]}» ещё ${m-k} ${pl(m-k)}`:'ты уже пожар — не дай ему погаснуть',
 note=done?`${fresh?`+${DR[gi]}, всего ${WL.c} · `:''}завтра +${DR[ix]}`:cold?`вчера ты пропустил. спасёшь — серия в ${k} ${pl(k)} останется`:k?'пропустишь день — огонёк погаснет':'на 7-й день — целый ящик',
 head=k?`<div class="dn1">${k}</div><span>${pl(k)} подряд</span>`:`<div class="dhd">${q.lost?'Начни<br>заново':'Разожги<br>огонёк'}</div>`,
 tl=DR.map((r,i)=>{const g=done?i<=gi:i<ix,w=!done&&i==ix;return `<div class="dd${g?' got':''}${w?' now':''}${i%7==6?' big':''}${fresh&&i==gi?' fresh':''}">${i%7==6?`<span class="bxm">${boxSvg(1)}</span>`:''}<div><small>ДЕНЬ ${i+1}</small><b>+${r}${CI}</b>${i%7==6?'<span>'+(i>6?'суперприз':'целый ящик')+'</span>':''}</div>${g?'<u>✓</u>':''}</div>`}).join(''),
 cta=q.s=='rdy'?`<button class="play" data-a="dclaim"><span>ЗАБРАТЬ +${DR[ix]}</span>${CI}</button>`:done?'<button class="play" data-a="modes">ИГРАТЬ</button>':(WL.c>=SAVE?`<button class="play" data-a="dsave"><span>СПАСТИ ОГОНЁК · ${SAVE}</span>${CI}</button>`:`<button class="play off"><span>НУЖНО ${SAVE}</span>${CI}</button>`)+'<button class="sec" data-a="drest" style="width:100%;margin-top:.7rem">НАЧАТЬ С 1 ДНЯ</button>';
 hz('selectionChanged');if(fresh)lock=performance.now()+250;
 mo(`<div class="card dly"><div class="dtop"><h2>${cold?'ОГОНЁК ГАСНЕТ':'БОНУС ДНЯ'}</h2><button class="dx" data-a="mc" aria-label="Закрыть">✕</button></div><div class="dh${cold?' cd':''}"><div class="dfl${fresh?' pop':''}">${flame(k,dim,cold)}</div><div class="dtx">${head}<div class="dpb"><div style="width:${m?Math.round(k/m*100):100}%"></div></div><span class="dpl">${goal}</span></div>${k?`<em>${cold?'тлеет':TN[tier(k)]}</em>`:''}</div><div class="dgrid">${tl}</div>${cta}<p class="dn">${note}</p></div>`)}
function dgive(k,cost){const n=k+1;WL.c+=DR[(n-1)%14]-cost;WL.sk=n;WL.sd=dn();wsave();wsync();hz('notificationOccurred','success');dmodal(1)}
function dclaim(){const q=dst();q.s=='rdy'&&dgive(q.k,0)}
function dsave(){const q=dst();q.s=='cold'&&WL.c>=SAVE&&dgive(q.k,SAVE)}
function drest(){dst().s=='cold'&&dgive(0,0)}

ap();cshow();

// каталог скинов и настройки из админки (Firebase config), + ник и ава автора по Telegram id
(async()=>{if(!db)return;try{
const[s,g]=await Promise.all([db.collection('config').doc('skins').get(),db.collection('config').doc('game').get()]);
const gd=g.exists&&g.data();
if(gd){if(gd.cd)Object.assign(CD,gd.cd);if(gd.bxt)Object.assign(BOXTXT,gd.bxt);if(gd.dup>=0)DUP=gd.dup;if(gd.pity>=0)PITY=gd.pity|0; /* box/ramp intentionally ignored: chest is always 100 */}
const l=s.exists&&s.data().list;
if(Array.isArray(l))for(const q of l){if(!q||!q.id)continue;if(q.del){SK=SK.filter(x=>x.id!=q.id);continue}const z=sk_(q.id);if(z){if(q.n)z.n=q.n;if(q.f)z.f=q.f;if(q.ch)z.ch=q.ch;if(q.u!=null)z.u=String(q.u)}else if(q.ch&&q.f&&q.n&&CH.some(c=>c[0]==q.ch))SK.push(mk(q.id,q.ch,q.n,q.f,String(q.u||''),q.s?{s:1}:{c:1}))}
await Promise.all([...new Set(SK.map(q=>q.u).filter(Boolean))].map(async u=>{for(const c of['scores','wallets']){try{const d=await db.collection(c).doc('t'+u).get(),v=d.exists&&d.data();if(v&&v.name){AU[u]={name:v.name,photo:/^https:\/\//.test(v.photo||'')?v.photo:''};return}}catch{}}}));
ap();if(cs=='s')rsk();if(cs=='x')rbx();
}catch{}})();

// --- Расширенная админ-панель владельца ---
let ADM_LAST=null;
const admTarget=()=>String($('#admUid')?.value||'').trim();
const admValid=id=>/^\d{5,15}$/.test(id);
function admSay(message,type=''){
 const e=$('#admStatus');if(e){e.textContent=message;e.className='adm-result '+type;}
}
function admPlayerCard(){
 const w=ADM_LAST?.wallet||{},s=ADM_LAST?.score||{},own=Array.isArray(w.own)?w.own:[];
 const id=ADM_LAST?.id||admTarget();
 const nm=w.name||s.name||'Имя не сохранено';
 const eq=w.eq&&typeof w.eq==='object'?w.eq:{};
 const eqNames=Object.entries(eq).map(([ch,sid])=>{const q=sk_(sid);return q?`${q.n}`:sid}).join(' / ')||'по умолчанию';
 const box= w.bx==null?own.length:(Number(w.bx)||0);
 $('#admPlayerMeta').innerHTML=`<b>${esc(nm)}</b><div class="adm-statgrid"><div class="adm-stat"><span>МОНЕТЫ</span><b>${Number(w.c)||0}</b></div><div class="adm-stat"><span>РЕКОРД</span><b>${Number(s.score)||0}</b></div><div class="adm-stat"><span>СКИНОВ</span><b>${own.length}</b></div><div class="adm-stat"><span>ОТКРЫТО ЯЩИКОВ</span><b>${box}</b></div></div><p class="adm-help" style="margin-top:.55rem">ID: ${esc(id)} · Надетое: ${esc(eqNames)}</p>`;
}
async function adminLoadPlayer(){
 if(!IS_ADMIN||!db){admSay('Нет доступа или Firebase не подключён.','err');return}
 const id=admTarget();if(!admValid(id)){admSay('Введи числовой Telegram ID (5–15 цифр).','err');return}
 admSay('Загружаю профиль…');
 try{
  const [w,s]=await Promise.all([db.collection('wallets').doc('t'+id).get(),db.collection('scores').doc('t'+id).get()]);
  ADM_LAST={id,wallet:w.exists?(w.data()||{}):{},score:s.exists?(s.data()||{}):{}};
  admPlayerCard();admSay(w.exists||s.exists?'Профиль загружен.':'Документов пока нет — можно создать профиль действиями ниже.','ok');
 }catch(err){console.error('admin load failed',err);admSay('Не удалось прочитать профиль. Проверь права чтения Firestore.','err')}
}
async function adminRecent(){
 const box=$('#admRecent');if(!box||!IS_ADMIN||!db)return;
 box.innerHTML='<p class="adm-help">Загружаю список…</p>';
 try{
  const snap=await db.collection('wallets').orderBy('t','desc').limit(20).get();
  if(!snap.size){box.innerHTML='<p class="adm-help">Пока нет сохранённых кошельков.</p>';return}
  box.innerHTML=snap.docs.map(d=>{const v=d.data()||{},id=d.id.replace(/^t/, '');return `<button class="adm-player" data-a="admPick" data-i="${esc(id)}"><b>${esc(v.name||'Игрок без имени')}</b><span>${Number(v.c)||0} монет · ${esc(id)}</span></button>`}).join('');
 }catch(err){console.warn('recent players unavailable',err);box.innerHTML='<p class="adm-help">Список недоступен по правилам Firebase. Игрока всё равно можно найти по ID.</p>'}
}
function adminPanel(){
 if(!IS_ADMIN)return;
 const opts=SK.filter(q=>!q.d).map(q=>`<option value="${esc(q.id)}">${esc(q.n)} · ${esc(q.id)}</option>`).join('');
 $('#ad').innerHTML=hdr('АДМИН-ПАНЕЛЬ')+
 `<div class="card adm-card">
   <div class="adm-section">ИГРОК</div><p class="adm-note">Введи Telegram ID или выбери игрока из последних сохранённых. По умолчанию указан твой аккаунт.</p>
   <label class="adm-label" for="admUid">TELEGRAM ID</label><input class="adm-input" id="admUid" type="text" inputmode="numeric" autocomplete="off" value="${ADMIN_ID}" placeholder="7520296747">
   <button class="play adm-action" data-a="admLoad">НАЙТИ ИГРОКА</button>
   <div id="admPlayerMeta" class="adm-result">Нажми «Найти игрока», чтобы загрузить данные.</div>
   <div class="adm-divider"></div><div class="adm-section">ПОСЛЕДНИЕ ИГРОКИ</div><div id="admRecent" class="adm-playerlist"><p class="adm-help">Загружаю…</p></div>
 </div>
 <div class="card adm-card">
   <div class="adm-section">УПРАВЛЕНИЕ МОНЕТАМИ</div><p class="adm-note">Изменение баланса выбранного игрока. Все значения сохраняются в Firebase.</p>
   <label class="adm-label" for="admAmount">КОЛИЧЕСТВО МОНЕТ</label><input class="adm-input" id="admAmount" type="number" inputmode="numeric" min="0" step="1" value="1000">
   <div class="adm-grid"><button class="sec yl" data-a="admAdd">＋ ВЫДАТЬ</button><button class="sec danger" data-a="admSub">− СНЯТЬ</button><button class="sec purple" data-a="admSet">УСТАНОВИТЬ БАЛАНС</button><button class="sec" data-a="admLoad">ОБНОВИТЬ ДАННЫЕ</button></div>
 </div>
 <div class="card adm-card">
   <div class="adm-section">УПРАВЛЕНИЕ СКИНАМИ</div><p class="adm-note">Можно выдать, забрать или сразу надеть любой скин из каталога.</p>
   <label class="adm-label" for="admSkin">СКИН</label><select class="adm-select" id="admSkin">${opts}</select>
   <div class="adm-grid"><button class="sec yl" data-a="admGrant">ВЫДАТЬ СКИН</button><button class="sec danger" data-a="admRemove">ЗАБРАТЬ СКИН</button></div>
   <button class="play adm-action" data-a="admEquip">НАДЕТЬ ИГРОКУ</button>
 </div>
 <div class="card adm-card">
   <div class="adm-section">РЕКОРД И ПРОГРЕСС</div><p class="adm-note">Меняй рекорд в таблице ТОП или сбрасывай его.</p>
   <label class="adm-label" for="admScore">НОВЫЙ РЕКОРД</label><input class="adm-input" id="admScore" type="number" inputmode="numeric" min="0" step="1" value="0">
   <div class="adm-grid"><button class="sec purple" data-a="admScoreSet">УСТАНОВИТЬ РЕКОРД</button><button class="sec danger" data-a="admScoreClear">СБРОСИТЬ РЕКОРД</button></div>
   <div class="adm-divider"></div><div class="adm-section">СБРОС КОШЕЛЬКА</div><p class="adm-help">Обнулит монеты и удалит все полученные скины игрока, сбросит счётчик ящиков. Это действие нельзя отменить.</p>
   <button class="play adm-action" style="background:#ff2d55;color:#fff;box-shadow:0 .25rem 0 #14142b" data-a="admWalletReset">СБРОСИТЬ КОШЕЛЁК</button>
 </div>
 <div class="card adm-card">
   <div class="adm-section">☁️ ОБЛАЧНЫЙ КОНСТРУКТОР СКИНОВ (БЕЗ GITHUB)</div>
   <p class="adm-note">Добавляй новые скины прямо из игры! Просто выбери картинку с телефона (она сама сожмётся в лёгкий WebP) или вставь прямую ссылку. Скин сохранится в Firebase и сразу появится у всех игроков в магазине и ящике.</p>
   <label class="adm-label" for="admNewFile">1. КАРТИНКА С ТЕЛЕФОНА (PNG / WEBP)</label>
   <input class="adm-input" id="admNewFile" type="file" accept="image/*" style="padding:.45rem">
   <div id="admNewPrevWrap" style="display:none;margin-top:.55rem;text-align:center;background:var(--s);border:.16rem solid var(--ln);border-radius:.9rem;padding:.5rem"><img id="admNewPrev" style="max-height:5.5rem;object-fit:contain;filter:drop-shadow(.15rem .15rem 0 var(--sh))"><small id="admNewSize" style="display:block;color:var(--tx);margin-top:.25rem;font-size:.72rem"></small></div>
   <label class="adm-label" for="admNewUrl">ИЛИ ССЫЛКА НА КАРТИНКУ / ФАЙЛ</label>
   <input class="adm-input" id="admNewUrl" type="text" placeholder="или оставь пустым, если выбрал файл выше">
   <div class="adm-grid" style="margin-top:.3rem">
     <div><label class="adm-label" for="admNewCh">КАТЕГОРИЯ</label><select class="adm-select" id="admNewCh"><option value="il">ІЛЮША</option><option value="ct">КОТИК</option><option value="nc">НЕКТАРИН</option><option value="gb">ГОЛУБАЯ</option><option value="bl">ШАРИК</option><option value="ex">ЭКСКЛЮЗИВ</option></select></div>
     <div><label class="adm-label" for="admNewId">ID СКИНА (латиница)</label><input class="adm-input" id="admNewId" type="text" placeholder="напр. il_cool"></div>
   </div>
   <label class="adm-label" for="admNewName">НАЗВАНИЕ СКИНА</label>
   <input class="adm-input" id="admNewName" type="text" placeholder="Напр. Ілюша Киберпанк">
   <label class="adm-label" for="admNewAuthor">TELEGRAM ID АВТОРА АРТА (необязательно)</label>
   <input class="adm-input" id="admNewAuthor" type="text" inputmode="numeric" placeholder="Напр. 8432539534 (подтянет ник и аву)">
   <button class="play yl adm-action" data-a="admSkinCreate">＋ ОПУБЛИКОВАТЬ СКИН В ИГРУ</button>
   <div class="adm-divider"></div>
   <div class="adm-section">УДАЛЕНИЕ / СПИСОК ОБЛАЧНЫХ СКИНОВ</div>
   <div id="admCloudSkins" class="adm-playerlist"><p class="adm-help">Загружаю…</p></div>
 </div>
 <div class="card adm-card"><div class="adm-section">СТАТУС</div><p class="adm-note">Цена ящика закреплена на уровне <b>100 монет</b> и не меняется от количества открытий или настроек Firebase.</p><div class="adm-result" id="admStatus">Готово к работе.</div></div>`;
 scr('ad');adminLoadPlayer();adminRecent();adminInitSkinMaker();
}
async function adminWalletUpdate(changeFn,success){
 if(!IS_ADMIN||!db){admSay('Нет доступа или Firebase не подключён.','err');return false}
 const target=admTarget();if(!admValid(target)){admSay('Введи корректный Telegram ID.','err');return false}
 admSay('Сохраняю изменения…');
 try{
  const ref=db.collection('wallets').doc('t'+target);let updated=null;
  await db.runTransaction(async tx=>{
   const snap=await tx.get(ref),old=snap.exists?(snap.data()||{}):{};
   const base={...old,c:Math.max(0,Number(old.c)||0),v:Math.max(0,Number(old.v)||0),own:Array.isArray(old.own)?old.own.slice():[],eq:old.eq&&typeof old.eq==='object'?{...old.eq}:{},ch:old.ch||'il',bx:Math.max(0,Number(old.bx)||0),pt:Math.max(0,Number(old.pt)||0)};
   if(target===ADMIN_ID){base.c=Math.max(base.c,Number(WL.c)||0);base.v=Math.max(base.v,Number(WL.v)||0);base.own=[...new Set([...base.own,...(Array.isArray(WL.own)?WL.own:[])])];base.eq={...(WL.eq||{}),...base.eq};base.ch=base.ch||WL.ch||'il';base.bx=Math.max(base.bx,Number(WL.bx)||0);base.pt=Math.max(base.pt,Number(WL.pt)||0);base.fv=(WL.fv||[]).slice(0,3)}
   const patch=changeFn(base)||{};
   updated={...base,...patch,v:Math.max(base.v,target===ADMIN_ID?(Number(WL.v)||0):0)+1,t:FV.serverTimestamp()};
   tx.set(ref,updated,{merge:true});
  });
  if(target===ADMIN_ID){WL={...WL,c:updated.c,v:updated.v,own:updated.own,eq:updated.eq,ch:updated.ch,bx:updated.bx,pt:updated.pt,fv:Array.isArray(updated.fv)?updated.fv:[]};wd=0;try{localStorage.wl=JSON.stringify(WL)}catch{}cshow();ap();if(cs==='s')rsk();if(cs==='x')rbx()}
  await adminLoadPlayer();admSay(success||'Изменения сохранены.','ok');return true;
 }catch(err){console.error('admin wallet update failed',err);admSay('Firebase отклонил изменение. Возможна ошибка Firestore Rules или сети. '+(err?.code||''),'err');return false}
}
async function adminCoins(mode){
 const raw=Number($('#admAmount')?.value),amount=Math.floor(raw);
 if(!Number.isFinite(raw)||raw<0||!Number.isSafeInteger(amount)){admSay('Введи целое неотрицательное число монет.','err');return}
 await adminWalletUpdate(p=>{let c=p.c;if(mode==='add')c+=amount;else if(mode==='sub')c=Math.max(0,c-amount);else c=amount;if(!Number.isSafeInteger(c))throw new Error('balance overflow');return {c}},mode==='add'?`Выдано ${amount} монет.`:mode==='sub'?`Снято ${amount} монет (ниже нуля баланс не опускается).`:`Баланс установлен: ${amount} монет.`);
}
async function adminGrant(){
 const id=$('#admSkin')?.value,q=sk_(id);if(!q||q.d){admSay('Выбери скин из списка.','err');return}
 await adminWalletUpdate(p=>{if(p.own.includes(id))throw new Error('already-owned');return {own:[...p.own,id]}},`Скин «${q.n}» выдан игроку ${admTarget()}.`);
}
async function adminRemove(){
 const id=$('#admSkin')?.value,q=sk_(id);if(!q||q.d){admSay('Выбери скин из списка.','err');return}
 await adminWalletUpdate(p=>{if(!p.own.includes(id))throw new Error('not-owned');const eq={...p.eq};if(eq[q.ch]===id)delete eq[q.ch];return {own:p.own.filter(x=>x!==id),eq}},`Скин «${q.n}» забран у игрока ${admTarget()}.`);
}
async function adminEquip(){
 const id=$('#admSkin')?.value,q=sk_(id);if(!q){admSay('Выбери скин.','err');return}
 await adminWalletUpdate(p=>{if(!q.d&&!p.own.includes(id))throw new Error('not-owned');const eq={...p.eq,[q.ch]:id};return {eq,ch:q.ch==='bl'?p.ch:q.ch}},`Скин «${q.n}» надет игроку ${admTarget()}.`);
}
async function adminScore(clear=false){
 if(!IS_ADMIN||!db){admSay('Нет доступа или Firebase не подключён.','err');return}
 const target=admTarget();if(!admValid(target)){admSay('Введи корректный Telegram ID.','err');return}
 try{
  const ref=db.collection('scores').doc('t'+target);
  if(clear){await ref.delete();admSay(`Рекорд игрока ${target} удалён из ТОП.`,'ok')}
  else{const n=Math.floor(Number($('#admScore')?.value));if(!Number.isSafeInteger(n)||n<0){admSay('Введи целый неотрицательный рекорд.','err');return}await db.runTransaction(async tx=>{const s=await tx.get(ref),old=s.exists?(s.data()||{}):{};tx.set(ref,{...old,score:n,t:FV.serverTimestamp()},{merge:true})});admSay(`Рекорд игрока ${target} установлен: ${n}.`,'ok')}
  await adminLoadPlayer();
 }catch(err){console.error('admin score update failed',err);admSay('Не удалось изменить рекорд: проверь права записи в scores. '+(err?.code||''),'err')}
}
async function adminWalletReset(){
 if(!confirm('Точно сбросить баланс, все скины и прогресс ящиков этого игрока?'))return;
 await adminWalletUpdate(()=>({c:0,own:[],eq:{},ch:'il',bx:0,pt:0,fv:[]}),'Кошелёк игрока сброшен.');
}
function adminPick(id){if(!admValid(String(id||'')))return;const input=$('#admUid');if(input)input.value=String(id);adminLoadPlayer()}
let ADM_IMG_DATA='';
function adminInitSkinMaker(){
 ADM_IMG_DATA='';
 const fi=$('#admNewFile');
 if(fi)fi.onchange=e=>{
  const file=e.target.files?.[0];if(!file)return;
  const rd=new FileReader();
  rd.onload=ev=>{
   const im=new Image();
   im.onload=()=>{
    const mx=256,sc=Math.min(1,mx/Math.max(im.width,im.height)),w=Math.max(1,Math.round(im.width*sc)),h=Math.max(1,Math.round(im.height*sc));
    const c=document.createElement('canvas');c.width=w;c.height=h;
    c.getContext('2d').drawImage(im,0,0,w,h);
    let url=c.toDataURL('image/webp',0.86);
    if(url.length>120000)url=c.toDataURL('image/webp',0.72);
    ADM_IMG_DATA=url;
    const pw=$('#admNewPrevWrap'),pr=$('#admNewPrev'),sz=$('#admNewSize');
    if(pw&&pr){pw.style.display='block';pr.src=url;if(sz)sz.textContent=`Сжато до ${w}×${h}px (${Math.round(url.length/1024)} КБ) — готово к выгрузке`}
    const idIn=$('#admNewId');
    if(idIn&&!idIn.value.trim()){idIn.value=file.name.replace(/\.[^.]+$/,'').toLowerCase().replace(/[^a-z0-9_]/g,'').slice(0,18)||('sk_'+Date.now().toString(36).slice(-4))}
   };
   im.src=ev.target.result;
  };
  rd.readAsDataURL(file);
 };
 adminRenderCloudSkins();
}
async function adminRenderCloudSkins(){
 const box=$('#admCloudSkins');if(!box||!db)return;
 try{
  const snap=await db.collection('config').doc('skins').get();
  const list=(snap.exists&&Array.isArray(snap.data()?.list))?snap.data().list.filter(x=>x&&!x.del):[];
  if(!list.length){box.innerHTML='<p class="adm-help">Облачных скинов пока нет. Создай первый выше!</p>';return}
  box.innerHTML=list.map(q=>`<div class="adm-player"><img src="${esc(q.f)}" style="width:2rem;height:2rem;object-fit:contain;flex:none"><b>${esc(q.n)} <small style="display:inline;color:var(--d)">(${esc(q.id)} · ${esc(q.ch)})</small></b><button class="sec danger" style="flex:none;padding:.35rem .6rem;font-size:.68rem;border-radius:.6rem" data-a="admSkinDel" data-i="${esc(q.id)}">УДАЛИТЬ</button></div>`).join('');
 }catch(e){box.innerHTML='<p class="adm-help">Не удалось загрузить список облачных скинов.</p>'}
}
async function adminSkinCreate(){
 if(!IS_ADMIN||!db){admSay('Нет доступа или Firebase не подключён.','err');return}
 const ch=$('#admNewCh')?.value||'il';
 let id=($('#admNewId')?.value||'').trim().toLowerCase().replace(/[^a-z0-9_-]/g,'');
 const n=($('#admNewName')?.value||'').trim();
 const u=($('#admNewAuthor')?.value||'').trim();
 const urlIn=($('#admNewUrl')?.value||'').trim();
 const f=ADM_IMG_DATA||urlIn;
 if(!id)id='sk_'+Date.now().toString(36).slice(-5);
 if(!n){admSay('Введи название скина!','err');return}
 if(!f){admSay('Выбери картинку с телефона или укажи ссылку!','err');return}
 admSay('Публикую скин в Firebase…');
 try{
  const ref=db.collection('config').doc('skins');
  await db.runTransaction(async tx=>{
   const s=await tx.get(ref),old=(s.exists&&Array.isArray(s.data()?.list))?s.data().list.slice():[];
   const idx=old.findIndex(x=>x&&x.id===id);
   const item={id,ch,n,f,u};
   if(idx>=0)old[idx]=item;else old.push(item);
   tx.set(ref,{list:old,t:FV.serverTimestamp()},{merge:true});
  });
  const ex=sk_(id);
  if(ex){ex.n=n;ex.ch=ch;ex.f=f;ex.u=u}else SK.push(mk(id,ch,n,f,u,{c:1}));
  if(u&&!AU[u]){for(const c of['scores','wallets']){try{const d=await db.collection(c).doc('t'+u).get(),v=d.exists&&d.data();if(v&&v.name){AU[u]={name:v.name,photo:/^https:\/\//.test(v.photo||'')?v.photo:''};break}}catch{}}}
  const selEl=$('#admSkin');if(selEl&&!ex){const op=document.createElement('option');op.value=id;op.textContent=`${n} · ${id}`;selEl.appendChild(op)}
  ADM_IMG_DATA='';if($('#admNewFile'))$('#admNewFile').value='';if($('#admNewUrl'))$('#admNewUrl').value='';if($('#admNewName'))$('#admNewName').value='';if($('#admNewId'))$('#admNewId').value='';if($('#admNewPrevWrap'))$('#admNewPrevWrap').style.display='none';
  adminRenderCloudSkins();
  admSay(`Скин «${n}» (${id}) опубликован в игру без GitHub!`,'ok');
 }catch(err){console.error(err);admSay('Ошибка публикации в config/skins. Проверь права записи в Firestore Rules для config/skins. '+(err?.code||''),'err')}
}
async function adminSkinDelete(id){
 if(!IS_ADMIN||!db||!id)return;
 if(!confirm(`Удалить облачный скин «${id}» из каталога?`))return;
 try{
  const ref=db.collection('config').doc('skins');
  await db.runTransaction(async tx=>{
   const s=await tx.get(ref),old=(s.exists&&Array.isArray(s.data()?.list))?s.data().list.slice():[];
   const next=old.filter(x=>x&&x.id!==id);
   tx.set(ref,{list:next,t:FV.serverTimestamp()},{merge:true});
  });
  SK=SK.filter(x=>x.id!==id||!x.c);
  adminRenderCloudSkins();
  admSay(`Скин ${id} удалён из облака.`,'ok');
 }catch(err){admSay('Не удалось удалить скин: '+(err?.code||''),'err')}
}

const rs=()=>{const r=Math.min(devicePixelRatio||1,2.5);cv.width=innerWidth*r;cv.height=innerHeight*r;K=cv.width/W;H=cv.height/K;gy=H-GH};
addEventListener('resize',rs);rs();

// --- Экраны ---
const scr=i=>{if(pld){pld=0;wsave()}wsync();cshow();cs=i;mc();try{['t','s','x','pr','fr','ar'].includes(i)?T.BackButton.show():T.BackButton.hide();i=='g'?T.enableClosingConfirmation():T.disableClosingConfirmation()}catch{}['m','t','o','p','s','x','ad','pr','fr','ar'].forEach(n=>$('#'+n)?.classList.toggle('on',n==i));cv.style.display=i=='g'||i=='o'||i=='p'?'block':'none'};
const pq=()=>{let i;do i=Math.random()*Q.length|0;while(Q.length>1&&i==+localStorage.lq);localStorage.lq=i;return Q[i]};
const menu=()=>{D=null;if(a>best&&ok()){best=a;localStorage.best=a;send()}flush();dflush();st='m';bo=null;ht=hl=0;hc(BG);const q=pq();$('#qt').textContent='«'+q[0]+'»';$('#qn').textContent=q[1];scr('m');gclaim()};

function pause(){
  if(st!='p')return;
  st='pa';d=null;lock=performance.now()+220;
  hz('impactOccurred','light');
  const sc=D?D.ds:a,rec=D?Math.max(dbest,D.ds):Math.max(best,a),info=D?(D.bo?'БОСС АРТЁМ · ':'')+D.mx+' м':bo?'БОСС АРТЁМ · ФАЗА '+bo.ph:'ВОЛНА '+wave;
  $('#p').innerHTML=`<div class="card p-card"><div class="pt">ПАУЗА</div><div class="pn">${sc}</div><p class="pi">${info} · рекорд ${rec}</p><button class="play yl" data-a="res">ПРОДОЛЖИТЬ</button><div class="row"><button class="sec dk" data-a="${D?'dj':'go'}">НАЧАТЬ СНОВА</button><button class="sec" data-a="menu">МЕНЮ</button></div></div>`;
  scr('p');
}

function resume(){
  if(st!='pa')return;
  st='p';d=null;l=performance.now();
  hz('impactOccurred','light');
  scr('g');
}

let TK='c';
async function showTop(k){if(k=='c'||k=='d')TK=k;st='m';scr('t');const dj=TK=='d',L=$('#L');$('#tc').classList.toggle('yl',!dj);$('#td').classList.toggle('yl',dj);
if(!db){L.textContent='Firebase не подключён';return}
L.textContent='загрузка…';
await(dj?dflush():flush());
try{const s=await db.collection(dj?'scores_dj':'scores').orderBy('score','desc').limit(50).get();let i=0;
const rows=s.docs.map(q=>{const v=q.data()||{};i++;
return `<div class="r${q.id==uid?' me':''}" data-a="prof" data-i="${esc(q.id)}" style="animation-delay:${Math.min(i,12)*35}ms"><b>${i}</b><span class="av">${esc(([...(v.name||'?')][0]||'?').toUpperCase())}${/^https:\/\//.test(v.photo||'')?`<img src="${esc(v.photo)}">`:''}</span><span>${esc(v.name||'Игрок')}</span><em>${Number(v.score)||0}</em></div>`}).join('');
const pending=Number(localStorage[dj?'pendd':'pend'])||0;
L.innerHTML=(pending?'<p class="score-sync-note error">Твой результат ещё отправляется — попробуй обновить ТОП через несколько секунд.</p>':'')+(rows||'пока пусто')}
catch(err){console.warn('top load failed',err);L.textContent='не удалось загрузить'}}


function go(){WL.gm=(WL.gm|0)+1;D=null;if(a>best&&ok()){best=a;localStorage.best=a;send()}a=0;b=KEY;bo=null;ps=[];am=hl=ht=tc=bn=0;bw=3+(Math.random()*3|0);hc(BG);px=tx=W/2;lives=3;wave=1;nw();bs=[];pk=[];pt=[];pp=[];rg=[];d=null;cdr=[];cdT=2.5;crun=0;
t=tk=cd=inv=sh=fl=hj=shd=0;ck=1.5;pkT=5;hint=3.5;sid=null;PK={rad:0,cdn:0,dmg:0,mag:0,hp:0,aeg:0};pc=0;sw=0;LM=3+(WLV()>=5?1:0);lives=LM;shd=WLV()>=3?1:0;
flush();sess=null;try{sess=db?.collection('sessions').add({uid,t:FV.serverTimestamp()}).then(r=>{sid=r.id}).catch(()=>{})}catch{}
st='p';l=performance.now();scr('g')}
const nw=()=>{hmax=hhp=Math.min(14,4+2*wave)};
const pop=(X,Y,s,c='#ffe600')=>{for(const o of pp)if(Math.abs(o.x-X)<90&&Math.abs(o.y-Y)<26)o.y-=26;pp.push({x:C(X,55,W-55),y:Y,s,c:c=='#14142b'?'#ffe600':c=='#7a4a2a'?'#c3ff00':c=='#5b3de0'?'#c3ff00':c,l:1})};
const burst=(X,Y,c,n=10)=>{for(let i=0;i<n;i++)pt.push({x:X,y:Y,vx:R(-160,160),vy:R(-220,60),l:.6,c})};

function fire(){const v=Math.min(300,150+wave*14),ox=hx,oy=HT+46,p=(Math.random()*Math.min(4,wave+1))|0;
const m=(X,Y,vx,vy)=>bs.push({x:X,y:Y,vx,vy,r:14,f:0,a:R(0,6)});
if(p==0){const k=v/Math.hypot(px-ox,gy-oy);m(ox,oy,(px-ox)*k,(gy-oy)*k)}
else if(p==1)for(let i=0;i<3;i++)m(R(20,W-20),-10-i*55,0,v*R(.8,1.1));
else if(p==2)for(const g of[-.4,0,.4])m(ox,oy,Math.sin(g)*v,Math.cos(g)*v);
else{const g=Math.random()*7|0;for(let i=0;i<8;i++)if(i!=g&&i!=g+1)m((i+.5)*W/8,oy,0,v*.8)}}

function parry(){if(cd>0||st!='p')return;cd=PCD();sw=.22;const cy=gy-PH*.5;rg.push({x:px,y:cy,r:10});hz('impactOccurred','medium');let n=0;
for(const o of bs)if(!o.f&&Math.hypot(o.x-px,o.y-cy)<PR()){n++;if(bo){o.d=1;burst(o.x,o.y,'#7a4a2a',6)}else{o.f=1;o.dm=PDM()}}
if(n&&bo){am=Math.min(AM,am+n);add(2*n)}if(n&&PK.aeg&&(pc+=n)>=6-PK.aeg){pc=0;shd=1;pop(px,gy-130,'КОНТР-ЩИТ','#5b3de0')}
if(n)pop(px,gy-110,bo?'ГОВНО +'+n:n>1?'x'+n+'!':'ОТБИТО!','#5b3de0')}

function hurt(){if(shd){shd=0;pop(px,gy-100,'ЩИТ!','#5b3de0');burst(px,gy-40,'#5b3de0');return}
lives--;inv=1.3;sh=1;fl=1;hz('notificationOccurred','error');if(lives<=0)over()}

function over(){if(D)return djover();st='o';d=null;hc(BG);lock=performance.now()+700;const nb=a>best,q=pq();
if(nb){best=a;localStorage.best=a}
$('#o').innerHTML=`<div class="card"><h2>ИГРА<br>ОКОНЧЕНА</h2><div class="n">${a}</div><p>${nb?'новый рекорд!':'рекорд '+best} · волна ${wave}</p><p>+${crun} монет · всего ${WL.c}</p><p id="scoreSyncNote" class="score-sync-note">Отправляем результат в ТОП…</p><p class="q">«${esc(q[0])}»<br>— ${esc(q[1])}</p><button class="play" data-a="go">ЕЩЁ РАЗ</button><div class="row"><button class="sec" data-a="menu">МЕНЮ</button><button class="sec" data-a="top">ТОП</button></div></div>`;
if(ok())send();else scoreNote('Результат не прошёл внутреннюю проверку и не отправлен.',true);
scr('o')}

function clr(){wave++;add(20);for(const o of bs)burst(o.x,o.y,'#5b3de0',5);bs=[];if(wave==bw){spawnB();return}nw();ck=2;pop(W/2,H*.4,'ВОЛНА '+wave);hz('notificationOccurred','success')}

// --- Босс АРТЁМ ---
function spawnB(){const m=26+8*bn;bo={hp:m,mx:m,ph:1,x:W/2,y:-BH,in:1.8,s:0,c:1.8,k:0,hu:0,nh:0,rg:0,tt:0};ps=[];am=4;ht=1;sh=1;fl=1;hint=5;pkT=2.5;hc(DK?'#110303':'#2b0606');hz('notificationOccurred','warning')}
function thr(){if(!bo||bo.in>0||tc>0||st!='p')return;if(am<1){tc=.4;pop(px,gy-110,'НЕТ ГОВНА','#14142b');return}am--;tc=.22;ps.push({x:px,y:gy-PH,a:0});hz('impactOccurred','light')}
function bfire(){const q=bo,p=q.ph,v=Math.min(340,175+p*35+bn*15),ox=q.x,oy=q.y+BH*.6,
m=(X,Y,vx,vy)=>bs.push({x:X,y:Y,vx,vy,r:14,f:0,a:R(0,6)}),
aim=g=>{const dx=px-ox,dy=gy-oy,k=v/Math.hypot(dx,dy),c=Math.cos(g),s=Math.sin(g);m(ox,oy,(dx*c-dy*s)*k,(dx*s+dy*c)*k)},
r=Math.random()*(p+1)|0;
if(r==0)for(const g of[-.28,0,.28])aim(g);
else if(r==1)for(let g=-.6;g<.7;g+=.3)m(ox,oy,Math.sin(g)*v,Math.cos(g)*v);
else if(r==2)for(let i=0;i<6;i++)m(R(20,W-20),-10-i*45,0,v);
else{const g=Math.random()*7|0;for(let i=0;i<8;i++)if(i!=g&&i!=g+1)m((i+.5)*W/8,oy,0,v*.8)}}
function bdie(){const q=bo,s=500+250*bn,cb=25+5*Math.min(bn,5);bn++;add(s);WL.bk=(WL.bk|0)+1;cadd(cb);for(const o of bs)burst(o.x,o.y,'#ffe600',4);bs=[];ps=[];for(const o of pk)if(o.k==4)o.k=0;burst(q.x,q.y+70,'#ffe600',40);burst(q.x,q.y+70,'#ff2d55',30);pop(W/2,H*.35,'АРТЁМ ВСЁ! +'+s,'#ff2d55');pop(W/2,H*.35+34,'+'+cb+' МОНЕТ','#e0a800');bo=null;ht=0;hc(BG);if(lives<LM)lives++;bw=wave+4;nw();ck=2.5;sh=1;hz('notificationOccurred','success');zcards()}
function bup(dt){const q=bo;q.tt+=dt;q.hu-=dt;q.nh+=dt;const sp=[0,.7,1,1.35][q.ph];
q.x=W/2+(Math.sin(q.tt*sp)*.7+Math.sin(q.tt*sp*2.3+1)*.3)*(W/2-BW/2-6);
if(q.in>0){q.in-=dt;const u=C(1-q.in/1.8,0,1);q.y=-BH+(HT+BH)*(1-(1-u)*(1-u));return}
q.y=HT+Math.sin(q.tt*2)*6;const p=q.ph;
q.c-=dt;
if(q.c<=0){if(q.s==0){q.s=1;q.c=.65;q.k=0}
else if(q.s==1){bfire();if(p==3&&q.k++<1)q.c=.4;else{q.s=2;q.c=.25}}
else{q.s=0;q.c=[0,2.7,2.2,1.8][p]}}
if(p>2&&q.nh>5.5&&q.hp<q.mx){q.rg+=dt;if(q.rg>=2.5){q.rg=0;q.hp++;pop(q.x,q.y+BH,'+1','#ff2d55')}}
let kd=0;
for(const o of ps){o.y-=740*dt;o.x+=C(q.x-o.x,-190*dt,190*dt);o.a+=dt*9;
if(o.y<q.y+BH-6&&o.y>q.y&&Math.abs(o.x-q.x)<BW*.52){o.d=1;
if(q.s==1){pop(o.x,o.y+30,'БЛОК!','#14142b');burst(o.x,o.y,'#fff',6)}
else{q.hp-=PDM();q.hu=.28;q.nh=0;q.rg=0;add(15);pop(o.x,o.y+30,'+15','#ff2d55');burst(o.x,o.y,'#7a4a2a',14);hz('impactOccurred','heavy');if(q.hp<=0)kd=1}}
if(o.y<-30)o.d=1}
ps=ps.filter(o=>!o.d);
if(kd){bdie();return}
const f=q.hp/q.mx,np=f>.66?1:f>.33?2:3;
if(np>q.ph){q.ph=np;q.s=0;q.c=1.8;am=Math.min(AM,am+1);for(const o of bs)burst(o.x,o.y,'#ffe600',4);bs=[];add(50);sh=1;fl=.6;pop(W/2,H*.4,'ФАЗА '+np,'#ff2d55');hz('notificationOccurred','warning')}}

// --- Логика ---
function up(dt){t+=dt;tc-=dt;hl+=C(ht-hl,-dt*(ht?6:1.5),dt*(ht?6:1.5));hx=W/2+Math.sin(t*(.6+wave*.04))*(W/2-HW/2-6);
cd-=dt;sw-=dt;inv-=dt;hint-=dt;hj=Math.max(0,hj-dt);sh=Math.max(0,sh-dt*3);fl=Math.max(0,fl-dt*3);
px+=C(tx-px,-1000*dt,1000*dt);px=C(px,PW/2,W-PW/2);tx=C(tx,PW/2,W-PW/2);
tk+=dt;if(tk>=1){tk-=1;add(1)}
ck-=dt;if(ck<=0&&!bo){fire();ck=Math.max(.4,1.25-.07*wave)*R(.8,1.2)}
pkT-=dt;if(pkT<=0){pk.push({x:R(30,W-30),y:-20,k:bo&&Math.random()<.7?4:Math.random()*4|0});pkT=bo?R(2,3.5):R(5,9)}
const cy=gy-PH*.5;let kill=0;
for(const o of bs){
if(o.f){const dx=hx-o.x,dy=HT+HH/2-o.y,l=Math.hypot(dx,dy)||1,w=Math.min(1,dt*6);
o.vx+=(dx/l*520-o.vx)*w;o.vy+=(dy/l*520-o.vy)*w;
if(l<44){o.d=1;hhp-=o.dm||1;add(3);hj=.3;burst(o.x,o.y,'#ffe600',12);hz('impactOccurred','heavy');if(hhp<=0)kill=1}}
o.x+=o.vx*dt;o.y+=o.vy*dt;o.a+=dt*3;if(o.f&&WP().sw)for(const z of bs)if(!z.f&&!z.d&&Math.hypot(z.x-o.x,z.y-o.y)<30){z.d=1;burst(z.x,z.y,'#ff8a00',6);add(2)}
if(!o.f&&!o.d&&inv<=0&&Math.hypot(o.x-px,o.y-cy)<o.r+22){o.d=1;burst(o.x,o.y,'#5b3de0');hurt()}
if(o.y>H+40||o.x<-40||o.x>W+40||o.y<-250)o.d=1}
bs=bs.filter(o=>!o.d);
if(st!='p')return;
if(kill)clr();if(bo)bup(dt);
for(const o of pk){o.y+=80*dt;if(Math.hypot(o.x-px,o.y-cy)<36){o.d=1;
if(o.k==4){am=Math.min(AM,am+2);pop(px,gy-100,'ГОВНО +2','#7a4a2a')}else if(o.k==2){shd=1;pop(px,gy-100,'ЩИТ','#5b3de0')}else if(o.k==3&&lives<LM){lives++;pop(px,gy-100,'+1 ЖИЗНЬ','#e0245e')}else{add(5);pop(px,gy-100,'+5','#14142b')}hz('impactOccurred','light')}
if(o.y>H+20)o.d=1}
pk=pk.filter(o=>!o.d);
cdT-=dt;if(cdT<=0){const big=Math.random()<CD.big;cdr.push({x:R(30,W-30),y:-20,v:big?CD.vb:CD.v,big,vy:R(...CD.spd),ph:R(0,6)});cdT=R(...CD.gap)*(bo?1.5:1)}
for(const o of cdr){o.y+=o.vy*dt;if(PK.mag){const gx_=px-o.x,gy_=cy-o.y,ll=Math.hypot(gx_,gy_)||1;if(ll<40+55*PK.mag){o.x+=gx_/ll*280*dt;o.y+=gy_/ll*280*dt}}if(Math.hypot(o.x-px,o.y-cy)<(o.big?42:36)){o.d=1;cadd(o.v);pop(o.x,o.y-10,'+'+o.v,'#e0a800');burst(o.x,o.y,'#ffe600',o.big?10:5);hz('impactOccurred','light')}if(o.y>H+20)o.d=1}
cdr=cdr.filter(o=>!o.d);
for(const o of pt){o.l-=dt;o.x+=o.vx*dt;o.y+=o.vy*dt;o.vy+=600*dt}pt=pt.filter(o=>o.l>0);
for(const o of pp){o.l-=dt;o.y-=40*dt}pp=pp.filter(o=>o.l>0);
for(const o of rg)o.r+=380*dt;rg=rg.filter(o=>o.r<PR())}

// --- Отрисовка босса ---
function drb(){const q=bo,cx=q.x,cy=q.y+BH/2;
x.globalAlpha=(DK?.22:.12)*q.ph;x.fillStyle='#ff2d55';x.beginPath();x.arc(cx,cy,BH*.75,0,7);x.fill();x.globalAlpha=1;
if(q.s==1){x.strokeStyle='#ffe600';x.lineWidth=4;x.setLineDash([8,6]);x.beginPath();x.arc(cx,cy,BH*.62,0,7);x.stroke();x.setLineDash([])}
di(q.hu>0?'a3':q.s==1?'a2':'a1',cx-BW/2+Math.sin(t*80)*Math.max(0,q.hu)*40,q.y,BW,BH);
const hy=D?78:44,bw=W-24,bx=12;rr(bx,hy,bw,12,6);x.fillStyle='#14142b';x.fill();const hw=Math.max(0,(bw-4)*Math.max(0,q.hp)/q.mx);if(hw>0){rr(bx+2,hy+2,hw,8,4);x.fillStyle='#ff2d55';x.fill()}rr(bx,hy,bw,12,6);x.lineWidth=2;x.strokeStyle=INK;x.stroke();x.fillStyle='rgba(255,255,255,.75)';x.fillRect(bx+bw/3-1,hy+2,2,8);x.fillRect(bx+bw*2/3-1,hy+2,2,8);
if(q.in>0){x.font='900 44px Unbounded,sans-serif';x.textAlign='center';x.textBaseline='middle';x.lineWidth=7;x.lineJoin='round';x.strokeStyle='#14142b';x.strokeText('АРТЁМ',W/2,H*.32);x.fillStyle=(t*12|0)%2?'#ff2d55':'#ffe600';x.fillText('АРТЁМ',W/2,H*.32)}}
function btn(){const X=W-40,Y=gy+GH/2;x.fillStyle=am?'#ffe600':(DK?'rgba(255,255,255,.18)':'rgba(255,255,255,.5)');x.strokeStyle=INK;x.lineWidth=3;x.beginPath();x.arc(X,Y,27,0,7);x.fill();x.stroke();
di('pp',X-11,Y-17,22,34);x.fillStyle='#ff2d55';x.beginPath();x.arc(X-20,Y-20,11,0,7);x.fill();x.stroke();x.fillStyle='#fff';x.font='900 13px Unbounded,sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(am,X-20,Y-19.5);x.fillStyle=hl>.5?'#fff':'#14142b'}

// --- Отрисовка ---
function dr(){x.setTransform(K,0,0,K,0,0);if(DK){const g0=x.createLinearGradient(0,0,0,H);g0.addColorStop(0,mx('#090920','#110303',hl));g0.addColorStop(1,mx('#1d1352','#330909',hl));x.fillStyle=g0;x.fillRect(0,0,W,H);x.fillStyle='#fff';for(let i=0;i<40;i++){x.globalAlpha=(.2+.55*Math.abs(Math.sin(t*1.4+i)))*(1-hl*.6);const s=i%5?1.6:2.6;x.fillRect(i*83.7%W,i*131.3%(H-80),s,s)}x.globalAlpha=1}else{x.fillStyle=mx('#47cef7','#2b0606',hl);x.fillRect(0,0,W,H)}
if(hl>0){const g=x.createLinearGradient(0,H*.4,0,H);g.addColorStop(0,'rgba(255,60,0,0)');g.addColorStop(1,'rgba(255,90,0,'+.55*hl+')');x.fillStyle=g;x.fillRect(0,H*.4,W,H*.6);x.fillStyle='#ff8a00';x.globalAlpha=.7*hl;for(let i=0;i<22;i++)x.fillRect((i*83.3+Math.sin(t+i)*14)%W,H-((t*45+i*61)%H),3,3);x.globalAlpha=1}
x.save();
if(sh)x.translate(R(-1,1)*sh*6,R(-1,1)*sh*6);
x.fillStyle=DK?mx('#10102b','#1f0707',hl):mx('#c3ff00','#7a1200',hl);x.fillRect(0,gy,W,GH);x.fillStyle=DK?mx('#6c4cff','#ff5a2a',hl):'#14142b';x.fillRect(0,gy,W,DK?4:3);
if(bo)drb();else{di('hv',hx-HW/2+Math.sin(t*70)*hj*14,HT,HW,HH);
x.fillStyle=DK?'#14143a':'#14142b';x.fillRect(hx-HW/2,HT+HH+4,HW,9);
x.fillStyle='#5b3de0';x.fillRect(hx-HW/2+1.5,HT+HH+5.5,(HW-3)*Math.max(0,hhp)/hmax,6);if(DK){x.strokeStyle='#ece9ff';x.lineWidth=2;x.strokeRect(hx-HW/2,HT+HH+4,HW,9)}}
const cy=gy-PH*.5;
if(cd<=0){x.strokeStyle='rgba(255,255,255,.55)';x.lineWidth=2;x.setLineDash([6,6]);x.beginPath();x.arc(px,cy,PR(),0,7);x.stroke();x.setLineDash([])}
x.globalAlpha=inv>0&&(t*20|0)%2?.4:1;df('il',px-PW*SKS/2,gy-PH*SKS+6+Math.sin(t*5)*1.5,PW*SKS,PH*SKS,1);WDR();x.globalAlpha=1;
if(shd){x.strokeStyle='#5b3de0';x.lineWidth=3;x.beginPath();x.arc(px,gy-PH*SKS/2+6,PH*SKS*.48,0,7);x.stroke()}
for(const o of bs){x.save();x.translate(o.x,o.y);x.rotate(Math.sin(o.a)*.4);if(bo){x.fillStyle='rgba(255,60,0,.45)';x.beginPath();x.arc(0,0,22,0,7);x.fill()}df('bl',-17,-18.5,34,37);x.restore()}
for(const o of ps){x.save();x.translate(o.x,o.y);x.rotate(Math.sin(o.a)*.5);di('pp',-12,-18,24,36);x.restore()}
x.textAlign='center';x.textBaseline='middle';
for(const o of pk)o.k==4?di('pp',o.x-12,o.y-18+Math.sin(t*6+o.x)*2,24,36):ic(['s','s','d','h'][o.k],o.x,o.y+Math.sin(t*6+o.x)*2,15,Math.sin(t*4+o.x)*.25);
for(const o of cdr)drc(o.x,o.y+Math.sin(t*6+o.ph)*2,o.big?20:14,Math.max(.25,Math.abs(Math.cos(t*4+o.ph))));
x.strokeStyle='#fff';x.lineWidth=3;
for(const o of rg){x.globalAlpha=Math.max(0,1-o.r/PR());x.beginPath();x.arc(o.x,o.y,o.r,0,7);x.stroke()}
for(const o of pt){x.globalAlpha=Math.max(0,o.l*1.6);x.fillStyle=o.c;x.fillRect(o.x-3,o.y-3,6,6)}x.globalAlpha=1;
x.font='900 20px Unbounded,sans-serif';x.lineWidth=6;x.lineJoin='round';
for(const o of pp){x.globalAlpha=Math.min(1,o.l*2);x.strokeStyle='#14142b';x.strokeText(o.s,o.x,o.y);x.fillStyle=o.c;x.fillText(o.s,o.x,o.y)}x.globalAlpha=1;
x.font='900 15px Unbounded,sans-serif';x.lineJoin='round';x.lineWidth=4;x.strokeStyle='#14142b';x.fillStyle='#fff';x.textAlign='left';for(let i=0;i<LM;i++)ic('h',24+i*Math.min(26,130/LM),24,10,0,i<lives);
x.textAlign='right';x.strokeText(a,W-52,25);x.fillStyle='#ffe600';x.fillText(a,W-52,25);x.textAlign='center';x.strokeText(bo?'БОСС':'ВОЛНА '+wave,W/2,25);x.fillStyle='#fff';x.fillText(bo?'БОСС':'ВОЛНА '+wave,W/2,25);
if(st=='p'||st=='pa'){drc(30,70,10);x.textAlign='left';x.strokeText(crun,46,71);x.fillStyle='#ffe600';x.fillText(crun,46,71);x.textAlign='center'}
if(st=='p')pbtn();
if(bo)btn();if(hint>0&&st=='p'){x.save();x.globalAlpha=Math.min(1,hint);const msg=bo?'парируй = 💩 · кидай в Артёма':'тащи пальцем · тап = отбить';x.font='800 13px Onest,sans-serif';const tw=Math.min(W-28,x.measureText(msg).width+28);rr((W-tw)/2,H*.5-17,tw,34,11);x.fillStyle='rgba(20,20,43,.86)';x.fill();x.lineWidth=2.4;x.strokeStyle='#ffe600';x.stroke();x.fillStyle='#ffe600';x.textAlign='center';x.textBaseline='middle';x.fillText(msg,W/2,H*.5+1);x.restore()}
x.restore();if(fl>0){x.globalAlpha=fl*.3;x.fillStyle='#ff2d55';x.fillRect(0,0,W,H);x.globalAlpha=1}}

// --- ДУДЛ-РЕЖИМ: прыгаем вверх, тап = бросить говно, на высоте ждёт Артём ---
let D=null,dbest=+localStorage.bestd||0;
const DJV=780,DSV=1200,DGR=1800,DPS=10;
const drk=(X,Y,k=1)=>{x.save();x.translate(X,Y);x.scale(k,k);x.lineWidth=3;x.strokeStyle=INK;x.lineJoin='round';x.fillStyle='#ff2d55';x.beginPath();x.moveTo(0,-17);x.lineTo(9,0);x.lineTo(9,12);x.lineTo(-9,12);x.lineTo(-9,0);x.closePath();x.fill();x.stroke();x.fillStyle='#fff';x.beginPath();x.arc(0,-2,4,0,7);x.fill();x.stroke();x.fillStyle='#ffe600';x.beginPath();x.moveTo(-6,12);x.lineTo(0,22);x.lineTo(6,12);x.fill();x.restore()};
const dmg=(X,Y)=>{x.save();x.translate(X,Y);x.lineWidth=11;x.strokeStyle=INK;x.beginPath();x.arc(0,0,9,0,Math.PI);x.moveTo(-9,0);x.lineTo(-9,-8);x.moveTo(9,0);x.lineTo(9,-8);x.stroke();x.lineWidth=6;x.strokeStyle='#ff2d55';x.stroke();x.restore()};
function modes(){hz('selectionChanged');mo(`<div class="card"><h2>ВЫБЕРИ РЕЖИМ</h2><button class="mode" data-a="go"><b>КЛАССИКА</b><span>уворачивайся, отбивай идс нахкц ч не прид3мал</span><em>рекорд ${best}</em></button><button class="mode dj" data-a="dj"><b>ДУДЛ</b><span>прыгай вверх, собирай бонусы, дойди до Артёма</span><em>рекорд ${dbest}</em></button><button class="sec yl" data-a="arsenal" style="width:100%;margin-bottom:.6rem">ОРУЖИЕ: ${WP().n} · СМЕНИТЬ</button><button class="sec" data-a="mc" style="width:100%">НАЗАД</button></div>`)}
async function dflush(){if(!db)return;const v=Number(localStorage.pendd)||0;if(v<=0)return;
  try{const ref=db.collection('scores_dj').doc(uid);
    await db.runTransaction(async tx=>{const q=await tx.get(ref),o=q.exists?(q.data()||{}):{};if(v>(Number(o.score)||0))tx.set(ref,{name:me.name.slice(0,32),...PHO,score:v,t:FV.serverTimestamp()},{merge:true})});
    if((Number(localStorage.pendd)||0)<=v)localStorage.removeItem('pendd')}catch(e){console.warn('dj top',e)}}
function djstart(){
  WL.gm=(WL.gm|0)+1;
  if(a>best&&ok()){best=a;localStorage.best=a;send()}
  a=0;b=KEY;bo=null;ps=[];hc(BG);px=tx=W/2;lives=3;bs=[];pk=[];pt=[];pp=[];rg=[];d=null;crun=0;t=0;inv=sh=fl=shd=0;
  D={cam:0,g0:gy,py:gy,vy:-DJV,top:gy,pl:[],it:[],en:[],pu:[],bu:[],mx:0,ds:0,nb:1000,bn:0,bo:null,ar:0,lk:0,gr:1,am:3,cd:0,rk:0,mg:0,hl:0,hint:4,lt:0,ms:0,tl:0,sq:0,vx:0,cb:0};
  dpl();st='p';l=performance.now();scr('g')}
function dpl(){const q=D;
  while(q.top>q.cam-260){
    const al=Math.min(1,q.mx/4000),w=Math.round(74-18*al),r=Math.random(),gap=R(68,95+45*al);
    const t=q.mx>250&&r<.12+.16*al?1:q.mx>500&&q.lt!=2&&r<.24+.1*al?2:0;
    const p={x:R(10,W-10-w),y:q.top-gap,w,t,vx:t==1?R(50,85)*(Math.random()<.5?-1:1):0,sp:t==0&&Math.random()<.08?1:0};
    q.lt=t;q.top=p.y;q.pl.push(p);
    const cx=p.x+w/2;
    if(Math.random()<.32){const big=Math.random()<CD.big;q.it.push({k:'c',x:cx+R(-22,22),y:p.y-R(36,64),v:big?CD.vb:CD.v,big,ph:R(0,6)})}
    else if(q.mx>120&&Math.random()<.14){const u=Math.random();q.it.push({k:u<.35?'p':u<.55?'m':u<.75?'s':u<.9?(lives<LM?'h':'p'):'r',x:cx,y:p.y-48,ph:R(0,6)})}
    if(q.mx>350&&Math.random()<.07+.07*al)q.en.push({x:R(30,W-30),y:p.y-R(60,90),vx:R(45,80)*(Math.random()<.5?-1:1),ph:R(0,6)});
  }}
function djshot(auto=0){const q=D;if(!q||st!='p'||q.cd>0)return;
  if(q.am<1){if(!auto){q.cd=.35;pop(px,q.py-q.cam-95,'ЖДИ ЗАРЯД 💩','#ffe600')}return}
  q.am--;q.cd=.24;q.pu.push({x:px,y:q.py-PH,a:0});hz('impactOccurred','light')}
function dArenaPl(q){
  // на невысоких экранах верхняя платформа не должна оказываться на линии удара по голове босса (иначе бесконечный отскок и мгновенная смерть босса)
  const tY=q.cam+Math.max(H-308,322),mY=Math.max(q.cam+H-188,tY+55),bY=Math.max(q.cam+H-68,mY+55);
  return [
    {x:16,y:bY,w:96,t:0,vx:0,sp:0,ar:1},
    {x:W/2-52,y:bY-14,w:104,t:0,vx:0,sp:1,ar:1},
    {x:W-112,y:bY,w:96,t:0,vx:0,sp:0,ar:1},
    {x:42,y:mY,w:92,t:1,vx:55,sp:0,ar:1},
    {x:W-134,y:mY,w:92,t:1,vx:-55,sp:0,ar:1},
    {x:W/2-48,y:tY,w:96,t:0,vx:0,sp:0,ar:1}
  ];
}
function dspawnB(){const q=D,m=18+6*q.bn;q.ar=1;q.lk=1;q.en=[];q.pu=[];q.bu=[];
  q.pl=dArenaPl(q);
  q.top=q.cam-60;
  q.bo={hp:m,mx:m,ph:1,x:W/2,y:-BH,in:1.6,s:0,c:2.0,hu:0,tt:0,nh:0,rg:0,rl:0,sc:0};
  q.am=AM;q.pt=1.1;q.hint=5.5;
  if(q.py>q.cam+H-90){q.py=q.cam+H-95;q.vy=-DJV}
  sh=1;fl=1;hc(DK?'#110303':'#2b0606');hz('notificationOccurred','warning');
  pop(W/2,H*.42,'БОСС АРТЁМ!','#ff2d55')}
function dfire(){const q=D.bo,p=q.ph,v=Math.min(265,145+p*24+D.bn*10),ox=q.x,oy=q.y+BH*.6,
  m=(X,Y,vx,vy)=>D.bu.push({x:X,y:Y,vx,vy,a:R(0,6)}),
  aim=g=>{const dx=px-ox,dy=D.py-D.cam-PH/2-oy,k=v/Math.hypot(dx,dy),c=Math.cos(g),s=Math.sin(g);m(ox,oy,(dx*c-dy*s)*k,(dx*s+dy*c)*k)},
  r=Math.random()*p|0;
  if(r==0)for(const g of[-.26,0,.26])aim(g);
  else if(r==1)for(let g=-.5;g<=.51;g+=.25)m(ox,oy,Math.sin(g)*v,Math.cos(g)*v);
  else{const g=Math.random()*5|0;for(let i=0;i<6;i++)if(i!=g&&i!=g+1)m((i+.5)*W/6,oy,0,v*.82)}}
function dbup(dt){const q=D,o=q.bo;o.tt+=dt;o.hu-=dt;o.nh+=dt;o.sc=Math.max(0,(o.sc||0)-dt);const sp=[0,.65,.9,1.2][o.ph];
  o.x=W/2+(Math.sin(o.tt*sp)*.7+Math.sin(o.tt*sp*2.1+1)*.3)*(W/2-BW/2-10);
  if(o.in>0){o.in-=dt;const u=C(1-o.in/1.6,0,1);o.y=-BH+(HT+24+BH)*(1-(1-u)*(1-u));return}
  o.y=HT+24+Math.sin(o.tt*2)*6;o.c-=dt;
  if(o.c<=0){if(!o.s){o.s=1;o.c=.55}else{dfire();o.s=0;o.c=[0,2.7,2.2,1.85][o.ph]}}
  if(q.am<AM){o.rl=(o.rl||0)+dt;if(o.rl>=1.35){o.rl=0;q.am++;pop(px,q.py-q.cam-85,'+1 💩','#c3ff00')}}else o.rl=0;
  const f=o.hp/o.mx,np=f>.66?1:f>.33?2:3;
  if(np>o.ph){o.ph=np;o.s=0;o.c=1.8;q.bu=[];q.am=AM;q.ds+=60;sh=1;fl=.6;pop(W/2,H*.4,'ФАЗА '+np+' · ПОЛНЫЙ ЗАРЯД!','#ff2d55');hz('notificationOccurred','warning')}
  q.pt-=dt;if(q.pt<=0){q.pt=1.85;const p=q.pl[Math.random()*q.pl.length|0];if(p&&q.it.length<5){const u=Math.random();q.it.push({k:u<.68?'p':u<.86?'s':(lives<LM?'h':'p'),x:p.x+p.w/2,y:p.y-38,ph:R(0,6)})}}
  if(q.pl.length<6)q.pl=dArenaPl(q)}
function dbdie(){const q=D,o=q.bo,cb=30+5*Math.min(q.bn,5);
  q.ds+=500+250*q.bn;q.bn++;WL.bk=(WL.bk|0)+1;cadd(cb);burst(o.x,o.y+70,'#ffe600',40);burst(o.x,o.y+70,'#ff2d55',30);
  q.bu=[];q.bo=null;q.ar=0;q.lk=0;q.rk=1.8;q.nb=q.mx+1600+500*q.bn;
  q.top=q.cam+H-120;dpl();
  if(lives<LM)lives++;shd=1;hc(BG);hz('notificationOccurred','success');
  pop(W/2,H*.36,'АРТЁМ ПОБЕЖДЁН!','#ff2d55');pop(W/2,H*.36+32,'+'+cb+' МОНЕТ · ВЗЛЁТ!','#e0a800')}
function dup(dt){const q=D;t+=dt;
  const ox=px,WW=W+PW;px+=(tx-px)*Math.min(1,dt*16);let wr=0;
  if(px<-PW/2){px+=WW;tx+=WW;if(d)d.p+=WW;wr=1}else if(px>W+PW/2){px-=WW;tx-=WW;if(d)d.p-=WW;wr=1}
  q.vx=wr?0:(px-ox)/dt;q.tl+=(C(q.vx/900,-.35,.35)-q.tl)*Math.min(1,dt*12);q.sq=Math.max(0,q.sq-dt*6);
  inv-=dt;sh=Math.max(0,sh-dt*3);fl=Math.max(0,fl-dt*3);q.cd-=dt;q.hint-=dt;q.rk=Math.max(0,q.rk-dt);q.mg=Math.max(0,q.mg-dt);
  q.hl+=C((q.bo?1:0)-q.hl,-dt*2,dt*2);
  const op=q.py;
  if(q.rk>0){q.vy=-860;if(Math.random()<.6)pt.push({x:px+R(-8,8),y:q.py-q.cam+4,vx:R(-30,30),vy:R(80,200),l:.4,c:'#ffe600'})}else q.vy+=DGR*(Math.abs(q.vy)<220?.65:1)*dt;
  q.py+=q.vy*dt;
  for(const p of q.pl){p.dip=Math.max(0,(p.dip||0)-dt*6);if(p.t==1){p.x+=p.vx*dt;if(p.x<6||p.x>W-6-p.w)p.vx*=-1}}
  if(q.lk&&q.py<q.cam+HT+BH*.55){
    if(q.bo&&q.bo.in<=0&&Math.abs(px-q.bo.x)<BW*.65){
      q.py=q.cam+HT+BH*.55;q.vy=DJV*.55;
      if(q.bo.sc>0){/* кулдаун: просто отскакиваем, урон и надписи не спамятся */}
      else if(!q.bo.s){q.bo.sc=1.6;q.bo.hp=Math.max(0,q.bo.hp-2);q.bo.hu=.35;q.ds+=35;sh=1;burst(q.bo.x,q.bo.y+BH*.7,'#ffe600',18);pop(px,HT+BH,'ПРЫЖОК В ЖБАН! -2','#ffe600');hz('impactOccurred','heavy');if(q.bo.hp<=0)dbdie()}
      else{q.bo.sc=.8;pop(px,HT+BH,'ЩИТ БОССА!','#fff')}
    }else if(q.py<q.cam+PH){q.py=q.cam+PH;q.vy=Math.max(q.vy,0)}
  }
  if(q.vy>0){
    let hit=null;
    if(q.gr&&op<=q.g0+2&&q.py>=q.g0)hit={y:q.g0,w:W,x:0};
    else if(q.bo&&op<=q.cam+H-18&&q.py>=q.cam+H-18)hit={y:q.cam+H-18,w:W,x:0,sf:1};
    else for(const p of q.pl)if(!p.d&&op<=p.y+8&&q.py>=p.y&&Math.abs(px-(p.x+p.w/2))<p.w/2+18){hit=p;break}
    if(hit){q.py=hit.y;q.cb=0;q.sq=1;hit.dip=1;burst(px,q.py-q.cam,hit.sf?'#c3ff00':'#fff',4);const sp=hit.sp&&Math.abs(px-(hit.x+hit.w/2))<30;q.vy=-(sp?DSV:DJV);
      if(sp){pop(px,q.py-q.cam-90,'БАТУТ!','#ff2d55');if(q.bo&&q.am>0)djshot(1)}
      else if(q.bo&&q.am>=3&&q.bo.in<=0&&!q.bo.s&&Math.abs(px-q.bo.x)<95)djshot(1);
      if(hit.t==2){hit.d=1;burst(hit.x+hit.w/2,hit.y-q.cam,'#ffe600',8)}
      hz('impactOccurred','light')}}
  if(q.py-q.cam>H+70){hurt();if(st!='p')return;const y=q.cam+H-30;q.pl.push({x:px-35,y,w:70,t:0,vx:0,sp:0});q.py=y;q.vy=-DJV;inv=1.5;pop(px,H-120,'ПОЙМАЛИ!','#5b3de0')}
  if(!q.lk&&q.py-H*.45<q.cam)q.cam=q.py-H*.45;
  const m=Math.max(0,Math.floor((q.g0-q.py)/DPS));if(m>q.mx){q.ds+=m-q.mx;q.mx=m}
  const ms=Math.floor(q.mx/250);if(ms>q.ms){q.ms=ms;q.ds+=25;pop(W/2,H*.3,q.mx+' М!','#5b3de0');hz('notificationOccurred','success')}
  if(q.gr&&q.g0-q.cam>H+10)q.gr=0;
  if(!q.ar&&q.mx>=q.nb)dspawnB();
  if(!q.ar)dpl();
  q.pl=q.pl.filter(p=>!p.d&&p.y<q.cam+H+80);q.en=q.en.filter(e=>!e.d&&e.y<q.cam+H+100);q.it=q.it.filter(o=>!o.d&&o.y<q.cam+H+60);
  const pcy=q.py-PH*.5;
  for(const o of q.it){
    if(o.k=='c'&&q.mg>0){const dx=px-o.x,dy=pcy-o.y,l=Math.hypot(dx,dy);if(l<150){o.x+=dx/l*420*dt;o.y+=dy/l*420*dt}}
    if(Math.hypot(o.x-px,o.y-pcy)<(o.big?42:36)){o.d=1;const X=px,Y=q.py-q.cam-100;
      if(o.k=='c'){cadd(o.v);pop(o.x,o.y-q.cam-10,'+'+o.v,'#e0a800');burst(o.x,o.y-q.cam,'#ffe600',o.big?10:5)}
      else if(o.k=='p'){q.am=Math.min(AM,q.am+2);pop(X,Y,'ГОВНО +2','#7a4a2a')}
      else if(o.k=='s'){shd=1;pop(X,Y,'ЩИТ','#5b3de0')}
      else if(o.k=='h'){if(lives<LM)lives++;else q.ds+=25;pop(X,Y,'+1 ЖИЗНЬ','#e0245e')}
      else if(o.k=='m'){q.mg=8;pop(X,Y,'МАГНИТ','#ff2d55')}
      else{q.rk=2.2;pop(X,Y,'РАКЕТА!','#ff2d55');hz('notificationOccurred','success')}
      hz('impactOccurred','light')}}
  for(const e of q.en){e.x+=e.vx*dt;if(e.x<20||e.x>W-20)e.vx*=-1;e.y+=Math.sin(t*2+e.ph)*20*dt;
    if(Math.hypot(e.x-px,e.y-pcy)<38){
      if(q.rk>0||(q.vy>0&&q.py<e.y+10)){e.d=1;q.cb++;const pts=15*q.cb;q.ds+=pts;burst(e.x,e.y-q.cam,'#2b59ff',10);pop(e.x,e.y-q.cam,(q.cb>1?'КОМБО x'+q.cb+' ':'')+'+'+pts,'#14142b');if(q.rk<=0){q.vy=-DJV;hz('impactOccurred','medium')}}
      else if(inv<=0){e.d=1;burst(e.x,e.y-q.cam,'#5b3de0');hurt()}}}
  for(const o of q.pu){o.y-=840*dt;o.a+=dt*9;const b=q.bo;if(b&&b.in<=0)o.x+=C(b.x-o.x,-340*dt,340*dt);const sy=o.y-q.cam;
    for(const e of q.en)if(!e.d&&Math.hypot(e.x-o.x,e.y-o.y)<32){e.d=o.d=1;q.ds+=10;burst(e.x,e.y-q.cam,'#7a4a2a',8);pop(e.x,sy,'+10','#14142b')}
    if(b&&b.in<=0&&sy<b.y+BH+6&&sy>b.y-PH-10&&Math.abs(o.x-b.x)<BW*.64){o.d=1;
      if(b.s){pop(o.x,sy+30,'БЛОК!','#14142b');burst(o.x,sy,'#fff',6)}
      else{b.hp--;b.hu=.28;b.nh=0;b.rg=0;q.ds+=15;pop(o.x,sy+30,'+15','#ff2d55');burst(o.x,sy,'#7a4a2a',14);hz('impactOccurred','heavy');if(b.hp<=0){dbdie();break}}}
    if(sy<-30)o.d=1}
  q.pu=q.pu.filter(o=>!o.d);
  if(q.bo){dbup(dt);if(q.bo)for(const o of q.bu){o.x+=o.vx*dt;o.y+=o.vy*dt;o.a+=dt*3;
    if(inv<=0&&q.rk<=0&&Math.hypot(o.x-px,o.y-(q.py-q.cam-PH*.5))<36){o.d=1;burst(o.x,o.y,'#5b3de0');hurt()}
    if(o.y>H+40||o.x<-40||o.x>W+40||o.y<-250)o.d=1}
    q.bu=q.bu.filter(o=>!o.d)}
  for(const o of pt){o.l-=dt;o.x+=o.vx*dt;o.y+=o.vy*dt;o.vy+=600*dt}pt=pt.filter(o=>o.l>0);
  for(const o of pp){o.l-=dt;o.y-=40*dt}pp=pp.filter(o=>o.l>0)}
function ddr(){const q=D,cm=q.cam;x.setTransform(K,0,0,K,0,0);
  const zu=C(q.mx/3500,0,1);x.fillStyle=DK?(zu<.5?mx('#1d1352','#2c1a6e',zu*2):mx('#2c1a6e','#07071a',zu*2-1)):(zu<.5?mx('#47cef7','#a56bff',zu*2):mx('#a56bff','#1b1646',zu*2-1));x.fillRect(0,0,W,H);
  if(DK||zu>.3){x.fillStyle='#fff';for(let i=0;i<28;i++){x.globalAlpha=(DK?.3+.7*zu:zu-.3)*(.5+.5*Math.sin(t*2+i));x.fillRect(i*53%W,((i*97-cm*.05)%H+H)%H,2,2)}}
  x.fillStyle='#fff';for(let i=0;i<8;i++){const n=i<4,Y=((i*191-cm*(n?.12:.3))%(H+100)+H+100)%(H+100)-50;x.globalAlpha=(DK?(n?.07:.12):(n?.25:.4))*(1-zu*.8);x.beginPath();x.ellipse((i*97+i*i*13)%W,Y,n?30:46,n?10:15,0,0,7);x.fill()}
  x.globalAlpha=q.hl*.8;x.fillStyle='#2b0606';x.fillRect(0,0,W,H);x.globalAlpha=1;
  x.save();if(sh)x.translate(R(-1,1)*sh*6,R(-1,1)*sh*6);
  if(q.gr){x.fillStyle=DK?'#10102b':'#c3ff00';x.fillRect(0,q.g0-cm,W,GH+300);x.fillStyle=DK?'#6c4cff':'#14142b';x.fillRect(0,q.g0-cm,W,DK?4:3)}
  x.lineJoin='round';x.lineWidth=3;x.strokeStyle=INK;
  for(const p of q.pl){const Y=p.y-cm+(p.dip||0)*5;if(Y<-30||Y>H+30)continue;
    rr(p.x,Y+4,p.w,16,8);x.fillStyle=DK?'#6c4cff':'#14142b';x.fill();rr(p.x,Y,p.w,16,8);x.fillStyle=p.t==1?'#5b3de0':p.t==2?'#ffe600':'#c3ff00';x.fill();x.setLineDash(p.t==2?[6,4]:[]);x.stroke();x.setLineDash([]);x.fillStyle='rgba(255,255,255,.55)';rr(p.x+8,Y+3.5,p.w-16,3,1.5);x.fill();
    if(p.sp){rr(p.x+p.w/2-10,Y-12,20,12,4);x.fillStyle='#ff2d55';x.fill();x.stroke()}}
  for(const o of q.it){const Y=o.y-cm+Math.sin(t*6+o.ph)*2;if(Y<-30||Y>H+30)continue;
    if(o.k=='c')drc(o.x,Y,o.big?20:14,Math.max(.25,Math.abs(Math.cos(t*4+o.ph))));
    else if(o.k=='p')di('pp',o.x-12,Y-18,24,36);
    else if(o.k=='s')ic('d',o.x,Y,15);else if(o.k=='h')ic('h',o.x,Y,15);
    else if(o.k=='r')drk(o.x,Y);else dmg(o.x,Y)}
  for(const e of q.en){const Y=e.y-cm;x.fillStyle='rgba(255,60,0,.4)';x.beginPath();x.arc(e.x,Y,24,0,7);x.fill();df('bl',e.x-20,Y-22,40,44)}
  for(const o of q.pu){x.save();x.translate(o.x,o.y-cm);x.rotate(Math.sin(o.a)*.5);di('pp',-12,-18,24,36);x.restore()}
  const Y=q.py-cm,cy=Y-PH*.5;
  if(q.rk>0){x.fillStyle='#ffe600';x.strokeStyle=INK;x.beginPath();x.moveTo(px-13,Y-4);x.lineTo(px,Y+36+R(0,16));x.lineTo(px+13,Y-4);x.closePath();x.fill();x.stroke()}
  if(q.mg>0){x.strokeStyle='rgba(255,255,255,.6)';x.setLineDash([6,6]);x.beginPath();x.arc(px,cy,130,0,7);x.stroke();x.setLineDash([])}
  x.globalAlpha=inv>0&&(t*20|0)%2?.4:1;const kk=1+C(-q.vy/3500,-.12,.16)-q.sq*.2;for(const o of[0,px<PW/2?W+PW:px>W-PW/2?-W-PW:0]){x.save();x.translate(px+o,Y);x.rotate(q.tl);x.scale(2-kk,kk);df('il',-PW*SKS/2,-PH*SKS+6,PW*SKS,PH*SKS,1);x.restore()}x.globalAlpha=1;
  if(shd){x.strokeStyle='#5b3de0';x.lineWidth=3;x.beginPath();x.arc(px,Y-PH*SKS/2+6,PH*SKS*.48,0,7);x.stroke()}
  if(q.bo){
    const fy=H-18;
    x.fillStyle='rgba(195,255,0,.22)';x.fillRect(0,fy,W,22);
    x.strokeStyle='#c3ff00';x.lineWidth=4;x.setLineDash([12,8]);x.beginPath();x.moveTo(0,fy);x.lineTo(W,fy);x.stroke();x.setLineDash([]);
    bo=q.bo;drb();bo=null;
    if(q.bo.in<=0){
      x.save();x.translate(q.bo.x,q.bo.y+BH*.52);
      x.strokeStyle=q.bo.s?'#ffe600':'rgba(255,255,255,.75)';x.lineWidth=2.5;x.setLineDash([5,5]);
      x.beginPath();x.arc(0,0,34+Math.sin(t*8)*3,0,7);x.stroke();x.setLineDash([]);x.restore();
    }
  }
  for(const o of q.bu){x.save();x.translate(o.x,o.y);x.rotate(Math.sin(o.a)*.4);x.fillStyle='rgba(255,60,0,.45)';x.beginPath();x.arc(0,0,22,0,7);x.fill();df('bl',-17,-18.5,34,37);x.restore()}
  x.strokeStyle='#fff';
  for(const o of pt){x.globalAlpha=Math.max(0,o.l*1.6);x.fillStyle=o.c;x.fillRect(o.x-3,o.y-3,6,6)}x.globalAlpha=1;
  x.font='900 20px Unbounded,sans-serif';x.lineWidth=6;x.lineJoin='round';x.textAlign='center';x.textBaseline='middle';
  for(const o of pp){x.globalAlpha=Math.min(1,o.l*2);x.strokeStyle='#14142b';x.strokeText(o.s,o.x,o.y);x.fillStyle=o.c;x.fillText(o.s,o.x,o.y)}x.globalAlpha=1;
  for(let i=0;i<3;i++)ic('h',22+i*25,23,10,0,i<lives);
  const dp=(X,Y,w,h=28,bg=DK?'#14143a':'#14142b',sh='#5b3de0')=>{rr(X+2,Y+3,w,h,10);x.fillStyle=sh;x.fill();rr(X,Y,w,h,10);x.fillStyle=bg;x.fill();x.lineWidth=2.2;x.strokeStyle=INK;x.stroke()};
  if(q.bo){
    dp(W/2-68,9,136,28,'#ff2d55','#14142b');
    x.font='900 12px Unbounded,sans-serif';x.fillStyle='#fff';x.textAlign='center';x.fillText('БОСС · ФАЗА '+q.bo.ph,W/2,23.5);
  }else{
    dp(W/2-58,9,116,28);
    x.font='900 14px Unbounded,sans-serif';x.fillStyle='#ffe600';x.textAlign='center';x.fillText(q.ds+' м',W/2,23.5);
  }
  x.font='900 13px Unbounded,sans-serif';
  dp(12,44,68,26);drc(27,57,8.5);x.fillStyle='#ffe600';x.textAlign='left';x.fillText(crun,40,57.5);
  dp(W-80,44,68,26,q.bo&&q.am?'#ffe600':'#14142b',q.bo&&q.am?'#14142b':'#5b3de0');
  di('pp',W-72,46,13,21);x.fillStyle=q.bo&&q.am?'#14142b':q.am?(DK?'#ffe600':'#c3ff00'):'#ff2d55';x.fillText('x'+q.am,W-53,57.5);
  if(st=='p')pbtn();
  if(!q.bo){
    const bx=10,by=98,bw=10,bh=Math.min(250,H-230),f=C(q.mx/q.nb,0,1);
    rr(bx-2,by-18,bw+4,bh+22,6);x.fillStyle='rgba(20,20,43,.55)';x.fill();
    rr(bx,by,bw,bh,5);x.fillStyle='rgba(255,255,255,.22)';x.fill();
    if(f>0){rr(bx,by+bh*(1-f),bw,Math.max(6,bh*f),5);x.fillStyle='#c3ff00';x.fill()}
    rr(bx,by,bw,bh,5);x.lineWidth=2;x.strokeStyle=INK;x.stroke();
    rr(bx-3,by-15,bw+6,13,4);x.fillStyle='#ff2d55';x.fill();x.stroke();
    x.font='900 8px Unbounded,sans-serif';x.fillStyle='#fff';x.textAlign='center';x.fillText('☠',bx+bw/2,by-8);
  }
  if(q.hint>0&&st=='p'){
    x.save();x.globalAlpha=Math.min(1,q.hint);
    const msg=q.bo?'ТАПАЙ ПО ЭКРАНУ — КИДАЙ 💩 В АРТЁМА!':'тащи пальцем · тап = бросить 💩';
    x.font='800 13px Onest,sans-serif';
    const tw=Math.min(W-24,x.measureText(msg).width+26);
    rr((W-tw)/2,H*.44-17,tw,34,11);x.fillStyle='rgba(20,20,43,.88)';x.fill();x.lineWidth=2.4;x.strokeStyle='#ffe600';x.stroke();
    x.fillStyle='#ffe600';x.textAlign='center';x.textBaseline='middle';x.fillText(msg,W/2,H*.44+1);
    x.restore();
  }
  x.restore();if(fl>0){x.globalAlpha=fl*.3;x.fillStyle='#ff2d55';x.fillRect(0,0,W,H);x.globalAlpha=1}}
function djover(){const q=D,nb=q.ds>dbest,z=pq();if(nb){dbest=q.ds;localStorage.bestd=q.ds;localStorage.pendd=q.ds;dflush()}
  st='o';d=null;hc(BG);lock=performance.now()+700;
  $('#o').innerHTML=`<div class="card"><h2>ИГРА<br>ОКОНЧЕНА</h2><div class="n">${q.ds}</div><p>${nb?'новый рекорд!':'рекорд '+dbest} · высота ${q.mx} м</p><p>+${crun} монет · всего ${WL.c}</p><p class="q">«${esc(z[0])}»<br>— ${esc(z[1])}</p><button class="play" data-a="dj">ЕЩЁ РАЗ</button><div class="row"><button class="sec" data-a="menu">МЕНЮ</button><button class="sec yl" data-a="top" data-i="d">ТОП</button></div></div>`;
  scr('o')}

// --- ПРОФИЛЬ ---
const hm=s=>{s=s|0;const h=s/3600|0,m=s%3600/60|0;return h?h+' ч '+m+' м':m+' мин'};
// --- РАМКИ И ФОНЫ ПРОФИЛЯ (пока заглушка): WL.fr / WL.bg хранят id, карточка получает классы fr-<id> и bg-<id> ---
function rfr(){const sec=(t,n)=>`<div class="card"><div class="hh"><h4>${t}</h4><span>0/${n}</span></div><div class="dg">${'<div class="dt lk"></div>'.repeat(n)}</div><button class="play off" style="margin-top:.8rem">СКОРО</button></div>`;
$('#fr').innerHTML=hdr('ПРОФИЛЬ')+`<div class="card"><p>ьяььячяабонм6е6 ьчьяяьяабориген эвэаэчя77</p></div>`+sec('РАМКИ',4)+sec('ФОНЫ',4)+nav('f');cshow()}
function frames(){st='m';rfr();scr('fr')}
let PF='m',PRO=null,PRN='',GN=25,GB=0,gcl=0;
// --- ПОДАРКИ МОНЕТ: пишем в коллекцию gifts, получатель забирает при входе в меню ---
const GA=[10,25,50,100],gbox=(t,sub,big)=>`<div class="gfh"><div class="gfbox">${boxSvg(1)}</div><div class="gfx"><small>${sub}</small><b>${big}</b></div></div>`;
function gmodal(msg,q){if(!PRO||!db)return;if(WL.c<GN)GN=GA.filter(n=>n<=WL.c).pop()||GA[0];hz('selectionChanged');
 mo(`<div class="card dly gf${q?' nr':''}"><div class="dtop"><h2>ПОДАРОК</h2><button class="dx" data-a="mc" aria-label="Закрыть">✕</button></div>${gbox(0,'кому',esc(PRN))}<div class="gfg">${GA.map(n=>WL.c>=n?`<button class="gfa${n==GN?' on':''}" data-a="gamt" data-i="${n}">${n}${CI}</button>`:`<button class="gfa off">${n}${CI}</button>`).join('')}</div>${WL.c>=GN?`<button class="play" data-a="gsend"><span>ОТПРАВИТЬ ${GN}</span>${CI}</button>`:'<button class="play off"><span>НЕ ХВАТАЕТ МОНЕТ</span></button>'}<p class="dn">${msg?esc(msg):'у тебя '+WL.c+' монет · деньги спишутся сразу'}</p></div>`)}
function gamt(i){GN=+i||25;gmodal(0,1)}
async function gsend(){if(GB||!PRO||!db||WL.c<GN)return;GB=1;const n=GN;
 try{await db.collection('gifts').add({to:PRO,from:uid,fn:me.name.slice(0,32),n,t:FV.serverTimestamp()});
  WL.c-=n;wsave();wsync();hz('notificationOccurred','success');GB=0;
  mo(`<div class="card dly gf"><div class="dtop"><h2>ОТПРАВЛЕНО!</h2><button class="dx" data-a="mc" aria-label="Закрыть">✕</button></div>${gbox(0,esc(PRN)+' получит','+'+n+CI)}<button class="play" data-a="mc">ЗАКРЫТЬ</button><p class="dn">монеты придут, когда игрок откроет игру</p></div>`)}
 catch(e){GB=0;console.warn('gift',e);gmodal('Не получилось отправить, монеты не списаны. Попробуй позже.')}}
async function gclaim(){if(!db||gcl)return;gcl=1;
 try{const q=await db.collection('gifts').where('to','==',uid).limit(20).get();let tot=0;const who=[];
  for(const d of q.docs){try{const v=await db.runTransaction(async tx=>{const z=await tx.get(d.ref);if(!z.exists)return null;tx.delete(d.ref);return z.data()});
   const n=v?Math.floor(Number(v.n)):0;if(n>0&&n<=100){tot+=n;who.push(String(v.fn||'игрок'))}}catch{}}
  if(tot){WL.c+=tot;wsave();wsync();gshow(tot,who,0)}}catch(e){console.warn('claim',e)}gcl=0}
function gshow(tot,who,k){if(k>40)return;if(cs!='m'||$('#md').classList.contains('on')){setTimeout(()=>gshow(tot,who,k+1),1500);return}
 hz('notificationOccurred','success');lock=performance.now()+250;
 mo(`<div class="card dly gf"><div class="dtop"><h2>ТЕБЕ ПОДАРОК!</h2><button class="dx" data-a="mc" aria-label="Закрыть">✕</button></div>${gbox(1,'от '+esc([...new Set(who)].slice(0,3).join(', ')),'+'+tot+CI)}<button class="play" data-a="mc">КРУТО</button></div>`)}
// --- ЛЮБИМЫЕ СКИНЫ: коллекционные карточки в профиле (до 3 шт). Тап по карточке = просмотр с наклоном от гироскопа ---
let FVO=0,FVL=[],FVI=0,FVT=[],FVR=0,FVD=0,FVG=0;
const FVS={rx:0,ry:0,tx:0,ty:0,dx:0,dy:0,b0:null,g0:null,h:0,tg:0};
const fvlist=w=>(Array.isArray(w.fv)?w.fv:[]).map(sk_).filter(Boolean).slice(0,3);
const CHC={il:['#ff5468','#b3122c'],ct:['#a98bff','#4a2bc2'],nc:['#ffa24a','#d4570a'],gb:['#54c8ff','#1b6fd1'],bl:['#8be85a','#2f9a1a'],ex:['#ffd23f','#ff4fa3']};
function fcard(q,ex=''){const c=CHC[q.ch]||CHC.il,P=SK.filter(z=>!z.d),n=P.indexOf(q)+1,by=q.u||q.a,cn=(CH.find(z=>z[0]==q.ch)||['',''])[1];
return `<div class="fc${ex}" style="--c1:${c[0]};--c2:${c[1]}"><div class="fc-in"><div class="fc-hd"><b>${esc(q.n)}</b></div><div class="fc-pic"><img src="${esc(pic(q))}" alt=""></div><div class="fc-rb">${esc(cn)}</div><div class="fc-ft"><div class="fc-by">${by?avt(q)+'<span>'+esc(anm(q))+'</span>':'<span>СПАСИ ЧАТ</span>'}</div><em>№${String(n).padStart(2,'0')}</em></div><span class="fc-foil"></span><span class="fc-gl"></span></div></div>`}
// выбор любимых (только свой профиль)
function fvedit(){FVT=(WL.fv||[]).filter(i=>{const q=sk_(i);return q&&ow(q)}).slice(0,3);fvpick(0)}
function fvpick(re){const sy=$('#md .fvp')?.scrollTop||0,L=SK.filter(ow);
mo(`<div class="card dly fvm${re?' nr':''}"><div class="dtop"><h2>ЛЮБИМЫЕ</h2><button class="dx" data-a="mc" aria-label="Закрыть">✕</button></div><p class="fvn">выбери до 3 скинов — они станут карточками в твоём профиле, их увидят все</p><div class="fvp"><div class="gd-in">${L.map(q=>{const k=FVT.indexOf(q.id);return `<button class="gt${k>=0?' on':''}" data-a="fvt" data-i="${esc(q.id)}">${img(q)}${k>=0?`<b class="tg">${k+1}</b>`:''}</button>`}).join('')}</div></div><button class="play" data-a="fvsave"><span>СОХРАНИТЬ · ${FVT.length}/3</span></button></div>`);
const p=$('#md .fvp');if(p)p.scrollTop=sy}
function fvt(i){const k=FVT.indexOf(i);if(k>=0)FVT.splice(k,1);else if(FVT.length<3)FVT.push(i);else{hz('notificationOccurred','warning');return}hz('selectionChanged');fvpick(1)}
function fvsave(){WL.fv=FVT.slice(0,3);wsave();wsync();hz('notificationOccurred','success');mc();if(cs=='pr'&&!PRO)prof()}
// просмотр карточки на весь экран
const fvEl=()=>{let e=$('#fv');if(!e){e=document.createElement('div');e.id='fv';document.body.appendChild(e)}return e};
function fvon(b,g){if(!(Number.isFinite(b)&&Number.isFinite(g)))return;const S=FVS;if(S.b0==null){S.b0=b;S.g0=g}
S.b0+=(b-S.b0)*.002;S.g0+=(g-S.g0)*.002;S.tx=C(-(b-S.b0)*1.1,-30,30);S.ty=C((g-S.g0)*1.1,-30,30);FVG=performance.now()}
function fvgyro(){const S=FVS;S.b0=S.g0=null;fvstop(1);
try{const o=T?.DeviceOrientation;if(o&&T.isVersionAtLeast?.('8.0')){S.tg=()=>{if(o.beta!=null&&o.gamma!=null)fvon(o.beta*57.2958,o.gamma*57.2958)};T.onEvent('deviceOrientationChanged',S.tg);o.start({refresh_rate:60,need_absolute:false})}}catch{S.tg=0}
if(window.DeviceOrientationEvent){const h=e=>fvon(e.beta,e.gamma),go=()=>{S.h=h;addEventListener('deviceorientation',h)};
try{typeof DeviceOrientationEvent.requestPermission=='function'?DeviceOrientationEvent.requestPermission().then(r=>r=='granted'&&go()).catch(()=>{}):go()}catch{}}}
function fvstop(keepLoop){const S=FVS;if(S.h)removeEventListener('deviceorientation',S.h);S.h=0;
try{if(S.tg){T.offEvent('deviceOrientationChanged',S.tg);T.DeviceOrientation.stop()}}catch{}S.tg=0;
if(!keepLoop){cancelAnimationFrame(FVR);FVR=0}}
function fvloop(n){FVR=requestAnimationFrame(fvloop);const c=$('#fvc');if(!c)return;const S=FVS,tt=n/1e3;let X,Y;
if(FVD){X=S.dx;Y=S.dy}else if(n-FVG<700){X=S.tx;Y=S.ty}else{X=Math.sin(tt*.8)*6;Y=Math.cos(tt*.6)*10}
S.rx+=(X-S.rx)*.14;S.ry+=(Y-S.ry)*.14;const m=c.style;
m.transform=`rotateX(${S.rx.toFixed(2)}deg) rotateY(${S.ry.toFixed(2)}deg)`;
m.setProperty('--mx',C(50+S.ry*1.7,0,100).toFixed(1)+'%');m.setProperty('--my',C(50-S.rx*1.7,0,100).toFixed(1)+'%');
m.setProperty('--px',(S.ry*-.35).toFixed(2)+'px');m.setProperty('--py',(S.rx*.35).toFixed(2)+'px')}
function fvpt(e){const r=$('#fvst').getBoundingClientRect(),S=FVS;S.dy=C((e.clientX-r.left-r.width/2)/(r.width/2)*30,-32,32);S.dx=C(-(e.clientY-r.top-r.height/2)/(r.height/2)*30,-32,32)}
function fvrender(dir){const e=fvEl(),q=FVL[FVI],n=FVL.length;if(!q)return;e.className='fvo on';
e.innerHTML=`<div class="fvbg" data-a="fvx"></div><button class="dx fvcl" data-a="fvx" aria-label="Закрыть">✕</button><div class="fvst${dir?(dir>0?' dr':' dl'):''}" id="fvst"><div class="fvc" id="fvc" data-a="fvnop">${fcard(q,' big')}</div></div><div class="fvnv">${n>1?'<button class="sec" data-a="fvn" data-i="-1">‹</button>':''}<div class="fvdots">${FVL.map((z,k)=>`<span class="${k==FVI?'on':''}"></span>`).join('')}</div>${n>1?'<button class="sec" data-a="fvn" data-i="1">›</button>':''}</div><p class="fvhint">наклоняй телефон или води пальцем${n>1?' · свайп — другая карточка':''}</p>`;
e.onpointerdown=ev=>{if(ev.target.closest('button'))return;FVD=1;FVS.sx=ev.clientX;FVS.sy=ev.clientY;FVS.st=performance.now();fvpt(ev)};
e.onpointermove=ev=>{if(FVD)fvpt(ev)};
e.onpointerup=e.onpointercancel=ev=>{if(!FVD)return;FVD=0;const dx=ev.clientX-FVS.sx,dy=ev.clientY-FVS.sy;if(Math.hypot(dx,dy)>12)lock=performance.now()+250;
if(ev.type=='pointerup'&&Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.4&&performance.now()-FVS.st<700)fvn(dx<0?1:-1)}}
function fvopen(i){FVI=+i||0;if(!FVL[FVI])return;FVO=1;FVD=0;hz('impactOccurred','medium');fvgyro();fvrender();if(!FVR)FVR=requestAnimationFrame(fvloop)}
function fvn(i){const n=FVL.length,k=+i||1;if(n<2)return;FVI=(FVI+k+n)%n;hz('selectionChanged');fvrender(k)}
function pfp(i){const s=$('#pr .pfs');if(s)s.scrollTo({left:s.clientWidth*(+i||0),behavior:'smooth'});hz('selectionChanged')}
function fvx(){FVO=0;FVD=0;fvstop();const e=$('#fv');if(e){e.classList.remove('on');e.innerHTML=''}}
const pback=()=>PF=='t'?showTop():menu();
async function prof(i){st='m';if(cs!='pr')PF=cs=='t'?'t':'m';const o=i&&i!=uid?i:null;PRO=o;const ld=hdr('ПРОФИЛЬ').replace('data-a="menu"','data-a="pback"')+'<div class="card"><p>загрузка…</p></div>';$('#pr').innerHTML=ld;scr('pr');let p;
if(!o){p={name:me.name,photo:me.photo,w:WL,k:dst().k,best,dbest}}
else{if(!db){$('#pr').innerHTML=hdr('ПРОФИЛЬ')+'<div class="card"><p>Firebase не подключён</p></div>';return}
try{const[w,s,j]=await Promise.all(['wallets','scores','scores_dj'].map(c=>db.collection(c).doc(o).get())),V=w.exists?w.data():{},S=s.exists?s.data():{},g=V.sd?dn()-V.sd:9;
p={name:V.name||S.name||'Игрок',photo:V.photo||S.photo||'',w:V,k:g<=1?V.sk|0:0,best:S.score|0,dbest:j.exists?j.data().score|0:0}}
catch{$('#pr').innerHTML=hdr('ПРОФИЛЬ')+'<div class="card"><p>не удалось загрузить</p></div>';return}}
if(cs=='pr')rpr(p)}
function rpr(p){PRN=p.name;const w=p.w,idc=v=>/^[a-z0-9_]{1,20}$/.test(v||'')?v:'',cl=(idc(w.fr)?' fr-'+idc(w.fr):'')+(idc(w.bg)?' bg-'+idc(w.bg):''),own=w.own||[],ch=w.ch||'il',eq=w.eq||{},
sk=sk_(eq[ch])||SK.find(z=>z.ch==ch&&(z.d||z.s))||sk_('il0'),bl=sk_(eq.bl)||sk_('bl0'),tot=SK.filter(z=>!z.d).length,h=(w.pl||0)/3600,
ti=h<1?'новичок':h<5?'завсегдатай':h<20?'ветеран чата':'легенда чата',ph=/^https:\/\//.test(p.photo||'')?p.photo:'',
S=[['ВРЕМЯ В ИГРЕ',hm(w.pl)],['ИГР СЫГРАНО',w.gm|0],['БОССОВ УБИТО',w.bk|0],['МОНЕТ',w.c|0],['РЕКОРД КЛАССИКА',p.best|0],['РЕКОРД ДУДЛ',p.dbest|0],['СКИНОВ',own.length+'/'+tot],['ЯЩИКОВ ОТКРЫТО',w.bx|0]];
const mine=!PRO,fv=fvlist(w).filter(z=>!mine||ow(z));FVL=fv;
const fvh=fv.length||mine?`<div class="fvs"><div class="fvh"><h4>ЛЮБИМЫЕ СКИНЫ</h4>${mine?'<button class="sec" data-a="fvedit">ИЗМЕНИТЬ</button>':''}</div><div class="fvr">${[0,1,2].map(i=>fv[i]?`<button class="fvb" data-a="fvopen" data-i="${i}">${fcard(fv[i])}</button>`:mine?'<button class="fvb fve" data-a="fvedit">+</button>':'').join('')}</div></div>`:'';
$('#pr').innerHTML=hdr('ПРОФИЛЬ').replace('data-a="menu"','data-a="pback"')+`<div class="card pf${cl}"><div class="pfb"><img class="pfk" src="${esc(pic(sk))}" alt=""><img class="pfl" src="${esc(pic(bl))}" alt=""></div><div class="pfn"><span class="av">${esc(([...(p.name||'?')][0]||'?').toUpperCase())}${ph?`<img src="${esc(ph)}">`:''}</span><div style="min-width:0"><h3>${esc(p.name)}</h3><small>${esc(sk.n)}</small></div><div class="fl${p.k?'':' cold'}">${flame(p.k,!p.k)}<span>${p.k}</span></div></div><div class="pft">${['РЕКОРДЫ','ПРОГРЕСС'].map((n,k)=>`<button class="${k?'':'on'}" data-a="pfp" data-i="${k}">${n}</button>`).join('')}</div><div class="pfs">${[[4,5,2,1],[0,3,6,7]].map(g=>`<div class="pfg">${g.map(k=>`<div><span>${S[k][0]}</span><b>${S[k][1]}</b></div>`).join('')}</div>`).join('')}</div>${fvh}<div class="pfa">${PRO?'<button class="play yl" data-a="gift">ПОДАРИТЬ МОНЕТЫ</button>':'<button class="play yl" data-a="frames">РАМКИ И ФОНЫ</button>'}</div></div>`;const sc=$('#pr .pfs');if(sc)sc.onscroll=()=>{const k=Math.round(sc.scrollLeft/sc.clientWidth);document.querySelectorAll('#pr .pft button').forEach((e,j)=>e.classList.toggle('on',j==k))}}

// --- Ввод (с защитой от лупы/выделения iOS при удержании пальца) ---
const isInputEl=el=>el&&(el.tagName=='INPUT'||el.tagName=='SELECT'||el.tagName=='TEXTAREA');
['touchstart','touchmove','touchend','gesturestart','selectstart','dragstart'].forEach(ev=>{
  document.addEventListener(ev,e=>{
    if(isInputEl(e.target))return;
    if(ev=='selectstart'||ev=='gesturestart'||ev=='dragstart'){e.preventDefault();return}
    if(e.target===cv)e.preventDefault();
  },{passive:false});
});
cv.onpointerdown=e=>{
  if(e.cancelable)e.preventDefault();
  if(st!='p')return;
  const gx=e.clientX*W/innerWidth,gyTap=e.clientY*H/innerHeight;
  if(gx>W-52&&gyTap<46){pause();return}
  if(D&&gx>W-88&&gyTap>=40&&gyTap<=78){djshot();return}
  const activeBo=D?D.bo:bo;
  if(activeBo&&((!D&&Math.hypot(gx-(W-40),gyTap-(gy+GH/2))<62)||(gyTap>activeBo.y-18&&gyTap<activeBo.y+BH+18&&Math.abs(gx-activeBo.x)<BW*.75))){D?djshot():thr();return}
  if(d){D?djshot():parry();return}
  d={id:e.pointerId,x:e.clientX,p:px,t:performance.now(),m:0};
  try{cv.setPointerCapture(e.pointerId)}catch{}
};
cv.onpointermove=e=>{if(!d||e.pointerId!=d.id)return;const v=(e.clientX-d.x)*W/innerWidth;if(Math.abs(v)>6)d.m=1;if(d.m)tx=d.p+v};
cv.onpointerup=cv.onpointercancel=e=>{if(!d||e.pointerId!=d.id)return;if(!d.m&&performance.now()-d.t<340)(D?djshot():parry());d=null};

// ===== ОРУЖИЕ: у каждого свой уровень 1-5 =====
/* Уровень: +6% радиуса и −5% паузы за каждый. Ур.3 — старт со щитом, ур.5 — +1 макс. жизнь. Цена апа: 150/300/500/800 (≈1950 = 1.6 ч игры). */
const WS={palm:'w_palm.webp',racket:'w_racket.webp',hammer:'w_hammer.webp',slip:'w_slip.webp'},WPV={"palm": [0.475, 0.97], "racket": [0.438, 0.97], "hammer": [0.385, 0.97], "slip": [0.506, 0.97]};
const WPN={palm:{n:'Ладонь',p:0,r:1,c:1,d:0,t:'Классика. Ничего лишнего.'},racket:{n:'Ракетка',p:250,r:1,c:1,d:0,sw:1,t:'Отбитый шар сбивает другие шары по пути'},hammer:{n:'Кувалда',p:500,r:1,c:1.6,d:1,t:'Удар ×2 урона, но пауза дольше'},slip:{n:'Тапок',p:350,r:.65,c:.35,d:0,t:'Мелкий радиус, зато бьёшь почти без пауз'}};
const WC=[150,300,500,800],WMS=[[3,'щит на старте'],[5,'+1 жизнь']];
const WI={};for(const k in WS){const m=new Image();m.src=WS[k];WI[k]=m}
const WV=k=>Math.min(5,(WL.wv||{})[k]|0||1),WR=k=>WPN[k].r*(1+.06*(WV(k)-1)),WZ=k=>WPN[k].c*(1-.05*(WV(k)-1));
const WK=()=>{const k=WL.we;return WPN[k]&&(k=='palm'||(WL.wp||[]).includes(k))?k:'palm'},WP=()=>WPN[WK()],WLV=()=>WV(WK());
let PK={rad:0,cdn:0,dmg:0,mag:0,hp:0,aeg:0},pc=0,LM=3,sw=0,AS=null;
const PR=()=>95*WR(WK())*(1+.25*PK.rad),PCD=()=>Math.max(.12,.8*WZ(WK())*(1-.2*PK.cdn)),PDM=()=>1+WP().d+PK.dmg;
function WDR(){const k=WK(),m=WI[k];if(!(m&&m.complete&&m.naturalWidth))return;const u=Math.max(0,sw/.22),h=50*SKS/1.16,w=h*m.naturalWidth/m.naturalHeight,v=WPV[k];x.save();x.translate(px+PW*SKS*.52,gy-PH*SKS*.36);x.rotate(.35-u*1.8);x.drawImage(m,-w*v[0],-h*v[1],w,h);x.restore()}
const PKL={rad:['Широкая ладонь','радиус парри +25%'],cdn:['Быстрые руки','пауза между парри −20%'],dmg:['Тяжёлый удар','+1 урон по врагу и боссу'],mag:['Магнит','монеты тянутся к тебе'],hp:['Запасное сердце','+1 макс. жизнь и лечит её'],aeg:['Контр-щит','каждые несколько отбитых шаров — щит']},PKM={rad:3,cdn:3,dmg:2,mag:3,hp:2,aeg:3};
function zcards(){const L=Object.keys(PKL).filter(k=>PK[k]<PKM[k]);for(let i=L.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[L[i],L[j]]=[L[j],L[i]]}const c=L.slice(0,3);if(!c.length)return;st='c';d=null;lock=performance.now()+350;hz('notificationOccurred','success');
mo(`<div class="card pkc"><h2>УЛУЧШЕНИЕ</h2><p>выбери одно · только на этот забег</p>${c.map(k=>`<button class="pk" data-a="zpick" data-i="${k}"><b>${PKL[k][0]}</b><span>${PKL[k][1]}</span><em>${'●'.repeat(PK[k]+1)}${'○'.repeat(PKM[k]-PK[k]-1)}</em></button>`).join('')}</div>`)}
function zpick(k){if(st!='c'||!PKL[k])return;PK[k]++;if(k=='hp'){LM++;lives=Math.min(LM,lives+1)}if(k=='aeg')pc=0;hz('impactOccurred','medium');mc();st='p';pop(px,gy-110,PKL[k][0].toUpperCase(),'#c3ff00')}
function rar(){const wk=WK(),own=q=>q=='palm'||(WL.wp||[]).includes(q);if(!WPN[AS])AS=wk;const q=AS,w=WPN[q],o=own(q),lv=WV(q),mx=lv>=5,cost=WC[lv-1],ms=WMS.find(z=>z[0]==lv+1);
$('#ar').innerHTML=hdr('ОРУЖИЕ')+`<div class="wg">${Object.keys(WPN).map(z=>`<button class="wt${z==q?' on':''}${own(z)?'':' lk'}" data-a="wsel" data-i="${z}"><img src="${WS[z]}" alt="">${z==wk?'<i>★</i>':''}<b>${own(z)?'ур.'+WV(z):'🔒'}</b></button>`).join('')}</div>
<div class="card wd"><div class="wdh"><div class="wpl"><img src="${WS[q]}" alt=""></div><div class="wdt"><h3>${w.n}</h3><p>${w.t}</p></div></div>
<div class="wst"><em>радиус ${Math.round(WR(q)*100)}%</em><em>пауза ${Math.round(WZ(q)*100)}%</em><em>урон ${1+w.d}</em></div>
<div class="wlv"><span>УРОВЕНЬ ${lv} из 5</span><i class="pips">${[1,2,3,4,5].map(n=>`<u${n<=lv?' class="on"':''}></u>`).join('')}</i></div>
<p class="wnx">${!o?'купи оружие, чтобы прокачивать':mx?'максимальный уровень':'след. ур.: радиус +6%, пауза −5%'+(ms?' · '+ms[1]:'')}</p>
<div class="wbt">${q==wk?'<button class="play ok static">✓ НАДЕТО</button>':o?`<button class="play" data-a="weq" data-i="${q}">НАДЕТЬ</button>`:`<button class="play yl${WL.c<w.p?' off':''}" data-a="wbuy" data-i="${q}"><span>КУПИТЬ ${w.p}</span>${CI}</button>`}
${o&&!mx?`<button class="sec yl wup${WL.c<cost?' off':''}" data-a="wup" data-i="${q}"><span>УЛУЧШИТЬ ${cost}</span>${CI}</button>`:''}</div></div>`+nav('a');cshow()}
function arsenal(){st='m';AS=null;rar();scr('ar')}
function wsel(k){if(!WPN[k])return;AS=k;hz('selectionChanged');rar()}
function wbuy(k){const w=WPN[k];if(!w||(WL.wp||[]).includes(k)||WL.c<w.p)return;WL.c-=w.p;(WL.wp=WL.wp||[]).push(k);(WL.wv=WL.wv||{})[k]=1;WL.we=k;wsave();wsync();hz('notificationOccurred','success');rar()}
function weq(k){if(!WPN[k]||!(k=='palm'||(WL.wp||[]).includes(k)))return;WL.we=k;wsave();wsync();hz('impactOccurred','light');rar()}
function wup(k){if(!WPN[k]||!(k=='palm'||(WL.wp||[]).includes(k)))return;const v=WV(k),c=WC[v-1];if(v>=5||WL.c<c)return;WL.c-=c;(WL.wv=WL.wv||{})[k]=v+1;wsave();wsync();hz('notificationOccurred','success');rar()}
// --- Синхронизация ника/аватарки: чинит записи «аноним» и устаревшие профили (один раз после смены ника/авы) ---
async function psync(){if(!db||!U)return;const f={name:me.name.slice(0,32),...PHO},pk=f.name+'|'+(f.photo||'');let ok_=1;
const ol=localStorage.uid;
if(ol&&ol!=uid&&!localStorage.mig){/* раньше человек открывал игру без Telegram-данных и сидел под случайным id — переносим рекорды на настоящий */
let fine=1;for(const c of['scores','scores_dj','wallets']){try{const r=db.collection(c).doc(ol),sn=await r.get();if(sn.exists){const d=sn.data()||{};if(c!='wallets'){const t=db.collection(c).doc(uid),ts=await t.get();if(!ts.exists||(Number(ts.data().score)||0)<(Number(d.score)||0))await t.set({...d,...f},{merge:true})}await r.delete()}}catch(e){fine=0}}
if(fine){localStorage.mig=1;wd=1;wsync()}}
if(localStorage.pk===pk&&localStorage.psv==='2'&&(!ol||ol==uid||localStorage.mig))return;
for(const c of['scores','scores_dj','wallets']){try{await db.collection(c).doc(uid).update(f)}catch(e){if(!(e&&e.code=='not-found'))ok_=0}}
if(ok_){localStorage.pk=pk;localStorage.psv='2'}}
const A={arsenal,wsel,wbuy,weq,wup,zpick,pfp,fvedit,fvt,fvsave,fvopen,fvx,fvn,frames,prof,pback,gift:gmodal,gamt,gsend,daily:dmodal,dclaim,dsave,drest,modes,dj:djstart,go,top:showTop,menu,res:resume,pause,shop,boxes,tab,sel,eq:wear,opn,mc,admin:adminPanel,admLoad:adminLoadPlayer,admPick:adminPick,admAdd:()=>adminCoins('add'),admSub:()=>adminCoins('sub'),admSet:()=>adminCoins('set'),admGrant:adminGrant,admRemove:adminRemove,admEquip:adminEquip,admScoreSet:()=>adminScore(false),admScoreClear:()=>adminScore(true),admWalletReset:adminWalletReset,admSkinCreate:adminSkinCreate,admSkinDel:adminSkinDelete};
document.onclick=e=>{if(performance.now()<lock)return;const el=e.target.closest('[data-a]');if(el)A[el.dataset.a]?.(el.dataset.i)};
document.addEventListener('keydown',e=>{if(FVO&&e.key=='Escape'){fvx();return}if(e.key=='Escape'||e.key=='p'||e.key=='P')st=='p'?pause():st=='pa'&&resume()});
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(st=='p')pause();if(ok()&&a>0)send()}else flush()});
addEventListener('online',()=>{flush();dflush()});
addEventListener('pageshow',()=>{if(Number(localStorage.pend)>0)flush()});
document.addEventListener('contextmenu',e=>e.preventDefault());

// --- Цикл ---
let l=0;
const fr=n=>{requestAnimationFrame(fr);const dt=Math.min(.033,(n-l)/1e3||0);l=n;if(st=='p'){WL.pl=(+WL.pl||0)+dt;pld=1;D?dup(dt):up(dt)}if(st=='p'||st=='o'||st=='pa'||st=='c')D?ddr():dr()};
setTimeout(()=>{if(cs=='m'&&st=='m'&&dst().s!='done')dmodal()},900);menu();setTimeout(psync,1500);if(Number(localStorage.pend)>0)setTimeout(()=>flush(),700);requestAnimationFrame(fr);
})();
