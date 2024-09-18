import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { MEALS } from '../data/meals';
import MealItem from '../components/MealItem';

function CategoryMealsScreen({ route, navigation }) {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

  const renderMealItem = (itemData) => {
    const { title, image, price } = itemData.item;
    const formattedPrice = typeof price === 'number' ? price.toFixed(2) : 'N/A'; // Handle price formatting
    
    return (
      <View style={styles.mealContainer}>
        <Image source={{ uri: image.uri }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${formattedPrice}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {displayedMeals.length === 0 ? (
        <View style={styles.noMealsContainer}>
          <Text style={styles.noMealsText}>No meals found!</Text>
        </View>
      ) : (
        <FlatList
          data={displayedMeals}
          renderItem={renderMealItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  mealContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // for shadow on Android
    shadowColor: '#000', // for shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 150,
  },
  detailsContainer: {
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
    marginTop: 5,
  },
  noMealsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMealsText: {
    fontSize: 18,
    color: '#888',
  },
});

export default CategoryMealsScreen;
