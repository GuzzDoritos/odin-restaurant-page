import choco from "./img/chocolate.png"
import kirbyBurg from "./img/kirbyburg.png"
import kirbyCar from "./img/kirbycar.png"
import maximTomato from "./img/maximtomato.png"

export function renderMenu() {
    //Query the content div
    const contentDiv = document.querySelector("#content");

    //create DOM elements
    const elements = {
        menuHeader: document.createElement("h1"),
        menuGrid: document.createElement("div"),
    }
    
    // Array with products in the menu
    const products = [
        {
            name: "Chocolate",
            description: "Delicious chocolate!",
            image: choco
        },
        {
            name: "Kirby Burguer",
            description: "Burguer with the face of Kirby!",
            image: kirbyBurg
        },
        {
            name: "Kirby Car Cake",
            description: "Cake with the format of turned into car Kirby!",
            image: kirbyCar
        },
        {
            name: "Maxim Tomato",
            description: "Tomato that replenishes all your vitality! Quite literally!",
            image: maximTomato
        }
    ]

    // Create and append elements for each product to the menuGrid
    for (const item of products) {
        //create elements
        const itemDiv = document.createElement("div");
        const itemName = document.createElement("h2");
        const itemDesc = document.createElement("p");
        const itemImage = new Image(100);

        //add content
        itemName.textContent = item.name;
        itemDesc.textContent = item.description;
        itemImage.src = item.image;

        //append elements to div
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDesc);
        itemDiv.appendChild(itemImage);

        //append item div to menu grid
        elements.menuGrid.appendChild(itemDiv);
    }

    //Add content to elements
    elements.menuHeader.textContent = "Menu";

    //Add class to menu Grid
    elements.menuGrid.className = "menu-grid";

    //Append elements to content div

    for (const element in elements) {
        contentDiv.appendChild(elements[element]);
    }

}