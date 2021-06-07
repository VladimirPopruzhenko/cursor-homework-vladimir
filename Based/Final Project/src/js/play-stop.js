let bollean = false;
function play_stopHeader() {
    if(!bollean) { 
        $("#cards-play-stop").removeClass("cards-stop").addClass("cards-play");
        $("#welcome-play-stop").removeClass("welcome-stop").addClass("welcome-play");
        $("#play_stop").removeClass("header__button-play-stop").addClass("header__button-play");
        bollean = true;
    } else {
        $("#cards-play-stop").removeClass("cards-play").addClass("cards-stop");
        $("#welcome-play-stop").removeClass("welcome-play").addClass("welcome-stop");
        $("#play_stop").removeClass("header__button-play").addClass("header__button-play-stop");
        bollean = false;
    }
}