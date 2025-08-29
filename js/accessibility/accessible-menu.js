import accessibleMenu from "https://esm.sh/accessible-menu@4.2.0";

        document.addEventListener("DOMContentLoaded", () => {
            const nav = document.querySelector("nav");
            const menuElement = nav.querySelector("ul");
            const controllerElement = nav.querySelector("button");

            const menu = new accessibleMenu.Menubar({
                menuElement,
                submenuItemSelector: ".dropdown",
                containerElement: nav,
                controllerElement,
                hoverType: "dynamic" // "on", "dynamic"
            });
        });
