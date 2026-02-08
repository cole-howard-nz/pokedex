import { PokemonFetchType, PokemonType } from '@/types/pokemon-types';
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
        "https://pokeapi.co/api/v2/pokemon/?limit=9"
      );

      if (!response.ok) throw new Error("Pokemon fetch failed.")
      
      const data = await response.json()

      const detailedPokemonData = await Promise.all(data.results.map( async (pokemon: PokemonFetchType) => {
        const response = await fetch(pokemon.url)

        if (!response.ok) throw new Error(`Detailed pokemon fetch for ${ pokemon.name } failed.`)

        const data = await response.json()

        const newPokemon: PokemonType = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          imageBack: data.sprites.back_default
        }

        return newPokemon
      }))

      setPokemon(detailedPokemonData)

    } catch (e) {
      console.log('Error:', e)
    }
  } 

  return (
    <ScrollView>
      <View className="pb-8">
        <Text className="mt-8 font-bold text-[67px] font-pokemonHollow text-center">Pokedex</Text>
        <Text className="text-center text-xl">Explore various Pokemon and their stats!</Text>
      </View>

      <View className='flex-row flex-wrap'>
        { pokemon.map( pokemon => 
          <PokemonItem key={ pokemon.id } { ...pokemon }/>
        ) }
      </View>
    </ScrollView>
  );
}
