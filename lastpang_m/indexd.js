$(function(){
    //header_menu.html
    $("#cart").click(function () {
        location.href = "cart.html";
    });
    $("#c_mlogo").click(function(){
        location.href="./index.html";
    });

    $("#c_search").click(function(){
        $("#ser_txt").val("");
        $("#c_searchdiv").slideToggle();
    });
    
    $("#c_frm").click(function(){
        if($("#ser_txt").val().length>2){
            c_frm.submit();
        }
    });
    
    //pop_menu.html
		$(".pop_menu_bg_outline, .pop_menu_outline").height( $(".main").height() - 80 );
		
		$(".pop_menu_bg_outline, .pop_menu_outline").css({"width":0});
		$(".pop_menu_out").hide(0);
		
		$("#c_menu").click(function() {
            if( $(".pop_menu_out").css("display") == "none" ) {
				$(".pop_menu_bg_outline").animate({"width":"360px"},300);
				$(".pop_menu_outline").animate({"width":"340px"},300);
				$(".pop_menu_out").delay(130).fadeIn(0);
			} else {
				$(".pop_menu_bg_outline").animate({"width":""},300);
				$(".pop_menu_outline").animate({"width":""},300);
				$(".pop_menu_out").fadeOut(130);
			}
		});
		
		var c_ico = [
			{"img" : 'img/mico1.png', "name" : '우편함'},
			{"img" : 'img/mico2.png', "name" : '장바구니'},
			{"img" : 'img/mico3.png', "name" : '인스타그램'},
			{"img" : 'img/mico4.png', "name" : '페이스북'}
		];
        
		 for(let c_li in c_ico){
			  $(".c_contents>ul").append("<li>"+"<span class='c_icoli1'>"+"<img src="+c_ico[c_li]["img"]+">"+"</span>"+"<span class='c_icoli2'>"+c_ico[c_li]["name"]+"</span>"+"</li>");
            }
		 
		 $(".c_d").click(function(){
             var $c_index = $(".c_d").index(this);
			 var $c_subeq = $(".c_submenus:eq("+$c_index+")");
			 var $c_subw = $c_subeq.find("li").height()*$c_subeq.find("li").length + 10+"px";
			 $c_subeq.height($c_subw);
			 $c_subeq.slideToggle();
			 
			 
			 if($(this).find(".c_arimg").attr("src")=="img/arr1.png"){
                 $(this).find(".c_arimg").attr("src","img/arr2.png");
			 }
			 else {
				 $(this).find(".c_arimg").attr("src","img/arr1.png");
                }
		 });

         

         

         
         

         
         
         
         
         //contnent
         let $c_wid = $(".c_mbanul>li").width();
         let $c_leng = $(".c_mbanul>li").length;
         $c_wid *= $c_leng;
         $(".c_mbanul").width($c_wid);
         let $c_mnum=0;
         let $c_mset;
         
         c_mtimer();
         

         $(".c_mbandiv").bind({
             "touchstart":function(){
                 console.log($(this))
             }
         })
        //  $(".c_mbandiv").swipeleft(function(){
        //          clearInterval($c_mset);
        //         $(".c_mbanul").animate({"margin-left":"0px"},300);
        //         $(".c_mbanul>li:first-child").animate({"margin-left":-$c_wid + "px"},300,function(){
        //             $(".c_mbanul li:first-child").css({"margin-left":""}).appendTo(".c_mbanul");
        //         });
        //         c_mtimer(); 
        //   });
        //  $(".c_mbandiv").swiperight(function(){
        //          clearInterval($c_mset);
        //         $(".c_mbanul>li:last-child").css({"margin-left":-$c_wid + "px"}).prependTo(".c_mbanul");
        //         $(".c_mbanul>li:first-child").animate({"margin-left":"0px"},300);
        //         c_mtimer();
        //     });
            
         
         function c_mtimer(){
             $c_mset = setInterval(function(){
                 c_mstart()
            },5000);
         }
         
         function c_mstart(){
             $c_mnum += 1;
             if($c_mnum==200){
                 location.reload();
             }
             $(".c_mbanul").animate({"margin-left":"0px"},300);
                $(".c_mbanul>li:first-child").animate({
                    "margin-left":-$c_wid + "px"
                },300,function(){
                    $(".c_mbanul li:first-child").css({
                        "margin-left":""
                    }).appendTo(".c_mbanul"); 
                });
         }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
});