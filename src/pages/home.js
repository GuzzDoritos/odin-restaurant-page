import kirbyBurg from "./img/kirbyburg.png"

export default function renderHome() {
    //Query the content div
    const contentDiv = document.querySelector("#content");

    //create DOM elements
    const elements = {
        homeHeader: document.createElement("h1"),
        homeParagraph: document.createElement("p"),
        homeImage: new Image(200),
    }
    
    //Add content to elements
    elements.homeHeader.textContent = "A Restaurant";
    elements.homeParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut placerat ipsum, ut semper orci. Nunc maximus ac odio ut mattis. Nam pharetra ante commodo dui pretium vulputate. Sed sit amet tortor leo. Nulla condimentum nulla non mi vestibulum accumsan. Vivamus fringilla convallis velit, eget congue mi iaculis eu. Vivamus consectetur ultricies consequat. Phasellus et placerat dui."
    elements.homeImage.src = kirbyBurg;

    //Add classes

    //Append elements to content div

    for (const element in elements) {
        contentDiv.appendChild(elements[element]);
    }

}