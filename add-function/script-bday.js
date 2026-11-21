/* ===== 생일카페 ===== */
/* 여기부터 수정 */
// 멤버 생일 (D-day 표시용)
const BDAY_MEMBERS = [['제나','2026-11-27'],['미나미','2026-11-29']];
// 카페 목록 — who: 생일 멤버, start/end: 운영 기간, host: 주최 X 계정, x: 주최 공지 링크
// perks: 특전이 있을 때만 — basic 기본 특전 / first 선착 특전 / special 스페셜 특전 / extra 추가 이벤트
const BDAY_CAFES = [
  {who:['제나','미나미'], title:'공주들의 정원 - ZENA & MINAMI BIRTHDAY CAFE', cafe:'베란다', addr:'부산 중구 남포길 37-2', lat:35.098312, lng:129.032953, start:'2026-11-21', end:'2026-11-27', host:'@bbn3xo', x:'https://x.com/bbn3xo/status/2114922615328698718'},
  {who:['제나','미나미'], title:'お姫様 제나미는 못말려! ⁺₊♡', cafe:'톤앤매너', addr:'서울 마포구 와우산로29가길 13', lat:37.554262, lng:126.928672, start:'2026-11-25', end:'2026-11-27', host:'@ebcgco', x:'https://x.com/ebcgco/status/2119104802391244853'},
  {who:['제나'], title:'프린세스 다이어리 Princess Diary', cafe:'카페메가라운지', addr:'서울 강남구 선릉로127길 11', lat:37.515412, lng:127.040891, start:'2026-11-26', end:'2026-11-27', host:'@verse_zn08', x:'https://x.com/verse_zn08/status/2115003945366270421'},
  {who:['제나','미나미'], title:'ふたりの季節 두 사람의 계절', cafe:'노스폴', addr:'대구 중구 중앙대로 392', lat:35.868012, lng:128.593703, start:'2026-11-26', end:'2026-11-28', host:'@rescene_Day', x:'https://x.com/rescene_Day/status/2121224497164653046'},
  {who:['제나','미나미'], title:'ふたりの季節 두 사람의 계절', cafe:'카페 시츠', addr:'부산 부산진구 전포대로162번길 25', lat:35.151062, lng:129.067016, start:'2026-11-26', end:'2026-11-28', host:'@rescene_Day', x:'https://x.com/rescene_Day/status/2121224497164653046'},
  {who:['제나','미나미'], title:'𝙰𝚏𝚝𝚎𝚛𝚜𝚌𝚎𝚗𝚎 𝟸𝟽:𝟸𝟿', cafe:'포츈맨션', addr:'서울 마포구 어울마당로 155', lat:37.556863, lng:126.926984, start:'2026-11-26', end:'2026-11-29', host:'@afterscene_2729', x:'https://x.com/afterscene_2729/status/2122681109951685087'},
  {who:['제나','미나미'], title:'ふたりの季節 두 사람의 계절', cafe:'카페클로버 홍대', addr:'서울 마포구 와우산로29가길 13', lat:37.554262, lng:126.928672, start:'2026-11-26', end:'2026-11-29', host:'@rescene_Day', x:'https://x.com/rescene_Day/status/2121224497164653046', perks:{basic:['엽서','종이컵','폴라로이드'], special:['키링'], extra:['럭키 드로우']}},
  {who:['제나','미나미'], title:'도플갱어즈의 생일소동', cafe:'카페몽글', addr:'서울 마포구 와우산로29라길 21', lat:37.554862, lng:126.926891, start:'2026-11-26', end:'2026-11-29', host:'@5Angel_Forever', x:'https://x.com/5Angel_Forever/status/2119712215439929614'},
  {who:['제나'], title:'#zena season1127 #제나의 계절속에 피어나는', cafe:'카페 이상현상', addr:'서울 마포구 와우산로35길 9-7', lat:37.555537, lng:126.929609, start:'2026-11-27', end:'2026-11-27', host:'@zena_season1127', x:'https://x.com/zena_season1127/status/2124025173569687577'},
  {who:['제나','미나미'], title:'우리들의 반짝이는 페이지', cafe:'카페 가벼운날', addr:'서울 마포구 동교로34길 8', lat:37.560912, lng:126.924797, start:'2026-11-27', end:'2026-11-29', host:'@cafe_gabeounnal', x:'https://x.com/cafe_gabeounnal/status/2123344341968318475'},
  {who:['제나','미나미'], title:'신라공주와 오죠사마의 탄신일', cafe:'소프티 홍대점', addr:'서울 마포구 와우산로29길 32', lat:37.555412, lng:126.928328, start:'2026-11-27', end:'2026-11-29', host:'@5Angel_Forever', x:'https://x.com/5Angel_Forever/status/2123015917970100735'},
  {who:['제나','미나미'], title:'제나미의 비밀일기', cafe:'하이타운 서울', addr:'서울 마포구 와우산로29다길 10', lat:37.555112, lng:126.927641, start:'2026-11-27', end:'2026-11-29', host:'@zenami_diary', x:'https://x.com/zenami_diary/status/2120879286550942155'},
  {who:['제나','미나미'], title:'どっちが好き？', cafe:'하트클립', addr:'서울 마포구 와우산로 161', lat:37.555363, lng:126.930328, start:'2026-11-27', end:'2026-11-29', host:'@073znm', x:'https://x.com/073znm/status/2112801408957452548'},
  {who:['제나','미나미'], title:'𝐙𝐄𝐍𝐀𝐌𝐈 𝐎𝐁𝐒𝐄𝐑𝐕𝐀𝐓𝐈𝐎𝐍 𝐋𝐎𝐆', cafe:'카페라래', addr:'서울 마포구 와우산로29마길 7', lat:37.555613, lng:126.926797, start:'2026-11-27', end:'2026-11-29', host:'@remineooo5', x:'https://x.com/remineooo5/status/2117999667585970552'},
  {who:['미나미'], title:'𝘿𝙀𝘼𝙍, 𝙏𝙒𝙀𝙉𝙏𝙔', cafe:'델루나카페&갤러리', addr:'서울 마포구 와우산로21길 26', lat:37.552487, lng:126.922578, start:'2026-11-27', end:'2026-11-29', host:'@SCENE_373', x:'https://x.com/SCENE_373/status/2119087649256526130'},
  {who:['미나미'], title:'미나미 러버스클럽🍰', cafe:'신드롬', addr:'서울 마포구 와우산로29길 19', lat:37.554887, lng:126.928734, start:'2026-11-27', end:'2026-11-29', host:'@prvf1c', x:'https://x.com/prvf1c/status/2118164888040402988'},
  {who:['미나미'], title:'2026 미나미 생일 카페', cafe:'카페 멜랑', addr:'서울 마포구 와우산로29라길 11', lat:37.555187, lng:126.927203, start:'2026-11-27', end:'2026-11-29', host:'@_mimi1129', x:'https://x.com/_mimi1129/status/2116385117677498708'},
  {who:['제나'], title:'제나생일이에요', cafe:'하트벌스데이', addr:'부산 부산진구 황령대로64번길 12', lat:35.148988, lng:129.066578, start:'2026-11-27', end:'2026-11-30', host:'@heart_birthday_', x:'https://x.com/heart_birthday_/status/2121576530660974628'},
  {who:['제나'], title:'해피제나데이', cafe:'타임슬래시', addr:'부산 부산진구 황령대로64번길 25-1', lat:35.148488, lng:129.067234, start:'2026-11-27', end:'2026-11-30', host:'@timeslashcafe2', x:'https://x.com/timeslashcafe2/status/2121576188644929771'},
  {who:['미나미'], title:'미나미 다이어리', cafe:'하트벌스데이', addr:'부산 부산진구 황령대로64번길 12', lat:35.148988, lng:129.066578, start:'2026-11-27', end:'2026-11-30', host:'@heart_birthday_', x:'https://x.com/heart_birthday_/status/2121577200210300946'},
  {who:['미나미'], title:'미나미 러버스클럽', cafe:'타임슬래시', addr:'부산 부산진구 황령대로64번길 25-1', lat:35.148488, lng:129.067234, start:'2026-11-27', end:'2026-11-30', host:'@timeslashcafe2', x:'https://x.com/timeslashcafe2/status/2121579841732714628'},
  {who:['미나미'], title:'갸루와 물범', cafe:'카페꼬모', addr:'서울 마포구 와우산로21길 31-12', lat:37.551912, lng:126.921828, start:'2026-11-28', end:'2026-11-29', host:'@BlueHour_1129', x:'https://x.com/BlueHour_1129/status/2119717707486769478'},
  {who:['미나미'], title:'𝑴𝒀 𝑯𝑬𝑨𝑹𝑻, 𝑻𝑬𝑻𝑯𝑬𝑹𝑬𝑫 𝑻𝑶 𝒀𝑶𝑼', cafe:'리드미', addr:'서울 마포구 월드컵북로6길 83', lat:37.560287, lng:126.922359, start:'2026-11-28', end:'2026-11-29', host:'@SNixx_y', x:'https://x.com/SNixx_y/status/2118168706253718004'},
  {who:['미나미'], title:'내친구냠밍뿌', cafe:'멜랑쥬', addr:'서울 마포구 와우산로27길 14', lat:37.554137, lng:126.927578, start:'2026-11-28', end:'2026-11-29', host:'@333clover_', x:'https://x.com/333clover_/status/2116560840908484711'},
  {who:['미나미'], title:'❦ 𝟤𝟢𝟤𝟨 𝐌𝐈𝐍𝐀𝐌𝐈 𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 𝐄𝐕𝐄𝐍𝐓-빛의 소원 ❦', cafe:'카페 아히', addr:'서울 마포구 잔다리로 30-26', lat:37.551737, lng:126.920109, start:'2026-11-28', end:'2026-11-29', host:'@luckmiy', x:'https://x.com/luckmiy/status/2116139264996184074'},
];
/* 여기까지 수정 */

const bdYmd = n => new Date(n*864e5).toISOString().slice(0,10);
const BD_REGIONS = ['서울','경기','인천','부산','대구','대전','광주','울산'];
const bdRegion = c => c.addr.split(/\s+/)[0];
const bdState = { who:'all', region:'all', day:'' };
let bdMapOpen = false, bdMapFit = false;
let bdShowEnded = false;
function bdStatus(c){
  const s = dDiff(c.start), e = dDiff(c.end);
  if (e < 0) return {key:'ended', label:'종료', rank:2};
  if (s > 0) return {key:'soon', label: s === 1 ? '내일 시작' : `D-${s} 시작`, rank:1};
  return {key: e === 0 ? 'urgent' : 'ongoing', label: e === 0 ? '오늘 마지막 날' : `진행 중 · D-${e} 종료`, rank:0};
}
const bdParts = c => [c.title, c.cafe, c.addr, c.host, ...c.who, bdRegion(c), ...Object.values(c.perks || {}).flat()];
const bdOpenOn = (c, d) => c.start <= d && d <= c.end;
const bdPass = (c, skip) =>
  (skip === 'who' || bdState.who === 'all' || c.who.includes(bdState.who)) &&
  (skip === 'region' || bdState.region === 'all' || bdRegion(c) === bdState.region) &&
  (skip === 'day' || !bdState.day || bdOpenOn(c, bdState.day)) &&
  qHit(query, bdParts(c));
function bdChips(box, items, key, skipKey){
  box.replaceChildren();
  items.forEach(([v, label, n]) => {
    const b = el('button','chip'); b.type = 'button';
    b.setAttribute('aria-pressed', String(bdState[key] === v));
    b.append(document.createTextNode(label), el('span','n', String(n)));
    b.onclick = () => { bdState[key] = bdState[key] === v && v !== 'all' && v !== '' ? (key === 'day' ? '' : 'all') : v; renderBday(); };
    box.append(b);
  });
}
function bdCard(c, s){
  const box = el('article','bcard' + (s.key === 'ended' ? ' ended' : '') + (s.key === 'urgent' ? ' urgent' : ''));
  const r1 = el('div','row1'), who = el('div','b-who');
  c.who.forEach(m => who.append(el('span','b-m ' + (m === '제나' ? 'zena' : 'minami'), m)));
  r1.append(who, el('span','status ' + s.key, s.label));
  const t = el('div','b-title', c.title);
  const place = el('div','b-place');
  place.append(el('span','b-region', bdRegion(c)), el('b', null, c.cafe));
  const map = el('a','b-addr'); map.href = 'https://map.naver.com/p/search/' + encodeURIComponent(c.addr + ' ' + c.cafe);
  map.target = '_blank'; map.rel = 'noopener'; map.textContent = c.addr;
  map.insertAdjacentHTML('beforeend','<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M8 14.5s-4.5-3.9-4.5-7.6a4.5 4.5 0 0 1 9 0C12.5 10.6 8 14.5 8 14.5z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="8" cy="6.9" r="1.6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>');
  const days = dayNum(c.end) - dayNum(c.start) + 1;
  const period = el('div','b-period tnum', c.start === c.end ? `${md(c.start)} (${wd(c.start)}) 하루만` : `${md(c.start)} (${wd(c.start)}) ~ ${md(c.end)} (${wd(c.end)}) · ${days}일`);
  box.append(r1, t, place, map, period);
  if (c.perks) {
    const dl = el('dl','b-perks');
    [['basic','기본 특전'],['first','선착 특전'],['special','스페셜 특전'],['extra','추가 이벤트']].forEach(([k, label]) => {
      if (!c.perks[k] || !c.perks[k].length) return;
      dl.append(el('dt', null, label), el('dd', null, c.perks[k].join(' · ')));
    });
    box.append(dl);
  }
  const foot = el('div','b-foot');
  if (c.x) {
    const a = el('a','b-host'); a.href = c.x; a.target = '_blank'; a.rel = 'noopener';
    a.append(document.createTextNode('주최 ' + c.host + ' 공지 보기'));
    a.insertAdjacentHTML('beforeend','<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M6 3h7v7M13 3 4 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    foot.append(a);
  } else foot.append(el('span','b-host off','주최 ' + c.host));
  box.append(foot);
  highlight(box);
  return box;
}
/* ----- 생일카페 지도 (Leaflet + OpenStreetMap, API 키 없음) ----- */
// 좌표(lat, lng)가 있는 카페만 지도에 찍혀요. 없으면 목록에만 나와요.
let bdMap = null, bdLayer = null, bdItems = [], bdSig = '', bdLeaflet = null;
function bdLoadLeaflet(){
  if (window.L) return Promise.resolve();
  if (bdLeaflet) return bdLeaflet;
  bdLeaflet = new Promise((res, rej) => {
    const css = document.createElement('link'); css.rel = 'stylesheet';
    css.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'; document.head.append(css);
    const js = document.createElement('script'); js.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    js.onload = res; js.onerror = () => { bdLeaflet = null; rej(); }; document.head.append(js);
  });
  return bdLeaflet;
}
const bdDark = () => document.documentElement.dataset.theme === 'dark' || (document.documentElement.dataset.theme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
function bdMapSync(list){
  const wrap = $('bdMap');
  wrap.hidden = !bdMapOpen;
  if (!bdMapOpen) return;
  const pts = list.filter(({c}) => typeof c.lat === 'number' && typeof c.lng === 'number');
  const who = bdState.who === 'all' ? '전체' : bdState.who;
  $('bdMapTitle').replaceChildren(document.createTextNode(`${who} 생일카페 지도 `), el('b', null, `${pts.length}곳`));
  const miss = list.length - pts.length;
  $('bdMapNote').textContent = miss ? `※ 위치 정보가 없는 ${miss}곳은 지도에서 빠졌어요` : '마커를 누르면 카페 정보가 떠요';
  // 지역 바로가기
  const jump = $('bdMapJump'); jump.replaceChildren();
  const regs = [...new Set(pts.map(({c}) => bdRegion(c)))].sort((a,b) => (BD_REGIONS.indexOf(a)+1 || 99) - (BD_REGIONS.indexOf(b)+1 || 99));
  if (regs.length > 1) [['전체', pts], ...regs.map(r => [r, pts.filter(({c}) => bdRegion(c) === r)])].forEach(([label, arr]) => {
    const b = el('button', null, label + (label === '전체' ? '' : ` ${arr.length}`)); b.type = 'button';
    b.onclick = () => bdMap && bdFit(arr);
    jump.append(b);
  });
  bdItems = pts;
  const sig = pts.map(({c}) => BDAY_CAFES.indexOf(c)).join(',');
  const changed = sig !== bdSig; bdSig = sig;
  bdLoadLeaflet().then(() => {
    if (!bdMap) {
      $('bdMapBox').replaceChildren();
      $('bdMapBox').classList.toggle('dark', bdDark());
      bdMap = L.map('bdMapBox', {scrollWheelZoom:false, zoomControl:true, attributionControl:true});
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom:19, attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
      }).addTo(bdMap);
      bdLayer = L.layerGroup().addTo(bdMap);
      bdMap.on('zoomend', bdDraw);
      bdFit(bdItems);
    } else {
      bdMap.invalidateSize();
      if (changed || bdMapFit) bdFit(bdItems); else bdDraw();
    }
    bdMapFit = false;
  }).catch(() => {
    $('bdMapBox').replaceChildren(el('div', 'b-map-err', '지도를 불러오지 못했어요. 잠시 뒤 다시 열어 주세요.'));
  });
}
function bdFit(arr){
  if (!arr.length) { bdMap.setView([36.3, 127.8], 6); bdDraw(); return; }
  const b = L.latLngBounds(arr.map(({c}) => [c.lat, c.lng]));
  bdMap.fitBounds(b, {padding:[36, 36], maxZoom:16, animate:false});
  bdDraw();
}
// 가까운 마커는 숫자로 묶고, 누르면 그 자리로 확대
function bdDraw(){
  if (!bdMap) return;
  bdLayer.clearLayers();
  const z = bdMap.getZoom();
  const groups = [];
  bdItems.forEach(it => {
    const p = bdMap.project([it.c.lat, it.c.lng], z);
    const g = groups.find(g => g.p.distanceTo(p) < 34);
    if (g) g.items.push(it); else groups.push({p, items:[it]});
  });
  groups.forEach(g => {
    const cs = g.items.map(x => x.c);
    const same = cs.every(c => c.lat === cs[0].lat && c.lng === cs[0].lng);
    const zena = cs.some(c => c.who.includes('제나')), minami = cs.some(c => c.who.includes('미나미'));
    const tone = zena && minami ? 'both' : zena ? 'zena' : 'minami';
    const ll = bdMap.unproject(g.p, z);
    const n = cs.length;
    const icon = L.divIcon({className:'', iconSize:[30,30], iconAnchor:[15, n > 1 && !same ? 15 : 28], popupAnchor:[0,-24],
      html:`<span class="bm-pin ${tone}${n > 1 && !same ? ' cluster' : ''}"><i>${n > 1 ? n : ''}</i></span>`});
    const mk = L.marker(ll, {icon, keyboard:true, title: n > 1 ? `카페 ${n}곳` : cs[0].cafe}).addTo(bdLayer);
    if (n > 1 && !same) mk.on('click', () => bdMap.fitBounds(L.latLngBounds(cs.map(c => [c.lat, c.lng])), {padding:[48,48], maxZoom:18}));
    else mk.bindPopup(() => bdPopup(g.items), {maxWidth:260, minWidth:200});
  });
}
function bdPopup(items){
  const box = el('div','bm-pop');
  items.forEach(({c, s}) => {
    const one = el('div','bm-one');
    const who = el('div','b-who'); c.who.forEach(m => who.append(el('span','b-m ' + (m === '제나' ? 'zena' : 'minami'), m)));
    one.append(who, el('b','bm-t', c.title), el('span','bm-c', c.cafe), el('span','bm-d tnum', `${md(c.start)} ~ ${md(c.end)} · ${s.label}`));
    const links = el('div','bm-links');
    const go = el('button', null, '카드 보기'); go.type = 'button';
    go.onclick = () => { const t = $('bd-' + BDAY_CAFES.indexOf(c)); if (!t) return; bdMap.closePopup(); t.scrollIntoView({block:'center', behavior:'smooth'}); t.classList.add('flash'); setTimeout(() => t.classList.remove('flash'), 1600); };
    const nav = el('a', null, '길찾기'); nav.href = 'https://map.naver.com/p/search/' + encodeURIComponent(c.addr + ' ' + c.cafe); nav.target = '_blank'; nav.rel = 'noopener';
    links.append(go, nav); one.append(links); box.append(one);
  });
  return box;
}
document.addEventListener('click', e => { if (e.target.closest && e.target.closest('#bdMapClose')) { bdMapOpen = false; bdState.who = 'all'; renderBday(); } });

function renderBday(){
  if (!$('bday')) return;
  // 멤버 D-day
  const hero = $('bdHero'); hero.replaceChildren();
  BDAY_MEMBERS.forEach(([m, d]) => {
    const n = BDAY_CAFES.filter(c => c.who.includes(m)).length, dd = dDiff(d);
    const b = el('button','b-hero ' + (m === '제나' ? 'zena' : 'minami')); b.type = 'button';
    b.setAttribute('aria-pressed', String(bdState.who === m));
    const top = el('span','bh-top'); top.append(el('b', null, m), el('span','bh-dd tnum', dd === 0 ? 'HAPPY BIRTHDAY' : dd > 0 ? `D-${dd}` : `D+${-dd}`));
    b.append(top, el('span','bh-date tnum', `${md(d)} (${wd(d)}) 생일`), el('span','bh-n', `생일카페 ${n}곳`));
    b.setAttribute('aria-expanded', String(bdMapOpen && bdState.who === m));
    b.append(el('span','bh-map', bdMapOpen && bdState.who === m ? '지도 접기 ▲' : '지도로 보기 ▾'));
    b.onclick = () => {
      if (bdMapOpen && bdState.who === m) { bdMapOpen = false; bdState.who = 'all'; }
      else { bdMapOpen = true; bdState.who = m; bdMapFit = true; }
      renderBday();
      if (bdMapOpen) $('bdMap').scrollIntoView({block:'nearest', behavior:'smooth'});
    };
    hero.append(b);
  });
  // 필터
  const cnt = skip => f => BDAY_CAFES.filter(c => bdPass(c, skip) && f(c) && (bdShowEnded || bdStatus(c).key !== 'ended')).length;
  const cw = cnt('who');
  bdChips($('bdWho'), [['all','전체', cw(() => true)], ...BDAY_MEMBERS.map(([m]) => [m, m, cw(c => c.who.includes(m))])], 'who');
  const regions = [...new Set(BDAY_CAFES.map(bdRegion))].sort((a,b) => (BD_REGIONS.indexOf(a)+1 || 99) - (BD_REGIONS.indexOf(b)+1 || 99));
  const cr = cnt('region');
  bdChips($('bdRegion'), [['all','전 지역', cr(() => true)], ...regions.map(r => [r, r, cr(c => bdRegion(c) === r)])], 'region');
  // 날짜 띠
  const first = BDAY_CAFES.reduce((a,c) => c.start < a ? c.start : a, '9999'), last = BDAY_CAFES.reduce((a,c) => c.end > a ? c.end : a, '0000');
  const strip = $('bdDays'); strip.replaceChildren();
  const cd = cnt('day');
  const all = el('button','b-day all'); all.type = 'button'; all.setAttribute('aria-pressed', String(!bdState.day));
  all.append(el('b', null, '전체'), el('span', null, '기간'));
  all.onclick = () => { bdState.day = ''; renderBday(); };
  strip.append(all);
  for (let n = dayNum(first); n <= dayNum(last); n++) {
    const d = bdYmd(n), k = cd(c => bdOpenOn(c, d));
    const b = el('button','b-day' + (dDiff(d) === 0 ? ' today' : '') + (BDAY_MEMBERS.some(([,bd]) => bd === d) ? ' bd' : '') + (wd(d) === '일' ? ' sun' : wd(d) === '토' ? ' sat' : ''));
    b.type = 'button'; b.disabled = !k; b.setAttribute('aria-pressed', String(bdState.day === d));
    b.append(el('span','b-wd', dDiff(d) === 0 ? '오늘' : wd(d)), el('b','tnum', String(Number(d.slice(8)))), el('span','b-k', k ? `${k}곳` : '-'));
    const who = BDAY_MEMBERS.find(([,bd]) => bd === d); if (who) b.title = who[0] + ' 생일';
    b.onclick = () => { bdState.day = bdState.day === d ? '' : d; renderBday(); };
    strip.append(b);
  }
  // 카드
  const items = BDAY_CAFES.map(c => ({c, s:bdStatus(c)})).filter(({c}) => bdPass(c));
  const list = items.filter(x => bdShowEnded || x.s.key !== 'ended')
    .sort((a,b) => a.s.rank - b.s.rank || a.c.start.localeCompare(b.c.start) || a.c.end.localeCompare(b.c.end));
  const box = $('bdCards'); box.replaceChildren(...list.map(({c,s}) => { const card = bdCard(c, s); card.id = 'bd-' + BDAY_CAFES.indexOf(c); return card; }));
  bdMapSync(list);
  if (!list.length) box.append(el('div','empty', query ? `'${query}'(이)가 들어간 생일카페가 없어요.` : '조건에 맞는 생일카페가 없어요.'));
  const label = [bdState.who !== 'all' ? bdState.who : '', bdState.region !== 'all' ? bdState.region : '', bdState.day ? `${md(bdState.day)} (${wd(bdState.day)}) 운영` : ''].filter(Boolean).join(' · ');
  $('bdCount').replaceChildren(document.createTextNode(label ? label + ' ' : '전체 '), el('b', null, `${list.length}곳`));
  COUNT.bday = list.length;
  const endedN = items.filter(x => x.s.key === 'ended').length;
  const eb = $('bdEndedBtn'); eb.hidden = !endedN;
  eb.textContent = bdShowEnded ? '종료된 생일카페 숨기기' : `종료된 생일카페 ${endedN}곳 보기`;
  eb.onclick = () => { bdShowEnded = !bdShowEnded; renderBday(); };
}
renderBday();

/* 하단 메뉴 글자가 칸을 넘치면(폰 글자 크기를 키운 경우 등) '생일카페' → '생카'로 줄여 표시 */
function bdNavFit(){
  const nav = document.querySelector('.bnav'); if (!nav) return;
  nav.classList.remove('tight');
  const over = [...nav.querySelectorAll('.bn-l')].some(l => l.getBoundingClientRect().width > l.parentElement.clientWidth - 8);
  nav.classList.toggle('tight', over);
}
bdNavFit();
addEventListener('resize', bdNavFit);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(bdNavFit);
