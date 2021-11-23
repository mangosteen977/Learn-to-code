$(document).ready(function(){
    var $img;
    /*스타트버튼 효과 부분*/
    $("#game_btn").mouseover(function(){
        $img = $("#game_btn>img").attr("src","./r_images/event_start_on.png");
    });
    $("#game_btn").mouseout(function(){
        $img = $("#game_btn>img").attr("src","./r_images/event_start_off.png");
     });
    /*룰렛 로테이트 부분*/
    var $data = "5000,100,200,2000,1000,500,300";
    var $result = $data.split(",");
    var $r = 0; //오브젝트 최초의 위치값
    var $counter = Number($("#counter").val());
    $("#game_btn").click(function(){
        /* 횟수 제한(3회) */
        if($counter>0){
            $counter -= 1;
            $("#counter").val($counter);
            $("#msgbox").css("display","none");
            var $pc = Math.ceil(Math.random()*360);
            $r = $r+1800; //기본 회전 횟수 5바퀴
            var $msg = $.fn.rotation($r,$pc);
            /*마일리지 당첨 결과 출력*/
            setTimeout(function(){
                $("#msgbox").slideDown(800).html("당첨되신 마일리지는"+$result[$msg]+"점 입니다!");
                // alert($result[$msg]+"마일리지에 당첨되셨습니다!");
            },5500);
        }
        else{
            alert("하루 3번만 참여가능합니다. 내일 다시 도전해주세요");
        }
    });
    $.fn.rotation = function($r,$pc){
        var $node; //$result의 node값과 각도값 동기화
        if($pc>=23 && $pc<=67){$node = 1;}
        else if($pc>=68 && $pc<=112){$node = 2;}
        else if($pc>=113 && $pc<=157){$node = 3;}
        else if($pc>=158 && $pc<=202){$node = 4;}
        else if($pc>=203 && $pc<=247){$node = 1;}
        else if($pc>=248 && $pc<=292){$node = 5;}
        else if($pc>=293 && $pc<=337){$node = 6;}
        else {$node = 0;}
        var $rotate = $r+$pc;
        $("#game_board").css({"transform":"rotate("+$rotate+"deg)"});
        return $node;
    }
});