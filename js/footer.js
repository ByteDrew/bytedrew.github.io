document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new GeneralFooter();

    // Add any custom JavaScript code here...
});

const footer = `
<footer>
    <p>
        2025 â€” forevermore <i>/</i> lovingly coded by <a href="https://justinjackson.ca/webmaster/">aid</a> / <a href="https://zhongvie.neocities.org/credits">credits</a> / <a href="https://asuraid.atabook.org/">guestbook</a> / <a href="mailto:sylviegirly@pm.me">contact me</a>
    </p>
</footer>
`;

class GeneralFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = footer;
    }
}

customElements.define("general-footer", GeneralFooter);
