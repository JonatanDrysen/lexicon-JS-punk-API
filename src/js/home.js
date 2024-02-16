import { createCard } from "./utils/card.js"
import { fetchRandomBeer } from "./utils/fetchRandomBeer.js"

populateCardWithBeer()
document.querySelector(".beerButton").addEventListener("click", () => populateCardWithBeer())

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