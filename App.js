import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import SearchScreen from './screens/SearchScreen';
import DetailedScreen from './screens/DetailedScreen';
import LikedSongs from './components/LikedSong';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Recherche">
        <Stack.Screen name="Recherche" component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailedScreen} />
        <Stack.Screen name="Favoris" component={LikedSongs} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
