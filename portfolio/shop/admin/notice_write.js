export let notice_write = function(){
    var n_text = CKEDITOR.instances.notice_text.getData();
    if(!frm_notice.notice_subject.value){
        alert("제목을 입력하세요");
        frm_notice.notice_subject.focus();
    }
    else if(!frm_notice.notice_id.value){
        alert("아이디를 입력하세요");
        frm_notice.notice_id.focus();
    }
    else if(!frm_notice.notice_name.value){
        alert("이름을 입력하세요");
        frm_notice.notice_name.focus();
    }
    else if(!frm_notice.notice_pw.value){
        alert("패스워드를 입력하세요");
        frm_notice.notice_pw.focus();
    }
    else if(!n_text){
        alert("내용을 입력해주세요");
        CKEDITOR.instances.notice_text.focus();
    }
    else{
        frm_notice.action="notice_writeok.php"
        frm_notice.submit();
    }
}
export let go_notice_list = function(){
    location.href="./admin_notice.html";
}
document.getElementById("add_write_notice").addEventListener("click",notice_write);//등록
document.getElementById("write_notice_list").addEventListener("click",go_notice_list);//목록

/* notice_m.html (공지사항 게시글 수정) */
export let print_modify = function(data){
    frm_notice.notice_subject.value = data[0]["subject"];
    frm_notice.notice_pw.value = data[0]["wpass"];
    frm_notice.notice_hide.value = data[0]["whide"];
}
export let modify_notices = function(){
    var n_text = CKEDITOR.instances.notice_text.getData();
    if(!frm_notice.notice_subject.value){
        alert("제목을 입력하세요");
        frm_notice.notice_subject.focus();
    }
    else if(!frm_notice.notice_id.value){
        alert("아이디를 입력하세요");
        frm_notice.notice_id.focus();
    }
    else if(!frm_notice.notice_name.value){
        alert("이름을 입력하세요");
        frm_notice.notice_name.focus();
    }
    else if(!frm_notice.notice_pw.value){
        alert("패스워드를 입력하세요");
        frm_notice.notice_pw.focus();
    }
    else if(!n_text){
        alert("내용을 입력해주세요");
        CKEDITOR.instances.notice_text.focus();
    }
    else if(confirm("수정하시겠습니까?")){
        frm_notice.action="./notice_modifyok.php"
        frm_notice.submit();
    }
}
document.getElementById("modify_write_notice").addEventListener("click",modify_notices);//목록