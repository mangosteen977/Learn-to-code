/*폰트크기조절*/
function fontclass(part) {
    let plus_cs = "";
    if (part == "1") {
        plus_cs = "section";
        document.getElementById("faq").className = plus_cs;
    }
    else {
        if (part == "2") {
            document.getElementById("faq").classList.remove("font_view3");
            plus_cs = "font_view2";
        }
        else {
            document.getElementById("faq").classList.remove("font_view2");
            plus_cs = "font_view3";
        }
        document.getElementById("faq").className += " " + plus_cs;
    }

}