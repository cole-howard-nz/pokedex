import { PokemonType, PokemonTypesType } from '@/types/pokemon-types'
import React from 'react'
import { View, Text, Image } from 'react-native'

const colourMap: { [key: string]: string } = {
  red: 'bg-red-300',
  blue: 'bg-blue-300',
  green: 'bg-green-300',
  yellow: 'bg-yellow-300',
  purple: 'bg-purple-300',
  pink: 'bg-pink-300',
  brown: 'bg-amber-300',
  gray: 'bg-gray-300',
  white: 'bg-slate-200',
  black: 'bg-gray-400',
}

const PokemonItem = (pokemon: PokemonType) => {
  const bgColour = colourMap[pokemon.colour] || 'bg-slate-200'

  return (
    <View className={ `w-full bg-slate-200 rounded-lg p-4 ${ bgColour } relative overflow-hidden`  }>
      <View className='flex-row flex-wrap gap-1 pl-2'>
        <Text className="capitalize font-outfitMedium text-3xl pr-4">{ pokemon.name }</Text>

        { pokemon.types.map( (t: PokemonTypesType) => 
          <Text key={ t.type.name } className='border-1 bg-transparent/5 rounded-xl p-2 uppercase font-outfitRegular' style={{ alignSelf: 'flex-start' }}>
            { t.type.name }
          </Text>
        )}
      </View>
      
      <View className='flex-row flex-wrap pt-12'>
        <Text className='w-1/2'>
          { pokemon.blurb }
        </Text>
        <Image 
          src={ pokemon.image }
          style={{ width: 100, height: 100 }}
          className='absolute bottom-0 right-4 w-36 h-36'
          resizeMode='contain'
        />
      </View>
    </View>
  )
}

export default PokemonItem