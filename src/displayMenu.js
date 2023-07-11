import Burger from "./images/burger.jpg";
import Salad from "./images/salad.jpg";
import Pasta from "./images/pasta.jpg";

export default function displayMenu() {
    // select content div
    const content = document.querySelector("#content");

    // create title container
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("container");

    const title = document.createElement("h1");
    title.textContent = "Menu";

    titleContainer.appendChild(title);

    // add menu items
    const itemContainer1 = document.createElement("div");
    itemContainer1.classList.add("container");

    const item1 = document.createElement("h2");
    item1.textContent = "Signature Burger ~ $10.99";

    const item1Description = document.createElement("p");
    item1Description.textContent = "A mouthwatering burger made with a juicy beef patty, topped with melted cheese, crispy bacon, fresh lettuce, tomatoes, and our special sauce. Served with golden fries."
    const image1 = new Image();
    image1.src = Burger;

    itemContainer1.append(item1, item1Description, image1);

    const itemContainer2 = document.createElement("div");
    itemContainer2.classList.add("container");

    const item2 = document.createElement("h2");
    item2.textContent = "Garden Salad ~ $7.99";

    const item2Description = document.createElement("p");
    item2Description.textContent = "A refreshing mix of fresh greens, cherry tomatoes, cucumbers, carrots, and bell peppers, topped with a tangy vinaigrette dressing."
    const image2 = new Image();
    image2.src = Salad;

    itemContainer2.append(item2, item2Description, image2);

    const itemContainer3 = document.createElement("div");
    itemContainer3.classList.add("container");

    const item3 = document.createElement("h2");
    item3.textContent = "Seafood Pasta ~ $13.99";

    const item3Description = document.createElement("p");
    item3Description.textContent = "A delectable combination of succulent shrimp, tender scallops, and mussels tossed with al dente pasta in a creamy garlic sauce."
    const image3 = new Image();
    image3.src = Pasta;

    itemContainer3.append(item3, item3Description, image3);

    content.append(titleContainer, itemContainer1, itemContainer2, itemContainer3);
}