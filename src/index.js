import Website from "./Website.js";

// display home page
Website.displayHome();

const buttons = document.querySelectorAll("button");

// switch page based on tab clicked
buttons.forEach(button => {
    button.addEventListener("click", Website.switchTab)
})








