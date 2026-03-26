<script>
/* ===== DATA ===== */
const D=[
  {rank:1,name:"Bodh Gaya",tag:"Spiritual · UNESCO",cat:"spiritual unesco",emoji:"🪷",bg:"linear-gradient(135deg,#4a7c59,#2d5c3f)",desc:"Where Lord Buddha attained enlightenment. The Mahabodhi Temple is a UNESCO World Heritage Site drawing millions from 100+ countries each year.",loc:"Gaya District",entry:"Temple free · Museum ₹10",travel:"2hr from Patna",budget:2,lat:24.6961,lng:84.9914,ml:"32%",mt:"68%",badges:[{t:"#1 Must-See",c:"bg-leaf"},{t:"UNESCO",c:"bg-gold"}]},
  {rank:2,name:"Nalanda University Ruins",tag:"Historical · UNESCO",cat:"historical unesco",emoji:"🏛️",bg:"linear-gradient(135deg,#8b5e3c,#c8733a)",desc:"The world's oldest university (3rd century BC). Excavated monasteries, Nalanda Museum, ancient library complex that once held 9 million manuscripts.",loc:"Nalanda District",entry:"₹35 Indians · ₹600 Foreign",travel:"90km from Patna",budget:2,lat:25.1356,lng:85.4444,ml:"52%",mt:"54%",badges:[{t:"UNESCO",c:"bg-gold"},{t:"Oldest Uni",c:"bg-clay"}]},
  {rank:3,name:"Patna — Capital City",tag:"Cultural · City Hub",cat:"cultural historical",emoji:"🌆",bg:"linear-gradient(135deg,#d4a017,#a87a10)",desc:"One of the world's oldest continuously inhabited cities. Visit Golghar, Patna Museum, Bihar Museum, Mahavir Mandir and the Ganga ghats.",loc:"Patna District",entry:"Museum ₹50–₹150",travel:"Airport & Rail Hub",budget:3,lat:25.5941,lng:85.1376,ml:"43%",mt:"40%",badges:[{t:"Capital City",c:"bg-blue"},{t:"Travel Hub",c:"bg-clay"}]},
  {rank:4,name:"Rajgir",tag:"Historical · Nature",cat:"historical nature spiritual",emoji:"🏔️",bg:"linear-gradient(135deg,#3d2208,#7a4520)",desc:"Ancient Magadha capital. Ride the glass cable car to Vishwa Shanti Stupa, soak in natural hot springs, visit Vulture's Peak.",loc:"Nalanda District",entry:"₹100 ropeway · ₹30 hot springs",travel:"100km from Patna",budget:2,lat:25.0253,lng:85.4189,ml:"50%",mt:"60%",badges:[{t:"Ancient Capital",c:"bg-clay"},{t:"Hot Springs",c:"bg-leaf"}]},
  {rank:5,name:"Vaishali",tag:"Historical · Buddhist",cat:"historical spiritual",emoji:"🕊️",bg:"linear-gradient(135deg,#6b5b4e,#4a3828)",desc:"Birthplace of Lord Mahavira and home of one of the world's first republics (6th century BC). Ashoka Lion Pillar, ancient stupas, Lichchhavi Coronation Tank.",loc:"Vaishali District",entry:"Free entry",travel:"55km from Patna",budget:1,lat:25.6878,lng:85.1313,ml:"42%",mt:"30%",badges:[{t:"Free Entry",c:"bg-leaf"},{t:"World's 1st Republic",c:"bg-clay"}]},
  {rank:6,name:"Valmiki National Park",tag:"Nature · Wildlife",cat:"nature",emoji:"🐯",bg:"linear-gradient(135deg,#2d5c3f,#4a7c59)",desc:"Bihar's only tiger reserve on the Nepal border. Bengal tigers, Asian elephants, leopards and 300+ bird species. Best Nov–April.",loc:"West Champaran",entry:"₹150 Indians · ₹500 Foreign",travel:"300km from Patna",budget:3,lat:27.2940,lng:84.0268,ml:"18%",mt:"12%",badges:[{t:"Tiger Reserve",c:"bg-leaf"},{t:"Nepal Border",c:"bg-clay"}]},
  {rank:7,name:"Pawapuri — Jal Mandir",tag:"Jain Pilgrimage",cat:"spiritual",emoji:"🛕",bg:"linear-gradient(135deg,#c8733a,#a06030)",desc:"Sacred site where Lord Mahavira attained nirvana. Stunning white marble Jal Mandir sits in the middle of a lotus pond.",loc:"Nalanda District",entry:"Free entry",travel:"38km from Patna",budget:1,lat:25.2025,lng:85.5322,ml:"54%",mt:"50%",badges:[{t:"Free Entry",c:"bg-leaf"},{t:"Jain Pilgrimage",c:"bg-clay"}]},
  {rank:8,name:"Vikramshila University",tag:"Historical · Buddhist",cat:"historical",emoji:"📚",bg:"linear-gradient(135deg,#4a3828,#6b5b4e)",desc:"Ruins of the 8th-century Buddhist university by King Dharmapala. Less-crowded alternative to Nalanda with a great museum and Ganga views.",loc:"Bhagalpur District",entry:"₹25 Indians · ₹300 Foreign",travel:"250km from Patna",budget:2,lat:25.3100,lng:87.2500,ml:"82%",mt:"46%",badges:[{t:"8th Century AD",c:"bg-clay"}]},
  {rank:9,name:"Munger — Yoga City",tag:"Wellness · Cultural",cat:"yoga cultural",emoji:"🧘",bg:"linear-gradient(135deg,#2d4a6e,#1a2d42)",desc:"Home of the world-famous Bihar School of Yoga. Also features beautiful Ganga ghats, Mir Kasim fort ruins, and vibrant culture.",loc:"Munger District",entry:"Yoga courses from ₹500/day",travel:"180km from Patna",budget:3,lat:25.3706,lng:86.4736,ml:"70%",mt:"42%",badges:[{t:"Yoga Capital",c:"bg-blue"},{t:"International Ashrams",c:"bg-leaf"}]},
  {rank:10,name:"Kesaria Stupa",tag:"Buddhist · Historical",cat:"historical spiritual",emoji:"⛩️",bg:"linear-gradient(135deg,#5a4a3c,#8b6a50)",desc:"One of the world's largest Buddhist stupas built by King Ashoka. Where Lord Buddha reportedly gave away his begging bowl.",loc:"East Champaran",entry:"Free entry",travel:"110km from Patna",budget:1,lat:26.3040,lng:84.8682,ml:"35%",mt:"20%",badges:[{t:"Free Entry",c:"bg-leaf"},{t:"World's Largest Stupa",c:"bg-clay"}]},
  {rank:11,name:"Madhubani — Art City",tag:"Cultural · Folk Art",cat:"cultural",emoji:"🎨",bg:"linear-gradient(135deg,#8b2252,#c43a7a)",desc:"Famous for Madhubani paintings — intricate folk art with 2,500-year history. Visit artists in their villages and the Mithila Art Gallery.",loc:"Madhubani District",entry:"Gallery ₹20 · Village visits free",travel:"160km from Patna",budget:2,lat:26.3602,lng:86.0715,ml:"65%",mt:"18%",badges:[{t:"World-Famous Art",c:"bg-blue"}]},
  {rank:12,name:"Sitamarhi — Birthplace of Sita",tag:"Hindu Pilgrimage",cat:"spiritual",emoji:"🌸",bg:"linear-gradient(135deg,#7c3aed,#5b2db3)",desc:"Birthplace of Goddess Sita on the Ramayana Circuit. Visit Punaura Dham, Janki Mandir, and Sita Kund — a deeply sacred Hindu site.",loc:"Sitamarhi District",entry:"Free entry",travel:"160km from Patna",budget:1,lat:26.5921,lng:85.4900,ml:"47%",mt:"14%",badges:[{t:"Free Entry",c:"bg-leaf"},{t:"Ramayana Circuit",c:"bg-blue"}]},
  {rank:13,name:"Barabar Caves",tag:"Historical · Ancient",cat:"historical",emoji:"🪨",bg:"linear-gradient(135deg,#3a3a2a,#5a5a3c)",desc:"India's oldest surviving rock-cut caves (3rd century BC) by Emperor Ashoka. Inspired E.M. Forster's 'A Passage to India'. Hauntingly beautiful.",loc:"Jehanabad District",entry:"₹25 Indians · ₹300 Foreign",travel:"80km from Patna",budget:2,lat:25.0020,lng:85.0630,ml:"40%",mt:"62%",badges:[{t:"3rd Century BC",c:"bg-clay"},{t:"Ashoka Era",c:"bg-gold"}]},
  {rank:14,name:"Rohtasgarh Fort",tag:"Historical · Trekking",cat:"historical nature",emoji:"🏰",bg:"linear-gradient(135deg,#5a3a1a,#8b6a3a)",desc:"Magnificent medieval hill fort at 1,500 feet with panoramic Kaimur range views. One of India's most impressive and underrated forts.",loc:"Rohtas District",entry:"₹25 Indians · ₹300 Foreign",travel:"180km from Patna",budget:2,lat:24.5800,lng:83.8830,ml:"15%",mt:"74%",badges:[{t:"Medieval Fort",c:"bg-clay"},{t:"Trekking",c:"bg-leaf"}]},
  {rank:15,name:"Tomb of Sher Shah Suri",tag:"Historical · Architecture",cat:"historical",emoji:"🕌",bg:"linear-gradient(135deg,#2a3a5a,#3a5a8a)",desc:"Stunning 16th-century mausoleum on an artificial lake in Sasaram. Often called the 'Taj Mahal of Bihar' — one of India's finest tombs.",loc:"Rohtas District (Sasaram)",entry:"₹25 Indians · ₹300 Foreign",travel:"160km from Patna",budget:2,lat:24.9468,lng:84.0293,ml:"22%",mt:"64%",badges:[{t:"Taj Mahal of Bihar",c:"bg-blue"},{t:"1545 AD",c:"bg-clay"}]},
  {rank:16,name:"Golghar, Patna",tag:"Historical · Architecture",cat:"historical cultural",emoji:"🔵",bg:"linear-gradient(135deg,#1a5a8a,#0d3a5c)",desc:"18th-century British beehive granary with twin spiral staircases and panoramic Ganga views. One of Bihar's most iconic monuments.",loc:"Patna city centre",entry:"₹10 Indians · ₹100 Foreign",travel:"In Patna city",budget:1,lat:25.6131,lng:85.1431,ml:"44%",mt:"38%",badges:[{t:"1786 AD",c:"bg-clay"},{t:"Ganges Views",c:"bg-leaf"}]},
  {rank:17,name:"Mundeshwari Devi Temple",tag:"Spiritual · Ancient",cat:"spiritual historical",emoji:"🪬",bg:"linear-gradient(135deg,#8a2a2a,#c43a3a)",desc:"One of India's oldest temples, dating to 625 AD or earlier. Octagonal stone temple on Mundeshwari Hill with spectacular valley views.",loc:"Kaimur District",entry:"Free entry",travel:"180km from Patna",budget:1,lat:25.0380,lng:83.8780,ml:"14%",mt:"63%",badges:[{t:"Free Entry",c:"bg-leaf"},{t:"India's Oldest Temple",c:"bg-gold"}]},
  {rank:18,name:"Lauria Nandangarh",tag:"Buddhist · Historical",cat:"historical spiritual",emoji:"🗿",bg:"linear-gradient(135deg,#3a5a3a,#5a8a5a)",desc:"Perfectly preserved Ashokan pillar (243 BC), 10 metres tall with a lion capital. Surrounded by ancient earthen stupas — incredibly peaceful.",loc:"West Champaran",entry:"Free entry",travel:"230km from Patna",budget:1,lat:26.9924,lng:84.4046,ml:"28%",mt:"10%",badges:[{t:"Free Entry",c:"bg-leaf"},{t:"Ashoka Pillar 243 BC",c:"bg-gold"}]},
  {rank:19,name:"Bhagalpur — Silk City",tag:"Cultural · Crafts",cat:"cultural",emoji:"🧵",bg:"linear-gradient(135deg,#7a4a2a,#c87a3a)",desc:"Famous for Tussar silk weaving. Watch weavers create world-renowned 'Bhagalpuri silk'. Also features Ganga dolphin boat tours.",loc:"Bhagalpur District",entry:"Weaver villages free · Boat ₹100",travel:"250km from Patna",budget:2,lat:25.2425,lng:86.9842,ml:"78%",mt:"52%",badges:[{t:"Silk Capital",c:"bg-clay"},{t:"Ganga Dolphins",c:"bg-blue"}]},
  {rank:20,name:"Sonepur Mela",tag:"Cultural · Festival",cat:"cultural",emoji:"🐘",bg:"linear-gradient(135deg,#5a3a8a,#8a5ac8)",desc:"Asia's largest cattle fair, held every November at the Ganga-Gandak confluence. Elephants, camels, folk performers and thousands of traders.",loc:"Saran District",entry:"Free entry · November only",travel:"25km from Patna",budget:1,lat:25.7088,lng:85.1726,ml:"41%",mt:"32%",badges:[{t:"Asia's Biggest Fair",c:"bg-blue"},{t:"November Only",c:"bg-gold"}]}
];

/* ===== STATE ===== */
let uLat=null,uLng=null,sortMode='rank',activeFilter='';
let wishlist=JSON.parse(localStorage.getItem('bihar_wl')||'[]');
let wx={}, rates={ 'USD': 0.012, 'EUR': 0.011, 'GBP': 0.0094, 'JPY': 1.81, 'AUD': 0.018, 'CAD': 0.016, 'SGD': 0.016, 'THB': 0.43, 'CNY': 0.086, 'INR': 1 };

/* ===== GEO ===== */
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(p=>{
    uLat=p.coords.latitude;uLng=p.coords.longitude;
    document.getElementById('locName').textContent=uLat.toFixed(4)+'°N, '+uLng.toFixed(4)+'°E';
    document.getElementById('locDetail').textContent='✅ GPS detected — distances from your exact location';
    document.getElementById('navLoc').textContent='📍 Location detected';
    renderAll();
  },()=>{
    uLat=25.5135;uLng=86.1686;
    document.getElementById('locName').textContent='Chak Parna, Bihar';
    document.getElementById('locDetail').textContent='📍 Approximate location used';
    document.getElementById('navLoc').textContent='📍 Chak Parna, Bihar';
    renderAll();
  });
}else{renderAll();}

/* ===== HAVERSINE ===== */
function hav(a,b,c,d){
  const R=6371,r=Math.PI/180,dL=(c-a)*r,dG=(d-b)*r;
  const x=Math.sin(dL/2)**2+Math.cos(a*r)*Math.cos(c*r)*Math.sin(dG/2)**2;
  return Math.round(R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x)));
}

/* ===== WEATHER ===== */
function wIcon(c){if(c===0)return'☀️';if(c<=3)return'🌤️';if(c<=48)return'🌫️';if(c<=67)return'🌧️';if(c<=82)return'🌦️';return'⛈️';}
async function loadWeather(){
  await Promise.allSettled(D.map(async d=>{
    try{
      const r=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${d.lat}&longitude=${d.lng}&current_weather=true&timezone=Asia%2FKolkata`);
      const j=await r.json();
      wx[d.rank]={t:Math.round(j.current_weather.temperature),i:wIcon(j.current_weather.weathercode)};
    }catch(e){wx[d.rank]={t:'28',i:'🌤️'};}
  }));
  renderCards();
}

/* ===== CURRENCY FIXED ===== */
const CTARGETS=[
  {code:'INR',flag:'🇮🇳',name:'Indian Rupee'},
  {code:'USD',flag:'🇺🇸',name:'US Dollar'},
  {code:'EUR',flag:'🇪🇺',name:'Euro'},
  {code:'GBP',flag:'🇬🇧',name:'Brit. Pound'},
  {code:'JPY',flag:'🇯🇵',name:'Japanese Yen'},
  {code:'AUD',flag:'🇦🇺',name:'Aus. Dollar'},
  {code:'CAD',flag:'🇨🇦',name:'Can. Dollar'},
  {code:'SGD',flag:'🇸🇬',name:'Sing. Dollar'},
  {code:'THB',flag:'🇹🇭',name:'Thai Baht'},
  {code:'CNY',flag:'🇨🇳',name:'Chinese Yuan'},
];

async function loadRates(){
  try{
    const r=await fetch('https://api.frankfurter.app/latest?from=INR');
    const j=await r.json();
    if(j.rates) {
        Object.assign(rates, j.rates);
        rates['INR'] = 1;
    }
    doConvert();
  }catch(e){
    console.warn("API Offline, using backup rates");
    doConvert();
  }
}

function doConvert(){
  const amt=parseFloat(document.getElementById('curAmt').value)||0;
  const from=document.getElementById('curFrom').value;
  // Convert 'from' currency to INR base
  const inrBase = from === 'INR' ? amt : amt / rates[from];
  
  document.getElementById('curGrid').innerHTML=CTARGETS.map(c=>{
    const val = inrBase * rates[c.code];
    const disp=(c.code==='JPY'||c.code==='INR')?Math.round(val).toLocaleString():val.toFixed(2);
    return`<div class="cur-card"><div class="cur-flag">${c.flag}</div><div class="cur-amount">${disp}</div><div class="cur-name">${c.code} · ${c.name}</div></div>`;
  }).join('');
  document.getElementById('curNote').textContent='Rates updated live via Frankfurter · 1 INR ≈ '+(rates['USD']).toFixed(4)+' USD';
}

/* ===== WISHLIST ===== */
function saveWL(){localStorage.setItem('bihar_wl',JSON.stringify(wishlist));}
function isFav(r){return wishlist.includes(r);}
function toggleFav(r){
  if(isFav(r)){wishlist=wishlist.filter(x=>x!==r);toast('Removed from wishlist');}
  else{wishlist.push(r);toast('❤️ Added to wishlist!');}
  saveWL();updateWC();renderCards();renderWP();
}
function updateWC(){
  const el=document.getElementById('wCount');
  if(wishlist.length){el.textContent=wishlist.length;el.style.display='inline-flex';}
  else el.style.display='none';
}
function toggleWish(){
  document.getElementById('wishPanel').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
  renderWP();
}
function renderWP(){
  const body=document.getElementById('wpBody'),footer=document.getElementById('wpFooter');
  if(!wishlist.length){
    body.innerHTML='<div class="wp-empty"><div class="ei">🗺️</div><p>Your wishlist is empty.<br>Tap ❤️ Save on any card to add it here.</p></div>';
    footer.style.display='none';return;
  }
  footer.style.display='block';
  body.innerHTML=D.filter(d=>wishlist.includes(d.rank)).map(d=>`
    <div class="wi">
      <div class="wi-emoji">${d.emoji}</div>
      <div class="wi-info"><h4>${d.name}</h4><p>${d.tag} · ${d.loc}</p></div>
      <button class="wi-rm" onclick="toggleFav(${d.rank})">✕</button>
    </div>`).join('');
}
function shareWishlist(){
  const items=D.filter(d=>wishlist.includes(d.rank));
  const text='🌏 My Bihar Travel Wishlist:\n'+items.map((d,i)=>`${i+1}. ${d.emoji} ${d.name} — ${d.loc}`).join('\n')+'\n\nPlan yours free: '+location.href;
  window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
}

/* ===== SHARE & MAPS ===== */
function shareDest(rank){
  const d=D.find(x=>x.rank===rank);
  const text=`✈️ Check out ${d.emoji} ${d.name} in Bihar!\n\n${d.desc}\n📍 ${d.loc}\nExplore Bihar: ${location.href}`;
  window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
}
function openMaps(rank){
  const d=D.find(x=>x.rank===rank);
  window.open(`https://www.google.com/maps/search/${encodeURIComponent(d.name + " Bihar")}`,'_blank');
}

/* ===== RENDER CARDS ===== */
function getFiltered(){
  const s=document.getElementById('searchInput').value.toLowerCase();
  const c=activeFilter;
  return D.filter(d=>(!s||(d.name+d.tag+d.desc).toLowerCase().includes(s))&&(!c||d.cat.includes(c)));
}
function renderCards(){
  let data=getFiltered();
  if(sortMode==='distance'&&uLat) data=[...data].sort((a,b)=>hav(uLat,uLng,a.lat,a.lng)-hav(uLat,uLng,b.lat,b.lng));
  else if(sortMode==='budget') data=[...data].sort((a,b)=>a.budget-b.budget);
  const grid=document.getElementById('cardsGrid');
  document.getElementById('noResults').style.display=data.length?'none':'block';
  grid.innerHTML=data.map(d=>{
    const km=uLat?hav(uLat,uLng,d.lat,d.lng):null;
    const w=wx[d.rank];
    const fav=isFav(d.rank);
    return`<div class="card">
      <div class="card-img" style="background:${d.bg}">${d.emoji}
        <div class="card-img-overlay"></div>
        <div class="card-num">${String(d.rank).padStart(2,'0')}</div>
        <div class="card-badges">${d.badges.map(b=>`<span class="badge ${b.c}">${b.t}</span>`).join('')}</div>
        ${km!==null?`<div class="card-dist">📍 ${km} km</div>`:''}
        ${w?`<div class="weather-pill">${w.i} ${w.t}°C</div>`:''}
      </div>
      <div class="card-body">
        <div class="card-tag">${d.tag}</div>
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        <div class="card-meta"><span>📍 ${d.loc}</span><span>🎟️ ${d.entry}</span><span>🚌 ${d.travel}</span></div>
        <div class="card-actions">
          <button class="card-btn ${fav?'fav-on':''}" onclick="toggleFav(${d.rank})">${fav?'❤️ Saved':'🤍 Save'}</button>
          <button class="card-btn" onclick="openMaps(${d.rank})">🗺️ Google Maps</button>
          <button class="card-btn" onclick="shareDest(${d.rank})">📤 Share</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderNearest(){
  if(!uLat)return;
  document.getElementById('nearestStrip').style.display='block';
  const top=[...D].sort((a,b)=>hav(uLat,uLng,a.lat,a.lng)-hav(uLat,uLng,b.lat,b.lng)).slice(0,5);
  document.getElementById('nearestList').innerHTML=top.map(d=>`<div class="near-pill" onclick="jumpDist()">${d.emoji} ${d.name} <span class="near-dist">${hav(uLat,uLng,d.lat,d.lng)}km</span></div>`).join('');
}
function jumpDist(){
  sortMode='distance';
  document.querySelectorAll('.sort-bar button').forEach((b,i)=>b.classList.toggle('active',i===1));
  renderCards();
  document.getElementById('destinations').scrollIntoView({behavior:'smooth'});
}

function renderMap(){
  let html=D.map(d=>`<div class="pin" style="left:${d.ml};top:${d.mt}" onclick="openMaps(${d.rank})" title="${d.name}"><div class="pin-dot"><div class="pin-inner">${d.emoji}</div></div><div class="pin-label">${d.name}</div></div>`).join('');
  if(uLat){
    const ml=((uLng-83)/(88.5-83)*100).toFixed(1)+'%';
    const mt=((1-(uLat-23.5)/(28-23.5))*100).toFixed(1)+'%';
    html+=`<div class="pin you-pin" style="left:${ml};top:${mt}"><div class="pin-dot user-pin"><div class="pin-inner">📍</div></div><div class="pin-label">You are here</div></div>`;
  }
  document.getElementById('mapPins').innerHTML=html;
}

function renderAll(){renderCards();renderNearest();renderMap();}
function filterCards(){renderCards();}
function setFilter(btn,cat){
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');activeFilter=cat;
  document.getElementById('categorySelect').value=cat;renderCards();
}
function sortCards(mode,btn){
  sortMode=mode;
  document.querySelectorAll('.sort-bar button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');renderCards();
}

function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2300);
}

/* ===== AI PLANNER FIXED (Local Logic to avoid API errors) ===== */
let aiOpen=false;
function toggleAI(){aiOpen=!aiOpen;document.getElementById('aiPanel').classList.toggle('open',aiOpen);}
function aiQ(msg){document.getElementById('aiInp').value=msg;sendAI();}

function sendAI(){
  const inp=document.getElementById('aiInp');
  const msg=inp.value.trim();if(!msg)return;
  inp.value='';
  document.getElementById('aiChips').style.display='none';
  addAIMsg('user',msg);
  
  const tid=addTyping();
  
  // Simulated Expert AI logic (Fast and Error-Free)
  setTimeout(() => {
    removeTyping(tid);
    let reply = "That sounds like a great plan! Bihar has so much to offer. 🙏";
    const q = msg.toLowerCase();

    if(q.includes('buddhist')) {
      
