import { createCard } from "./card.js"

window.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.endsWith("homePage.html")) {
        return;
    }
    navigateTo("homePage.html")
})

populateCardWithBeer()
document.querySelector(".beerButton").addEventListener("click", () => populateCardWithBeer())

export function navigateTo(page) { // todo: move to util functions folder?
    const baseURL = "/src"
    window.location.href = `${baseURL}/${page}`
}

async function fetchRandomBeer() { // todo: move to util functions folder?
    try {
        const response = await fetch("https://api.punkapi.com/v2/beers/random")
        const data = await response.json()
        return data
    } catch(e) {
        console.error("error: ", e)
    }
}

async function populateCardWithBeer() {
    const container = document.querySelector(".randomBeerContainer")
    const oldCard = document.querySelector(".beerCard")
    const data = await fetchRandomBeer()
    const newCard = await createCard(data)
    if(oldCard && container.contains(oldCard)) {
        container.replaceChild(newCard, oldCard)
    } else {
        container.insertAdjacentElement("afterBegin", newCard)
    }
}
