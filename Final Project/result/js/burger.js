let burger_bolean = false
function burger() {
    if(!burger_bolean) {
        $("#burger").removeClass("header__burger_").addClass("header__burger-close");
        $("#burger-nav").removeClass("header__nav-list-transform-close").addClass("header__nav-list-transform-open");
        burger_bolean = true;
    } else {
        $("#burger").removeClass("header__burger-close").addClass("header__burger_");
        $("#burger-nav").removeClass("header__nav-list-transform-open").addClass("header__nav-list-transform-close");
        burger_bolean = false
    }
}