import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Category from "./SingleCategory";
import { colors } from "../../constants/colors";

const ServicesCategory = ({ title }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.scrollSectionTitle}>{title}</Text>
        </View>
        <View>
          <Text style={styles.scrollSectionSubTitle}>See All</Text>
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Category name="Covid 19" />
        <Category name="Dentist" />
        <Category name="Kidney" />
      </ScrollView>
    </View>
  );
};

export default ServicesCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
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
  scrollSectionSubTitle: {
    color: colors.gray,
    marginBottom: 15,
    marginTop: 5,
    fontSize: 18,
    fontWeight: "semibold",
  },
});
