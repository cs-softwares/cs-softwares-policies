import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Item = ({ label, onPress }: any) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const CustomDrawer = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BhimVerse</Text>

      <Item label="✨ Your Creations" onPress={() => {}} />

      <Item
        label="❤️ Favorites"
        onPress={() => navigation.navigate("Favorites")}
      />

      <Item label="🔔 Notifications" onPress={() => {}} />

      <Item
        label="🌐 Language"
        onPress={() => navigation.navigate("Language")}
      />

      <Item label="ℹ️ About" onPress={() => {}} />
    </View>
  );
};

export default CustomDrawer;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1A34",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 30,
  },

  item: {
    paddingVertical: 18,
  },

  text: {
    color: "#fff",
    fontSize: 16,
  },
});
