import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import LanguageScreen from "../screens/LanguageScreen";
import HomeScreen from "../screens/HomeScreen";
import QuoteDetailScreen from "../screens/QuoteDetailScreen";
import CategoryQuotesScreen from "../screens/CategoryQuotesScreen";

import { FavoritesProvider } from "../context/FavoritesContext";

import DrawerNavigator from "./DrawerNavigator";


/* ================= TYPES ================= */

export type RootStackParamList = {
  Splash: undefined;
  Language: undefined;
  Home: undefined;

  QuoteDetail: {
    quote: any;
    image: any;
  };

  /* 🔥 FIXED TYPE (only category needed) */
  CategoryQuotes: {
    category: string;
  };
};



const Stack = createNativeStackNavigator<RootStackParamList>();



/* ================= NAVIGATOR ================= */

const AppNavigator = () => {
  return (
    /* 🔥 VERY IMPORTANT — wrap everything */
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Language" component={LanguageScreen} />
<Stack.Screen name="Home" component={DrawerNavigator} />

          <Stack.Screen
            name="QuoteDetail"
            component={QuoteDetailScreen}
          />

          <Stack.Screen
            name="CategoryQuotes"
            component={CategoryQuotesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default AppNavigator;
