import "./styles.css";
import { renderHome, renderMenu, renderAbout } from "./pageBarrel.js";

(function Page() {
    // cache DOM
    const contentDiv = document.querySelector("#content");
    const homeBtn = document.querySelector("button:nth-child(1)");
    const menuBtn = document.querySelector("button:nth-child(2)");
    const aboutBtn = document.querySelector("button:nth-child(3)");

    homeBtn.addEventListener("click", () => {
        contentDiv.replaceChildren();
        renderHome();
    })

    menuBtn.addEventListener("click", () => {
        contentDiv.replaceChildren();
        renderMenu();
    })

    aboutBtn.addEventListener("click", () => {
        contentDiv.replaceChildren();
        renderAbout();
    })

    window.addEventListener("load", renderHome);    
})();


