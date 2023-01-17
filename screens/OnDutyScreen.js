import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PharmacyRatingCard from "../components/cards/PharmacyRatingCard";

const OnDutyScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top */}
      <View>
        <View>
          <View>
            <Header title="On duty" />
          </View>
          <View>
            <SearchBar placeholder="Search" />
          </View>
        </View>

        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.scrollSectionTitle}>Pharmacy</Text>
            <Text style={styles.scrollSectionSubTitle}>See All</Text>
          </View>

          <ScrollView>
            <PharmacyRatingCard rating="3" />
            <PharmacyRatingCard rating="4" />
            <PharmacyRatingCard rating="2" />
            <PharmacyRatingCard rating="1" />
            <PharmacyRatingCard rating="4" />
            <PharmacyRatingCard rating="5" />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default OnDutyScreen;

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
