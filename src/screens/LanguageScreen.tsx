import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useLanguage } from "../context/LanguageContext";

const LanguageScreen = ({ navigation }: any) => {
  const { setLanguage } = useLanguage();

  const selectLanguage = (lang: "hi" | "en") => {
    setLanguage(lang);
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Language</Text>
      <Text style={styles.subtitle}>अपनी भाषा चुनें</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => selectLanguage("hi")}
      >
        <Text style={styles.buttonText}>हिंदी</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => selectLanguage("en")}
      >
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  subtitle: {
  fontSize: 20,
  marginBottom: 30,
  color: "#555",
},


  button: {
    width: "80%",
    backgroundColor: "#1E3A8A",
    padding: 16,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
