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
import quotes from "../data/quotes.json";


const CategoryQuotesScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { category } = route.params;

  const filtered = quotes.filter((q: any) =>
    q.categories?.includes(category)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{category}</Text>
      </View>

      <ScrollView>
        {filtered.map((q: any, i: number) => (
        <QuoteCard
            key={i}
            quote={q}
            showActions
        />
        ))}

      </ScrollView>
    </View>
  );
};

export default CategoryQuotesScreen;



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#1E3A8A",
  },

  back: { color: "#fff", fontSize: 22 },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    marginLeft: 12,
  },
});
