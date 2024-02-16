export async function fetchRandomBeer() {
    try {
        const response = await fetch("https://api.punkapi.com/v2/beers/random")
        const data = await response.json()
        return data
    } catch(e) {
        console.error("error: ", e)
    }
}
