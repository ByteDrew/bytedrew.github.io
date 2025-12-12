

const themeList = ['rainworld-theme', 'shoreline-theme', 'light-theme', 'disco-theme'];

function setTheme(theme) {
    themeList.forEach(item => document.documentElement.classList.remove(item));
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);

    if (document.getElementById("chattable")) {
        reinitializeChat(); // change chat color palette
    }
}


var theme_buttons = `
<span>Theme switcher</span>
<div>
<button id="rainworld-theme-button" onclick="setTheme('rainworld-theme')">
<img src="/assets/rainworld-button.png">
</button>
<button id="shoreline-theme-button" onclick="setTheme('shoreline-theme')">
<img src="/assets/shoreline-button.png">
</button>
</div>
`;


if (localStorage.getItem("theme") == "light-theme") {
    setTheme("shoreline-theme");
}

const currentTheme = localStorage.getItem('theme') || 'rainworld-theme';
setTheme(currentTheme);



document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("theme-buttons")) {
        document.getElementById("theme-buttons").innerHTML = theme_buttons;
    }

});
