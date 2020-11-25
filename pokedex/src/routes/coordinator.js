export const goToHomeScreen = (history) => {
    history.push("/")
}

export const goToPokedexScreen = (history) => {
    history.push("/pokedex")
}

export const goToPokemonDetails = (history) => {
    history.push("/pokemondetails")
}

export const goBack = (history) => {
    history.goBack()
}