import { navigateTo } from "./utils/navigateTo.js"

window.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.endsWith("homePage.html")) {
        return;
    }
    navigateTo("homePage.html")
})
