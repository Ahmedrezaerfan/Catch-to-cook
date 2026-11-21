/* Catch to Cook | script.js
   ফোন নম্বর বদলাতে: নিচের PHONE (দেশের কোডসহ, যেমন 8801805769055)।
   দাম বা মাছ বদলাতে: নিচের items তালিকা। প্রতিটি লাইনে নাম, নোট, ছবির ধরন এবং [লেবেল, দাম] আছে।
   ছবি বদলাতে: images ফোল্ডারের ফাইল পাল্টান বা PH তালিকার পথ বদলান। */
var PHONE="8801805769055";
function wa(m){return "https://wa.me/"+PHONE+"?text="+encodeURIComponent(m);}
var uid=0;
function fish(t){
  if(t.shrimp){return '<svg viewBox="0 0 120 72" aria-hidden="true"><path d="M38 52C28 30 52 14 78 20C98 25 104 44 90 56" fill="none" stroke="#e0733a" stroke-width="14" stroke-linecap="round"/><path d="M34 52L18 62L22 48L14 46L30 38Z" fill="#c95a24"/><path d="M50 24L46 38M62 20L60 36M74 21L74 35" stroke="#b3481a" stroke-width="2.4"/><path d="M96 46Q108 30 117 22M98 52Q112 44 118 38" stroke="#c95a24" fill="none" stroke-width="1.8"/><circle cx="93" cy="47" r="2.6" fill="#222"/></svg>';}
  var id="c"+(uid++),cx=58,cy=36,rx=t.rx,ry=t.ry,f=t.f,s="",tx=cx+rx-5,tl=t.tl||18,th=t.th||15;
  var fh=Math.max(4,Math.min(12,cy-ry-3)),pv=Math.max(4,Math.min(9,69-(cy+ry)));
  s+='<path d="M'+tx+' 36L'+(tx+tl)+' '+(36-th)+'Q'+(tx+tl-5)+' 36 '+(tx+tl)+' '+(36+th)+'Z" fill="'+f+'"/>';
  s+='<path d="M'+(cx-rx*.4)+' '+(cy-ry+3)+'Q'+cx+' '+(cy-ry-fh)+' '+(cx+rx*.45)+' '+(cy-ry+4)+'Z" fill="'+f+'"/>';
  s+='<path d="M'+(cx-4)+' '+(cy+ry-3)+'Q'+(cx+4)+' '+(cy+ry+pv)+' '+(cx+14)+' '+(cy+ry-3)+'Z" fill="'+f+'"/>';
  if(t.wh){s+='<path d="M'+(cx-rx+3)+' '+(cy+4)+'L'+(cx-rx-9)+' '+(cy+12)+'M'+(cx-rx+2)+' '+(cy+1)+'L'+(cx-rx-10)+' '+(cy+3)+'" stroke="'+f+'" stroke-width="1.8"/>';}
  s+='<clipPath id="'+id+'"><ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'"/></clipPath><g clip-path="url(#'+id+')"><rect x="0" y="0" width="120" height="72" fill="'+t.c+'"/>';
  s+='<ellipse cx="'+cx+'" cy="'+(cy+ry*.55)+'" rx="'+(rx*1.05)+'" ry="'+(ry*.6)+'" fill="'+t.b+'"/>';
  for(var i=0;i<(t.n||0);i++){s+='<rect x="'+(cx-rx*.45+i*rx*.5)+'" y="0" width="5" height="72" fill="'+t.sc+'"/>';}
  for(var j=0;j<(t.sp||0);j++){s+='<circle cx="'+(cx-rx*.3+(j%3)*rx*.3)+'" cy="'+(cy-ry*.45+Math.floor(j/3)*ry*.4)+'" r="2.4" fill="'+t.sd+'"/>';}
  s+='</g><circle cx="'+(cx-rx+12)+'" cy="'+(cy-ry*.2)+'" r="3.6" fill="#fff"/><circle cx="'+(cx-rx+11)+'" cy="'+(cy-ry*.2)+'" r="1.9" fill="#111"/>';
  return '<svg viewBox="0 0 120 72" aria-hidden="true">'+s+'</svg>';
}
var PH={0:"images/bairey.jpg",1:"images/butterfly.jpg",4:"images/surma.jpg",6:"images/surma.jpg",7:"images/red-coral.jpg",8:"images/shrimp.jpg",9:"images/rupchanda.jpg"};
var K="প্রতি কেজি",W="আস্ত মাছ, প্রতি কেজি";
var items=[
 ["সুন্দরী বাইলে","",{c:"#8a7a5c",b:"#cdbf9d",f:"#6e6149",rx:34,ry:12,tl:14,th:9,sp:6,sd:"#4d4333"},[[K,"৩৫০"]]],
 ["বাটারফ্লাই মাছ","",{c:"#f2c230",b:"#fbe38a",f:"#e0a91e",rx:27,ry:28,tl:14,th:12,n:2,sc:"#222"},[[K,"৩৫০"]]],
 ["এক্সপোর্টেড নারেকেলি","প্রতি কেজিতে ৭–৮ পিস",{c:"#6aa7c4",b:"#d6e8ef",f:"#3f7f9e",rx:36,ry:19},[[K,"৪০০"]]],
 ["তবোল (২০ কেজি+ সাইজ)","",{c:"#6b7f8c",b:"#c8d3d9",f:"#4d606c",rx:38,ry:22},[[W,"৫০০"],["Ready to Cook, ৮০০ গ্রাম","৫০০",1]]],
 ["ছোট সুরমা","",{c:"#4f7fa0",b:"#dfe9ef",f:"#35607e",rx:44,ry:14,th:13,sp:6,sd:"#25445a"},[[K,"৫০০"]]],
 ["সামুদ্রিক পাঙ্গাশ","",{c:"#7d8a93",b:"#dfe3e6",f:"#5f6c75",rx:38,ry:16,wh:1},[[W,"৫৫০"],["বড় সাইজ Ready to Cook, ৮০০ গ্রাম","৫৫০",1]]],
 ["বড় সুরমা","",{c:"#4f7fa0",b:"#dfe9ef",f:"#35607e",rx:46,ry:17,th:14,sp:6,sd:"#25445a"},[[W,"৭০০"],["Ready to Cook, ৭০০ গ্রাম","৬৫০",1]]],
 ["লাল কোরাল (বড় সাইজ)","",{c:"#d9482f",b:"#f3a08c",f:"#b3321f",rx:38,ry:23},[[K,"৭৫০"]]],
 ["ব্রাউন চিংড়ি","প্রতি কেজিতে ৫০–৬০ পিস",{shrimp:1},[[K,"৭০০"]]],
 ["দেশি রূপচাঁদা","সাইজ অনুযায়ী তিনটি দাম",{c:"#c9d3da",b:"#eef2f4",f:"#9fb0bb",rx:31,ry:27,tl:15,th:12},[["১০ পিসে প্রায় ১ কেজি","৭০০"],["৮ পিসে প্রায় ১ কেজি","৮০০"],["৪ পিসে প্রায় ১ কেজি","১,৪০০"]]],
 ["লাক্কা (১০ কেজি+ সাইজ)","",{c:"#b08a4a",b:"#e6d3a8",f:"#8c6a30",rx:40,ry:24},[[W,"১,২০০"],["Ready to Cook, ৮০০ গ্রাম","১,২০০",1]]]
];
document.getElementById("items").innerHTML=items.map(function(it,i){
  var rows=it[3].map(function(r){
    return '<li><span class="lbl'+(r[2]?' rtc':'')+'">'+r[0]+'</span><span class="dots" aria-hidden="true"></span><span class="price"><span class="num">'+r[1]+'</span><small>টাকা</small></span></li>';
  }).join("");
  return '<article class="item"><div class="head"><div class="pic">'+(PH[i]?'<img src="'+PH[i]+'" alt="'+it[0]+'" loading="lazy">':fish(it[2]))+'</div><div class="ttl"><h3>'+it[0]+'</h3>'+(it[1]?'<p class="note">'+it[1]+'</p>':'')+'</div><a class="order" target="_blank" rel="noopener" href="'+wa("আসসালামু আলাইকুম, আমি "+it[0]+" অর্ডার করতে চাই।")+'">অর্ডার</a></div><ul class="opts">'+rows+'</ul></article>';
}).join("");
document.querySelectorAll(".go").forEach(function(a){a.href=wa("আসসালামু আলাইকুম, আমি সামুদ্রিক মাছ অর্ডার করতে চাই।");a.target="_blank";a.rel="noopener";});

var panel=document.getElementById("aboutPanel");
function sync(){var on=location.hash==="#about";panel.classList.toggle("open",on);panel.setAttribute("aria-hidden",on?"false":"true");document.body.style.overflow=on?"hidden":"";if(on){panel.scrollTop=0;document.getElementById("closeAbout").focus();}}
function closeAbout(){history.replaceState(null,"",location.pathname+location.search);sync();}
document.querySelectorAll("[data-about]").forEach(function(b){b.addEventListener("click",function(){location.hash="about";});});
document.getElementById("closeAbout").addEventListener("click",closeAbout);
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&panel.classList.contains("open"))closeAbout();});
window.addEventListener("hashchange",sync);sync();
