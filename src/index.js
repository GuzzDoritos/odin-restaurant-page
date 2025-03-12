import "./styles.css";
import { renderHome, renderMenu } from "./pageBarrel.js";

(function Page() {
    // cache DOM
    const contentDiv = document.querySelector("#content");
    const homeBtn = document.querySelector("button:nth-child(1)");
    const menuBtn = document.querySelector("button:nth-child(2)");

    homeBtn.addEventListener("click", () => {
        contentDiv.replaceChildren();
        renderHome();
    })

    menuBtn.addEventListener("click", () => {
        contentDiv.replaceChildren();
        renderMenu();
    })

    window.addEventListener("load", renderHome);    
})();


