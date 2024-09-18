import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (mealId) => {
    setFavorites((currentFavorites) => [...currentFavorites, mealId]);
  };

  const removeFavorite = (mealId) => {
    setFavorites((currentFavorites) => currentFavorites.filter(id => id !== mealId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
