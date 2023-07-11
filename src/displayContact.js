export default function displayContact() {
    // select content div
    const content = document.querySelector("#content");

    // create title container
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("container");

    const title = document.createElement("h1");
    title.textContent = "Contact Us";

    titleContainer.appendChild(title);

    // create contact containers

    const contact1 = document.createElement("div");
    contact1.classList.add("container");

    const name1 = document.createElement("h2");
    name1.textContent = "Sarah Anderson";
    const position1 = document.createElement("span");
    position1.textContent = "General Manager";
    const phone1 = document.createElement("span");
    phone1.textContent = "+1 (555) 123-4567";
    const email1 = document.createElement("span");
    email1.textContent = "sarah.anderson@example.com";

    contact1.append(name1, position1, phone1, email1);


    const contact2 = document.createElement("div");
    contact2.classList.add("container");

    const name2 = document.createElement("h2");
    name2.textContent = "Michael Johnson";
    const position2 = document.createElement("span");
    position2.textContent = "Head Chef";
    const phone2 = document.createElement("span");
    phone2.textContent = "+1 (555) 987-6543";
    const email2 = document.createElement("span");
    email2.textContent = "michael.johnson@example.com";

    contact2.append(name2, position2, phone2, email2);


    const contact3 = document.createElement("div");
    contact3.classList.add("container");

    const name3 = document.createElement("h2");
    name3.textContent = "Emily Roberts";
    const position3 = document.createElement("span");
    position3.textContent = "Event Coordinator";
    const phone3 = document.createElement("span");
    phone3.textContent = "+1 (555) 789-0123";
    const email3 = document.createElement("span");
    email3.textContent = "emily.roberts@example.com";

    contact3.append(name3, position3, phone3, email3);

    content.append(titleContainer, contact1, contact2, contact3);
}