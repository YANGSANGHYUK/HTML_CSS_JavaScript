 // 문서에서 h1 태그를 하나 가져온다.
 const h1 = document.querySelector("h1");
 // 가져온 태그에 이벤트 리스너를 추가한다
 // 이벤트는 유저의 입력 (키보드, 마우스, 영상, 목소리)
 // 이벤트리스너의 첫번째 칸에는 입력대기할 이벤트를 적는다.
 // 쉼표
 // 이벤트 리스너의 두번째 칸에는 이벤트가 발생하면
 // 작동할 기능을 넣는다.
 h1.addEventListener("click",() =>{
     alert("클릭하셨습니다.");
 });