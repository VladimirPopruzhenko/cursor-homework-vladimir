function changeLangS() {
    if($("#enS").css("display") == "none") {
        $("#enS").css("display", "initial");
        $("#uaS").css("display", "none");
    } else {
        $("#uaS").css("display", "initial");
        $("#enS").css("display", "none");
    }
}