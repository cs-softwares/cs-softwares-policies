import React, { createContext, useContext, useState } from "react";

type QuoteType = {
  text: string;
};

type FavoritesContextType = {
  favorites: QuoteType[];
  toggleFavorite: (quote: QuoteType) => void;
  isFavorite: (text: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<QuoteType[]>([]);

  const toggleFavorite = (quote: QuoteType) => {
    setFavorites((prev) => {
      const exists = prev.find((q) => q.text === quote.text);

      if (exists) {
        return prev.filter((q) => q.text !== quote.text);
      } else {
        return [...prev, quote];
      }
    });
  };

  const isFavorite = (text: string) => {
    return favorites.some((q) => q.text === text);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext)!;
