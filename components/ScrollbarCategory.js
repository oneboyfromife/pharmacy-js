import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Category from "./SingleCategory";
import { colors } from "../constants/colors";

const ScrollbarCategory = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.scrollSectionTitle}>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Category name="Allergy" />
        <Category name="Intergration" />
        <Category name="Skin care" />
        <Category name="Pedicure" />
      </ScrollView>
    </View>
  );
};

export default ScrollbarCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    paddingVertical: 10,
    shadowOffset: { width: -2, height: 4 },
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  scrollSectionTitle: {
    color: colors.primaryGreen,
    marginBottom: 15,
    marginTop: 5,
    fontSize: 20,
    fontWeight: "semibold",
  },
});
