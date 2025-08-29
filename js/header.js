document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new NavHeader();

    // Add any custom JavaScript code here...
    var bodyElem = document.querySelector("body");
    var fontForm = document.getElementById("fontFamily");

    if (!localStorage.getItem("fontFamily")) {
        console.log("trying to populate fonts");
        populateStorage();
    } else {
        console.log("trying to set existing styles");
        setStyles();
    }

    function populateStorage() {
        localStorage.setItem("fontFamily", document.getElementById("fontFamily").value);
        setStyles();
    }

    function setStyles() {
        var currentFont = localStorage.getItem("fontFamily");
        console.log("help, what the fuck is the current font: " + currentFont);
        document.getElementById("fontFamily").value = currentFont;

        bodyElem.style.fontFamily = currentFont;
    }

    fontForm.onchange = populateStorage;
});

function getNestingString() {
    // This function prepares the "nesting" variable for your header and footer (see below).
    // Only change this function if you know what you're doing.
    const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
    const numberOfSlahes = currentUrl.split("/").length - 1;
    if (numberOfSlahes == 1) return ".";
    if (numberOfSlahes == 2) return "..";
    return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

const content = `
<header>
    <div class="title">aid's small corner</div>
    <div class="subtext">a little personal site</div>
</header>
<!-- =============================================== -->
<!-- FONT TOGGLER + DARK MODE TOGGLER. -->
<!-- =============================================== -->
<div class="button-wrapper">
    <label for="fontFamily">Font:</label>
        <select name="fontFamily" id="fontFamily">
            <option value="freepixel">Free Pixel</option>
            <option value="atkinson">Atkinson Hyperlegible</option>
            <option value="intel one">Intel One Mono</option>
            <option value="open dyslexic">Open Dyslexic</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Verdana">Verdana</option>
            <option value="Arial">Arial</option>
        </select>
</div>
<nav>
    <button id="toggle-0" aria-label="Toggle main menu">☰</button>
    <ul id="menu-0">
        <li id="item-1-0-0"><a id="link-1-0-0" href="/index.html">Home</a></li>
        <li id="item-2-0-0"><a id="link-2-0-0" href="/about.html">About Me</a></li>
        <li id="item-6-0-0" class="dropdown">
            <a id="link-6-0-0" href="#">Others</a>
            <ul id="menu-6">
                <li id="item-6-1-0"><a id="link-6-1-0" href="https://bytedrew.atabook.org/">Guestbook</a></li>
                <li id="item-6-5-0"><a id="link-6-5-0" href="/credits.html">Credits</a></li>
            </ul>
        </li>
    </ul>
</nav>
`;

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/* FOR MOBILE DO NOT TOUCH OTHERWISE */
function openDropdown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

class NavHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = content;
    }
}
customElements.define("nav-header", NavHeader);
