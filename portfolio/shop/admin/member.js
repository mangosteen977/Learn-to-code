//수정버튼 이벤트 핸들링
modify = function (part) {
    switch (part) {
      case 1://데이터 수정
        if (confirm("해당 데이터를 수정하시겠습니까?")) {
          /* 단 한개라도 체크가 없을 경우 해당 backend쪽으로 넘길경우
            올바르지 않는 값이 나오게됨. 체크 확인하는 코드를 작성하시오.
          */
          //선택항목 유무 확인
          let ea_ck = document.querySelectorAll(".all_ckss").length;
          let count_del_ck = 0;
          let w = 0;
          do {
            if (document.getElementsByName("midx[" + w + "]")[0].checked == true) {
              count_del_ck++;
            }
            w++;
          } while (w < ea_ck)
          if (count_del_ck == 0) {
            alert("수정할 데이터를 선택해주세요");
          }
          else {
            mfrm.action = "member_modify.php";
            mfrm.submit();
          }

        }
        break;
      case 2://선택 삭제 선택
        if (confirm("해당 데이터는 삭제시 복구되지 않습니다.\n삭제하시겠습니까?")) {
          //선택항목 유무 확인
          let ea_ck = document.querySelectorAll(".all_ckss").length;
          let count_del_ck = 0;
          let w = 0;
          do {
            if (document.getElementsByName("midx[" + w + "]")[0].checked == true) {
              count_del_ck++;
            }
            w++;
          } while (w < ea_ck)
          console.log(count_del_ck);
          if (count_del_ck == 0) {
            alert("삭제할 데이터를 선택해주세요");
          }
          else {
            mfrm.action = "./member_del.php";
            mfrm.submit();
          }
        }
        break;
      case 3://전체 삭제 선택
        if (confirm("데이터 전체 삭제를 하시겠습니까?")) {
          alert("최고관리자 외에는 삭제를 금합니다.");
          mfrm.action = "";
          // mfrm.submit();
        }
        break;
    }
  }
  //전체 선택 체크박스
  let on = false;
  all_ck = function () {
    let ea_ck = document.querySelectorAll(".all_ckss").length;
    if (on == false) {
      on = true;
    }
    else {
      on = false;
    }
    let w = 0;
    do {
      document.getElementsByName("midx[" + w + "]")[0].checked = on;
      w++;
    } while (w < ea_ck)

  }
  let jsondb;
  let db;
  let plus = 0;
  function ajax() {
    plus++;
    function wck() {
      if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
      }
    }
    function opens() {
      if (db.readyState == XMLHttpRequest.DONE && db.status == 200) {
        jsondb(this.response);
      }
    }
    db = wck();
    db.onreadystatechange = opens;
    db.open("GET", "../shop_members.json?v=2000" + plus, true);
    db.send();
  }
  ajax();
  jsondb = function (data) {
    $(function () {
      $data = JSON.parse(data);
      if ($data != "") {
        $("#member_tableNone").css("display", "none");
        $("#member_tableList").css("display", "table-row-group");
      }
      $("#admin_member_total").html($data.length);
      $.map($data, function ($arr, $num) {
        let $list_html, $list_html2;
        $.map($data[$num], function ($v, $k) {
          //고객그룹
          let $sl = "selected";
          let $select1, $select2, $select3, $select4;
          switch ($data[$num]['user_group']) {
            case "N":
              $select4 = $sl;
              break;
            case "S":
              $select3 = $sl;
              break;
            case "G":
              $select2 = $sl;
              break;
            case "V":
              $select1 = $sl;
              break;
          }
          $list_html = '<tr><td rowspan="2"><input type="checkbox" class="all_ckss" value="' + $data[$num]["midx"] + '" name="midx[' + $num + ']" /></td>\
                        <td rowspan="2">'+ $data[$num]['user_id'] + '</td>\
                        <td class="member__name">'+ $data[$num]['user_name'] + '</td>\
                        <td colspan="6">\
                        <label for="member_identify'+ $num + '"><input type="radio" name="identify' + $num + '" > 아이핀</label>\
                        <label for="member_identify'+ $num + '"><input type="radio" name="identify' + $num + '" > 휴대폰</label></td>\
                        <td>'+ $data[$num]['user_hp'] + '</td>\
                        <td>그룹<select name="mgroup['+ $num + ']">\
                        <option value="V" '+ $select1 + '>VIP</option>\
                        <option value="G" '+ $select2 + '>GOLD</option>\
                        <option value="S" '+ $select3 + '>SILVER</option>\
                        <option value="N" '+ $select4 + '>NORMAL</option>\
                        </select></td>\
                        <td class="user_lastlog">'+ $data[$num]['user_lastlog'].substring(0, 10) + '</td>\
                        <td rowspan="2"> - </td></tr>';
          $list_html2 = '<tr><td class="member__nick">' + $data[$num]['user_nick'] + '</td>\
       	                <td class="mail_agree"><input type="checkbox" value="Y" name="mail_accept['+ $num + ']"></td>\
        	              <td><input type="checkbox" disabled></td>\
                        <td class="mail_accept"><input type="checkbox" value="Y" name="mail_agree['+ $num + ']"></td>\
                        <td class="sms_agree"><input type="checkbox" value="Y" name="sms_agree['+ $num + ']"></td>\
                        <td><input type="checkbox" disabled></td>\
                        <td><input type="checkbox" disabled></td>\
                        <td>'+ $data[$num]['user_tel'] + '</td>\
                        <td>'+ Number($data[$num]['user_point']).toLocaleString('Ko') + 'p</td>\
                        <td class="user_indate">'+ $data[$num]['user_indate'].substring(0, 10) + '</td>\
                        </tr>';
        });
        $("#member_tableList").append($list_html, $list_html2);
        $.map($data[$num], function ($v2, $k2) {
          if ($data[$num][$k2] == "Y") {
            $("." + $k2 + ":eq(" + $num + ")>input").attr("checked", true);
          }
        });

      });
    });
  }


$(function(){
/* 상세정보 회원추가 버튼 클릭 시 */
    $("#add_member").click(function(){
        window.open("../add_member.html","","width=1200, height=1000, scrollbars=auto")
    });
});

/*member 페이지 검색 submit전송 파트*/
m_search = function(){
    if(!sform.stext.value){alert("검색어를 입력해주세요"); return false;}
    else{return true;}
};
function filters(){
    /*member페이지 검색 파라미터값 적용하는 파트*/
    let sdata = location.search;
    let search_val = sdata.split("=");
    let search_type = search_val[1].split("&stext")[0];
    let search_type_val = decodeURI(search_val[2]);
    if(sdata!=""){
        document.getElementById("stext").value = search_type_val;
        document.getElementById("search_part").value = search_type;
    };
    switch(search_type){
      case "sname":

      break;
      case "sid":

      break;
      case "stel":
        
      break;
    }
};