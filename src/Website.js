import displayHome from "./displayHome.js";
import displayMenu from "./displayMenu.js";
import displayContact from "./displayContact.js";
import "./style.css";

const Website = (() => {

    const content = document.querySelector("#content");

    const switchTab = (e) => {
        const tab = e.target.textContent;

        clearPage();
        if (tab === "Home") {
            displayHome();
        }
        else if (tab === "Menu") {
            displayMenu();
        }
        else if (tab === "Contact") {
            displayContact();
        }
    }

    const clearPage = () => {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    return { switchTab, displayHome };
})();

export default Website;