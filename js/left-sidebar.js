document.addEventListener("DOMContentLoaded", function () {
    // define your images here
    const images = [
        "<img class='full-width-image' src='../assets/158cdefcffa63151890f63ead2115208.jpg' aria-hidden='true' alt='' title='art by me'/>",
    ];

    // this chooses a random number from all available image indices
    const randomImage = images[Math.floor(Math.random() * images.length)];
    // append to the div
    document.getElementById("img-load").innerHTML = randomImage;

    // Page has finished loading. Now, do things.
    new LeftSidebar();
});

const sidebar = `
<!-- =============================================== -->
<!-- LEFT SIDEBAR CONTENT -->
<!-- =============================================== -->
<div class="intro hide-mobile">
    <section>
        <div class="img-floatinganim">
            <img class="dendro"
                src="../img/dendro_symbol.png" aria-hidden='true' alt='' />
        </div>
        <div id="img-load"></div>
        <h4>
            <img src="../assets/plant_bopping.gif" aria-hidden="true" alt="" />
           ☆ Welcome!! ☆
            <img src="../assets/plant_bopping.gif" aria-hidden="true" alt="" />
        </h4>
        <div>
            <p style="text-align: center">
                <b>Drew</b>
                <img
                    style="padding-left: 5px; padding-right: 5px"
                    src="../assets/umbrellapixel.gif"
                    aria-hidden="true"
                    alt="" />
                <b>18</b>
                <img
                    style="padding-left: 5px; padding-right: 5px"
                    src="../assets/umbrellapixel.gif"
                    aria-hidden="true"
                    alt="" />
                <b>He/Him</b>
            </p>
            <hr />
            <p>
                A little personal corner, where I show <mark>my interests</mark> and store all the things
                <u>I like</u> and <u>enjoy</u>.
            </p>
            <hr />
        </div>
    </section>
    <section>
        <h4>
            <img src="../assets/plant_bopping.gif" aria-hidden="true" alt="" />
            ☆ Site Button ☆
            <img src="../assets/plant_bopping.gif" aria-hidden="true" alt="" />
        </h4>
        <div class="site-button">
            <div class="images-row">
                <a href="https://bytedrew.github.io" target="_blank"
                    ><img src="https://files.catbox.moe/qhc6o6.png" alt="bytedrew button"
                /></a>
            </div>
            <textarea id="site-button" name="site-button">
&lt;a href="https://bytedrew.github.io"&gt;&lt;img src="https://files.catbox.moe/qhc6o6.png" alt="bytedrew button" loading="lazy"&gt;&lt;/a&gt;</textarea
            >
            <label for="site-button" class="subtle" style="text-align: center; margin-top: 3px;"
                >Site button; hotlinking is fine; image is on catbox.</label
            >
        </div>
    </section>
</div>
`;

class LeftSidebar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = sidebar;
    }
}
customElements.define("left-sidebar", LeftSidebar);
