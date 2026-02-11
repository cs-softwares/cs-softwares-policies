import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import QuoteCard from "../components/QuoteCard";
import { useFavorites } from "../context/FavoritesContext";


const FavoritesScreen = () => {
  const navigation = useNavigation<any>();

  const { favorites } = useFavorites();

  return (
    <View style={styles.container}>
      {/* 🔹 HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Favorites</Text>
      </View>

      {/* 🔹 LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {favorites.length === 0 ? (
          <Text style={styles.empty}>
            No favorites yet ❤️
          </Text>
        ) : (
        favorites.map((item, index) => (
        <QuoteCard
            key={index}
            quote={item}
            showActions
        />
        ))

        )}
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;



/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#1E3A8A",
  },

  back: {
    fontSize: 22,
    color: "#fff",
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
    marginLeft: 12,
  },

  empty: {
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
});
