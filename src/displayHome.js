export default function displayHome() {

    // select content div
    const content = document.querySelector("#content");

    // create title container
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("container");

    const title = document.createElement("h1");
    title.textContent = "Epicurean Delights";

    titleContainer.appendChild(title);

    // create copy container
    const copyContainer = document.createElement("div");
    copyContainer.classList.add("container");
    const copy = document.createElement("p");
    copy.textContent = "At Epicurean Delights, we believe that dining is an experience that should excite all your senses. Our restaurant is a haven for food enthusiasts seeking unforgettable gastronomic journeys.Indulge in a world of flavors, textures, and aromas meticulously crafted by our talented chefs.";

    copyContainer.appendChild(copy);

    // create operating hours container
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("container");

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Operating Hours";
    const weekdayTime = document.createElement("span");
    weekdayTime.textContent = "Monday to Friday: 11:00 AM - 10:00 PM";
    const weekendTime = document.createElement("span");
    weekendTime.textContent = "Saturday and Sunday: 10:00 AM - 11:00 PM";

    hoursContainer.append(hoursTitle, weekdayTime, weekendTime);

    // create location container
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("container");
    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";
    const location = document.createElement("span");
    location.textContent = "123 Gourmet Avenue, Foodville";

    locationContainer.append(locationTitle, location);

    // add containers to content div
    content.append(titleContainer, copyContainer, hoursContainer, locationContainer);
};
