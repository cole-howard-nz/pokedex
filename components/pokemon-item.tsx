import { PokemonType } from '@/types/pokemon-types'
import React from 'react'
import { View, Text, Image } from 'react-native'

const PokemonItem = (pokemon: PokemonType) => {
  return (
    <View key={ pokemon.name } className="w-1/3">
      <View className='relative aspect-square bg-slate-200 rounded-lg'>
        <Text>{ pokemon.name }</Text>
        
        <Image 
          src={ pokemon.image }
          style={{ width: 100, height: 100 }}
          className='absolute bottom-4 right-4'
        />
        
      </View>
    </View>
  )
}

export default PokemonItem