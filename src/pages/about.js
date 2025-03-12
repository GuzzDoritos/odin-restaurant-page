import kirbyChef from "./img/kirbychef.png"

export function renderAbout() {
    //Query the content div
    const contentDiv = document.querySelector("#content");

    //create DOM elements
    const elements = {
        aboutHeader: document.createElement("h1"),
        aboutImage: new Image(250),
        aboutParagraph: document.createElement("p"),
    }
    
    //Add content to elements
    elements.aboutHeader.textContent = "About";
    elements.aboutParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut placerat ipsum, ut semper orci. Nunc maximus ac odio ut mattis. Nam pharetra ante commodo dui pretium vulputate. Sed sit amet tortor leo. Nulla condimentum nulla non mi vestibulum accumsan. Vivamus fringilla convallis velit, eget congue mi iaculis eu. Vivamus consectetur ultricies consequat. Phasellus et placerat dui."
    elements.aboutImage.src = kirbyChef;
    elements.aboutImage.style.float = "right";

    //Add classes

    //Append elements to content div

    for (const element in elements) {
        contentDiv.appendChild(elements[element]);
    }

}