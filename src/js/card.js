export async function createCard(data) {
  const beer = await data[0]
  const card = document.createElement("div")
  card.classList.add("beerCard")

  const img = document.createElement("img")
  img.alt = beer.name
  beer.image_url ? img.src = beer.image_url : img.src = "/assets/beerIcon.jpg" 

  const title = document.createElement("span")
  title.textContent = beer.name

  const seeMore = document.createElement("button")
  seeMore.textContent = "See More >>"
  seeMore.addEventListener("click", () => {
    console.log("See More button clicked")
  })

  card.appendChild(img)
  card.appendChild(title)
  card.appendChild(seeMore)

  return card
}
