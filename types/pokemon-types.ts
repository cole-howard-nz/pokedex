type PokemonFetchType = {
  name: string,
  url: string,
}

type PokemonType = {
  id: number,
  name: string,
  image: string,
  imageBack: string,
  types: PokemonTypesType[],
  blurb: string,
  colour: string
}

type PokemonTypesType = {
  type: {
    name: string,
  }
}

export { PokemonFetchType, PokemonType, PokemonTypesType }
