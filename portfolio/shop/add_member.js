$(function(){
    //우편번호 API연동
    $("#addsearch").postcodifyPopUp();
});
//보안코드 새로고침하기
let r = 0;
function refresh(){
    r++;
    document.getElementById("codes").setAttribute("src","./code.php?v="+r);
};//검토는 BackEnd에서 함.

//회원등록 검사 파트 1
function btn_new_mem(){
    if(!mfrm.M_id.value){
        alert("아이디를 입력해주세요."); mfrm.M_id.focus();
    }
    else if(mfrm.M_id.value.match(/[!@#$%^&*\|+=?/~`"'-]/g) != null){
        alert("특수문자를 제외하고 입력해주세요.");
        mfrm.M_id.value = "";
        mfrm.M_id.focus();
    }
    else if(mfrm.M_id.value.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g) != null){
        alert("아이디는 영문자와 숫자 조합만 가능합니다.");
        mfrm.M_id.value = "";
        mfrm.M_id.focus();
    }
    else if(mfrm.M_id.value.length<3){
        alert("아이디는 최소 3자이상 입력해주세요"); mfrm.M_id.focus();
    }
    else if(!mfrm.M_pass.value){
        alert("비밀번호를 입력해주세요."); mfrm.M_pass.focus();
    }
    else if(!document.getElementById("M_pass2").value){
        alert("비밀번호를 한 번 더 입력해주세요."); document.getElementById("M_pass2").focus();
    }
    else if(document.getElementById("M_pass2").value != mfrm.M_pass.value){
        alert("비밀번호가 일치하지 않습니다.");
        document.getElementById("M_pass2").value = "";
        document.getElementById("M_pass2").focus();
    }
    else{ btn_new_mem2(); }
}
//회원등록 검사 파트 2
function btn_new_mem2(){
    if(!mfrm.M_name.value){
        alert("이름을 입력해주세요."); mfrm.M_name.focus();
    }
    else if(!mfrm.M_nick.value){
        alert("닉네임을 입력해주세요."); mfrm.M_nick.focus();
    }
    else if(mfrm.M_nick.value.match(/[!@#$%^&*\|+=?/~`"'_-]/g) != null){
        alert("한글, 영문, 숫자만 입력가능합니다.");
        mfrm.M_nick.value = "";
        mfrm.M_nick.focus();
    }
    else if(mfrm.M_nick.value.match(/[a-z|A-Z]/g) != null && mfrm.M_nick.value.length<4){
        alert("영문 혼합 닉네임은 4자이상 입력해주세요."); mfrm.M_nick.focus();
    }
    else if(mfrm.M_nick.value.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g) != null && mfrm.M_nick.value.length<2){
        alert("한글 닉네임은 2자이상 입력해주세요."); mfrm.M_nick.focus();
    }
    else if(!mfrm.M_email.value){
        alert("이메일을 입력해주세요."); mfrm.M_email.focus();
    }
    else if(mfrm.M_email.value.match(/^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[0-9a-zA-Z]/g) == null){
        alert("올바른 형식의 이메일을 입력해주세요."); mfrm.M_email.focus();
    }
    else{ btn_new_mem3(); }
}
//회원등록 검사 파트 3
function btn_new_mem3(){
    if(!mfrm.M_tel.value){
        alert("휴대폰번호를 입력해주세요."); mfrm.M_tel.focus();
    }
    else if(mfrm.M_tel.value.match(/[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|!@#$%^&*\|+=?/~`"'_-]/g) != null){
        alert("올바른 형식의 휴대폰번호를 입력해주세요.");
        mfrm.M_tel.value = "";
        mfrm.M_tel.focus();
    }
    else if(mfrm.M_tel.value.length<10){
        alert("10~11자리 휴대폰번호를 입력해주세요."); mfrm.M_tel.focus();
    }
    else if(!mfrm.M_post.value){
        alert("우편번호와 도로명 주소를 입력해주세요."); mfrm.M_post.focus();
    }
    else if(!mfrm.M_addr.value){
        alert("상세주소를 입력해주세요."); mfrm.M_addr.focus();
    }
    else if(!mfrm.M_security.value || mfrm.M_security.value.length<6){
        alert("6자리 자동등록방지 문자를 입력해주세요."); mfrm.M_security.focus();
    }
    else{
        mfrm.M_nick.value = mfrm.M_nick.value.replaceAll(" ","");
        mfrm.submit();
    }
}