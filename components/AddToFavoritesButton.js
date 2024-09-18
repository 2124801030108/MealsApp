import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FavoritesContext } from '../context/favorites-context';

const AddToFavoritesButton = ({ mealId }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.includes(mealId);

  return (
    <TouchableOpacity
      onPress={() => {
        if (isFavorite) {
          removeFavorite(mealId);
        } else {
          addFavorite(mealId);
        }
      }}
    >
      <Text>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
    </TouchableOpacity>
  );
};

export default AddToFavoritesButton;
