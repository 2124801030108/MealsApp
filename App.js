import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';
import { FavoritesProvider } from './context/favorites-context'; // Adjust the path as necessary
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const App = () => {
  const [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'), // Update the path as needed
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <FavoritesProvider>
      <NavigationContainer>
        <MealsNavigator />
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default App;
