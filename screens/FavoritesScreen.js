import React, { useContext } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../context/favorites-context'; // Ensure this path is correct
import { MEALS } from '../data/meals';

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  
  const favoriteMeals = MEALS.filter(meal => favorites.includes(meal.id));

  const renderMealItem = ({ item }) => (
    <TouchableOpacity
      style={styles.mealItem}
      onPress={() => {
        navigation.navigate('MealDetail', { mealId: item.id });
      }}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      {favoriteMeals.length === 0 ? (
        <View style={styles.noFavoritesContainer}>
          <Text style={styles.noFavoritesText}>No favorites found!</Text>
        </View>
      ) : (
        <FlatList
          data={favoriteMeals}
          renderItem={renderMealItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  mealItem: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // for shadow on Android
    shadowColor: '#000', // for shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  noFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    color: '#888',
  },
});

export default FavoritesScreen;
