import { PokemonFetchType, PokemonType } from "@/types/pokemon-types";

const fetchPokemon = async (): Promise<PokemonType[] | undefined> => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=60"
    );

    if (!response.ok) throw new Error("Pokemon fetch failed.")
      
    const data = await response.json()

    const detailedPokemonData: PokemonType[] = await Promise.all(
      data.results.map( async (pokemon: PokemonFetchType) => {
        const pokemonResponse = await fetch(pokemon.url)
        const pokemonData = await pokemonResponse.json()

        const speciesResponse = await fetch(pokemonData.species.url)
        const speciesData = await speciesResponse.json()

        const flavorTextEntry = speciesData.flavor_text_entries.find( (entry: any) => entry.language.name === 'en' )
        const description = flavorTextEntry ? flavorTextEntry.flavor_text.replace(/\f/g, ' ').replace(/\n/g, ' ') : 'No description available.'

        const colour = speciesData.color.name

        const newPokemon: PokemonType = {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.front_default,
          imageBack: pokemonData.sprites.back_default,
          types: pokemonData.types,
          blurb: description,
          colour
        }

        return newPokemon
    }))

    return detailedPokemonData

  } catch (e) {
    console.log('Error:', e)
  }
} 

export { fetchPokemon }