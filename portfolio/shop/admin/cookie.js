/*쿠키저장*/
let admid=""; //쿠키저장값
let cookies = document.cookie.match("adm_id=");
let cookie_data = document.cookie.split(";");
let login_data = cookie_data[0].split("adm_id=");
if(cookies!=null){
    if(login_data[1]!=""){
        adm.a_id.value = login_data[1];
        adm.a_save.checked = true;
    }
}