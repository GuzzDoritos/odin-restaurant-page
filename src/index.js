import "./styles.css";
import renderHome from "./pageBarrel.js";

(function Page() {
    // cache DOM
    const contentDiv = document.querySelector("#content");
    const homeBtn = document.querySelector("button:nth-child(1)");

    homeBtn.addEventListener("click", () => {
        contentDiv.replaceChildren();
        renderHome();
    })

    window.addEventListener("load", renderHome);    
})();


