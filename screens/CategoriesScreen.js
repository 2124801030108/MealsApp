import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/categories';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {
  const colors = ['#f5a623', '#50e3c2', '#4a90e2', '#e94e77']; // Example colors

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        image={itemData.item.image}
        color={colors[itemData.index % colors.length]} // Cycle through colors
        onSelect={() => {
          navigation.navigate('CategoryMeals', { categoryId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
  },
});

export default CategoriesScreen;
