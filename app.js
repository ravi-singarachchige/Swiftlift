const paths={
 map:'<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><path d="M9 3v15M15 6v15"/>',
 route:'<circle cx="6" cy="5" r="3"/><path d="M9 5h8a4 4 0 0 1 0 8H7a4 4 0 0 0 0 8h11"/><circle cx="18" cy="21" r="2"/>',
 ticket:'<path d="M3 8V5h18v3a3 3 0 0 0 0 6v3H3v-3a3 3 0 0 0 0-6z"/><path d="M13 5v2m0 3v2m0 3v2"/>',
 user:'<circle cx="12" cy="7" r="4"/><path d="M4 21c0-5 3.6-8 8-8s8 3 8 8"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M10 21h4"/>',
 right:'<path d="m9 4 8 8-8 8"/>',left:'<path d="m15 4-8 8 8 8"/>',
 pin:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/>',
 check:'<path d="m4 12 5 5L20 6"/>',minus:'<path d="M5 12h14"/>',plus:'<path d="M12 5v14M5 12h14"/>',
 card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
 settings:'<path d="M12 2l2 2 3-.2.8 3 2.5 1.5-1 3 1 3-2.5 1.5-.8 3-3-.2-2 2-2-2-3 .2-.8-3L3.7 14l1-3-1-3 2.5-1.5.8-3L10 4z"/><circle cx="12" cy="11" r="3"/>',
 history:'<path d="M3 12a9 9 0 1 0 3-7M3 4v5h5"/><path d="M12 7v5l4 2"/>',
 alert:'<path d="M12 3 2 21h20z"/><path d="M12 9v5m0 3v.2"/>',
 mail:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="m2 7 10 7 10-7"/>',
 logout:'<path d="M9 4H4v16h5m5-4 4-4-4-4m4 4H8"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6m0-10v.1"/>',
 edit:'<path d="M12 20h9M16 3l5 5-12 12-6 1 1-6z"/>',
 home:'<path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/>',
 cart:'<circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M3 4h2l2.2 11h11.3l2-7H7"/>',
 help:'<circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 0 1 4.8 1c0 1.5-2.3 2-2.3 3.5"/><path d="M12 17h.01"/>',
 star:'<path d="m12 3 2.7 5.5L21 9.2l-4.5 4.4L17.5 20 12 17.3 6.5 20l1-6.4L3 9.2l6.3-.7z"/>',
 phone:'<path d="M6 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"/>',
 moon:'<path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V4h12"/>'
};
const ico=(name,size=22,stroke=1.8)=>`<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${paths[name]||paths.info}</svg>`;
const e=v=>String(v??'').replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
const money=v=>'$'+Number(v||0).toFixed(2);
const stamp=d=>d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
const addDays=n=>{const d=new Date();d.setDate(d.getDate()+n);return stamp(d);};
const PLACES=['University of Calgary','Maxwell Soccer Centre','Sunalta Station','City Hall','Chinook Station','Brentwood Station','Banff Trail Station','The Keg Stephen Avenue','My Location'];
const FARES=[{id:'youth',label:'Youth (6–17)',price:2.75},{id:'adult',label:'Adult (18–64)',price:3.75},{id:'senior',label:'Senior (65+)',price:2.75}];
const BASE_NOTICES=[
 {id:'n2',date:'Today',title:'Routes 2 and 36 are delayed',text:'Sample alert: routes 2 and 36 are about 10 minutes behind because of road construction. Open Find a route and compare the options before you leave.',time:'7:45 AM'},
 {id:'n1',date:'Today',title:'Your pass expires soon',text:'Your General Monthly Pass expires Nov 1. Renew it before you travel if you still need it.',time:'8:10 AM'},
 {id:'n3',date:'Yesterday',title:'Your ticket is ready',text:'Your adult single ticket is in Tickets. Choose Show ticket and hold the QR code to the scanner.',time:'4:32 PM'},
 {id:'n4',date:'Yesterday',title:'Red Line is back on time',text:'The earlier Red Line delay has cleared. This is a sample notice.',time:'2:15 PM'}
];
const HELP=[
 {title:'Board with your QR code',keywords:'board scan qr ticket show',steps:['Open SwiftLift and tap Show ticket on Home, or open Tickets and choose the active ticket.','Hold the code steady in front of the scanner. The screen says Show ticket, not a paper pickup.','Check the valid-until time on the ticket. If it is expired, buy another ticket.','The code in this prototype is a demo and will not open a real gate.']},
 {title:'Fare types',keywords:'fare youth adult senior price',steps:['Youth (6–17) and Senior (65+) are $2.75 in this sample fare table.','Adult (18–64) is $3.75.','Prices sit beside each ticket type. The total updates before you pay.','Fares are sample prices for the prototype, not a live Calgary Transit fare table.']},
 {title:'Refunds',keywords:'refund cancel pending status tracker',steps:['Open Tickets, then Ticket history & refunds.','Choose an unused single ticket and tap Request refund. Passes in this demo cannot be refunded in the app.','Review the amount and submit. You will not be charged again, and the ticket can no longer be used.','The status tracker shows Submitted, Approved, and Refunded with dates. Money returns to the original card. A new request is not finished on the same day.']},
 {title:'Find a route',keywords:'route plan trip saved home work',steps:['Tap Routes or Find a route.','Type a landmark. Suggestions appear as you type, so you do not need the exact civic address.','Or tap a saved place such as Home or Work.','Compare the options, including sample delays, then tap Select.','Save route keeps the trip on Home and in Notifications. Copy route lets you paste it into a message.']},
 {title:'Payment',keywords:'card pay apple google saved',steps:['Your saved Visa is already selected. You do not type the full card number again.','Choose Apple Pay or Google Pay only as a demo of those wallets. They use the same saved card.','Choose A different card to enter the last 4 digits only.','Last 4 of 0000 is declined. Last 4 of 9999 acts like the payment service did not respond. Any other 4 digits succeeds in this demo.','Nothing on this prototype charges a real card.']},
 {title:'Contact',keywords:'contact phone help call 403',steps:['Calgary Transit customer service: 403-262-1000.','This prototype cannot place a call. Use Copy number and phone them yourself.','For a lost bag or an accessibility request that this app does not cover, the phone line is the right next step.']}
];
const state={
 page:'home',history:[],signedIn:true,user:'river_rider',email:'rider@example.com',last4:'4242',
 routeOrigin:'',routeDestination:'',route:0,historyFilter:'All',refundTicket:'old-unused-1',
 qty:{youth:0,adult:0,senior:0},activeTicket:'pass-1',toast:'',modal:false,popup:null,
 notificationsRead:[],dark:false,large:false,payMethod:'saved',otherLast4:'',payError:'',routeError:'',
 helpQuery:'',processing:false,lastOrder:null,activeJourney:null,lastSection:'home',favEditError:'',
 favHome:'Sunalta Station',favWork:'University of Calgary',
 tickets:[
  {id:'pass-1',title:'Adult UofC Pass — Fall 2026',category:'Adult',expiry:'Jan 1, 2027',value:0,status:'ACTIVE',when:'Aug 15, 2026',sub:'Valid for the term'},
  {id:'pass-2',title:'General Monthly Pass',category:'Adult',expiry:'Nov 1, 2026',value:0,status:'ACTIVE',when:'Oct 1, 2026',sub:'Expires Nov 1, 2026'},
  {id:'old-unused-1',title:'Adult single ticket',category:'Adult',expiry:'Unused',value:3.60,status:'UNUSED',when:'Aug 24, 2026',sub:'Purchased at 10:07 AM'},
  {id:'old-unused-2',title:'Adult monthly pass',category:'Adult',expiry:'Refund in progress',value:112,status:'REFUND_PENDING',when:'Aug 21, 2026',sub:'Purchased at 3:46 PM'},
  {id:'seed-app',title:'Youth single ticket',category:'Youth',expiry:'Refund approved',value:2.75,status:'REFUND_PENDING',when:'Nov 18, 2026',sub:'Purchased at 8:12 AM'},
  {id:'seed-done',title:'Senior single ticket',category:'Senior',expiry:'Refunded',value:2.75,status:'REFUNDED',when:'Nov 10, 2026',sub:'Purchased at 5:02 PM'},
  {id:'hack',title:'Adult single ticket — Hackathon',category:'Adult',expiry:'Used',value:3.75,status:'USED',when:'Oct 18, 2026',sub:'Used at 9:37 AM'},
  {id:'u25',title:'Adult UPass 2025',category:'Adult',expiry:'Expired',value:0,status:'EXPIRED',when:'Sep 1, 2025',sub:'Expired'}
 ],
 refunds:[
  {id:'r-sub',ticketId:'old-unused-2',title:'Adult monthly pass',value:112,status:'Submitted',submitted:'Nov 24, 2026',approved:null,refunded:null,expectedApprove:'Nov 26, 2026',expectedRefund:'Dec 1, 2026',method:'Visa •••• 4242'},
  {id:'r-app',ticketId:'seed-app',title:'Youth single ticket',value:2.75,status:'Approved',submitted:'Nov 20, 2026',approved:'Nov 22, 2026',refunded:null,expectedApprove:'Nov 22, 2026',expectedRefund:'Nov 27, 2026',method:'Visa •••• 4242'},
  {id:'r-done',ticketId:'seed-done',title:'Senior single ticket',value:2.75,status:'Refunded',submitted:'Nov 12, 2026',approved:'Nov 14, 2026',refunded:'Nov 18, 2026',expectedApprove:'Nov 14, 2026',expectedRefund:'Nov 18, 2026',method:'Visa •••• 4242'}
 ]
};
let toastTimer;
function ticketById(id){return state.tickets.find(t=>t.id===id)}
function refundFor(id){return state.refunds.find(r=>r.ticketId===id)}
function refundable(t){return !!t && t.value>0 && (t.status==='UNUSED'||t.status==='ACTIVE') && !refundFor(t.id)}
function boardable(){return [ticketById(state.activeTicket),...state.tickets].find(t=>t&&(t.status==='ACTIVE'||t.status==='UNUSED'))}
function buildRoutes(dest){
 const d=dest||'your stop';
 return [
  {label:`Red Line to Brentwood, then Bus 8 toward ${d}`,minutes:15,first:6,wait:1,last:8,via:'Brentwood Station',service:'Bus 8',leg1:'Red Line CTrain',delayed:false,badge:'Fastest'},
  {label:`Train 3 to Sunnyside, then Bus 12 toward ${d}`,minutes:19,first:9,wait:2,last:8,via:'Sunnyside Station',service:'Bus 12',leg1:'Train 3',delayed:true,delayText:'Train 3 is about 3 minutes behind (sample).'},
  {label:`Bus 32 to Brentwood, then Route 36 toward ${d}`,minutes:23,first:11,wait:3,last:9,via:'Brentwood Station',service:'Route 36',leg1:'Bus 32',delayed:true,delayText:'Route 36 is about 10 minutes behind (sample). Routes 2 and 36 share this alert.'}
 ];
}
function currentRoutes(){return buildRoutes(state.routeDestination||'University of Calgary')}
function sectionOf(p){
 if(p==='notifications') return state.lastSection||'home';
 let s='home';
 if(p.startsWith('route')) s='routes';
 else if(p==='ticket-buy'||p==='ticket-summary'||p==='ticket-success') s='buy';
 else if(p.startsWith('ticket')||p.startsWith('refund')) s='tickets';
 else if(['profile','signup','login','settings','change-card','edit-info','help','saved-places'].includes(p)) s='profile';
 state.lastSection=s;
 return s;
}
function go(page){
 state.history.push(state.page);state.page=page;state.modal=false;state.popup=null;
 if(page!=='ticket-summary') state.payError='';
 render();
}
function homeReset(){state.history=[];state.page='home';state.modal=false;state.popup=null;state.processing=false;state.payError='';render()}
function back(){
 if(state.page==='ticket-success'||state.page==='refund-submitted'){homeReset();return}
 if(state.page==='route-options') state.routeError='';
 state.page=state.history.pop()||'home';state.modal=false;state.popup=null;render();
}
function toast(message){state.toast=message;render(false);clearTimeout(toastTimer);toastTimer=setTimeout(()=>{state.toast='';render(false)},3200)}
function total(){return FARES.reduce((sum,x)=>sum+(state.qty[x.id]||0)*x.price,0)}
function methodLast4(){return state.payMethod==='other'?state.otherLast4.trim():state.last4}
function methodLabel(){
 if(state.payMethod==='apple') return 'Apple Pay · Visa •••• '+state.last4;
 if(state.payMethod==='google') return 'Google Pay · Visa •••• '+state.last4;
 if(state.payMethod==='other') return 'Card •••• '+state.otherLast4.trim();
 return 'Saved Visa •••• '+state.last4;
}
function notices(){
 const list=[];
 if(state.activeJourney){
  const j=state.activeJourney;
  list.push({id:'journey',date:'Today',title:'Current trip',text:`${j.origin} to ${j.destination}. About ${j.minutes} minutes. ${j.delayText||'No delay on this sample route.'}`,time:'Now'});
 }
 return list.concat(BASE_NOTICES);
}
function unreadCount(){return notices().filter(n=>!state.notificationsRead.includes(n.id)).length}
function matches(q){
 const s=(q||'').trim().toLowerCase();
 if(s.length<1) return [];
 return PLACES.filter(p=>p.toLowerCase().includes(s) && p.toLowerCase()!==s).slice(0,4);
}
function statusWord(t){
 if(refundFor(t.id)) return refundFor(t.id).status;
 if(t.status==='ACTIVE') return 'Active';
 if(t.status==='UNUSED') return 'Unused';
 if(t.status==='USED') return 'Used';
 if(t.status==='EXPIRED') return 'Expired';
 if(t.status==='REFUNDED') return 'Refunded';
 if(t.status==='REFUND_PENDING') return 'Refund in progress';
 return t.status;
}
function tracker(r){
 const steps=[['Submitted',r.submitted],['Approved',r.approved||('Expected '+r.expectedApprove)],['Refunded',r.refunded||('Expected '+r.expectedRefund)]];
 const idx=['Submitted','Approved','Refunded'].indexOf(r.status);
 return `<ol class="tracker" aria-label="Refund progress">${steps.map((s,i)=>`<li class="${i<idx?'done':i===idx?'current':'todo'}"><span class="dot" aria-hidden="true"></span><span><strong>${s[0]}</strong><br><span class="tiny">${e(s[1])}</span></span></li>`).join('')}</ol><p class="small">Returns to ${e(r.method)}. ${r.status==='Refunded'?'This refund is complete.':'Expected completion '+e(r.expectedRefund)+'. A refund is not instant.'}</p>`;
}
function errBox(msg){return msg?`<div class="errbox" role="alert">${e(msg)}</div>`:''}
function tip(text){return `<div class="tip">${text}</div>`}
function entryCard(icon,label,page){return `<button class="link-card" data-page="${page}"><span class="left-icon">${ico(icon,22)}</span><span class="grow">${e(label)}</span><span class="right-icon">${ico('right',18)}</span></button>`}
function switchRow(label,hint,on,action){return `<button type="button" class="switch-row" data-action="${action}" aria-pressed="${on}"><span class="grow"><strong>${e(label)}</strong><div class="tiny muted">${e(hint)}</div></span><span class="switch ${on?'on':''}" aria-hidden="true"></span></button>`}
function nav(){
 const active=sectionOf(state.page);
 const items=[['home','home','Home','home'],['routes','map','Routes','route-search'],['buy','cart','Buy Tickets','ticket-buy'],['tickets','ticket','Tickets','ticket-home'],['profile','user','Profile','profile']];
 return `<footer class="bottom"><div class="bottom-menu">${items.map(([id,icon,label,page])=>`<button type="button" class="nav-item ${active===id?'active':''}" data-nav="${page}" ${active===id?'aria-current="page"':''}><span class="navicon">${ico(icon,21)}</span><span>${label}</span></button>`).join('')}</div><div class="home-indicator"></div></footer>`;
}
function statusbar(){return `<div class="statusbar" aria-hidden="true"><span>8:24</span><span class="status-icons"><span class="signal"><i></i><i></i><i></i><i></i></span><span class="battery"><i style="width:70%"></i></span></span></div>`}
function header(){
 const titles={home:'SwiftLift','route-search':'Find a route','route-options':'Route options','route-detail':'Route details','ticket-home':'Tickets','ticket-view':'Your ticket','ticket-buy':'Buy Tickets','ticket-summary':'Purchase summary','ticket-success':'Payment complete',profile:'Profile',signup:'Sign up',login:'Log in',settings:'Settings','change-card':'Payment card','edit-info':'Edit profile',notifications:'Notifications','ticket-history':'Ticket history','refund-select':'Refund ticket','refund-review':'Review refund','refund-submitted':'Refund submitted',help:'Help', 'saved-places':'Saved places'};
 const page=state.page;
 const noBack=new Set(['home','ticket-home','profile','ticket-success','refund-submitted']);
 const n=unreadCount();
 return `<header class="topbar">${noBack.has(page)?'':`<button class="icon-btn back" aria-label="Go back" data-action="back">${ico('left',23)}</button>`}<div class="page-title">${e(titles[page]||'SwiftLift')}</div><button class="icon-btn bell" data-page="notifications" aria-label="Notifications${n?`, ${n} unread`:''}">${ico('bell',22)}${n?`<span class="badge">${n}</span>`:''}</button></header>`;
}
function placeChips(){
 return `<div class="chips"><span class="chip-label">Saved places</span><button type="button" class="chip" data-action="use-fav" data-fav="home">Home · ${e(state.favHome)}</button><button type="button" class="chip" data-action="use-fav" data-fav="work">Work · ${e(state.favWork)}</button><button type="button" class="chip" data-page="saved-places">Edit</button></div>`;
}
function home(){
 const t=boardable();
 const j=state.activeJourney;
 return `<section class="home-main">
 <button class="home-alert" data-page="notifications"><span class="alert-icon">${ico('alert',28)}</span><span class="grow"><span class="sample-tag">Sample alert</span><strong style="font-size:15px">Routes 2 and 36 are delayed</strong><span class="small">About 10 minutes. Tap for details.</span></span><span class="accent">${ico('right',20)}</span></button>
 ${j?`<div class="journey"><span class="sample-tag">Current trip</span><strong>${e(j.origin)} → ${e(j.destination)}</strong><div class="small" style="margin-top:4px">About ${j.minutes} minutes. ${e(j.delayText||'No delay on this sample route.')}</div><div class="row"><button type="button" class="pill-btn" data-action="open-journey">View route</button><button type="button" class="pill-btn outline" data-action="clear-trip-ask">Clear trip</button></div></div>`:''}
 ${t&&(t.status==='ACTIVE'||t.status==='UNUSED')?`<button class="show-ticket-bar" data-action="show-active"><span class="accent">${ico('ticket',26)}</span><span class="grow"><span class="sample-tag">Shortcut</span><strong>Show ticket</strong><span class="small">${e(t.title)} · ${e(t.expiry)}</span></span>${ico('right',18)}</button>`:''}
 ${entryCard('map','Find a route','route-search')}
 ${entryCard('cart','Buy Tickets','ticket-buy')}
 ${entryCard('user','Profile','profile')}
 <p class="tiny" style="margin:4px 2px 0">Shortcuts below fill a saved place so you do not retype it.</p>
 ${placeChips()}
 </section>`;
}
function routeSearch(){
 return `<div class="route-form">
 <div class="route-inputs">
  <label class="field-label" for="from-field">From</label>
  <input id="from-field" class="route-input" data-bind="routeOrigin" placeholder="Stop, station, or landmark" value="${e(state.routeOrigin)}" autocomplete="off"/>
  <div class="suggest-box" id="suggest-routeOrigin"></div>
  <label class="field-label" for="to-field">To</label>
  <input id="to-field" class="route-input" data-bind="routeDestination" placeholder="Where are you going?" value="${e(state.routeDestination)}" autocomplete="off"/>
  <div class="suggest-box" id="suggest-routeDestination"></div>
 </div>
 ${errBox(state.routeError)}
 <button class="pill-btn route-search-btn" data-action="search-route">Find routes ${ico('right',18)}</button>
 </div>
 ${placeChips()}
 <div class="search-map"><img class="map-picture" src="${MAP_IMAGE}" alt="Sample Calgary transit map. Not live vehicle locations."/></div>
 <p class="screen-note">Sample map for this prototype. Times are not live.</p>`;
}
function locationStrip(){
 return `<div class="route-strip"><span class="route-location">${ico('pin',18)}<span>${e(state.routeOrigin||'My Location')}</span></span>${ico('right',22)}<span class="route-location">${ico('pin',18)}<span>${e(state.routeDestination||'Destination')}</span></span></div>`;
}
function options(){
 const routes=currentRoutes();
 return locationStrip()+(state.routeError?`<div class="pad">${errBox(state.routeError)}</div>`:'')+`<div class="route-list">${routes.map((r,i)=>`<button class="route-option ${i===state.route?'selected':''}" data-action="select-route" data-index="${i}"><span class="route-num">${i+1}</span><span class="desc"><span>${e(r.label)}</span>${r.badge?`<div class="badge-fast">${e(r.badge)}</div>`:''}${r.delayed?`<div class="tiny" style="color:#9a3040;margin-top:4px">${e(r.delayText)}</div>`:''}</span><span class="time">${r.minutes} min</span><span class="end-arrow">${ico('right',18)}<span class="tiny">Select</span></span></button>`).join('')}</div><div class="delay-box"><strong>Sample delays for these options</strong><br>Train 3 is about 3 minutes behind. Route 36 is about 10 minutes behind. Routes 2 and 36 are the network alert from Home.</div><p class="screen-note">Times are samples so you can compare options. They are not live departures.</p>`;
}
function routeText(){
 const r=currentRoutes()[state.route]||currentRoutes()[0];
 return `SwiftLift sample route\nFrom: ${state.routeOrigin||'My Location'}\nTo: ${state.routeDestination}\n${r.label}\nAbout ${r.minutes} minutes.\n1. ${r.leg1} to ${r.via} (${r.first} min)\n2. Wait at ${r.via} (${r.wait} min)\n3. ${r.service} to ${state.routeDestination} (${r.last} min)\n${r.delayText||'No delay on this option.'}\nSample itinerary, not live transit data.`;
}
function routeDetail(){
 const r=currentRoutes()[state.route]||currentRoutes()[0];
 return locationStrip()+`<div class="route-detail">
 ${r.delayed?`<div class="delay-box">${e(r.delayText)} You can still select this option or go back and pick a faster one.</div>`:''}
 <div class="route-summary-grid"><img class="route-mini-map" src="${MAP_IMAGE}" alt="Sample map of the selected route"/><div class="summary-box"><strong>Option ${state.route+1}</strong><div>About <strong>${r.minutes} min</strong></div><div class="tiny">Sample time, not a live ETA</div></div></div>
 <div class="step-card card"><span class="stepnum">1</span><span class="grow">${e(r.leg1)} to ${e(r.via)}</span><span class="step-time">${r.first} min</span></div>
 <div class="step-card card"><span class="stepnum">2</span><span class="grow">Wait at ${e(r.via)} for ${e(r.service)}</span><span class="step-time">${r.wait} min</span></div>
 <div class="step-card card"><span class="stepnum">3</span><span class="grow">${e(r.service)} to ${e(state.routeDestination||'your stop')}</span><span class="step-time">${r.last} min</span></div>
 <div class="route-detail-buttons"><button class="pill-btn" data-action="save-route">Save route</button><button class="pill-btn light" data-action="copy-route">Copy route</button></div>
 <div class="route-detail-buttons"><button class="pill-btn outline" data-nav="home">Home</button><button class="pill-btn" data-page="ticket-buy">Buy Tickets</button></div>
 <button class="text-btn" data-action="save-dest" data-fav="home">Save “${e(state.routeDestination)}” as Home</button>
 <button class="text-btn" data-action="save-dest" data-fav="work">Save “${e(state.routeDestination)}” as Work</button>
 </div>`;
}
function ticketHome(){
 const active=state.tickets.filter(t=>t.status==='ACTIVE'||t.status==='UNUSED');
 return `<div class="pad">${tip('<strong>Show ticket</strong> is also on Home, so you can board without opening Profile.')}
 ${entryCard('history','Ticket history & refunds','ticket-history')}
 ${entryCard('cart','Buy Tickets','ticket-buy')}
 <h2 class="section-red">Ready to board</h2>
 ${active.map(t=>`<div class="card" style="padding:12px;margin-bottom:10px"><button class="ticket-mini" style="width:100%;margin:0;box-shadow:none" data-action="view-ticket" data-id="${e(t.id)}"><span class="minibody"><strong>${e(t.title)}</strong><p>${e(statusWord(t))} · ${e(t.sub)}</p><div class="expiry">${t.value?money(t.value)+' · ':''}${e(t.expiry)}</div></span><span class="chev">${ico('right',22)}</span></button>${refundable(t)?`<button class="text-btn" data-action="start-refund" data-id="${t.id}">Request refund</button>`:''}</div>`).join('')}
 <p class="hint">Demo tickets only. They are not valid for travel.</p></div>`;
}
function qrTicket(){
 const found=ticketById(state.activeTicket)||state.tickets[0];
 const blocked=found.status==='REFUNDED'||found.status==='REFUND_PENDING'||found.status==='USED'||found.status==='EXPIRED';
 return `<div class="pad">${blocked?errBox('This ticket cannot be shown for boarding. Status: '+statusWord(found)+'. Pick an active ticket or buy another.'):''}
 <div class="qr-panel"><div class="qr-white"><strong>Show ticket</strong><div class="small" style="color:#333;margin-top:4px">${e(found.title)}</div><img src="${QR_IMAGE}" alt="Demo QR code. Not valid for transit."/><div class="demo-mark">Demo QR — not valid for transit</div></div><div class="qr-valid">${blocked?'Not valid to board':'Valid until 9:24 PM · sample'}</div></div>
 ${tip('Hold the code steady in front of the scanner. You do not collect a paper ticket.')}
 <div class="between" style="margin-top:8px"><button class="pill-btn outline" data-nav="ticket-home">Tickets</button><button class="pill-btn" data-nav="home">Done</button></div>
 ${refundable(found)?`<button class="text-btn" style="width:100%" data-action="start-refund" data-id="${found.id}">Request a refund for this unused ticket</button>`:''}
 </div>`;
}
function ticketBuy(){
 return `<div class="pad"><h3 class="section-title">Choose tickets</h3><p class="bodycopy">Prices are samples. Add at least one ticket. You can buy up to 20 of each type.</p>
 ${FARES.map(f=>`<div class="purchase-option"><div class="name"><strong>${e(f.label)}</strong><p>${money(f.price)} each</p></div><div class="stepper"><button class="round-step" aria-label="Remove one ${e(f.label)}" data-action="quantity" data-id="${f.id}" data-delta="-1" ${state.qty[f.id]<=0?'disabled':''}>${ico('minus',16)}</button><span class="count" aria-live="polite">${state.qty[f.id]}</span><button class="round-step" aria-label="Add one ${e(f.label)}" data-action="quantity" data-id="${f.id}" data-delta="1">${ico('plus',16)}</button></div></div>`).join('')}
 ${total()===0?'<p class="small">Add at least one ticket to continue.</p>':`<p class="small">Total so far <strong>${money(total())}</strong></p>`}
 <button class="pill-btn full" data-action="continue-order" ${total()===0?'disabled':''}>Continue</button></div>`;
}
function purchaseSummary(){
 const lines=FARES.filter(f=>state.qty[f.id]>0);
 return `<div class="pad"><h3 class="section-title">Your tickets</h3><div class="summary-box-card">${lines.map(f=>`<div class="summary-line"><div><strong>${e(f.label)}</strong><div class="small muted">${state.qty[f.id]} × ${money(f.price)}</div></div><b>${money(state.qty[f.id]*f.price)}</b></div>`).join('')}<div class="summary-line summary-total"><span>Total</span><span>${money(total())}</span></div></div>
 <h3 class="section-title">How do you want to pay?</h3>
 <p class="small">This demo never asks for a full card number and does not charge a real card.</p>
 ${[['saved','Saved Visa •••• '+state.last4,'Selected by default'],['apple','Apple Pay','Demo wallet, uses the saved card'],['google','Google Pay','Demo wallet, uses the saved card'],['other','A different card','Last 4 digits only']].map(([id,label,sub])=>`<button type="button" class="pay-choice ${state.payMethod===id?'chosen':''}" data-action="pay-method" data-method="${id}" role="radio" aria-checked="${state.payMethod===id}"><span class="radio-dot"></span><span class="grow"><strong>${e(label)}</strong><div class="tiny muted">${e(sub)}</div></span></button>`).join('')}
 ${state.payMethod==='other'?`<label class="field-label" for="last4">Last 4 digits</label><input id="last4" class="field" data-bind="otherLast4" inputmode="numeric" maxlength="4" placeholder="4242" value="${e(state.otherLast4)}" aria-describedby="card-hint"/><p id="card-hint" class="tiny">Use 0000 to preview a decline, or 9999 to preview a timeout. Any other 4 digits succeeds.</p>`:''}
 ${errBox(state.payError)}
 <button class="pill-btn full" data-action="pay" ${total()===0?'disabled':''}>Pay ${money(total())}</button>
 <button class="text-btn" style="width:100%" data-action="back">Back to tickets</button>
 <p class="screen-note">Leaving this screen does not clear the tickets you selected.</p></div>`;
}
function success(){
 const o=state.lastOrder;
 if(!o) return `<div class="pad"><p>No payment to show.</p><button class="pill-btn full" data-nav="home">Home</button></div>`;
 return `<div class="pad"><div class="success-circle">${ico('check',48,2)}</div><div class="success-title">Payment complete</div><p class="success-sub">Demo only. You were not charged. This screen has no back button, so you cannot pay this order twice.</p>
 <div class="softcard" style="margin:16px 0"><strong class="small">Receipt</strong>${o.lines.map(f=>`<div class="summary-line"><span>${e(f.label)} · ${f.qty} × ${money(f.price)}</span><b>${money(f.qty*f.price)}</b></div>`).join('')}<div class="summary-line summary-total"><span>Total</span><span>${money(o.total)}</span></div><div class="tiny" style="margin-top:8px">${e(o.method)} · ${e(o.when)}</div></div>
 <div class="column" style="gap:10px"><button class="pill-btn full" data-action="open-new-ticket">Show ticket</button><button class="pill-btn outline full" data-action="receipt">Save demo receipt</button><button class="pill-btn light full" data-nav="home">Done</button></div></div>`;
}
function profile(){
 if(!state.signedIn) return `<div class="auth-intro"><div class="profile-icon">${ico('user',28)}</div><strong>Your SwiftLift account</strong><p class="small">Log in to use your saved card and the same ticket history. You can still find a route and buy a ticket with a different demo card.</p></div><div class="auth-actions"><button class="pill-btn full" data-page="login">Log in</button><button class="text-btn" data-page="signup">Create an account</button></div>`;
 return `<div class="profile-user">${ico('user',28)}<div><strong>${e(state.user)}</strong><div class="tiny">${e(state.email)} · sample account</div></div></div><div class="profile-links">
 ${entryCard('history','Ticket history & refunds','ticket-history')}
 ${entryCard('help','Help','help')}
 ${entryCard('star','Saved places','saved-places')}
 ${entryCard('settings','Settings','settings')}
 </div><div class="saved-card"><div class="tiny">Saved payment card</div><strong>Visa •••• ${e(state.last4)}</strong><div class="tiny">Used automatically at checkout. Expires 08/29.</div></div>`;
}
function signup(){return `<form class="auth-form" data-form="signup"><p class="small">Create a sample account. No data is sent to a server.</p>${errBox(state.payError)}<label class="field-label">Username</label><input class="field" name="username" required placeholder="river_rider"/><label class="field-label">Email</label><input class="field" name="email" type="email" required placeholder="name@example.com"/><label class="field-label">Password</label><input class="field" name="password" type="password" required minlength="4" placeholder="At least 4 characters"/><button class="pill-btn full" type="submit">Create account</button><button class="text-btn" type="button" data-page="login" style="width:100%">Already have an account? Log in</button></form>`}
function login(){return `<form class="auth-form" data-form="login"><p class="small">Sample account: <strong>river_rider</strong>. Password: <strong>demo1234</strong>, or any password of 4 or more characters.</p>${errBox(state.payError)}<label class="field-label">Username</label><input class="field" name="username" autocomplete="username" placeholder="river_rider"/><label class="field-label">Password</label><input class="field" name="password" type="password" autocomplete="current-password" placeholder="demo1234"/><button class="pill-btn full" type="submit">Log in</button><button class="text-btn" type="button" data-page="signup" style="width:100%">Need an account? Sign up</button></form>`}
function settings(){
 return `<div class="pad"><p class="minor-label">Display</p>
 ${switchRow('Dark mode','Easier to read at night on the platform.',state.dark,'toggle-dark')}
 ${switchRow('Larger text','Increases type across SwiftLift, including route search.',state.large,'toggle-large')}
 <p class="minor-label" style="margin-top:18px">Payment</p>
 <div class="softcard"><div class="tiny">Saved card</div><strong class="small">Visa •••• ${e(state.last4)}</strong></div>
 ${entryCard('card','Change saved card','change-card')}
 <p class="minor-label" style="margin-top:18px">Account</p>
 ${entryCard('edit','Edit name and email','edit-info')}
 ${entryCard('help','Help','help')}
 <button class="pill-btn outline full" data-action="ask-logout" style="margin-top:12px">Log out</button></div>`;
}
function changeCard(){return `<form class="pad" data-form="card"><p class="small">Enter the last 4 digits only. If you save 0000, later payments with the saved card are declined so you can preview that error. Use 4242 for a successful payment.</p>${errBox(state.payError)}<label class="field-label">Last 4 digits</label><input class="field" name="last4" inputmode="numeric" maxlength="4" placeholder="4242" required/><button class="pill-btn full" style="margin-top:16px" type="submit">Save card</button><button class="text-btn" type="button" style="width:100%" data-action="back">Cancel</button></form>`}
function editInfo(){return `<form class="pad" data-form="edit"><p class="small">This name is only stored in the prototype on this device.</p>${errBox(state.payError)}<label class="field-label">Username</label><input class="field" name="username" required value="${e(state.user)}"/><label class="field-label">Email</label><input class="field" name="email" type="email" required value="${e(state.email)}"/><button class="pill-btn full" style="margin-top:16px" type="submit">Save</button></form>`}
function savedPlaces(){return `<form class="pad" data-form="places"><p class="small">Save two places you use often. They show up as shortcuts on Home and on Find a route.</p>${errBox(state.favEditError)}<label class="field-label">Home</label><input class="field" data-bind="favHome" value="${e(state.favHome)}" placeholder="Sunalta Station"/><label class="field-label">Work or school</label><input class="field" data-bind="favWork" value="${e(state.favWork)}" placeholder="University of Calgary"/><button class="pill-btn full" style="margin-top:16px" type="submit">Save places</button></form>`}
function help(){
 const q=state.helpQuery.trim().toLowerCase();
 const items=HELP.filter(a=>(a.title+' '+a.keywords+' '+a.steps.join(' ')).toLowerCase().includes(q));
 return `<div class="pad"><label class="field-label" for="help-q">Search help</label><input id="help-q" class="field help-search" data-bind="helpQuery" placeholder="Try refund, QR, or fare" value="${e(state.helpQuery)}"/>
 ${items.length?items.map(a=>`<details class="help-item" ${q?'open':''}><summary>${e(a.title)}</summary><ol class="help-steps">${a.steps.map(s=>`<li>${e(s)}</li>`).join('')}</ol>${a.title==='Contact'?`<button type="button" class="pill-btn" data-action="copy-phone">${ico('copy',16)} Copy 403-262-1000</button>`:''}</details>`).join(''):'<p class="small">No help topics match that search. Try refund, ticket, or route, or contact 403-262-1000.</p>'}
 </div>`;
}
function notifications(){
 const list=notices();
 const groups=['Today','Yesterday'];
 return `<div class="pad"><div class="between"><span class="small">${unreadCount()} unread</span><button class="text-btn" data-action="mark-all">Mark all read</button></div>
 ${groups.map(g=>{const rows=list.filter(n=>n.date===g);return rows.length?`<h3 class="notice-section">${g}</h3>${rows.map(n=>`<button data-action="read-notice" data-id="${n.id}" class="notice-card ${state.notificationsRead.includes(n.id)?'read':''}" style="display:block;text-align:left;width:100%"><span class="notice-time">${e(n.time)}</span><strong>${e(n.title)}</strong><p>${e(n.text)}</p></button>`).join('')}`:''}).join('')}
 <p class="screen-note">Notices are samples, not live Calgary Transit alerts.</p></div>`;
}
function historyRows(){
 const f=state.historyFilter;
 return state.tickets.filter(t=>{
  if(f==='Used') return t.status==='USED'||t.status==='EXPIRED';
  if(f==='Unused') return refundable(t)||t.status==='UNUSED';
  if(f==='Refunds') return !!refundFor(t.id);
  return true;
 });
}
function ticketHistory(){
 const tabs=[['All','All'],['Used','Used'],['Unused','Unused'],['Refunds','Refunds']];
 const rows=historyRows();
 return `<div class="ticket-history-tabs">${tabs.map(([id,label])=>`<button class="${state.historyFilter===id?'active':''}" data-action="history-filter" data-filter="${id}">${label}</button>`).join('')}</div>
 <div class="history-content"><p class="history-caution">${state.historyFilter==='Refunds'?'Each refund shows Submitted, Approved, and Refunded, with dates.':'This is the only ticket history. Profile opens this same list.'}</p>
 ${rows.length?rows.map(t=>{const r=refundFor(t.id);return `<article class="card" style="padding:12px;margin-bottom:12px"><div class="between"><div><strong class="small">${e(t.title)}</strong><div class="tiny">${e(t.when)} · ${e(t.sub)}</div></div><div class="hist-price">${t.value?money(t.value):''}<div class="status">${e(statusWord(t))}</div></div></div>${r?tracker(r):''}${refundable(t)?`<button class="text-btn" data-action="start-refund" data-id="${t.id}">Request refund</button>`:''}${t.status==='ACTIVE'||t.status==='UNUSED'?`<button class="text-btn" data-action="view-ticket" data-id="${t.id}">Show ticket</button>`:''}</article>`}).join(''):'<div class="no-items">Nothing in this filter.</div>'}
 </div>`;
}
function refundSelect(){
 const choices=state.tickets.filter(refundable);
 const selected=ticketById(state.refundTicket);
 return `<div class="pad"><div class="tiny muted">Step 1 of 2</div><h3 class="section-title">Choose an unused ticket</h3><p class="small">Only unused single tickets can be refunded here. Passes stay in Tickets.</p>
 ${choices.length?choices.map(t=>`<button class="refund-choice ${state.refundTicket===t.id?'chosen':''}" data-action="pick-refund" data-id="${t.id}"><span class="radio-dot"></span><span class="grow"><strong class="small">${e(t.title)}</strong><div class="tiny muted">${e(t.sub)}</div></span><strong>${money(t.value)}</strong></button>`).join(''):'<p class="small">No unused tickets are eligible. Used, expired, and in-progress refunds are hidden.</p>'}
 <button class="pill-btn full" data-page="refund-review" ${selected&&refundable(selected)?'':'disabled'}>Continue</button>
 <button class="text-btn" style="width:100%" data-page="ticket-history">Cancel</button></div>`;
}
function refundReview(){
 const t=ticketById(state.refundTicket);
 if(!t||!refundable(t)) return `<div class="pad">${errBox('That ticket cannot be refunded. It may already be used, expired, or in a refund.')}<button class="pill-btn full" data-page="ticket-history">Back to history</button></div>`;
 return `<div class="pad"><div class="tiny muted">Step 2 of 2</div><h3 class="section-title">Review refund</h3>
 <div class="details-row"><span>Ticket</span><strong>${e(t.title)}</strong></div>
 <div class="details-row"><span>Purchased</span><strong>${e(t.when)}</strong></div>
 <div class="details-row"><span>Refund to</span><strong>Visa •••• ${e(state.last4)}</strong></div>
 <div class="details-row"><span>Amount</span><strong>${money(t.value)}</strong></div>
 ${tip('Submitting does not mean the money is back yet. You will see Submitted, then an expected approval date and an expected completion date. The ticket cannot be used after you submit.')}
 <button class="pill-btn full" data-action="submit-refund">Submit refund request</button>
 <button class="text-btn" style="width:100%" data-action="back">Back</button></div>`;
}
function refundSubmitted(){
 const r=state.refunds[0];
 return `<div class="pad"><h3 class="section-title">Request submitted</h3><p class="small">There is no back button to the pay or review step. The ticket is already marked so it cannot be refunded twice or used to board.</p>${r?tracker(r):''}
 <button class="pill-btn full" data-action="view-refunds">View status in history</button>
 <button class="pill-btn light full" style="margin-top:8px" data-nav="home">Done</button></div>`;
}
function popup(){
 if(state.processing) return `<div class="logout-shade"><div class="dialog" role="status"><strong>Processing payment…</strong><p>Wait a moment. Do not tap Pay again. No ticket is issued until this finishes.</p></div></div>`;
 if(state.modal) return `<div class="logout-shade"><div class="dialog" role="dialog" aria-modal="true"><strong>Log out?</strong><p>You will need to log in again to use the saved card. Your demo tickets stay in this browser until you refresh.</p><button class="pill-btn full" data-action="logout-confirm">Log out</button><button class="text-btn" style="width:100%" data-action="close-modal">Stay logged in</button></div></div>`;
 if(!state.popup) return '';
 const p=state.popup;
 return `<div class="logout-shade"><div class="dialog" role="dialog" aria-modal="true"><strong>${e(p.title)}</strong><p>${e(p.body)}</p><button class="pill-btn full" data-action="${e(p.okAction)}">${e(p.ok)}</button>${p.cancel?`<button class="text-btn" style="width:100%" data-action="close-popup">${e(p.cancel)}</button>`:''}</div></div>`;
}
function content(){
 switch(state.page){
  case 'home': return home();
  case 'route-search': return routeSearch();
  case 'route-options': return options();
  case 'route-detail': return routeDetail();
  case 'ticket-home': return ticketHome();
  case 'ticket-view': return qrTicket();
  case 'ticket-buy': return ticketBuy();
  case 'ticket-summary': return purchaseSummary();
  case 'ticket-success': return success();
  case 'profile': return profile();
  case 'signup': return signup();
  case 'login': return login();
  case 'settings': return settings();
  case 'change-card': return changeCard();
  case 'edit-info': return editInfo();
  case 'saved-places': return savedPlaces();
  case 'help': return help();
  case 'notifications': return notifications();
  case 'ticket-history': return ticketHistory();
  case 'refund-select': return refundSelect();
  case 'refund-review': return refundReview();
  case 'refund-submitted': return refundSubmitted();
  default: return home();
 }
}
function render(reset){
 const old=document.getElementById('screen-scroll');
 const scr=old?old.scrollTop:0;
 document.getElementById('app').innerHTML=`<div class="phone ${state.dark?'dark':''} ${state.large?'large':''}" role="application" aria-label="SwiftLift prototype">${statusbar()}${header()}<main class="screen-scroll" id="screen-scroll">${content()}</main>${nav()}${popup()}${state.toast?`<div role="status" class="toast">${e(state.toast)}</div>`:''}</div>`;
 if(!reset){const sc=document.getElementById('screen-scroll'); if(sc) sc.scrollTop=scr}
 if(state.page==='route-search') updateSuggestions();
 const titles={home:'Home','route-search':'Find a route','route-options':'Route options','route-detail':'Route details','ticket-home':'Tickets','ticket-view':'Your ticket','ticket-buy':'Buy Tickets','ticket-summary':'Purchase summary','ticket-success':'Payment complete',profile:'Profile',help:'Help',settings:'Settings','ticket-history':'Ticket history',notifications:'Notifications'};
 document.title='SwiftLift — '+(titles[state.page]||'Prototype');
}
function updateSuggestions(){
 ['routeOrigin','routeDestination'].forEach(key=>{
  const box=document.getElementById('suggest-'+key);
  if(!box) return;
  box.innerHTML=matches(state[key]).map(p=>`<button type="button" class="suggest" data-action="use-place" data-field="${key}" data-place="${e(p)}">${e(p)}</button>`).join('');
 });
}
function saveFile(filename,text){
 const blob=new Blob([text],{type:'text/plain'});
 const a=document.createElement('a');
 a.href=URL.createObjectURL(blob);a.download=filename;a.click();
 setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
function knownPlace(value){
 const v=value.trim().toLowerCase();
 return PLACES.some(p=>p.toLowerCase()===v);
}
function payErrorFor(last4){
 if(last4==='0000') return 'Card •••• 0000 was declined. No ticket was issued and you were not charged. Choose your saved Visa •••• '+state.last4+', or enter a last-four other than 0000 or 9999.';
 if(last4==='9999') return 'The payment service did not respond, so no ticket was issued and you were not charged. Wait a moment and try again, or pay with your saved Visa •••• '+state.last4+'.';
 return '';
}
function completePurchase(){
 const fare=FARES.find(f=>state.qty[f.id]>0)||FARES[1];
 const id='demo-'+Date.now();
 const lines=FARES.filter(f=>state.qty[f.id]>0).map(f=>({label:f.label,qty:state.qty[f.id],price:f.price}));
 const cost=total();
 state.tickets.unshift({id,title:fare.label+' ticket',category:fare.label.split(' ')[0],expiry:'Today, 9:24 PM',value:cost,status:'ACTIVE',when:stamp(new Date()),sub:'Demo purchase · unused'});
 state.lastOrder={lines,total:cost,method:methodLabel(),when:stamp(new Date())+' · demo',ticketId:id};
 state.activeTicket=id;
 state.qty={youth:0,adult:0,senior:0};
 state.payError='';
 state.history=['home'];
 state.page='ticket-success';
 state.processing=false;
 state.popup=null;
 render();
}
function submitRefund(){
 const t=ticketById(state.refundTicket);
 if(!t||!refundable(t)){state.payError='That ticket cannot be refunded.';go('refund-review');return}
 t.status='REFUND_PENDING';
 state.refunds.unshift({id:'ref-'+Date.now(),ticketId:t.id,title:t.title,value:t.value,status:'Submitted',submitted:stamp(new Date()),approved:null,refunded:null,expectedApprove:addDays(2),expectedRefund:addDays(7),method:'Visa •••• '+state.last4});
 state.history=['home'];
 state.page='refund-submitted';
 state.popup=null;
 render();
}
function onClick(evt){
 const sizeBtn=evt.target.closest('[data-size]');
 if(sizeBtn){
  document.body.classList.remove('size-compact','size-large');
  if(sizeBtn.dataset.size!=='standard') document.body.classList.add('size-'+sizeBtn.dataset.size);
  document.querySelectorAll('[data-size]').forEach(b=>b.setAttribute('aria-pressed', b===sizeBtn?'true':'false'));
  return;
 }
 if(state.processing) return;
 const target=evt.target.closest('[data-action],[data-page],[data-nav]');
 if(!target) return;
 if(target.dataset.nav){
  state.history=[];state.page=target.dataset.nav;state.modal=false;state.popup=null;state.payError='';render();return;
 }
 if(target.dataset.page && !target.dataset.action){
  if(target.dataset.page==='ticket-history') state.historyFilter='All';
  go(target.dataset.page);return;
 }
 const action=target.dataset.action;
 switch(action){
  case 'back': back(); return;
  case 'search-route':{
   state.routeError='';
   if(!state.routeOrigin.trim()) state.routeOrigin='My Location';
   const dest=state.routeDestination.trim();
   if(!dest){state.routeError='Enter where you are going. You can type a landmark such as Maxwell Soccer Centre, or tap Home or Work.';render(false);return}
   if(!knownPlace(dest)){state.routeError='No sample match for "'+dest+'". Showing sample routes to University of Calgary so you can continue. Try Maxwell Soccer Centre or pick a suggestion.';state.routeDestination='University of Calgary'}
   state.route=0;go('route-options');return;
  }
  case 'select-route': state.route=Number(target.dataset.index)||0;go('route-detail');return;
  case 'save-route':{
   const r=currentRoutes()[state.route]||currentRoutes()[0];
   state.activeJourney={origin:state.routeOrigin||'My Location',destination:state.routeDestination,minutes:r.minutes,index:state.route,delayText:r.delayText||'',label:r.label};
   state.notificationsRead=state.notificationsRead.filter(id=>id!=='journey');
   state.popup={title:'Trip saved',body:r.delayed?r.delayText+' The trip is on Home and in Notifications.':'Your current trip is on Home and in Notifications. This is a sample reminder, not a live departure alert.',ok:'View on Home',okAction:'popup-home',cancel:'Stay on this route'};
   render();return;
  }
  case 'copy-route':{
   const text=routeText();
   if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(()=>toast('Route copied. Paste it into a message.')).catch(()=>{saveFile('SwiftLift-route.txt',text);toast('Route saved as a file.');})}
   else {saveFile('SwiftLift-route.txt',text);toast('Route saved as a file.');}
   return;
  }
  case 'save-dest':{
   const place=state.routeDestination.trim();
   if(!place){toast('Choose a destination first.');return}
   if(target.dataset.fav==='work') state.favWork=place; else state.favHome=place;
   toast((target.dataset.fav==='work'?'Work':'Home')+' saved as '+place);return;
  }
  case 'use-fav':{
   state.routeOrigin=state.routeOrigin.trim()||'My Location';
   state.routeDestination=target.dataset.fav==='work'?state.favWork:state.favHome;
   state.routeError='';
   if(state.page!=='route-search') go('route-search'); else render(false);
   return;
  }
  case 'use-place':{
   state[target.dataset.field]=target.dataset.place;
   state.routeError='';
   render(false);return;
  }
  case 'open-journey':
   if(!state.activeJourney){homeReset();return}
   state.routeOrigin=state.activeJourney.origin;
   state.routeDestination=state.activeJourney.destination;
   state.route=state.activeJourney.index||0;
   go('route-detail');return;
  case 'clear-trip-ask':
   state.popup={title:'Clear this trip?',body:'You can plan it again from Find a route. Saved places stay.',ok:'Clear trip',okAction:'confirm-clear-trip',cancel:'Keep trip'};
   render();return;
  case 'confirm-clear-trip':
   state.activeJourney=null;state.popup=null;toast('Trip cleared');return;
  case 'popup-home': homeReset();return;
  case 'close-popup': state.popup=null;render(false);return;
  case 'quantity':{
   const key=target.dataset.id;
   const next=(state.qty[key]||0)+Number(target.dataset.delta);
   if(next>20){toast('You can buy up to 20 of each ticket type in this demo. Lower the quantity to add a different type.');return}
   state.qty[key]=Math.max(0,next);render(false);return;
  }
  case 'continue-order':
   if(total()<=0){toast('Add at least one ticket to continue.');return}
   state.payError='';go('ticket-summary');return;
  case 'pay-method':
   state.payMethod=target.dataset.method;state.payError='';render(false);return;
  case 'pay':{
   if(total()<=0){toast('Add at least one ticket first.');return}
   if((state.payMethod==='saved'||state.payMethod==='apple'||state.payMethod==='google') && !state.signedIn){
    state.payError='Log in to use your saved card, or choose A different card and enter 4 digits.';render(false);return;
   }
   if(state.payMethod==='other' && !/^\d{4}$/.test(state.otherLast4.trim())){
    state.payError='Enter the last 4 digits only, for example 4242. Do not type a full card number. 0000 previews a decline and 9999 previews a timeout.';render(false);return;
   }
   state.payError='';
   state.popup={title:'Pay '+money(total())+'?',body:'Method: '+methodLabel()+'. This demo will not charge a real card. After you pay, you cannot return to this Pay button.',ok:'Pay now',okAction:'confirm-pay',cancel:'Go back'};
   render();return;
  }
  case 'confirm-pay':{
   state.popup=null;state.processing=true;render();
   const last4=methodLast4();
   setTimeout(()=>{
    const problem=payErrorFor(last4);
    state.processing=false;
    if(problem){state.payError=problem;state.page='ticket-summary';render();return}
    completePurchase();
   },800);
   return;
  }
  case 'open-new-ticket':
   state.activeTicket=(state.lastOrder&&state.lastOrder.ticketId)||state.activeTicket;go('ticket-view');return;
  case 'show-active':{
   const ready=boardable();
   if(!ready){toast('No ticket is ready to board. Buy a ticket first.');return}
   state.activeTicket=ready.id;go('ticket-view');return;
  }
  case 'view-ticket':
   state.activeTicket=target.dataset.id||state.activeTicket;go('ticket-view');return;
  case 'receipt':{
   const o=state.lastOrder; if(!o){toast('No receipt yet');return}
   saveFile('SwiftLift-demo-receipt.txt',`SwiftLift demo receipt\n${o.when}\n${o.lines.map(l=>l.qty+' x '+l.label+' @ '+money(l.price)).join('\n')}\nTotal: ${money(o.total)}\n${o.method}\nNo real payment was processed.\n`);
   toast('Demo receipt saved');return;
  }
  case 'history-filter': state.historyFilter=target.dataset.filter;render(false);return;
  case 'pick-refund': state.refundTicket=target.dataset.id;render(false);return;
  case 'start-refund': state.refundTicket=target.dataset.id;go('refund-select');return;
  case 'submit-refund': submitRefund();return;
  case 'view-refunds': state.historyFilter='Refunds';go('ticket-history');return;
  case 'mark-all': state.notificationsRead=notices().map(n=>n.id);render(false);return;
  case 'read-notice':{
   if(!state.notificationsRead.includes(target.dataset.id)) state.notificationsRead.push(target.dataset.id);
   if(target.dataset.id==='journey'&&state.activeJourney){
    state.routeOrigin=state.activeJourney.origin;
    state.routeDestination=state.activeJourney.destination;
    state.route=state.activeJourney.index||0;
    go('route-detail');
    return;
   }
   render(false);return;
  }
  case 'ask-logout': state.modal=true;render(false);return;
  case 'close-modal': state.modal=false;render(false);return;
  case 'logout-confirm': state.signedIn=false;state.modal=false;state.page='profile';state.history=[];render();return;
  case 'toggle-dark': state.dark=!state.dark;render(false);return;
  case 'toggle-large': state.large=!state.large;render(false);return;
  case 'copy-phone':
   const number='403-262-1000';
   if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(number).then(()=>toast('403-262-1000 copied. This prototype cannot place the call.')).catch(()=>toast('Call 403-262-1000. This prototype cannot dial.'));
   else toast('Call 403-262-1000. This prototype cannot dial.');
   return;
  default: return;
 }
}
function showFormError(msg){state.payError=msg;render(false)}
function onSubmit(evt){
 const form=evt.target.closest('form[data-form]');
 if(!form) return;
 evt.preventDefault();
 const fd=new FormData(form);
 state.payError='';
 switch(form.dataset.form){
  case 'login':{
   const username=String(fd.get('username')||'').trim();
   const password=String(fd.get('password')||'');
   if(!username){showFormError('Enter a username. The sample account is river_rider.');return}
   if(password.length<4){showFormError('Enter a password of at least 4 characters. demo1234 works, and so does any other password of 4 or more characters.');return}
   state.user=username;state.signedIn=true;go('profile');return;
  }
  case 'signup':{
   const username=String(fd.get('username')||'').trim();
   const email=String(fd.get('email')||'').trim();
   const password=String(fd.get('password')||'');
   if(username.length<3){showFormError('Use a username of at least 3 characters, for example river_rider.');return}
   if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showFormError('Enter an email like name@example.com.');return}
   if(password.length<4){showFormError('Use a password of at least 4 characters.');return}
   state.user=username;state.email=email;state.signedIn=true;go('profile');return;
  }
  case 'card':{
   const v=String(fd.get('last4')||'').trim();
   if(!/^\d{4}$/.test(v)){showFormError('Enter exactly 4 digits, for example 4242. Do not enter a full card number.');return}
   state.last4=v;state.payMethod='saved';
   go('settings');
   toast(v==='0000'?'Saved. Payments with •••• 0000 will be declined. Change it back to 4242 for a successful demo payment.':'Saved Visa •••• '+v);return;
  }
  case 'edit':{
   const username=String(fd.get('username')||'').trim();
   const email=String(fd.get('email')||'').trim();
   if(!username){showFormError('Enter a username so you can log in again.');return}
   if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showFormError('Enter an email like name@example.com.');return}
   state.user=username;state.email=email;go('profile');toast('Profile saved');return;
  }
  case 'places':{
   const home=state.favHome.trim();
   const work=state.favWork.trim();
   if(home.length<2||work.length<2){state.favEditError='Enter a place for Home and for Work, such as Sunalta Station or University of Calgary.';render(false);return}
   state.favEditError='';toast('Saved places updated');go('route-search');return;
  }
  default: return;
 }
}
document.addEventListener('click',onClick);
document.addEventListener('submit',onSubmit);
document.addEventListener('input',event=>{
 const b=event.target.dataset&&event.target.dataset.bind;
 if(!b) return;
 state[b]=event.target.value;
 if(b==='routeOrigin'||b==='routeDestination') updateSuggestions();
 if(b==='helpQuery'){
  const start=event.target.selectionStart;
  render(false);
  const again=document.querySelector('[data-bind="helpQuery"]');
  if(again){again.focus();try{again.setSelectionRange(start,start)}catch(err){}}
 }
});
render();
