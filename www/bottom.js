$(function () {
  $.fn.load1 = function () {
    $.ajax({
      url: "./json/pullmenu.json",
      cache: false,
      type: "GET",
      dataType: "JSON",
      success: function ($data, $node) {
        $.fn.brand_select($data);
      },
      error: function () {
        console.log("Data Error!");
      },
    });
  };

  $.fn.load1();

  $.fn.brand_select = function ($datas) {
    var $brand_html = "";
    var $subsid_html = "";

    $.each($datas[0]["brand"], function ($bnode, $bname) {
      $brand_html += "<li>" + $bname + "</li>";
    });

    $.each($datas[0]["subsidi"], function ($snode, $sname) {
      if ($snode == 0) {
        $subsid_html += "<li class='sli'>" + $sname + "</li>";
        $("#sub0").append($subsid_html);
      } else if ($snode == 1) {
        $subsid_html += "<li class='sli'>" + $sname + "</li>";
        $("#sub1").append($subsid_html);
      } else {
        $subsid_html += "<li class='sli'>" + $sname + "</li>";
        $("#sub2").append($subsid_html);
      }
      $subsid_html = "";
    });

    $("#brand_ul").append($brand_html);
  };
  $("#brand_label").click(function () {
    $("#brand_ul").slideToggle();
  });

  $("#subsid_label").click(function () {
    $("#subsid_ul").slideToggle();
  });

  $.fn.load2 = function () {
    $.ajax({
      url: "./json/notice.json",
      cache: false,
      type: "GET",
      dataType: "JSON",
      success: function ($node, $data) {
        $.fn.notice_board($node);
      },
      error: function () {
        console.log("Data Error!");
      },
    });
  };
  $.fn.load2();

  $.fn.notice_board = function ($notice) {
    var $notice_html = "";
    $.each($notice["notice"], function ($idx, $subject) {
      $notice_html += "<span>" + $notice["notice"][$idx][0] + "</span>";
    });
    $("#notice").append($notice_html);
  };
  var $notice_timer;

  $.fn.notice_timer = function () {
    $("#notice")
      .stop()
      .animate(
        {
          top: "-55px",
        },
        500,
        function () {
          var $nt = $("#notice>span").eq(0).clone();
          $("#notice>span").eq(0).remove();
          $("#notice").append($nt);
          $("#notice").css("top", "0px");
        }
      );
    $notice_timer = setTimeout($.fn.notice_timer, 10000);
  };
  setTimeout($.fn.notice_timer, 10000);
});
