import React, { useMemo } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Share,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useFavorites } from "../context/FavoritesContext";

import { localImages } from "../data/localImages";
import { cloudImages } from "../data/cloudImages";

type Props = {
  quote: any;
  showActions?: boolean;
};

const QuoteCard = ({ quote, showActions = false }: Props) => {
  const navigation = useNavigation<any>();
  const { toggleFavorite, isFavorite } = useFavorites();

  /* 🔥 random image PER CARD */
  const image = useMemo(() => {
    const all = [...localImages, ...cloudImages];
    return all[Math.floor(Math.random() * all.length)];
  }, []);

  const liked = isFavorite(quote);

  const shareQuote = async () => {
    await Share.share({ message: quote.en });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("QuoteDetail", {
          quote,
          image,
        })
      }
      style={styles.wrapper}
    >
      {/* IMAGE + TEXT */}
      <View style={styles.imageBox}>
        <Image source={image} style={styles.image} />

        <View style={styles.overlay}>
          <Text style={styles.quoteMark}>❝</Text>
          <Text style={styles.quoteText}>{quote.en}</Text>
        </View>
      </View>

      {/* BOTTOM AREA */}
      {showActions && (
        <View style={styles.bottom}>
          {/* chips */}
          <View style={styles.chipRow}>
            {quote.categories?.map((c: string, i: number) => (
              <TouchableOpacity
                key={i}
                onPress={() =>
                  navigation.navigate("CategoryQuotes", { category: c })
                }
              >
                <Text style={styles.chip}>#{c}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.divider} />

          {/* ACTIONS */}
          <View style={styles.actions}>
            {/* LIKE */}
            <TouchableOpacity
              style={styles.actionItem}
              onPress={() => toggleFavorite(quote)}
            >
              <Text style={[styles.heart, liked && { color: "red" }]}>
                ♥
              </Text>
              <Text style={styles.actionText}>Like</Text>
            </TouchableOpacity>

            {/* DOWNLOAD */}
            <View style={styles.actionItem}>
              <Text style={styles.icon}>⬇</Text>
              <Text style={styles.actionText}>Download</Text>
            </View>

            {/* SHARE */}
            <TouchableOpacity
              style={styles.actionItem}
              onPress={shareQuote}
            >
              <Text style={styles.icon}>📤</Text>
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default QuoteCard;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 18,
    marginTop: 18,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "#0B1A34",
    borderWidth: 1.5,
    borderColor: "#2563EB55",
  },

  imageBox: {
    height: 240,
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    padding: 22,
  },

  quoteMark: {
    fontSize: 40,
    color: "#60A5FA",
    marginBottom: 6,
  },

  quoteText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  bottom: {
    padding: 16,
  },

  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },

  chip: {
    backgroundColor: "#32528f",
    color: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 10,
    marginBottom: 10,
    fontSize: 13,
  },

  divider: {
    height: 1,
    backgroundColor: "#1E293B",
    marginVertical: 12,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  actionItem: {
    alignItems: "center",
  },

  heart: {
    fontSize: 22,
    color: "white",
    marginBottom: 4,
  },

  icon: {
    fontSize: 20,
    color: "white",
    marginBottom: 4,
  },

  actionText: {
    color: "white",
    fontSize: 13,
  },
});
