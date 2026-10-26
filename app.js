const dark=matchMedia('(prefers-color-scheme:dark)').matches;
const NG=()=>({role:null,name:'',age:'',phone:'',code:'',err:''});
const DOCCODE=(window.WAITLESS&&WAITLESS.DOC_CODE)||'DOC-2026';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const S={user:null,gate:NG(),tab:'home',l:'en',th:dark?'dark':'light',open:false,step:0,svc:null,doc:null,slot:null,toast:'',live:false,seenT:Date.now()};
const D0=()=>({st:'ok',sub:5,serving:12,pt:null,notifs:[{en:'Booked: doctor, 11:30 AM. Token A-17.',ur:'بکنگ ہو گئی: ڈاکٹر، صبح 11:30۔ ٹوکن A-17۔',t:1}]});
let SH=D0(),fbSet=null,bc=null;
try{const sv=JSON.parse(localStorage.getItem('wl_state')||'null');if(sv)SH={...D0(),...sv}}catch(e){}
function persist(){try{localStorage.setItem('wl_state',JSON.stringify(SH))}catch(e){}try{bc&&bc.postMessage(1)}catch(e){}if(fbSet)fbSet(SH).catch(()=>{S.live=false;R()})}const mine=17;
const DOCS=[{id:1,n:['Dr. Ayesha Khan','ڈاکٹر عائشہ خان']},{id:2,n:['Dr. Bilal Raza','ڈاکٹر بلال رضا'],st:'urgent',sub:4},{id:3,n:['Dr. Sara Ahmed','ڈاکٹر سارہ احمد'],st:'leave',sub:5},{id:4,n:['Dr. Hina Malik','ڈاکٹر حنا ملک'],st:'ok'},{id:5,n:['Dr. Omar Siddiqui','ڈاکٹر عمر صدیقی'],st:'ok'}];
const TX={ok:['Available','موجود','✅'],urgent:['Away urgently','ہنگامی طور پر باہر','🚨'],leave:['On leave','چھٹی پر','🌴'],na:['Not available','دستیاب نہیں','⏸️']};
const I={hi:['Hi','ہیلو'],wel:['Welcome','خوش آمدید'],who:['I am a…','میں ہوں…'],nmL:['Name','نام'],agL:['Age','عمر'],phL:['Phone number','فون نمبر'],cdL:['Doctor code','ڈاکٹر کوڈ'],go:['Continue','جاری رکھیں'],lo2:['Log out','لاگ آؤٹ'],e1:['Please fill every box','تمام خانے بھریں'],e2:['Wrong doctor code','ڈاکٹر کوڈ غلط ہے'],e3:['Check age and phone','عمر اور فون چیک کریں'],ahead:['ahead of you','آپ سے پہلے'],tok:['Your token','آپ کا ٹوکن'],now:['Now serving','اب باری'],min:['About','تقریباً'],mn:['min','منٹ'],nxt:['You’re next!','اگلی باری آپ کی!'],
home:['Home','ہوم'],book:['Book','بکنگ'],rep:['Reports','رپورٹس'],vis:['Visits','ملاقاتیں'],today:['Today','آج'],stat:['Status','حالت'],pat:['Patient','مریض'],doc:['Doctor','ڈاکٹر'],
nv:['Next visit','اگلی ملاقات'],q1:['What do you need?','آپ کو کیا چاہیے؟'],q2:['Choose a doctor','ڈاکٹر چنیں'],q3:['Choose a time','وقت چنیں'],test:['Test','ٹیسٹ'],ph:['Pharmacy','فارمیسی'],
ok:['Confirm','تصدیق کریں'],bk:['Back','واپس'],call:['Call next','اگلا بلائیں'],rec:['Open record','ریکارڈ'],sbd:['Instead:','متبادل:'],sb:['Substitute','متبادل ڈاکٹر'],nt:['Alerts','اطلاعات'],cl:['Close','بند کریں'],
fu:['Fri 6 Nov, 10:30 AM','جمعہ 6 نومبر، صبح 10:30'],ap:['Today 11:30 AM','آج صبح 11:30'],lv:['Live','لائیو'],lo:['Local only','صرف مقامی'],rs:['Reset demo','دوبارہ شروع']};
const t=k=>I[k][S.l=='en'?0:1],L=a=>a[S.l=='en'?0:1];
const REP=[['Urine test','پیشاب ٹیسٹ','⏳','Today 8:40 AM','آج صبح 8:40','Ready by 1 PM','دوپہر 1 بجے تک'],['Lipid profile','لپڈ پروفائل','✅','12 Sep','12 ستمبر','Ready 11 AM next day','اگلے دن 11 بجے'],['Blood test','خون ٹیسٹ','✅','12 Sep','12 ستمبر','Ready 4 PM','شام 4 بجے'],['ECG','ای سی جی','✅','3 Aug','3 اگست','Ready in 30 min','30 منٹ میں']];
const d=id=>id==1?{...DOCS[0],st:SH.st,sub:SH.sub}:DOCS.find(x=>x.id==id);
const nm=id=>L(DOCS.find(x=>x.id==id).n);
const wait=()=>Math.max(0,mine-SH.serving-1)*8;
const chip=s=>`<span class="chip ${s}">${TX[s][2]} ${L(TX[s])}</span>`;
function save(){R();persist()}
const push=(a,b)=>{SH.notifs=[{en:a,ur:b,t:Date.now()},...SH.notifs].slice(0,6)};
function R(){const A=document.getElementById('app');document.documentElement.dataset.theme=S.th;document.documentElement.lang=S.l;A.dir=S.l=='ur'?'rtl':'ltr';
const ctl=`<span class="pill ${S.live?'':'off'}">${S.live?'● '+t('lv'):t('lo')}</span><button class="ic" aria-label="Theme" onclick="S.th=S.th=='dark'?'light':'dark';R()">${S.th=='dark'?'☀️':'🌙'}</button><button class="ic" aria-label="Language" onclick="S.l=S.l=='en'?'ur':'en';R()">${S.l=='en'?'اردو':'EN'}</button>`;
const ts=S.toast?`<div class="toast">${S.toast}</div>`:'';
if(!S.user){A.innerHTML=`<div class="col"><header><div class="logo gl">wait<b>less</b></div>${ctl}</header><main><div class="in" style="max-width:520px">${gate()}</div></main></div>${ts}`;return}
const un=SH.notifs.filter(x=>x.t>S.seenT).length,P=S.user.role=='patient',tabs=P?[['home','🏠'],['book','📅'],['rep','🧪'],['vis','📋']]:[['today','👥'],['stat','🩺'],['pat','📋']];
const nv=()=>tabs.map(x=>`<button class="${S.tab==x[0]&&!S.open?'on':''}" onclick="G('${x[0]}')"><span>${x[1]}</span>${t(x[0])}</button>`).join('');
A.innerHTML=`<aside class="side"><div class="logo">wait<b>less</b></div>${nv()}</aside><div class="col"><header><div class="logo">wait<b>less</b></div>${ctl}
<button class="ic" aria-label="${t('nt')}" onclick="S.open=!S.open;S.seenT=Date.now();R()">🔔${un?`<i>${un}</i>`:''}</button>
<button class="ic" style="width:auto;padding:0 14px" onclick="logout()">${t('lo2')}</button></header>
<main><div class="in">${S.open?`<h2>${t('nt')}</h2>${SH.notifs.slice(0,4).map(x=>`<div class="card">${x[S.l]}</div>`).join('')}<button class="btn ghost" onclick="S.open=false;R()">${t('cl')}</button>`:V[S.tab]()}</div></main>
<nav class="tabs">${nv()}</nav></div>${ts}`}
const gate=()=>{const g=S.gate;
if(!g.role)return `<h2>${t('wel')}</h2><p class="sm">${t('who')}</p><button class="tile" onclick="S.gate.role='patient';R()"><span class="e">🧑</span>${t('pat')}</button><button class="tile" onclick="S.gate.role='doctor';R()"><span class="e">🩺</span>${t('doc')}</button>`;
const f=(k,v,x,ty)=>`<label class="sm">${t(k)}</label><input ${ty||''} maxlength="40" value="${esc(v)}" oninput="S.gate.${x}=this.value">`;
return `<h2>${t(g.role=='doctor'?'doc':'pat')}</h2>${f('nmL',g.name,'name','autocomplete="name"')}
${g.role=='patient'?f('agL',g.age,'age','inputmode="numeric"')+f('phL',g.phone,'phone','type="tel" autocomplete="tel"'):f('cdL',g.code,'code','type="password" autocomplete="off"')}
${g.err?`<div class="card alert">${t(g.err)}</div>`:''}<button class="btn" onclick="signup()">${t('go')}</button><button class="btn ghost" onclick="S.gate=NG();R()">${t('bk')}</button>`};
function signup(){const g=S.gate,nme=g.name.trim().slice(0,40);
 if(!nme){g.err='e1';return R()}
 if(g.role=='doctor'){if(g.code.trim()!==DOCCODE){g.err='e2';return R()}S.user={role:'doctor',name:nme}}
 else{const a=+g.age,p=g.phone.replace(/\D/g,'');if(!g.age||!g.phone.trim()){g.err='e1';return R()}if(!(a>0&&a<121)||p.length<7){g.err='e3';return R()}
  SH.pt={name:nme,age:a,phone:g.phone.trim().slice(0,20)};S.user={role:'patient',name:nme,age:a,phone:SH.pt.phone}}
 S.tab=S.user.role=='doctor'?'today':'home';S.gate=NG();store();S.user.role=='patient'?save():R()}
function store(){try{localStorage.setItem('wl_user',JSON.stringify(S.user))}catch(e){}}
function logout(){S.user=null;S.open=false;S.gate=NG();try{localStorage.removeItem('wl_user')}catch(e){}R()}
const ptn=()=>SH.pt?.name||L(['Sana','ثنا']);
function G(x){S.tab=x;S.open=false;S.step=0;R()}
function tst(m){S.toast=m;R();setTimeout(()=>{S.toast='';R()},2000)}
function setSt(s){SH.st=s;const n=nm(SH.sub),a=nm(1);
 s=='ok'?push('Dr. Ayesha Khan is back.','ڈاکٹر عائشہ خان واپس آ گئی ہیں۔'):push(`${a} is away. ${n} will see you.`,`${a} موجود نہیں۔ آپ کو ${n} دیکھیں گے۔`);save()}
function nx(){SH.serving=Math.min(SH.serving+1,mine);const a=mine-SH.serving-1;
 if(a==2)push('2 people ahead. Go to Room 4.','آپ سے پہلے 2 لوگ ہیں۔ کمرہ 4 میں جائیں۔');
 if(a==0)push('You’re next. Go to Room 4 now.','اگلی باری آپ کی ہے۔ ابھی کمرہ 4 میں جائیں۔');save()}
function reset(){SH=D0();S.seenT=Date.now();save()}
function done(){const s=S.svc;push(`Booked: ${s=='doc'?nm(S.doc):s=='test'?'test':'pharmacy'}, ${S.slot}.`,`بکنگ ہو گئی: ${s=='doc'?nm(S.doc):s=='test'?'ٹیسٹ':'فارمیسی'}، ${S.slot}۔`);S.step=0;S.svc=S.doc=S.slot=null;S.tab='home';persist();tst(S.l=='en'?'Booked ✅':'بکنگ ہو گئی ✅')}

const home=()=>{const x=d(1),bad=x.st!='ok',a=Math.max(0,mine-SH.serving-1),r=REP[0];
return `<h2>${t('hi')}${S.l=='en'?',':'،'} ${esc(S.user.name)} 👋</h2><div class="cols">
${bad?`<div class="card alert span"><div style="margin-bottom:6px">${chip(x.st)}</div><b>${nm(1)}</b><div>${t('sbd')} <b>${nm(x.sub)}</b></div></div>`:''}
<div class="hero span"><div class="ring" style="--p:${Math.min(100,(SH.serving-8)/(mine-8)*100)}"><div><div><span class="big">${a}</span><br><span class="sm">${t('ahead')}</span></div></div></div>
<div><div class="sm">${t('tok')}</div><div class="big"><bdi>A-17</bdi></div><div class="sm">${t('now')} <bdi>A-${SH.serving}</bdi></div><div style="font-weight:700;margin-top:4px">${a?`${t('min')} ${wait()} ${t('mn')}`:t('nxt')}</div></div></div>
<div class="card"><div class="sm">${t('nv')}</div><b>${t('ap')}</b><div class="sm">${bad?nm(x.sub):nm(1)}</div></div>
<div class="card"><div class="sm">${t('rep')}</div><b>${L([r[0],r[1]])} ${r[2]}</b><div class="sm">${L([r[5],r[6]])}</div></div></div>`};

const book=()=>{const b=S.step?`<button class="btn ghost" onclick="S.step=${S.step==3&&S.svc!='doc'?0:S.step-1};R()">${t('bk')}</button>`:'';
if(S.step==0)return `<h2>${t('q1')}</h2><div class="tiles cols">${[['doc','🩺'],['test','🧪'],['ph','💊']].map(x=>`<button class="tile" onclick="S.svc='${x[0]}';S.step=${x[0]=='doc'?1:2};R()"><span class="e">${x[1]}</span>${t(x[0])}</button>`).join('')}</div>`;
if(S.step==1)return `<h2>${t('q2')}</h2><div class="cols">${DOCS.slice(0,3).map(o=>{const x=d(o.id),bad=x.st&&x.st!='ok';return `<button class="tile" onclick="S.doc=${x.id};S.step=2;R()"><span><bdi>${nm(x.id)}</bdi>${bad?`<span class="sm">${chip(x.st)} ${t('sbd')} ${nm(x.sub)}</span>`:''}</span></button>`}).join('')}</div>${b}`;
if(S.step==2)return `<h2>${t('q3')}</h2><div class="grid">${['9:30','10:30','11:30','2:00','3:30','4:30'].map(x=>`<button class="tile" style="justify-content:center" onclick="S.slot='${x}';S.step=3;R()"><bdi>${x}</bdi></button>`).join('')}</div>${b}`;
return `<h2>${t('ok')}</h2><div class="card"><span style="font-size:40px">${S.svc=='doc'?'🩺':S.svc=='test'?'🧪':'💊'}</span><div><b>${S.svc=='doc'?nm(S.doc):t(S.svc)}</b></div><div class="big"><bdi>${S.slot}</bdi></div></div><button class="btn" onclick="done()">${t('ok')}</button>${b}`};

const reps=()=>`<div class="card">${REP.map(r=>`<div class="line"><div><b>${L([r[0],r[1]])}</b><div class="sm">${L([r[3],r[4]])} · ${L([r[5],r[6]])}</div></div><span style="font-size:30px">${r[2]}</span></div>`).join('')}</div>`;
const rep=()=>`<h2>${t('rep')}</h2>${reps()}`;
const vis=()=>`<h2>${t('vis')}</h2><div class="card alert"><div class="sm">${t('nv')}</div><b>${t('fu')}</b><div class="sm">${nm(1)}</div></div>
<div class="card"><div class="line"><span><b>12 ${S.l=='en'?'Sep':'ستمبر'}</b><div class="sm">${nm(1)}</div></div><span style="font-size:28px">🩺</span></div><div class="line"><span><b>3 ${S.l=='en'?'Aug':'اگست'}</b><div class="sm">${nm(2)}</div></div><span style="font-size:28px">❤️</span></div></div>`;
const today=()=>{const N=['Sana','Omar','Fatima','Hamza','Iqra'],U=['ثنا','عمر','فاطمہ','حمزہ','اقرا'];return `<div class="sm">${esc(S.user.name)}</div><div class="cols"><div class="hero"><div><div class="sm">${t('now')}</div><div class="big"><bdi>A-${SH.serving}</bdi></div></div></div><div><button class="btn" style="min-height:100%" onclick="nx()">${t('call')}</button></div></div>
<div class="card">${[1,2,3].map(i=>{const n=SH.serving+i,me=n==mine,k=(n*3)%5;return `<div class="line"><b><bdi>A-${n}</bdi> ${me?esc(ptn()):L([N[k],U[k]])}</b>${me?`<button class="btn ghost" style="width:auto;min-height:44px;font-size:15px" onclick="G('pat')">${t('rec')}</button>`:''}</div>`}).join('')}</div>`};
const stat=()=>`<h2>${t('stat')}</h2><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(130px,1fr))">${Object.keys(TX).map(k=>`<button class="tile ${SH.st==k?'on':''}" style="flex-direction:column;gap:6px;padding:18px 8px;font-size:16px;text-align:center" onclick="setSt('${k}')"><span class="e">${TX[k][2]}</span>${L(TX[k])}</button>`).join('')}</div>
${SH.st!='ok'?`<div class="card"><div class="sm" style="margin-bottom:6px">${t('sb')}</div><select onchange="SH.sub=+this.value;save()">${[5,4].map(i=>`<option value="${i}" ${SH.sub==i?'selected':''}>${nm(i)}</option>`).join('')}</select></div>`:''}
<button class="btn ghost" onclick="reset()">${t('rs')}</button>`;
const pat=()=>`<h2>${esc(ptn())} <bdi>A-17</bdi></h2>${SH.pt?`<div class="sm">${t('agL')} ${esc(SH.pt.age)} · ${esc(SH.pt.phone)}</div>`:''}${reps()}<div class="card alert"><div class="sm">${t('nv')}</div><b>${t('fu')}</b></div>`;
const V={home,book,rep,vis,today,stat,pat};
try{const u=JSON.parse(localStorage.getItem('wl_user')||'null');if(u&&(u.role=='patient'||u.role=='doctor')){S.user=u;S.tab=u.role=='doctor'?'today':'home'}}catch(e){}
R();
const loadLocal=()=>{try{const sv=JSON.parse(localStorage.getItem('wl_state')||'null');if(sv){SH={...D0(),...sv};R()}}catch(e){}};
try{bc=new BroadcastChannel('waitless');bc.onmessage=loadLocal}catch(e){}
addEventListener('storage',e=>{if(e.key=='wl_state')loadLocal()});
(async()=>{const c=window.WAITLESS&&WAITLESS.FIREBASE;if(!c||!c.databaseURL)return;
try{const U='https://www.gstatic.com/firebasejs/10.12.2/';const [{initializeApp},{getDatabase,ref,onValue,set}]=await Promise.all([import(U+'firebase-app.js'),import(U+'firebase-database.js')]);
const r=ref(getDatabase(initializeApp(c)),'waitless/state');fbSet=v=>set(r,v);
onValue(r,s=>{S.live=true;const v=s.val();if(v){SH={...D0(),...v};try{localStorage.setItem('wl_state',JSON.stringify(SH))}catch(e){}}else persist();R()},()=>{S.live=false;R()})}catch(e){S.live=false;R()}})();
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
