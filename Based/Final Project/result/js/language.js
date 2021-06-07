function changeLangM() {
    if($("#enM").css("display") == "none") {
        $("#enM").css("display", "flex");
        $("#uaM").css("display", "none");
    } else {
        $("#uaM").css("display", "flex");
        $("#enM").css("display", "none");
    }
}