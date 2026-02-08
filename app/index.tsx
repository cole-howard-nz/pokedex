import { PokemonFetchType, PokemonType, PokemonTypesType } from '@/types/pokemon-types';
import '../global.css';

import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from "react-native";
import PokemonItem from '@/components/pokemon-item';

export default function Index() {
  const [ pokemon, setPokemon ] = useState<PokemonType[]>([]);

  useEffect( () => {
    fetchPokemon()
  }, []) 

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=60"
      );

      if (!response.ok) throw new Error("Pokemon fetch failed.")
      
      const data = await response.json()

      const detailedPokemonData = await Promise.all(
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

      setPokemon(detailedPokemonData)

    } catch (e) {
      console.log('Error:', e)
    }
  } 

  return (
    <ScrollView className="mt-12">
      <View className="pb-8">
        <Text className="mt-8 font-bold text-[67px] font-pokemonHollow text-center">Pokedex</Text>
        <Text className="text-center text-xl font-outfitLight">Explore various Pokemon and their stats!</Text>
      </View>

      <View className='flex-row flex-wrap gap-1 m-4'>
        { pokemon.map( pokemon => 
          <PokemonItem key={ pokemon.id } { ...pokemon }/>
        ) }
      </View>
    </ScrollView>
  );
}
