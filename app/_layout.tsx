import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from 'react';

import '../global.css'


SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [ fontsLoaded ] = useFonts({
    'Outfit-Light': require('../assets/fonts/Outfit-Light.ttf'),
    'Outfit-Medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Regular': require('../assets/fonts/Outfit-Regular.ttf'),
    'Pokemon-Hollow': require('../assets/fonts/Pokemon-Hollow.ttf'),
    'Pokemon-Solid': require('../assets/fonts/Pokemon-Solid.ttf'),
  });

  useEffect( () => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [ fontsLoaded ])

  if (!fontsLoaded) return null

  return <Stack />;
}

export default RootLayout

