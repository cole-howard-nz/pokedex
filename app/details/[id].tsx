import { useLocalSearchParams } from 'expo-router';
import React from 'react'
import { ScrollView, View, Text } from 'react-native'

const PokemonDetails = () => {
  const { id } = useLocalSearchParams();
  
  return (
    <ScrollView>
      <View>
        <Text>{ id }</Text>
      </View>
    </ScrollView>
  )
}

export default PokemonDetails