import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure you have this package installed

function MealDetail({ route, navigation }) {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavoriteHandler = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={meal.image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.price}>${meal.price.toFixed(2)}</Text>
        <TouchableOpacity onPress={toggleFavoriteHandler} style={styles.favoriteButton}>
          <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginBottom: 20,
  },
  favoriteButton: {
    marginTop: 10,
  },
});

export default MealDetail;
