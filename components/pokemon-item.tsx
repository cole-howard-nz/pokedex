import { PokemonType, PokemonTypesType } from '@/types/pokemon-types'
import React from 'react'
import { View, Text, Image } from 'react-native'

const colourMap: { [key: string]: string } = {
  red: '#fca5a5',      // red-300
  blue: '#93c5fd',     // blue-300
  green: '#86efac',    // green-300
  yellow: '#fde047',   // yellow-300
  purple: '#d8b4fe',   // purple-300
  pink: '#f9a8d4',     // pink-300
  brown: '#fcd34d',    // amber-300
  gray: '#d1d5db',     // gray-300
  white: '#e2e8f0',    // slate-200
  black: '#9ca3af',    // gray-400
}

const PokemonItem = (pokemon: PokemonType) => {
  const bgColour = colourMap[pokemon.colour] || '#e2e8f0'

  return (
    <View 
      className="w-full rounded-lg p-4"
      style={{ backgroundColor: bgColour }}
    >
      <View className='flex-row flex-wrap gap-1 pl-2'>
        <Text className="capitalize font-outfitMedium text-3xl pr-4">{ pokemon.name }</Text>

        { pokemon.types.map( (t: PokemonTypesType) => 
          <Text 
            key={ t.type.name } 
            className='rounded-xl px-2 py-1 uppercase font-outfitRegular'
            style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
          >
            { t.type.name }
          </Text>
        )}
      </View>
      
      <View className='flex-row flex-wrap pt-12'>
        <Text className='w-1/2 font-outfitRegular'>
          { pokemon.blurb }
        </Text>
        <Image 
          source={{ uri: pokemon.image }}
          style={{ width: 144, height: 144 }}
          resizeMode='contain'
        />
      </View>
    </View>
  )
}

export default PokemonItem