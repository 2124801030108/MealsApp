import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Platform.OS === 'android' ? '#c2185b' : '' },
        headerTintColor: Platform.OS === 'android' ? 'white' : '#c2185b',
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

const SettingsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          drawerIcon: (props) => <Ionicons name="restaurant" size={23} color={props.color} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          drawerIcon: (props) => <FontAwesome name="heart" size={23} color={props.color} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          drawerIcon: (props) => <Ionicons name="settings" size={23} color={props.color} />,
        }}
      />
    </Drawer.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Meals') {
            iconName = 'restaurant';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Favorites') {
            iconName = 'heart';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'Settings') {
            iconName = 'settings';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#c2185b', // Purple color matching Categories screen
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#f8f8f8', // You can set your desired background color here
        },
      }}
    >
      <BottomTab.Screen
        name="Meals"
        component={MainNavigator}
        options={{
          tabBarLabel: 'Meals',
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarLabel: 'Favorites',
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
