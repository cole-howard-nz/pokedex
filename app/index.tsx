import '../global.css';

import { PokemonType } from '@/types/pokemon-types';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from "react-native";
import PokemonItem from '@/components/pokemon-item';
import { Link } from 'expo-router';
import { fetchPokemon } from '@/api/fetch-pokemon';

export default function Index() {
  const [ pokemon, setPokemon ] = useState<PokemonType[] | undefined>([]);

  useEffect( () => {
    const loadPokemon = async () => {
      const allPokemon: PokemonType[] | undefined = await fetchPokemon()
      setPokemon(allPokemon)
    }
    loadPokemon()
  }, []) 

  if (pokemon === undefined) {
    throw new Error("Pokemon fetch failed.")
    return
  }

  return (
    <ScrollView className="mt-12">
      <View className="pb-8">
        <Text className="mt-8 font-bold text-[67px] font-pokemonHollow text-center">Pokedex</Text>
        <Text className="text-center text-xl font-outfitLight">Explore various Pokemon and their stats!</Text>
      </View>

      <View className='flex-row flex-wrap gap-1 m-4'>
        { pokemon.map( pokemon =>  
          <Link key={ pokemon.id } href={{ pathname: '/details/[id]', params: { id: pokemon.id } }} asChild>
            <Pressable className='w-full'>
              <PokemonItem { ...pokemon }/>
            </Pressable>
          </Link>
        ) }
      </View>
    </ScrollView>
  );
}
