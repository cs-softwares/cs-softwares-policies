import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import QuoteCard from "../components/QuoteCard";

const QuoteDetailScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { quote } = route.params;

  const categories = [
    "Motivation",
    "Success",
    "Discipline",
    "Education",
    "Freedom",
    "Justice",
    "Equality",
    "Leadership",
    "Struggle",
    "Self-Respect",
  ];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Quote Details</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 🔥 BIG CARD */}
        <QuoteCard
          quote={quote}
          showActions
        />

        {/* 🔥 CATEGORY SECTION */}
        <Text style={styles.explore}>Explore Categories</Text>

        <View style={styles.chipContainer}>
          {categories.map((cat, i) => (
            <TouchableOpacity
              key={i}
              style={styles.bigChip}
              onPress={() =>
                navigation.navigate("CategoryQuotes", {
                  category: cat,
                })
              }
            >
              <Text style={styles.bigChipText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
};

export default QuoteDetailScreen;

/* ---------------- STYLES ---------------- */

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

  explore: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
    marginHorizontal: 18,
    marginTop: 20,
    marginBottom: 12,
  },

  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 18,
  },

  bigChip: {
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 22,
    marginRight: 10,
    marginBottom: 12,
  },

  bigChipText: {
    color: "#fff",
    fontWeight: "700",
  },
});
