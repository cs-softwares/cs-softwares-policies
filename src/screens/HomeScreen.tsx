import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";


import Header from "../components/Header";
import { localImages } from "../data/localImages";
import { cloudImages } from "../data/cloudImages";


import { useLanguage } from "../context/LanguageContext";
import quotes from "../data/quotes.json";


import categoriesData from "../data/categories.json";
import QuoteCard from "../components/QuoteCard";
import { useNavigation } from "@react-navigation/native";



type Category = {
  id: number;
  en: string;
  hi: string;
};



  const HomeScreen = () => {

  const { language } = useLanguage();   // ⭐ NEW
  const navigation = useNavigation<any>();


const categories = categoriesData as Category[];




  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];



  return (
    <View style={styles.container}>
  <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>
  ⭐ Quote of the Day
</Text>


        
<TouchableOpacity
  activeOpacity={0.9}
  onPress={() =>
navigation.navigate("QuoteDetail", {
  quote: randomQuote,
})

  }
>
<QuoteCard
  quote={randomQuote}
  showActions={false}
/>



</TouchableOpacity>




        {/* 🔹 Sections */}
        {renderSection("Short Stories")}
        {renderSection("Life Journey")}
        {renderSection("Quotes")}
      </ScrollView>

      {/* 🔹 Bottom Actions */}
      <View style={styles.bottomBar}>
        {actionBtn("create", "✍️ Create")}
        {actionBtn("movie", "🎬 Video")}
        {actionBtn("music-note", "🎵 Song")}
      </View>
    </View>
  );
};

export default HomeScreen;





/* ------------------ Components ------------------ */

const renderSection = (title: string) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[1, 2, 3].map((i) => (
        <TouchableOpacity
          key={i}
          style={styles.card}
          activeOpacity={0.7}
        >
          <Text style={styles.cardTitle}>Sample Title</Text>
          <Text numberOfLines={2}>
            Small preview text goes here...
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const actionBtn = (icon: string, label: string) => (
  <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);





/* ------------------ Styles ------------------ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },




  section: {
    marginTop: 10,
    paddingLeft: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  card: {
    width: 200,
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 16,
    marginRight: 14,
    elevation: 4,
  },
  cardTitle: {
    fontWeight: "bold",
    marginBottom: 6,
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    backgroundColor: "#fff",
    elevation: 10,
  },
  actionBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#1E3A8A",
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
  },
heading: {
  fontSize: 22,
  fontWeight: "800",
  marginLeft: 18,
  marginTop: 18,
  marginBottom: 10,
  color: "#1E3A8A",   // same brand blue
  letterSpacing: 0.5,
},






});
