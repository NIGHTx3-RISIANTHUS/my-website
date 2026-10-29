/* 여기부터 수정 */
// 작성 기준일
const DATA_UPDATED = '2026-10-28' // 수정 시 해당날짜로 변경해줄 것.
// 컴백 날짜 및 시간
const COMEBACK = '2026-11-03T18:00';
// 일정 메뉴
// date: 날짜, tiem: 시작 시간이지 당연히 type: 공개/공연/행사/시상식/기념일, time 없으면 종일
const SCHEDULE = [
  {date:'2026-10-13', time:'12:00', type:'공개', title:'[PULSE] PRE-ORDER'},
  {date:'2026-10-15', time:'18:00', type:'공개', title:'Loco TATA (Feat.미나미) 공개'},
  {date:'2026-10-17', type:'공연', title:'NOL 페스티벌', place:'경기 일산 킨텍스'},
  {date:'2026-10-19', time:'18:00', type:'공개', title:'[PULSE] CONCEPT PHOTO A'},
  {date:'2026-10-20', time:'18:00', type:'공개', title:'[PULSE] CONCEPT PHOTO B'},
  {date:'2026-10-22', time:'18:00', type:'공개', title:'[PULSE] CONCEPT TRAILER'},
  {date:'2026-10-23', type:'행사', title:'마산대학교 대동제', place:'경남 창원 마산대학교'},
  {date:'2026-10-23', type:'행사', title:'동아대학교 개교 80주년 기념식', place:'부산 사하구 동아대학교'},
  {date:'2026-10-23', time:'15:00', type:'공개', title:'[PULSE] ALBUM DETAIL'},
  {date:'2026-10-23', time:'18:00', type:'공개', title:'[PULSE] TRACK LIST'},
  {date:'2026-10-24', time:'15:30', type:'공연', title:'여기어때 콘서트팩 거제', place:'경남 거제 한화 벨버디어 야외광장'},
  {date:'2026-10-24', time:'19:00', type:'공연', title:'거제 한화오션 오션하모니', place:'경남 거제 한화오션 오션프라자 사외주차장'},
  {date:'2026-10-26', time:'18:00', type:'공개', title:'[PULSE] HIGHLIGHT MEDLEY'},
  {date:'2026-10-27', time:'18:00', type:'공개', title:'[PULSE] TITLE PREVIEW RELEASE'},
  {date:'2026-10-27', time:'22:00', type:'공개', title:'[PULSE] ♡♡♡♡♡'},
  {date:'2026-10-30', time:'18:00', type:'공개', title:'[PULSE] TITLE MV TEASER'},
  {date:'2026-10-30', time:'20:00', type:'행사', title:'네이버 쇼핑라이브 Galaxy Night'},
  {date:'2026-10-31', type:'행사', title:'경주 APEC 메모리얼 페스타 축하공연', place:'경주 엑스포대공원 선덕광장 일대'},
  {date:'2026-11-03', time:'18:00', type:'공개', title:'[PULSE] ALBUM RELEASE & MV DROP', place:'COMEBACK "PULSE"'},
  {date:'2026-11-03', time:'20:00', type:'공개', title:'[PULSE] SHOWCASE', place:'COMEBACK "PULSE", Stream Online on Mnet Plus'},
  {date:'2026-11-07', type:'시상식', title:'KGMA 코리아 그랜드 뮤직 어워드', place:'서울 고척 스카이돔 · MC 원이'},
  {date:'2026-11-27', type:'기념일', title:'제나(김가영) 생일'},
  {date:'2026-11-29', type:'기념일', title:'미나미(이토 미나미) 생일'},
  {date:'2026-12-05', type:'시상식', title:'AAA 아시아 아티스트 어워즈', place:'대만 가오슝'},
  {date:'2026-12-06', type:'시상식', title:'AAA 아시아 아티스트 어워즈', place:'대만 가오슝'},
  {date:'2026-12-20', type:'기념일', title:'리센느 데뷔 1000일'},
];

//이벤트 메뉴
// kind: 콜라보/팝업, end 없으면 재고 소진 시까지, endTime 기본 23:59, ended:true → 날짜와 상관없이 종료(소진·조기 마감)
// cafe: 누르면 열릴 공지 이동 (없으면 안눌림), announce: 당첨자 발표, added: 업로드날짜 (업로드 날짜부터 NEW 표시. 3일 후 자동 해제)
// 이 문구를 찾으신 분께는 소정의 상품을 드립니다. 캡쳐해서 댓글을 남겨주세요
const COLLABS = [
  {kind:'콜라보', cafe:'https://naver.me/G5k7rAUy', brand:'CU', who:'리센느', title:'RESCENE x CU BAKE 405_#1', start:'2026-09-17', end:'2026-10-25', how:['구매 특전'], gifts:[['포토카드','']]},
  {kind:'콜라보', cafe:'https://naver.me/G5k7rAUy', brand:'CU', who:'리센느', title:'RESCENE x CU BAKE 405_#2', start:'2026-10-25', how:['구매 특전'], gifts:[['포토카드','']]},
  {kind:'콜라보', cafe:'https://naver.me/G5k7rAUy', brand:'CU', who:'리센느', title:'리센느와 완성하는 일상 #1', start:'2026-09-17', end:'2026-10-25', announce:'11.02', how:['응모 추첨'], gifts:[['포토카드 5장 세트_아궁빵 Ver.','50명'],['키캡키링 5종 中 1종 랜덤','200명']]},
  {kind:'콜라보', cafe:'https://naver.me/G5k7rAUy', brand:'CU', who:'리센느', title:'리센느와 완성하는 일상 #2', start:'2026-09-23', end:'2026-10-25', announce:'11.09', how:['응모 추첨'], gifts:[['리센느 필름키링','200명'],['리센느 포토카드 5장 세트_Bake405 Ver.','50명']]},
  {kind:'콜라보', cafe:'https://naver.me/G5k7rAUy', brand:'CU', who:'리센느', title:'리센느와 CU의 SWEET SCENE', added:'2026-10-26', start:'2026-10-26', end:'2026-12-06', announce:'12.10', how:['응모 추첨'], gifts:[['포토카드 스페셜 패키지','50명']]},
  {kind:'콜라보', cafe:'https://naver.me/FwGMnIER', brand:'CU x 할리스커피', who:'리센느', title:'할리스 커피 마시고 리센느 스페셜 굿즈 받자!', start:'2026-09-28', end:'2026-10-27', announce:'11.06', how:['응모 추첨'], gifts:[['셀카 사인 폴라로이드 멤버별 1장','5명'],['리센느 스페셜 굿즈팩','50명'],['멤버별 포토카드 5종','1,000명']]},
  {kind:'콜라보', cafe:'https://naver.me/G2YIU1S4', brand:'GS25 x 할리스커피', who:'리센느', title:'GS25에서 만나는 HOLLYS 오늘의 커피 모먼트', start:'2026-09-29', end:'2026-10-28', announce:'11.12', how:['응모 추첨'], gifts:[['친필 사인 폴라로이드 랜덤 1종','5명'],['리센느 스페셜 굿즈팩','50명'],['멤버별 포토카드 5종','1,000명']]},
  {kind:'콜라보', cafe:'https://naver.me/x2Y1PMgF', brand:'그레인온', who:'리센느', title:'RESCENE EDITION Ver.네이버', start:'2026-10-01', how:['구매 특전'], gifts:[['포토카드 + 엽서 Ver.네이버','']]},
  {kind:'콜라보', cafe:'https://naver.me/x2Y1PMgF', brand:'그레인온', who:'리센느', title:'RESCENE EDITION Ver.카카오', start:'2026-10-01', how:['구매 특전'], gifts:[['포토카드 + 엽서 Ver.카카오','']]},
  {kind:'콜라보', cafe:'https://naver.me/x2Y1PMgF', brand:'그레인온', who:'원이', title:'첫 번째 이야기, 원이의 베리말차', start:'2026-09-21', end:'2026-10-04', announce:'10.12', how:['응모 추첨'], gifts:[['리센느 전원 친필사인 응원봉','1명'],['원이 한정 포스터','50명'],['원이 베리말차 효소 1box','30명']]},
  {kind:'콜라보', cafe:'https://naver.me/x2Y1PMgF', brand:'그레인온', who:'리브·미나미', title:'두 번째 이야기, 리브와 미나미의 맛', start:'2026-10-12', end:'2026-10-25', announce:'11.02', how:['응모 추첨'], gifts:[['리브&미나미 한정 포스터 + 제품 1box','5명'],['리브 포스터 / 미나미 포스터','각 50명'],['리브의 쿠키앤크림 / 미나미의 크림소다 1box','각 30명']]},
  {kind:'콜라보', cafe:'https://naver.me/x2Y1PMgF', brand:'그레인온', who:'메이·제나', title:'세 번째 이야기, 메이와 제나의 맛', added:'2026-10-26', start:'2026-10-26', end:'2026-11-08', announce:'11.16', how:['응모 추첨'], gifts:[['메이&제나 한정 포스터 + 제품 1box','5명'],['메이 포스터 / 제나 포스터','각 50명'],['메이의 유자레몬 / 제나의 블루베리요거트 1box','각 30명']]},
  {kind:'콜라보', cafe:'https://naver.me/FJOmH0B8', brand:'카사베르디', who:'리센느', title:'프리미엄 레드와인 비니거 스틱 기프트 에디션', start:'2026-09-24', ended:true, how:['구매 특전'], gifts:[['미니포스터(엽서)','']]},
  {kind:'콜라보', cafe:'https://naver.me/FDcqQElt', brand:'에이페', who:'리센느', title:'에이페 x 리센느 포토카드 이벤트', start:'2026-09-02', how:['구매 특전'], gifts:[['10만원 이상 구매 시 5종 SET'],['5만원 이상 구매 시 5종 中 2종 랜덤','']]},
  {kind:'콜라보', cafe:'https://naver.me/G4dCrK67', brand:'MLB', who:'리브·미나미·메이·제나', title:'MY ICONIC BEANIE, THE RESCENE WAY', start:'2026-10-07', end:'2026-10-31', note:'재고 소진 시 조기 종료', how:['구매 특전'], gifts:[['포토카드','']]},
  {kind:'콜라보', cafe:'https://cafe.naver.com/re5cene/65012', brand:'와키윌리', who:'원이', title:'Wacky WiLLy X WONI', start:'2026-10-13', end:'2026-10-27', note:'재고 소진 시 조기 종료', how:['구매 특전'], gifts:[['원이 싸인 포토카드','']]},
  {kind:'콜라보', cafe:'https://naver.me/GvWYU81x', brand:'포토이즘', who:'리센느', title:'PHOTOISM x 리센느', start:'2026-09-01', end:'2026-10-31', how:['현장 구매'], gifts:[['포토이즘 프레임 및 스내피즘','']]},
  {kind:'콜라보', cafe:'https://naver.me/G3veWqYW', brand:'포토이즘', who:'리브', title:'PHOTOISM x 리센느 리브', start:'2026-10-11', end:'2026-11-09', how:['현장 구매'], gifts:[['포토이즘 프레임 및 스내피즘','']]},
  {kind:'콜라보', cafe:'https://naver.me/5OljnV06', brand:'나랑드사이다', who:'리센느', title:'ZERO A NEW SCENE, IN ZERO', how:['구매 특전'], gifts:[['리센느 브로마이드 1매 + 포토카드 랜덤 1매 세트','']]},
  {kind:'콜라보', cafe:'https://naver.me/xgXiagjL', brand:'MERMONT', who:'원이', title:'MERMONT x WONI', start:'2026-10-23', end:'2026-11-06', note:'포토카드는 재고 소진 시까지', how:['구매 특전','응모 추첨'], gifts:[['포토카드',''],['친필 사인 MERMONT 신상 모자','3명'],['친필 메시지 카드','3명']]},
  {kind:'콜라보', cafe:'https://cafe.naver.com/re5cene/76555', brand:'할리스몰', who:'리센느', title:'HOLLYS x RESCENE', start:'2026-10-23', how:['구매 특전'], gifts:[['친필 사인 포토카드','']]},
  {kind:'콜라보', cafe:'https://cafe.naver.com/re5cene/80504', brand:'거제시', who:'리센느', title:'리센느 거제 명예시민 기념', added:'2026-10-26', end:'2026-10-30', endTime:'23:59', announce:'종료 후 7일 이내', how:['응모 추첨'], gifts:[['리센느 친필 사인','5명']]},
  {kind:'콜라보', cafe:'https://cafe.naver.com/re5cene/79050', brand:'안원잘부', who:'리센느', title:'안원잘부 유튜브 구독자 이벤트_MLB', added:'2026-10-26', start:'2026-10-25', end:'2026-11-01', announce:'11.04', how:['응모 추첨'], gifts:[['리센느PICK 커브 패딩','5명'],['미야옹 비니','5명']]},
  {kind:'콜라보', cafe:'https://naver.me/xB7LYQHU', brand:'한스킨', who:'미나미·제나', title:'미나미&제나 친필사인 포토카드 랜덤 증정', added:'2026-10-26', start:'2026-10-25', how:['구매 특전'], gifts:[['미나미·제나 포토카드','']]},
  {kind:'팝업', cafe:'https://cafe.naver.com/re5cene/50492', brand:'위드뮤', who:'리센느', title:'RESCENE POP-UP MD 온라인 몰', note:'11월 순차 발송', how:['예약 구매'], gifts:[['굿즈 판매','']]},
  {kind:'팝업', cafe:'https://cafe.naver.com/re5cene/50488', brand:'가우디', who:'리센느', title:'RESCENE X GAUDI Collaboration', start:'2026-10-01', end:'2026-10-31', how:['현장 구매'], gifts:[['굿즈 판매','']]},
  // 종료된 이벤트
  {kind:'콜라보', cafe:'https://cafe.naver.com/re5cene/59295', brand:'메가스터디', who:'리센느', title:'세상아 기대해', start:'2026-10-07', end:'2026-10-20', how:['응모 추첨'], gifts:[['NFC 포토 키링','2,000명'],['CU 3,000원권','1,000명']]},
  {kind:'팝업', cafe:'https://naver.me/GwfctHXK', brand:'LIT&MAT', who:'리브·메이', title:'LIT&MAT OFFICIAL POP-UP STORE', start:'2026-10-16', end:'2026-10-22', how:['현장 구매'], gifts:[['굿즈 판매','']]},
  {kind:'콜라보', cafe:'https://naver.me/5JqwgXLz', brand:'할리스', who:'리센느', title:'행운 담은 찹쌀떡 세트', added:'2026-10-26', start:'2026-10-27', end:'2026-11-04', how:['구매 특전'], gifts:[['리센느 행운부적','']]},
  {kind:'콜라보', cafe:'https://naver.me/5l2AS8Mj', brand:'삼성전자', who:'리센느', title:'일잘러 필수템 vs 전송 치트키, 당신의 원픽은?', added:'2026-10-28', start:'2026-10-28', end:'2026-11-11', how:['응모 추첨'], gifts:[['갤럭시X리센느 포토카드 세트','20명']]},
];

// 투표 메뉴
// 투표: start/startTime 시작(있을 때만), end 마감일, endTime 마감 시각, 카페 공지 링크
// unite: 연합 투표 — ['아이콘','부문','이름','영문','blue 또는 rose'] 형식으로 한 줄씩
const VOTES = [
  {key:'KGMA', title:'KGMA Berriz 글로벌 팬 초이스', end:'2026-10-19', endTime:'23:59', who:'Berriz 회원', limit:'1일 1회', related:'KGMA 투표 인증 이벤트', cafe:''},
  {key:'MAMA', title:"2026 MAMA FANS' CHOICE 1차", end:'2026-10-22', endTime:'23:59', who:'Mnet Plus 회원', limit:'1일 1회', cafe:'',
    unite:[['남자','ALPHA DRIVE ONE · AND2BLE(앤더블) · BIGBANG'],['여자','RESCENE(리센느) · BABYMONSTER · Hearts2Hearts']]},
  {key:'MMA', title:'MMA 2026 TOP10 투표', end:'2026-10-29', endTime:'23:59', who:'멜론 회원', limit:'무료회원 1일 1회 · 유료회원 1일 3회', related:'MMA 티켓 자동 응모', cafe:'https://cafe.naver.com/re5cene/67899'},
  {key:'MMA', title:"2026 Global TOP10", start:'2026-10-30', startTime:'18:00', end:'2026-11-13', endTime:'23:59', who:'멜론 및 Berriz 회원', limit:'멜론: 무료회원 1일 1회 · 유료회원 1일 3회\nBerriz: 1일 1회', cafe:'https://cafe.naver.com/re5cene/83140',
    unite:[['🍀','올해의 신인','알파드라이브원','ALPHA DRIVE ONE','blue'],['💘','Global TOP10','리센느','RESCENE','rose']]},
  {key:'KAKAO BANK', short:'카뱅', title:'MMA 2026 X KAKAO BANK 특별상 투표', end:'2026-10-30', who:'카카오뱅크 계좌 또는 mini 보유자', limit:'1일 1회', related:'MMA 카카오뱅크 특별석 자동 응모', cafe:'https://cafe.naver.com/re5cene/67508'},
  {key:'MAMA', short:'MAMA 2차', title:"2026 MAMA FANS' CHOICE 2차", start:'2026-10-28', startTime:'18:00', end:'2026-11-08', endTime:'23:59', who:'Mnet Plus 회원', limit:'1일 1회', cafe:'https://cafe.naver.com/re5cene/81677',
    unite:[['🍀','남자 부문','앤더블','AND2BLE','blue'],['💘','여자 부문','리센느','RESCENE','rose'],['💘','올해의 팬스 초이스 With VISA','리센느','RESCENE','rose']]},
  {key:'MMA', short:'MMA 연합', title:"올해의 베스트송(Song of the Year)", start:'2026-10-30', startTime:'', end:'2026-11-03', endTime:'23:59', who:'멜론 회원', limit:'무료회원 1일 1회 · 유료회원 1일 3회', cafe:'https://cafe.naver.com/re5cene/84417',
    unite:[['🍀','남자 부문','코르티스(CORTIS)','blue']]},
];

// 앨범 메뉴
// 앨범 사전예약 카운트다운
const PREORDER = {start:'2026-10-13T12:00', end:'2026-11-02T23:59'};
const PREORDER_NOTICE = 'https://naver.me/F8lv0dEe';
const VERSIONS = ['Standard','Limited','QR','Wappen','Guardian'];
// 각 버전 구성: [항목, 내용, 랜덤 표기]
const COMPONENTS = {
  Standard: {base:[['CD-R','포함'],['CD 봉투','포함'],['포토북','230×300mm'],['포토카드','랜덤 2종','총 10종'],['포스터','180×120mm']],
             only:[['유닛 포토카드','랜덤 1종','총 5종'],['필름 포토카드','랜덤 1종','총 10종']]},
  Limited:  {base:[['CD-R','포함'],['포토북','182×257mm'],['포토카드','랜덤 2종','총 10종'],['포스터','355×245mm']],
             only:[['럭키 메시지 카드','랜덤 1종','총 5종']]},
  QR:       {base:[['포토카드','랜덤 2종','총 4종']],
             only:[['QR카드',''],['전용 패키지','랜덤 1종','총 5종'],['셀피 포카','랜덤 3종','총 15종'],['이미지 카드','랜덤 1종','총 5종'],['ID 포카','랜덤 1종','총 5종']]},
  Wappen:   {base:[['포토카드','랜덤 1종','총 5종']],
             only:[['Wappen','']]},
  Guardian: {base:[['CD-R','포함'],['포토카드','5종 전부'],['포스터','95×95mm']],
             only:[['전용 패키지 BOX','1종'],['로켓 펜던트','1종','총 5종'],['펜던트 파우치','1종']]},
};
// 앨범 구성 추가
// group: 특전 / 공동구매 / 오프라인
// ended:true → 이벤트 종료 표시, optSoldOut:true → 옵션(세트) 매진 표시_img → 카드 눌렀을 때 뜨는 특전 사진 이름(파일 맨 아래 STORE_IMG)
const STORES = [
  {group:'특전', name:'메이크스타', img:'makestar_kitty', ver:['Standard'], perk:'미공개 포토카드', rnd:'랜덤 1종 · 총 5종',
    option:'15set · 무기명 단체 사인 앨범 + 사인 포토카드 랜덤 1매 · 50명 한정', optSoldOut:true,
    rule:'5장 구매 시 중복 없이 증정', event:'사인 폴라로이드 1매 (5명)', price:'20,800', optPrice:'312,000'},
  {group:'특전', name:'배달의민족 B마트', img:'bmart', ver:['Limited'], perk:'미공개 포토카드', rnd:'랜덤 1종 · 총 5종',
    option:'5set 구매 시 중복 없이 증정 · 리센느 최애 간식 봉다리(선택)', price:'26,000', optPrice:'130,000'},
  {group:'특전', name:'포켓 CU', img:'cu_qr', ver:['QR'], perk:'미공개 포토카드', rnd:'랜덤 1종 · 총 5종',
    option:'5set 구매 시 중복 없이 증정', price:'8,900', optPrice:'44,500'},
  {group:'특전', name:'후즈팬', img:'whosfan', ver:['Wappen'], perk:'미공개 포토카드', rnd:'랜덤 1종 · 총 5종',
    rule:'5장 구매 시 중복 없이 증정', price:'11,100'},
  {group:'특전', name:'포켓 CU', img:'cu_wappen', ver:['Wappen'], perk:'미공개 유닛 포토카드', rnd:'랜덤 1종 · 총 2종',
    option:'2set 구매 시 중복 없이 증정', price:'11,100', optPrice:'22,200'},
  {group:'특전', name:'위드뮤', img:'withmuu', ver:['QR'], perk:'미공개 셀피 포토카드', rnd:'랜덤 1종 · 총 5종',
    rule:'세트 구매 시 중복 없이 증정', price:'8,900'},
  {group:'특전', name:'스타스테이션', img:'starstation', ver:['QR'], perk:'미공개 셀카 포토카드', rnd:'랜덤 1종 · 총 5종',
    rule:'5장 구매 시 중복 없이 증정', price:'9,000'},
  {group:'특전', name:'YES24', img:'yes24', ver:['ALL'], perk:'미공개 셀피 포토카드', rnd:'랜덤 1종 · 총 5종',
    rule:'QR 5종 SET 구매 시 중복 없이 증정', event:'친필 사인 포토카드 (10명)', price:'판매처 확인', optPrice:'44,500'},
  {group:'특전', name:'올리브영', img:'oliveyoung', sub:'온라인', ver:['Standard'], perk:'미공개 셀카 포토카드', rnd:'랜덤 1종 · 총 5종',
    rule:'5장 구매 시 중복 없이 증정 · 오프라인과 특전 이미지 동일', price:'20,800'},
  {group:'특전', name:'올리브영', img:'oliveyoung', sub:'오프라인 · 홍대놀이터, 명동역', ver:['Standard'], perk:'미공개 셀카 포토카드', rnd:'랜덤 1종 · 총 5종',
    rule:'5장 구매 시 중복 없이 증정 · 온라인과 특전 이미지 동일', event:'친필 사인 폴라로이드 (즉석 추첨 5명)', price:'20,800'},
  {group:'특전', name:'YES24', img:'yes24_guardian', ver:['Guardian'], perk:'미공개 셀피 포토카드', rnd:'랜덤 1종 · 총 5종',
    rule:'5장 이상 구매해도 중복 증정될 수 있음'},
  {group:'특전', name:'무신사', img:'musinsa_guardian', sub:'온라인 · 무신사 드롭', ver:['Guardian'], perk:'미공개 포토카드', rnd:'랜덤 1종 · 총 5종',
    rule:'5장 구매 시 중복 없이 증정 · 오프라인과 특전 이미지 동일', event:'댓글 추첨 사인 CD (5명)', price:'44,600'},
  {group:'특전', name:'무신사', img:'musinsa_guardian', sub:'오프라인 · 무신사 성수', ver:['Guardian'], perk:'미공개 포토카드', rnd:'랜덤 1종 · 총 5종',
    rule:'5장 구매 시 중복 없이 증정 · 온라인과 특전 이미지 동일', event:'사인 폴라로이드 랜덤 1종 (총 5종)', price:'44,600'},

  {group:'공동구매', name:'Ktown4U', img:'pin_artwork', ver:['ALL'], perk:'Pulse (Artwork Ver.) 핀버튼', by:'음총팀 자체 제작', rnd:'랜덤 1종 · 총 5종', rule:'한정 수량',
    prices:{STANDARD:'17,400',LIMITED:'21,800',QR:'8,200','QR 5set':'40,700','QR 기증':'7,400',WAPPEN:'9,800',GUARDIAN:'38,500'}},
  {group:'공동구매', name:'뮤직 플랜트', img:'pin_concept', ver:['Standard','Limited','QR','Wappen'], perk:'Pulse (Concept Photo Ver.) 핀버튼', by:'음총팀 자체 제작', rnd:'랜덤 1종 · 총 5종', rule:'한정 수량',
    prices:{STANDARD:'16,900',LIMITED:'21,100',QR:'7,300','QR 5set':'36,200','QR 기증':'7,200',WAPPEN:'9,100'}},
  {group:'공동구매', name:'ALL MD', img:'allmd', ver:['ALL'], perk:'리마인 파이팅 Ver. 포토카드', by:'음총팀 자체 제작', rnd:'랜덤 1종 · 총 5종', rule:'5장 구매 시 중복 없이 증정 · 한정 수량',
    event:'추가 사은품 증정 (판매처 공지 참고)',
    prices:{STANDARD:'16,900',LIMITED:'21,100',QR:'7,200','QR 5set':'36,200',WAPPEN:'9,100',GUARDIAN:'36,000'}},
  {group:'공동구매', name:'위드뮤', img:'withmuu', ver:['QR'], perk:'미공개 셀피 포토카드', rnd:'랜덤 1종 · 총 5종', rule:'5장 구매 시 중복 없이 증정',
    prices:{'QR 5set':'40,000'}},

  {group:'오프라인', name:'메이크스타', img:'makestar_bite', sub:'SHOWCASE', ended:true, ver:['Standard'], perk:'미공개 셀카 포토카드 (한입만 Ver.)',
    rule:'5장 구매 시 중복 없이 증정', entry:'쇼케이스 초대권 응모 · 앨범 1장당 응모권 1매', winners:'370명', prize:'쇼케이스 이벤트 초대권', price:'20,800'},
  {group:'오프라인', name:'후즈팬', img:'whosfan_showcase', sub:'SHOWCASE', ended:true, ver:['Standard'], perk:'미공개 셀카 포토카드',
    entry:'쇼케이스 초대권 응모 · 앨범 1장당 응모권 1매', winners:'370명', prize:'쇼케이스 이벤트 초대권', price:'20,800'},
  {group:'오프라인', name:'메이크스타', img:'makestar_puppy', sub:'단체 영상통화', ended:true, ver:['Standard'], perk:'미공개 셀카 포토카드 (강아지 Ver.)', saleEnd:'2026-10-19',
    entry:'단체 영상통화 응모 · 앨범 1장당 응모권 1매', winners:'20명',
    prize:'아티스트와 영상통화 + 기명 사인 앨범 1매 + 사인 포토카드 1매', event:'사인 폴라로이드 1매 (당첨자 중 5명 선정)', price:'20,800'},
  {group:'오프라인', name:'메이크스타', img:'makestar_mz', sub:'대면 팬사인회', ended:true, ver:['Standard'], perk:'미공개 메시지 포토카드 (MZ 사원 Ver.)', saleEnd:'2026-10-19',
    entry:'대면 팬사인회 응모 · 앨범 1장당 응모권 1매', winners:'30명',
    prize:'대면 팬사인회 참석권 + 기명 사인 앨범 1매 + 사인 포토카드 1매', event:'사인 폴라로이드 1매 (당첨자 중 5명 선정)', price:'20,800'},
  {group:'오프라인', name:'플러스챗', img:'pluschat', sub:'SHOWCASE', ver:['Limited'], perk:'미공개 포토카드 (심쿵 Ver.)', saleEnd:'2026-10-25',
    rule:'5장 구매 시 중복 없이 증정', entry:'쇼케이스 초대권 응모 · 앨범 1장당 응모권 1매', winners:'10명', prize:'쇼케이스 이벤트 초대권 (타 판매처 중복 당첨 불가)', price:'26,000'},
  {group:'오프라인', name:'메이크스타', img:'makestar_fox', sub:'개인 영상통화', ver:['Standard'], perk:'미공개 셀카 포토카드 (여우 Ver.)', saleEnd:'2026-10-28',
    rule:'5장 구매 시 중복 없이 증정', entry:'개인 영상통화 응모 · 앨범 1장당 응모권 1매', winners:'멤버별 10명',
    prize:'응모 멤버와 영상통화 + 응모 멤버 기명 사인 앨범 1매', event:'사인 폴라로이드 1매 (당첨자 중 5명 선정)', price:'20,800'},
  {group:'오프라인', name:'메이크스타', img:'makestar_rabbit', sub:'대면 팬사인회', ver:['Standard'], perk:'미공개 셀카 포토카드 (토끼 Ver.)', saleEnd:'2026-10-28',
    rule:'5장 구매 시 중복 없이 증정', entry:'대면 팬사인회 응모 · 앨범 1장당 응모권 1매', winners:'40명',
    prize:'대면 팬사인회 참석권 + 기명 사인 앨범 1매 + 사인 포토카드 랜덤 1매', event:'사인 폴라로이드 1매 (당첨자 중 5명 선정)', price:'20,800'},
  {group:'오프라인', name:'위드뮤', img:'', sub:'대면 팬사인회', ver:['QR'], perk:"'당일착장'미공개 포토카드 (공주 Ver.)", saleEnd:'2026-10-31',
    rule:'5장 구매 시 중복 없이 증정', entry:'대면 팬사인회 응모 · 앨범 1장당 응모권 1매', winners:'40명',
    prize:'대면 팬사인회 참석권', event:'친필 사인 폴라로이드 랜덤 1매 (당첨자 중 5명 선정)', price:'8,900'},
  {group:'오프라인', name:'위드뮤', img:'', sub:'개인 영상통화', ver:['QR'], perk:"'당일착장'미공개 포토카드 (하트뿔 Ver.)", saleEnd:'2026-10-31',
    rule:'5장 구매 시 중복 없이 증정', entry:'개인 영상통화 응모 · 앨범 1장당 응모권 1매', winners:'멤버별 10명',
    prize:'응모 멤버와 영상통화', event:'사인 폴라로이드 당첨 멤버 1매 (당첨자 중 5명 선정)', price:'8,900'},
];
const COLLECT = [['Standard',40],['Limited',10],['QR',35],['Wappen',7],['Guardian',10]];
// 응원봉 판매 시작 시각
const LIGHTSTICK_OPEN = '2026-10-26T12:00';
const LIGHTSTICK_SOLDOUT = true; // 품절 true, 재입고 false
/* ===== 이 문구를 찾으신 회원께서는 캡쳐해서 댓글로 남겨주시면 소정의 상품을 드립니다. ===== */

const $ = id => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
const kst = (d, t='00:00') => Date.parse(`${d}T${t}:00+09:00`);
const ymdFmt = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'});
const dayNum = s => { const [y,m,d] = s.split('-').map(Number); return Date.UTC(y,m-1,d)/864e5; };
const todayStr = () => ymdFmt.format(new Date());
const dDiff = s => dayNum(s) - dayNum(todayStr());
const WD = ['일','월','화','수','목','금','토'];
const wd = s => WD[new Date(dayNum(s)*864e5).getUTCDay()];
const md = s => s.slice(5).replace('-','.');
const store = { get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }, set(k,v){ try { localStorage.setItem(k,v); } catch(e){} } };

const clockFmt = new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
function tickLightstick(now){
  const open = kst(...LIGHTSTICK_OPEN.split('T')), d = LIGHTSTICK_OPEN.slice(0,10), t = LIGHTSTICK_OPEN.slice(11);
  const badge = $('lsBadge'), sub = $('lsSub');
  if (now >= open && LIGHTSTICK_SOLDOUT) { badge.textContent = 'SOLD OUT'; badge.classList.remove('on'); badge.classList.add('sold'); sub.textContent = `${md(d)} (${wd(d)}) ${t} 예약 판매 · 품절`; return; }
  if (now >= open) { badge.textContent = 'NOW ON SALE'; badge.classList.remove('sold'); badge.classList.add('on'); sub.textContent = `${md(d)} (${wd(d)}) ${t}부터 판매 중`; return; }
  let left = open - now; const dd = Math.floor(left/864e5); left -= dd*864e5;
  const h = Math.floor(left/36e5), m = Math.floor((left - h*36e5)/6e4);
  const rest = dd ? `${dd}일 ${h}시간 남음` : h ? `${h}시간 ${m}분 남음` : `${Math.max(m,1)}분 남음`;
  sub.textContent = `${md(d)} (${wd(d)}) ${t} 판매 시작 · ${rest}`;
}
function tick(){
  const now = Date.now();
  tickLightstick(now);
  $('clock').textContent = clockFmt.format(now);
  const t = todayStr();
  $('today').textContent = `${md(t)} (${wd(t)}) KST 기준`;
  let left = Math.max(0, kst(...COMEBACK.split('T')) - now);
  const d = Math.floor(left/864e5); left -= d*864e5;
  const h = Math.floor(left/36e5); left -= h*36e5;
  const m = Math.floor(left/6e4); const s = Math.floor((left - m*6e4)/1000);
  $('cd-d').textContent = d; $('cd-h').textContent = String(h).padStart(2,'0');
  $('cd-m').textContent = String(m).padStart(2,'0'); $('cd-s').textContent = String(s).padStart(2,'0');
}

const evTime = e => kst(e.date, '23:59'); // 일정은 그날 23:59까지 표시
const evStart = e => kst(e.date, e.time || '00:00');
function dayBlock(date, evs, isPast){
  const wrap = el('div','day' + (isPast ? ' past' : ''));
  const lab = el('div','dlabel');
  lab.append(el('b','tnum',md(date)), el('span',null,wd(date) + '요일'));
  const dd = dDiff(date);
  if (!isPast) lab.append(el('span','dchip' + (dd===0?' today':''), dd===0?'오늘':dd===1?'내일':`D-${dd}`));
  const list = el('div','evs');
  evs.forEach(e => {
    const row = el('div','ev');
    row.append(el('span','time tnum', e.time || '종일'), el('span','tag t-'+e.type, e.type));
    const w = el('div','what'); const title = el('b'); if(e.added && dDiff(e.added)<=0 && dDiff(e.added)>=-2) title.append(el('span','new','NEW'),document.createTextNode(' '+e.title)); else title.textContent=e.title; w.append(title); if(e.place) w.append(el('span',null,e.place));
    row.append(w); list.append(row);
  });
  wrap.append(lab, list); return wrap;
}
const COUNT = {};
const SORT_DEFAULT = {collab:'end', vote:'end'};
const SORT = {};
Object.keys(SORT_DEFAULT).forEach(k => { const v = store.get('rescene-sort-' + k); SORT[k] = v === 'start' || v === 'end' ? v : SORT_DEFAULT[k]; });
const qWords = q => q.toLowerCase().split(/[\s,]+/).filter(Boolean);
const qHit = (q, parts) => { if (!q) return true; const h = parts.filter(Boolean).join(' ').toLowerCase().replace(/\s+/g,' '); return qWords(q).every(w => h.includes(w)); };
function showResult(key, q, n, emptyMsg){
  COUNT[key] = n; const rs = $(key + 'Result'); rs.hidden = !q;
  if (q) rs.replaceChildren(document.createTextNode(`'${q}' 검색 결과 `), el('b',null,`${n}건`));
}
const evParts = e => { const [y,m,d] = e.date.split('-').map(Number); return [e.type, e.title, e.place, e.time, md(e.date), `${m}월 ${d}일`, wd(e.date)+'요일']; };
const months = new Set();
try { (JSON.parse(store.get('rescene-months') || '[]') || []).forEach(m => months.add(m)); } catch(e){}
const inMonth = e => !months.size || months.has(e.date.slice(0,7));
function renderMonthFilters(q){
  const all = [...new Set(SCHEDULE.map(e => e.date.slice(0,7)))].sort();
  [...months].forEach(m => { if (!all.includes(m)) months.delete(m); });
  const thisYear = todayStr().slice(0,4), thisMonth = todayStr().slice(0,7);
  const fb = $('monthFilters'); fb.replaceChildren();
  [['all','전체'], ...all.map(m => [m, (m.slice(0,4) === thisYear ? '' : m.slice(2,4) + '년 ') + Number(m.slice(5)) + '월'])].forEach(([k,label]) => {
    const n = SCHEDULE.filter(e => (k === 'all' || e.date.startsWith(k)) && qHit(q, evParts(e))).length;
    const b = el('button','chip'); b.type = 'button';
    b.setAttribute('aria-pressed', String(k === 'all' ? !months.size : months.has(k)));
    b.append(document.createTextNode(label)); if (k === thisMonth) b.title = '이번 달';
    b.append(el('span','n',String(n)));
    b.onclick = () => { if (k === 'all') months.clear(); else if (months.has(k)) months.delete(k); else months.add(k); store.set('rescene-months', JSON.stringify([...months])); renderSchedule(); };
    fb.append(b);
  });
}
function renderSchedule(){
  const now = Date.now();
  const q = query;
  renderMonthFilters(q);
  const sorted = SCHEDULE.filter(inMonth).sort((a,b) => kst(a.date, a.time || '00:00') - kst(b.date, b.time || '00:00'));
  const upcoming = sorted.filter(e => evTime(e) >= now), past = sorted.filter(e => evTime(e) < now);
  const group = arr => arr.reduce((m,e) => ((m[e.date] ||= []).push(e), m), {});
  const fill = (box, arr, isPast) => { box.replaceChildren(); const g = group(arr); Object.keys(g).forEach(d => box.append(dayBlock(d, g[d], isPast))); };
  if (q) {
    const up = upcoming.filter(e => qHit(q, evParts(e))), pa = past.filter(e => qHit(q, evParts(e)));
    fill($('days'), up, false);
    const g = group(pa); Object.keys(g).forEach(d => $('days').append(dayBlock(d, g[d], true)));
    if (!up.length && !pa.length) $('days').append(el('div','empty', `'${q}'(이)가 들어간 일정이 없어요.`));
    highlight($('days'), q);
    showResult('schedule', q, up.length + pa.length);
    $('next').hidden = true; $('pastBtn').hidden = true; $('pastDays').hidden = true;
    return;
  }
  showResult('schedule', '', 0); $('next').hidden = false;
  fill($('days'), upcoming, false);
  if (!upcoming.length) $('days').append(el('div','empty', months.size ? '선택한 달에 남은 일정이 없어요. 지난 일정을 확인해 보세요.' : '예정된 일정이 없어요. 새 일정이 나오면 업데이트할게요.'));
  fill($('pastDays'), past.reverse(), true);
  const nx = $('next'); nx.replaceChildren();
  const n = upcoming.find(e => !e.time || evStart(e) >= now) || upcoming[0];
  if (n) {
    const dd = dDiff(n.date);
    nx.append(el('span','k','NEXT · ' + (dd===0?'오늘':dd===1?'내일':`D-${dd}`)), el('span','t',n.title),
      el('span','m', `${md(n.date)} (${wd(n.date)}) ${n.time || '종일'}` + (n.place ? ` · ${n.place}` : '')));
  } else nx.hidden = true;
  const pb = $('pastBtn');
  pb.hidden = !past.length;
  const sync = () => pb.textContent = $('pastDays').hidden ? `지난 일정 ${past.length}개 보기` : '지난 일정 접기';
  pb.onclick = () => { $('pastDays').hidden = !$('pastDays').hidden; sync(); };
  sync();
}

function statusOf(c){
  const now = Date.now();
  if (c.ended) return {key:'ended', label:'종료', rank:3, sort: c.end ? -kst(c.end, c.endTime || '23:59') : 0};
  if (c.start && kst(c.start) > now) { const d = dDiff(c.start); return {key:'soon', label: d===1?'내일 시작':`D-${d} 시작`, rank:2, sort:kst(c.start)}; }
  if (!c.end) return {key:'ongoing', label:'재고 소진 시까지', rank:1, sort:Infinity};
  const endMs = kst(c.end, c.endTime || '23:59');
  if (endMs < now) return {key:'ended', label:'종료', rank:3, sort:-endMs};
  const d = dDiff(c.end);
  if (d === 0) return {key:'urgent', label: c.endTime ? `오늘 ${c.endTime} 마감` : '오늘 마감', rank:0, sort:endMs};
  return {key: d <= 3 ? 'urgent' : 'open', label:`D-${d} 마감`, rank:0, sort:endMs};
}
const FILTERS = [['all','전체'],['콜라보','콜라보'],['팝업','팝업'],['urgent','마감 임박'],['new','New']];
const filters = new Set();
try { (JSON.parse(store.get('rescene-filters') || '[]') || []).forEach(k => { if (FILTERS.some(f => f[0] === k && k !== 'all')) filters.add(k); }); } catch(e){}
const saveFilters = () => store.set('rescene-filters', JSON.stringify([...filters]));
const oneOk = (k, c, s) => k==='urgent' ? s.key==='urgent' : k==='new' ? (!!c.isNew && s.key!=='ended') : c.kind===k;
let showEnded = false;

let query = '';
const norm = v => String(v).toLowerCase().replace(/\s+/g,' ');
const haystack = c => norm([c.kind, c.kind==='팝업'?'popup':'collab', c.brand, c.who, c.title, c.note||'', c.announce||'', ...c.how, ...c.gifts.flat()].join(' '));
const hit = c => !query || query.toLowerCase().split(/[\s,]+/).filter(Boolean).every(w => haystack(c).includes(w));
function matches(c, s){
  if (!hit(c)) return false;
  if (!filters.size) return true;
  return [...filters].some(k => oneOk(k, c, s));
}
function card(c, s){
  const cls = 'card' + (s.key==='urgent'?' urgent':'') + (s.key==='ended'?' ended':'');
  let box;
  if (c.cafe) { box = el('a', cls); box.href = c.cafe; box.target = '_blank'; box.rel = 'noopener'; box.setAttribute('aria-label', `${c.brand} ${c.title} 공지 열기`); }
  else box = el('article', cls);
  const r1 = el('div','row1');
  const br = el('div','brand'); br.append(el('span','kind', c.kind==='팝업'?'POP-UP ':'COLLAB '), el('b',null,c.brand), document.createTextNode(' · ' + c.who));
  r1.append(br, el('span','status ' + s.key, s.label));
  const t = el('div','ctitle'); if (c.isNew && s.key!=='ended') t.append(el('span','new','NEW')); t.append(document.createTextNode(c.title));
  const meta = el('div','meta');
  c.how.forEach(h => meta.append(el('span','how',h)));
  const period = c.start ? `${md(c.start)} ~ ${c.end ? md(c.end) : ''}` : c.end ? `~ ${md(c.end)}${c.endTime ? ' ' + c.endTime : ''}` : '';
  const tail = [period, !c.end ? '재고 소진 시까지' : '', c.note || ''].filter(Boolean).join(' · ');
  if (tail) meta.append(el('span','tnum',tail));
  if (c.announce) meta.append(el('span','ann', '당첨 발표 ' + c.announce));
  const ul = el('ul','gifts');
  c.gifts.forEach(([g,n]) => { const li = el('li'); li.append(el('span',null,g)); if (n) li.append(el('span','tnum',n)); ul.append(li); });
  box.append(r1, t, meta, ul);
  if (c.cafe) { const go = el('span','go','공지로 이동'); go.insertAdjacentHTML('beforeend','<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M6 3h7v7M13 3 4 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'); box.append(go); }
  return box;
}
function highlight(root, q = query){
  if (!q) return;
  const words = q.trim().toLowerCase().split(/[\s,]+/).filter(Boolean);
  if (!words.length) return;
  const re = new RegExp('(' + words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|') + ')','gi');
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n => {
    const parts = n.nodeValue.split(re); if (parts.length < 2) return;
    const frag = document.createDocumentFragment();
    parts.forEach((p,i) => frag.append(i % 2 ? el('mark',null,p) : document.createTextNode(p)));
    n.replaceWith(frag);
  });
}
const startMs = x => x.start ? kst(x.start, x.startTime || '00:00') : -Infinity;
const endMs = x => x.end ? kst(x.end, x.endTime || '23:59') : Infinity;
const collabByStart = (a,b) => (a.s.key==='ended') - (b.s.key==='ended') || startMs(a.c) - startMs(b.c) || endMs(a.c) - endMs(b.c);
function renderCollabs(){
  const items = COLLABS.map(c => ({c, s:statusOf(c)}));
  const fb = $('filters'); fb.replaceChildren();
  FILTERS.forEach(([k,label]) => {
    const n = items.filter(({c,s}) => s.key!=='ended' && hit(c) && (k==='all' || oneOk(k, c, s))).length;
    const b = el('button','chip'); b.type = 'button'; b.setAttribute('aria-pressed', String(k==='all' ? !filters.size : filters.has(k)));
    b.append(document.createTextNode(label), el('span','n',String(n)));
    b.onclick = () => { if (k==='all') filters.clear(); else if (filters.has(k)) filters.delete(k); else filters.add(k); saveFilters(); renderCollabs(); };
    fb.append(b);
  });
  const list = items.filter(({c,s}) => matches(c,s) && (showEnded || s.key!=='ended'))
    .sort(SORT.collab === 'start' ? collabByStart : (a,b) => a.s.rank - b.s.rank || a.s.sort - b.s.sort);
  const box = $('cards'); box.replaceChildren(...list.map(({c,s}) => card(c,s)));
  highlight(box);
  if (!list.length) box.append(el('div','empty', query ? `'${query}'(이)가 들어간 이벤트가 없어요.` : filters.size===1 && filters.has('urgent') ? '3일 안에 마감되는 이벤트가 없어요.' : '해당하는 이벤트가 없어요.'));
  COUNT.collab = list.length;
  const rs = $('searchResult'); rs.hidden = !query;
  if (query) { rs.replaceChildren(document.createTextNode(`'${query}' 검색 결과 `), el('b',null,`${list.length}건`)); }
  const endedN = items.filter(({c,s}) => s.key==='ended' && matches(c,s)).length;
  const eb = $('endedBtn'); eb.hidden = !endedN;
  eb.textContent = showEnded ? '종료된 이벤트 숨기기' : `종료된 이벤트 ${endedN}개 보기`;
  eb.onclick = () => { showEnded = !showEnded; renderCollabs(); };

  renderSummary();
}
function renderSummary(){
  const items = COLLABS.map(c => statusOf(c));
  const sm = $('summary'); sm.replaceChildren();
  const tile = (n, label, cls, onClick) => {
    const d = el('button', cls); d.type = 'button'; d.onclick = onClick;
    d.setAttribute('aria-label', `${label} ${n}건 보기`);
    const top = el('span','st'); top.append(el('b','tnum',String(n)), el('span','arr','›'));
    d.append(top, el('span',null,label)); return d;
  };
  const go = (tab, prep) => () => { prep && prep(); openTab(tab, true); };
  sm.append(tile(SCHEDULE.filter(e => evTime(e) >= Date.now() && dDiff(e.date) <= 7).length,'7일 안 일정', '', go('schedule', () => { months.clear(); store.set('rescene-months','[]'); renderSchedule(); })),
    tile(items.filter(s => s.key!=='ended' && s.key!=='soon').length,'진행 중 이벤트', '', go('collab', () => { filters.clear(); saveFilters(); renderCollabs(); })),
    tile(items.filter(s => s.key==='urgent').length,'3일 안에 마감','hot', go('collab', () => { filters.clear(); filters.add('urgent'); saveFilters(); renderCollabs(); })),
    tile(VOTES.filter(v => voteStatus(v).key!=='ended').length,'진행 중 투표', '', go('vote')));
}

function voteStatus(v){
  if (v.start) {
    const sMs = kst(v.start, v.startTime || '00:00');
    if (sMs > Date.now()) { const d = dDiff(v.start); return {key:'soon', label: d===0 ? `오늘 ${v.startTime || ''} 시작`.trim() : d===1 ? '내일 시작' : `D-${d} 시작`, sort:sMs}; }
  }
  const endMs = kst(v.end, v.endTime || '23:59');
  if (endMs < Date.now()) return {key:'ended', label:'마감', sort:-endMs};
  const d = dDiff(v.end);
  if (d === 0) return {key:'urgent', label: v.endTime ? `오늘 ${v.endTime} 마감` : '오늘 마감', sort:endMs};
  return {key: d <= 3 ? 'urgent' : 'open', label:`D-${d} 마감`, sort:endMs};
}
let showVoteEnded = false, calMonth = todayStr().slice(0,7);
function voteMonths(){
  const set = new Set(VOTES.map(v => v.end.slice(0,7))); set.add(todayStr().slice(0,7));
  return [...set].sort();
}
function voteCard(v, s){
  const cls = 'vcard' + (s.key==='urgent'?' urgent':'') + (s.key==='ended'?' ended':'');
  let box;
  if (v.cafe) { box = el('a', cls); box.href = v.cafe; box.target = '_blank'; box.rel = 'noopener'; box.style.textDecoration = 'none'; box.style.color = 'inherit'; }
  else box = el('article', cls);
  box.id = 'vote-' + v.end;
  const r1 = el('div','row1');
  r1.append(el('span','vkey',v.key), el('span','status ' + s.key, s.label));
  const dl = el('dl','vdl');
  const row = (k, val) => { if (!val) return; dl.append(el('dt',null,k), el('dd',null,val)); };
  if (v.start) row('기간', `${md(v.start)} (${wd(v.start)})${v.startTime ? ' ' + v.startTime : ''} ~ ${md(v.end)} (${wd(v.end)})${v.endTime ? ' ' + v.endTime : ''}`);
  else row('마감', `${md(v.end)} (${wd(v.end)})` + (v.endTime ? ` ${v.endTime}` : ''));
  row('참여 대상', v.who); row('참여 조건', v.limit); row('연관 이벤트', v.related);
  box.append(r1, el('div','vtitle',v.title), dl);
  if (v.unite) {
    const u = el('div','unite'); u.append(el('b',null,'연합 투표 진행'));
    v.unite.forEach(x => {
      if (x.length < 4) { u.append(el('span',null,`${x[0]} · ${x[1]}`)); return; }
      const [icon, g, name, en, color] = x, line = el('span','u-line');
      line.append(el('span','u-ic',icon), el('span','u-g',g), el('span','u-bar','|'), el('b','u-name' + (color ? ' u-' + color : ''), name));
      if (en) line.append(el('span','u-en',`(${en})`));
      u.append(line);
    });
    box.append(u);
  }
  if (v.uniteNote) { const u = el('div','unite'); u.append(el('b',null,v.uniteNote)); box.append(u); }
  if (v.cafe) { const go = el('span','go','공지로 이동'); go.insertAdjacentHTML('beforeend','<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M6 3h7v7M13 3 4 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'); box.append(go); }
  return box;
}
function renderVotes(){
  const items = VOTES.map(v => ({v, s:voteStatus(v)}));
  const active = items.filter(x => x.s.key!=='ended').sort(SORT.vote === 'start'
    ? (a,b) => startMs(a.v) - startMs(b.v) || endMs(a.v) - endMs(b.v)
    : (a,b) => (a.s.key==='soon') - (b.s.key==='soon') || a.s.sort - b.s.sort);
  const ended = items.filter(x => x.s.key==='ended').sort((a,b) => a.s.sort - b.s.sort);
  const q = query;
  const vParts = v => [v.key, v.short, v.title, v.who, v.limit, v.related, v.uniteNote, md(v.end), v.start ? md(v.start) : '', ...(v.unite || []).flat()];
  const list = q ? active.concat(ended).filter(({v}) => qHit(q, vParts(v))) : showVoteEnded ? active.concat(ended) : active;
  const box = $('votes'); box.replaceChildren(...list.map(({v,s}) => voteCard(v,s)));
  if (!list.length) box.append(el('div','empty', q ? `'${q}'(이)가 들어간 투표가 없어요.` : '지금 열려 있는 투표가 없어요.'));
  highlight(box, q); showResult('vote', q, list.length);
  const eb = $('voteEndedBtn'); eb.hidden = !ended.length || !!q;
  eb.textContent = showVoteEnded ? '마감된 투표 숨기기' : `마감된 투표 ${ended.length}개 보기`;
  eb.onclick = () => { showVoteEnded = !showVoteEnded; renderVotes(); };
  renderCal(items);
}
function renderCal(items){
  const months = voteMonths();
  if (!months.includes(calMonth)) calMonth = months[months.length-1];
  const [y,m] = calMonth.split('-').map(Number);
  $('calTitle').replaceChildren(document.createTextNode(String(m).padStart(2,'0')), el('span',null,`${y}년 ${m}월`));
  const i = months.indexOf(calMonth);
  $('calPrev').disabled = i <= 0; $('calNext').disabled = i >= months.length-1;
  $('calPrev').onclick = () => { calMonth = months[i-1]; renderCal(items); };
  $('calNext').onclick = () => { calMonth = months[i+1]; renderCal(items); };
  const g = $('calGrid'); g.replaceChildren();
  ['SUN','MON','TUE','WED','THU','FRI','SAT'].forEach((d,k) => g.append(el('span','wd' + (k===0?' sun':''), d)));
  const first = new Date(Date.UTC(y,m-1,1)).getUTCDay();
  const days = new Date(Date.UTC(y,m,0)).getUTCDate();
  for (let k=0; k<first; k++) g.append(el('span'));
  const t = todayStr();
  for (let d=1; d<=days; d++) {
    const ds = `${calMonth}-${String(d).padStart(2,'0')}`;
    const hits = items.filter(x => x.v.end === ds);
    const dow = (first + d - 1) % 7;
    const cell = el(hits.length ? 'button' : 'span', 'cd-cell' + (dow===0?' sun':'') + (ds===t?' today':'') + (hits.length?' has':'') + (hits.length && hits.every(x => x.s.key==='ended')?' over':''));
    cell.append(el('span','n',String(d)));
    if (hits.length) {
      cell.type = 'button';
      cell.append(el('span','k', hits.map(x => x.v.short || x.v.key).join('·')));
      cell.setAttribute('aria-label', `${m}월 ${d}일 마감: ${hits.map(x => x.v.title).join(', ')}`);
      cell.onclick = () => {
        if (hits.some(x => x.s.key==='ended') && !showVoteEnded) { showVoteEnded = true; renderVotes(); }
        const target = document.getElementById('vote-' + ds);
        if (target) {
          target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'});
          target.classList.add('flash'); setTimeout(() => target.classList.remove('flash'), 1400);
        }
      };
    }
    g.append(cell);
  }
}

let curVer = 'Standard';
const storeGroups = new Set();
const storeVers = new Set();
const VER_COLORS = {Standard:['#fdfdfd','#3a3f44'], Limited:['#a8b7ba','#1f2a2e'], QR:['#879da6','#14222a'], Wappen:['#989795','#1e1d1b'], Guardian:['#4e4d4b','#ffffff']};
const DISC = '<svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><circle cx="6" cy="6" r="4.8" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="6" cy="6" r="1.5" fill="currentColor"/></svg>';
function verChip(v){
  if (v === 'ALL') {
    const c = el('span','vchip all'); const dots = el('span','vdots');
    Object.values(VER_COLORS).forEach(([bg]) => { const i = el('i'); i.style.background = bg; dots.append(i); });
    c.append(dots, document.createTextNode('전 버전')); return c;
  }
  const c = el('span','vchip'); const col = VER_COLORS[v];
  if (col) { c.style.background = col[0]; c.style.color = col[1]; }
  c.insertAdjacentHTML('beforeend', DISC); c.append(document.createTextNode(v)); return c;
}
function renderVer(){
  const vt = $('verTabs'); vt.replaceChildren();
  VERSIONS.forEach(v => { const b = el('button',null,v); b.type = 'button'; b.setAttribute('aria-pressed', String(v===curVer)); b.onclick = () => { curVer = v; renderVer(); }; vt.append(b); });
  const c = COMPONENTS[curVer], box = $('verBox'); box.replaceChildren();
  const dl = el('dl'); dl.style.margin = '0';
  const row = ([k, val, r], only) => { const d = el('div','ver-row' + (only?' only':'')); const dd = el('dd',null,val); if (r) dd.append(el('span','rnd',r)); d.append(el('dt',null,k), dd); dl.append(d); };
  c.base.forEach(x => row(x,false));
  if (c.only.length) {
    const d = el('div','ver-row only'); const dd = el('dd'); const lst = el('div','ex-list');
    c.only.forEach(([k,v,r]) => { const sp = el('span'); sp.append(el('b',null,k)); if (v) sp.append(document.createTextNode(' ' + v)); if (r) sp.append(el('span','rnd',r)); lst.append(sp); });
    dd.append(lst); d.append(el('dt',null,'전용 구성'), dd); dl.append(d);
  }
  box.append(dl);
  if (typeof VER_IMG !== 'undefined' && VER_IMG[curVer]) {
    const b = el('button','ver-photo'); b.type = 'button';
    b.insertAdjacentHTML('beforeend','<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><rect x="2" y="3" width="12" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="6" cy="7" r="1.3" fill="currentColor"/><path d="m3 12 3.5-3 2.5 2 2-1.5L14 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>');
    b.append(document.createTextNode(`${curVer} 구성 사진 보기`));
    b.onclick = () => openVerModal(curVer);
    box.append(b);
  }
}
function openVerModal(v){ openImgModal(`${v} ver. 구성`, VER_IMG[v], `PULSE ${v} ver. 앨범 구성 사진`); }
function openImgModal(title, src, alt){
  const m = $('verModal'), img = $('verModalImg');
  $('verModalTitle').textContent = title;
  img.src = src; img.alt = alt;
  m.querySelector('.vm-body').scrollTop = 0;
  if (m.showModal) m.showModal(); else m.setAttribute('open','');
  document.body.classList.add('modal-open');
}
function closeVerModal(){ const m = $('verModal'); if (m.close) m.close(); else m.removeAttribute('open'); }
$('verModalClose').addEventListener('click', closeVerModal);
$('verModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeVerModal(); });
$('verModal').addEventListener('close', () => document.body.classList.remove('modal-open'));
function storeEnded(st){
  if (st.ended) return true;
  return !!st.saleEnd && kst(st.saleEnd,'23:59') < Date.now();
}
let calcOn = store.get('rescene-calc') === '1';
let cart = {};
try { cart = JSON.parse(store.get('rescene-cart') || '{}') || {}; } catch(e){ cart = {}; }
const won = n => n.toLocaleString('ko-KR') + '원';
const toNum = v => /\d/.test(v || '') ? Number(String(v).replace(/[^\d]/g,'')) : null;
function priceLines(st){
  const i = STORES.indexOf(st), out = [];
  if (st.prices) Object.entries(st.prices).forEach(([k,v]) => out.push({id:`${i}:${k}`, label:k, price:toNum(v)}));
  else {
    if (st.price) out.push({id:`${i}:unit`, label: st.ver.length === 1 && st.ver[0] !== 'ALL' ? st.ver[0].toUpperCase() + ' 1장' : '1장', price:toNum(st.price)});
    if (st.optPrice) out.push({id:`${i}:opt`, label:'옵션 세트', price:toNum(st.optPrice), sold:!!st.optSoldOut});
  }
  return out;
}
const lineName = (st, ln) => `${st.name}${st.sub ? ' (' + st.sub.split(' · ')[0] + ')' : ''} · ${ln.label}`;
function calcRows(st, ended){
  const wrap = el('div','crows'), lines = priceLines(st);
  if (!lines.length) { wrap.append(el('div','crow na','가격 정보가 없어 계산에서 빠져요.')); return wrap; }
  lines.forEach(ln => {
    const row = el('div','crow'); row.dataset.id = ln.id;
    const q = cart[ln.id] || 0; if (q) row.classList.add('on');
    const lab = el('span','cl',ln.label); if (ln.sold) { lab.append(el('span','sold-pill','매진')); row.classList.add('soldout'); }
    row.append(lab, el('b','cp tnum', ln.price != null ? won(ln.price) : '판매처 확인'));
    if (ln.price == null) { row.append(el('span')); wrap.append(row); return; }
    const stp = el('span','step'), minus = el('button',null,'−'), plus = el('button',null,'+'), out = el('output',null,String(q));
    minus.type = plus.type = 'button';
    minus.setAttribute('aria-label', `${lineName(st, ln)} 빼기`); plus.setAttribute('aria-label', `${lineName(st, ln)} 담기`);
    out.setAttribute('aria-live','polite');
    const locked = ended || ln.sold;
    minus.disabled = !q; plus.disabled = locked && !q;
    const set = v => {
      v = Math.max(0, Math.min(99, v));
      if (v) cart[ln.id] = v; else delete cart[ln.id];
      out.textContent = v; minus.disabled = !v; plus.disabled = v >= 99 || (locked && !v);
      row.classList.toggle('on', !!v);
      store.set('rescene-cart', JSON.stringify(cart)); renderCalcBar();
    };
    minus.onclick = () => set((cart[ln.id] || 0) - 1);
    plus.onclick = () => set((cart[ln.id] || 0) + 1);
    stp.append(minus, out, plus); row.append(stp); wrap.append(row);
  });
  return wrap;
}
function renderCalcBar(){
  const bar = $('calcBar'), show = calcOn && curTab === 'album';
  bar.hidden = !show; document.body.classList.toggle('calc-open', show);
  $('calcHint').hidden = !calcOn;
  const items = [];
  STORES.forEach(st => priceLines(st).forEach(ln => { const q = cart[ln.id]; if (q && ln.price != null) items.push({st, ln, q}); }));
  const total = items.reduce((a,x) => a + x.ln.price * x.q, 0), cnt = items.reduce((a,x) => a + x.q, 0);
  $('calcTotal').textContent = won(total);
  $('calcCount').textContent = cnt ? `${cnt}개 선택` : '담은 항목 없음';
  const ul = $('calcList'); ul.replaceChildren();
  if (!items.length) ul.append(el('li','em','카드의 + 버튼으로 담아 보세요.'));
  items.forEach(({st, ln, q}) => { const li = el('li'); li.append(el('span',null,`${lineName(st, ln)} × ${q}`), el('span',null, won(ln.price * q))); ul.append(li); });
  $('calcReset').disabled = !items.length;
}
function storeCard(st){
  const ended = storeEnded(st);
  const box = el('article','scard' + (ended?' ended':''));
  const head = el('div','s-head');
  const nm = el('div','s-name'); nm.append(el('small',null, st.group==='특전'?'EXCLUSIVE':st.group==='공동구매'?'GROUP BUY':'OFFLINE EVENT'), document.createTextNode(st.name));
  if (st.sub) nm.append(el('span','s-sub', st.sub));
  head.append(nm);
  if (st.group==='오프라인') {
    const d = st.saleEnd ? dDiff(st.saleEnd) : null;
    head.append(el('span','status ' + (ended?'ended':d===0?'urgent':'open'), ended?'이벤트 종료': d===0?'오늘 판매 마감': d!=null?`D-${d} 판매 마감`:'진행 중'));
  }
  const vc = el('div','vchips'); st.ver.forEach(v => vc.append(verChip(v)));
  const perk = el('div','perk'); if (st.by) perk.append(el('div','s-sub',st.by)); perk.append(document.createTextNode(st.perk)); if (st.rnd) perk.append(el('span',null,st.rnd));
  const dl = el('dl','vdl');
  const r = (k,v) => { if (v) dl.append(el('dt',null,k), el('dd',null,v)); };
  if (st.option) {
    const dd = el('dd'); if (st.optSoldOut) dd.append(el('span','sold-pill','매진'));
    dd.append(document.createTextNode(st.option)); dl.append(el('dt',null,'옵션'), dd);
  }
  r('특이사항', st.rule); r('응모', st.entry); r('추첨 인원', st.winners); r('당첨 특전', st.prize); r('이벤트', st.event);
  if (st.saleEnd) r('판매 기간', `~ ${md(st.saleEnd)} (${wd(st.saleEnd)})`);
  box.append(head, vc, perk); if (dl.childElementCount) box.append(dl);
  const pic = st.img && typeof STORE_IMG !== 'undefined' && STORE_IMG[st.img];
  if (pic) {
    const open = () => openImgModal(STORE_IMG_TITLE[st.img] || st.name, pic, `${st.name} 특전 이미지`);
    const b = el('button','s-pic'); b.type = 'button';
    b.insertAdjacentHTML('beforeend','<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><rect x="2" y="3" width="12" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="6" cy="7" r="1.3" fill="currentColor"/><path d="m3 12 3.5-3 2.5 2 2-1.5L14 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>');
    b.append(document.createTextNode('특전 이미지'));
    b.onclick = e => { e.stopPropagation(); open(); };
    const st2 = head.querySelector('.status');
    if (st2) { const r = el('div','s-right'); st2.replaceWith(r); r.append(st2, b); } else head.append(b);
    box.classList.add('has-pic');
    box.addEventListener('click', e => { if (e.target.closest('button, a, input, label')) return; if (getSelection && String(getSelection())) return; open(); });
  }
  if (calcOn) box.append(calcRows(st, ended));
  else if (st.prices) {
    const g = el('div','pgrid');
    Object.entries(st.prices).forEach(([k,v]) => { const d = el('div'); d.append(el('span',null,k), el('b','tnum',v + '원')); g.append(d); });
    box.append(g);
  } else if (st.price) {
    const p = el('div','prices');
    const pr = (k,v) => { const d = el('div'); d.append(el('span',null,k), el('b','tnum', /\d/.test(v) ? v + '원' : v)); p.append(d); };
    pr('개당', st.price);
    if (st.optPrice) { pr('옵션', st.optPrice); if (st.optSoldOut) { const last = p.lastElementChild; last.classList.add('soldout'); last.querySelector('span').append(el('span','sold-pill','매진')); } }
    box.append(p);
  }
  return box;
}
function renderStores(){
  const G = [['all','전체'],['특전','단독 특전'],['공동구매','공동구매'],['오프라인','오프라인 이벤트']];
  const fb = $('storeFilters'); fb.replaceChildren();
  const q = query;
  const sParts = x => [x.group, x.group==='특전'?'단독 특전':'', x.name, x.sub, x.perk, x.by, x.rnd, x.option, x.rule, x.event, x.entry, x.prize, x.winners, ...x.ver, ...(x.prices ? Object.keys(x.prices) : [])];
  const verOk = (x, v) => v === 'all' || x.ver.includes('ALL') || x.ver.includes(v);
  const verSel = x => !storeVers.size || [...storeVers].some(v => verOk(x, v));
  const grpSel = x => !storeGroups.size || storeGroups.has(x.group);
  G.forEach(([k,label]) => {
    const n = STORES.filter(x => (k==='all' || x.group===k) && verSel(x) && qHit(q, sParts(x))).length;
    const b = el('button','chip'); b.type = 'button'; b.setAttribute('aria-pressed', String(k==='all' ? !storeGroups.size : storeGroups.has(k)));
    b.append(document.createTextNode(label), el('span','n',String(n)));
    b.onclick = () => { if (k==='all') storeGroups.clear(); else if (storeGroups.has(k)) storeGroups.delete(k); else storeGroups.add(k); renderStores(); }; fb.append(b);
  });
  const vf = $('verFilters'); vf.replaceChildren();
  [['all','전체 버전'], ...VERSIONS.map(v => [v, v])].forEach(([k,label]) => {
    const n = STORES.filter(x => grpSel(x) && verOk(x, k) && qHit(q, sParts(x))).length;
    const b = el('button','chip'); b.type = 'button'; b.setAttribute('aria-pressed', String(k==='all' ? !storeVers.size : storeVers.has(k)));
    if (k !== 'all') { const d = el('span','vdot'); d.style.background = VER_COLORS[k][0]; b.append(d); b.style.display = 'inline-flex'; b.style.alignItems = 'center'; b.style.gap = '6px'; }
    b.append(document.createTextNode(label), el('span','n',String(n)));
    b.onclick = () => { if (k==='all') storeVers.clear(); else if (storeVers.has(k)) storeVers.delete(k); else storeVers.add(k); renderStores(); }; vf.append(b);
  });
  const list = STORES.filter(x => grpSel(x) && verSel(x) && qHit(q, sParts(x)))
    .map((x,i) => ({x,i,e:storeEnded(x)})).sort((a,b) => a.e - b.e || a.i - b.i);
  const sb = $('stores'); sb.replaceChildren(...list.map(({x}) => storeCard(x)));
  if (!list.length) sb.append(el('div','empty', q ? `'${q}'(이)가 들어간 판매처가 없어요.` : '해당하는 판매처가 없어요.'));
  highlight(sb, q); showResult('album', q, list.length);
}
function renderAlbum(){
  const now = Date.now(), ps = $('preorderStatus');
  const st = kst(...PREORDER.start.split('T')), en = kst(...PREORDER.end.split('T'));
  if (now < st) { ps.className = 'status soon'; ps.textContent = '예약 판매 전'; }
  else if (now > en) { ps.className = 'status ended'; ps.textContent = '예약 판매 종료'; }
  else { const d = dDiff(PREORDER.end.slice(0,10)); ps.className = 'status ' + (d<=3?'urgent':'ongoing'); ps.textContent = d===0 ? '오늘 예약 마감' : `예약 마감 D-${d}`; }
  renderVer(); renderStores();
  const pc=ps.closest('.al-hero');if(pc){pc.style.cursor='pointer';pc.onclick=e=>{if(e.target.closest('a,button'))return;window.open(PREORDER_NOTICE,'_blank','noopener,noreferrer');};let btn=$('preorderNoticeBtn');if(!btn){btn=el('a','preorder-notice-btn','공지로 이동 ↗');btn.id='preorderNoticeBtn';pc.append(btn);}btn.href=PREORDER_NOTICE;btn.target='_blank';btn.rel='noopener noreferrer';}
  const c = $('collect'); c.replaceChildren();
  COLLECT.forEach(([v,n]) => { const d = el('div'); d.append(el('span',null,v.toUpperCase()), el('b','tnum',n + '장')); c.append(d); });
  const t = el('div','total'); t.append(el('span',null,'TOTAL · 미공개 포카 전종 수집'), el('b','tnum', COLLECT.reduce((a,[,n]) => a+n, 0) + '장')); c.append(t);
}

const TABS = ['home','schedule','collab','vote','album'];
const TAB_LABEL = {schedule:'일정', collab:'이벤트', vote:'투표', album:'앨범'};
const PLACEHOLDER = {
  home:'일정·이벤트·투표·앨범 검색',
  schedule:'일정·장소 검색',
  collab:'업체·멤버·특전 검색',
  vote:'투표·플랫폼 검색',
  album:'판매처·특전·버전 검색',
};
let curTab = 'home';
function toTop(){
  const h = document.documentElement;
  h.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0); h.scrollTop = 0; document.body.scrollTop = 0;
  h.style.scrollBehavior = '';
}
function openTab(id, scroll){
  if (!TABS.includes(id)) id = 'home';
  curTab = id;
  TABS.forEach(t => {
    $(t).hidden = t !== id;
    const b = $('tab-' + t); b.setAttribute('aria-selected', String(t === id)); b.tabIndex = t === id ? 0 : -1;
  });
  $('q').placeholder = PLACEHOLDER[id];
  try { history.replaceState(null, '', '#' + id); } catch(e){}
  store.set('rescene-tab', id);
  renderCalcBar();
  if (scroll) toTop();
}
function renderHomeResult(){
  const box = $('homeResult'); box.hidden = !query;
  if (!query) return;
  const total = Object.keys(TAB_LABEL).reduce((a,t) => a + (COUNT[t] || 0), 0);
  const head = el('div','result'); head.append(document.createTextNode(`'${query}' 통합 검색 결과 `), el('b',null,`${total}건`));
  const jump = el('div','jump');
  Object.entries(TAB_LABEL).forEach(([t,label]) => {
    const n = COUNT[t] || 0, b = el('button'); b.type = 'button'; b.disabled = !n;
    b.append(el('span',null,label), el('b',null,`${n}건`));
    b.onclick = () => openTab(t, true);
    jump.append(b);
  });
  box.replaceChildren(head, jump);
}
TABS.forEach((t,k) => {
  const b = $('tab-' + t);
  b.addEventListener('click', () => openTab(t, true));
  b.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const n = TABS[(k + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length];
    openTab(n, true); $('tab-' + n).focus({preventScroll:true});
  });
});
window.addEventListener('hashchange', () => openTab(location.hash.slice(1), true));

const qInput = $('q'), qClear = $('qClear');
function setQuery(v){
  query = v; qClear.hidden = !v;
  renderSchedule(); renderCollabs(); renderVotes(); renderStores(); renderHomeResult();
}
qInput.addEventListener('input', () => setQuery(qInput.value.trim()));
qInput.addEventListener('keydown', e => { if (e.key === 'Escape') { qInput.value = ''; setQuery(''); } });
qClear.addEventListener('click', () => { qInput.value = ''; setQuery(''); qInput.focus(); });
const SORT_RENDER = {collab:() => renderCollabs(), vote:() => renderVotes()};
function syncSort(){
  document.querySelectorAll('.sort').forEach(g => g.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(SORT[g.dataset.sort] === b.dataset.v))));
}
document.querySelectorAll('.sort').forEach(g => g.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  const k = g.dataset.sort; if (SORT[k] === b.dataset.v) return;
  SORT[k] = b.dataset.v; store.set('rescene-sort-' + k, b.dataset.v); syncSort(); SORT_RENDER[k]();
}));
syncSort();
const calcToggle = $('calcToggle');
calcToggle.checked = calcOn;
calcToggle.addEventListener('change', () => { calcOn = calcToggle.checked; store.set('rescene-calc', calcOn ? '1' : '0'); renderStores(); renderCalcBar(); });
$('calcReset').addEventListener('click', () => { cart = {}; store.set('rescene-cart', '{}'); renderStores(); renderCalcBar(); });
function renderAll(){ renderSchedule(); renderCollabs(); renderVotes(); renderAlbum(); renderHomeResult(); }
tick(); renderAll();
openTab(location.hash.slice(1) || store.get('rescene-tab') || 'home', false);
setInterval(tick, 1000);
let lastDay = todayStr(), lastMin = Math.floor(Date.now()/6e4);
setInterval(() => { const m = Math.floor(Date.now()/6e4); if (m !== lastMin) { lastMin = m; renderAll(); } }, 5000);
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('[data-updated]').forEach(e=>{const d=DATA_UPDATED.slice(5).replace('-','.');e.querySelector('.basis-date').textContent=d+' 기준';e.title=d+' 자료 기준';});});
