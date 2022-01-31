import "./styles/base.less";
import "./styles/layout.less";
import "./styles/palette.less";
import "./styles/styling.less";
import "./styles/nav-bar.less";
import "./styles/toggle-button.less";

/*
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
*/

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin, faAt, faBars)

dom.i2svg()


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