import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();

const FavoritesNavigator = () => {
  const [favorites, setFavorites] = useState([]);

  const removeFavorite = (id) => {
    setFavorites((currentFavorites) => currentFavorites.filter((item) => item.id !== id));
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites">
        {(props) => (
          <FavoritesScreen
            {...props}
            favorites={favorites}
            removeFavorite={removeFavorite}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default FavoritesNavigator;
