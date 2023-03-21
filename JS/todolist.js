// 투두 입력 변수 선언
const todoform = document.querySelector("#todoform");
const state = document.querySelector("#state");
let listChecked = 0;
let listAll = 0;
// 투두 버튼 클릭 시 이벤트
todoform.addEventListener("submit", todoinput);

// 투두 입력 함수
function todoinput(event) {
    // submit 버튼은 자동 새로고침 있으므로 preventDefault 사용
    event.preventDefault();
    
    // to do 리스트 (ul 태그)
    // 입력 받은 투두 값을 li로 출력
    // (체크박스 + 투두값 + 삭제버튼) 함께 생성 해서 하나의 li로
    const li = document.createElement("li");
    // checkbox
    const check = document.createElement("input");
    check.type = "checkbox";
    // todovalue
    const todovalue = todoform.firstElementChild.value;
    //  const text = document.createTextNode(todovalue);
    //  span으로 스타일 빼내기
    const text = document.createElement("span");
    text.innerHTML = todovalue;
    // button
    const btn = document.createElement("button");
    btn.innerHTML = "X";
    
    // li에 생성한 요소 넣기
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(btn);
    
    // ul에 li 넣기
    const todolist = document.querySelector("#todolist");
    todolist.appendChild(li);

    // 투두 입력 submit 후 입력창 초기화
    todoform.firstElementChild.value = "";

    // checkbox, 삭제버튼 이벤트 추가
    check.addEventListener("click", todoCheck);
    btn.addEventListener("click", todoDelete);
    
    // 전체 할일 (추가된 todo 총 개수)
    listAll++;
    return state.innerHTML = `전체 할일 ${listAll} | 완료한 할일 ${listChecked}`;
}

// checkbox 설정
function todoCheck(event) {
    const li = event.target.parentNode;
    const span = li.children[1];
    if (event.target.checked){
        li.style.color = "rgba(255,255,255,0.3)";
        span.style.textDecoration = "line-through";
        li.style.fontStyle = "italic";
        listChecked+=1;
    }
    else {
        li.style.color = "";
        span.style.textDecoration = "none"
        li.style.fontStyle = "normal";
        listChecked-=1;
    }
    return state.innerHTML = `전체 할일 ${listAll} | 완료한 할일 ${listChecked}`;
}


// 삭제 버튼 설정
function todoDelete(event){
    event.target.parentNode.remove();
    // 전체 할일 (삭제된 todo 총 개수)
    listAll--;
    return state.innerHTML = `전체 할일 ${listAll} | 완료한 할일 ${listChecked}`;
}