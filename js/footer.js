document.addEventListener("DOMContentLoaded", function () {
    // Page has finished loading. Now, do things.
    new GeneralFooter();

    // Add any custom JavaScript code here...
});

const footer = `
<footer>
    <p>
        2025 forevermore <i>/</i> lovingly coded by <a href="https://justinjackson.ca/webmaster/">drew</a> / <a href=".../credits.html">credits</a> / <a href="https://bytedrew.atabook.org/">guestbook</a> / <a href="mailto:bytedrew@proton.me">contact me</a>
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
