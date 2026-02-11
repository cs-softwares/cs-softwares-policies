import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation<any>();

  return (
    <>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        {/* 🔹 LEFT MENU */}
        <TouchableOpacity
          style={styles.menuBtn}
          activeOpacity={0.7}
          onPress={() => navigation.openDrawer()}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

        {/* 🔹 TITLE */}
        <Text style={styles.title}>Ambedkar Life</Text>

        {/* 🔹 RIGHT ICONS */}
        <View style={styles.right}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.icon}>🔍</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.icon}>＋</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Header;



/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    height: 70,                 // 🔥 bigger = premium
    backgroundColor: "#1E3A8A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,

    elevation: 10,              // android shadow
    shadowColor: "#000",        // ios shadow
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  /* title */
  title: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  /* menu button */
  menuBtn: {
    padding: 10,               // 🔥 bigger touch area
  },

  menuIcon: {
    fontSize: 24,
    color: "#fff",
  },

  /* right section */
  right: {
    flexDirection: "row",
  },

  iconBtn: {
    padding: 10,
    marginLeft: 8,
  },

  icon: {
    fontSize: 20,
    color: "#fff",
  },
});
