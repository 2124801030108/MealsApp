import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../context/favorites-context'; // Ensure this path is correct
import { MEALS } from '../data/meals';

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);

  const isFavorite = favorites.includes(mealId);

  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={{ uri: selectedMeal.image }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Text style={styles.price}>${selectedMeal.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => {
          if (isFavorite) {
            removeFavorite(mealId);
          } else {
            addFavorite(mealId);
          }
        }}
      >
        <Text style={styles.favoriteButtonText}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  favoriteButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#c2185b',
    borderRadius: 5,
  },
  favoriteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MealDetailScreen;
