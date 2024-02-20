document.addEventListener("submit", function onFormSubmit(e) {
    e.preventDefault()
    const nameTerm = e.target[0].value
    const searchTerms = { nameTerm }
    filterBeers(searchTerms)
})

async function fetchBeers() {
    const response = await fetch("https://api.punkapi.com/v2/beers")
    const data = await response.json()
    return data
}

async function filterBeers(searchTerms) {
    const beers = await fetchBeers()

    const filteredBeers = beers.filter((beer) => {
        const beerName = beer.name.toLowerCase()
        const searchTerm = searchTerms.nameTerm.toLowerCase()

        return beerName.includes(searchTerm)
    }).map((beer) => beer.name)

    console.log(filteredBeers)
}