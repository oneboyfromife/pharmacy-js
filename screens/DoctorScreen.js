import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RatingCard from "../components/cards/RatingCard";

const DoctorScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header title="Doctors" />
      </View>
      <View>
        <SearchBar placeholder="Search" />
      </View>

      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.scrollSectionTitle}>Doctors nearby</Text>
        </View>
        <View>
          <Text style={styles.scrollSectionSubTitle}>See All</Text>
        </View>

        {/* Card */}
        <RatingCard rating="3" />
        <RatingCard rating="4" />
        <RatingCard rating="2" />
        <RatingCard rating="1" />
      </View>
    </View>
  );
};

export default DoctorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
