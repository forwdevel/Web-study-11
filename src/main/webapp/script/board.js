function boardCheck() {
	if(document.frm.name.value.length == 0) {
		alert("작성자를 입력하세요.");
		return false;
	}
	if(document.frm.pass.value.length == 0) {
		alert("비밀번호를 입력하세요.");
		return false;
	}
	if(document.frm.title.value.length == 0) {
		alert("제목을 입력하세요.");
		return false;
	}
	
	// var link = 'http://localhost:8081/Web-study-11/BoardServlet?command=board_write';
    // window.location.href = link;       //웹개발할때 숨쉬듯이 작성할 코드
    // window.location.replace(link);     // 이전 페이지로 못돌아감
    // window.open(link);                 //window.open은 옵션이 여러가지 있음. 이렇게만하면 새창 뜸 
	return false;
}

function open_win(url, name) {
	window.open(url,name, "width=500, height=230");
}

function passCheck() {
	if(document.frm.pass.value.length == 0) {
		alert("비밀번호를 입력하세요.");
		return false;
	}
	return false;
}