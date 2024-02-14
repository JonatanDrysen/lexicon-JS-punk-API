import { createCard } from "./card.js"

window.addEventListener("load", () => populateCardWithBeer())
document.querySelector(".beerButton").addEventListener("click", () => populateCardWithBeer())

async function fetchRandomBeer() {
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

