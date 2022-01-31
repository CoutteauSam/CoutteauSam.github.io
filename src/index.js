import "./styles/base.less";
import "./styles/layout.less";
import "./styles/palette.less";
import "./styles/styling.less";
import "./styles/nav-bar.less";
import "./styles/toggle-button.less";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


function toggle_night_mode(bool) {
    var root = document.documentElement;
    bool ? root.classList.add("dark") : root.classList.remove("dark")
    window.localStorage.setItem("night_mode", bool)
}
window.toggle_night_mode = toggle_night_mode

$(document).ready(function() {
    var checked = JSON.parse(window.localStorage.getItem('night_mode') || false);
    if (checked) {
        document.getElementById("night_mode").checked = true;
        toggle_night_mode(true);
    }

    setTimeout(function() {
        document.body.classList.remove("preload");
    }, 50);
})