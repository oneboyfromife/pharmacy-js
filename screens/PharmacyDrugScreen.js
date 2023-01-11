import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../shared/Header";
import SearchBar from "../shared/SearchBar";
import TabBar from "../components/TabBar";
import Category from "../components/Category";

const PharmacyDrugScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "white", marginVertical: 30 }}>
        <View style={{ marginHorizontal: 10 }}>
          <Header title="Pharmacy Drugs" />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <SearchBar placeholder="Search" />
        </View>
      </View>

      {/* Category */}
      <View style={{ backgroundColor: "white", paddingVertical: 20 }}>
        <Text style={{ color: "#1E8D48", fontSize: 20 }}>Category</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category name="Allergy" />
          <Category name="Intergration" />
          <Category name="Skin care" />
          <Category name="Pedicure" />
        </ScrollView>
      </View>

      <View style={{ backgroundColor: "white", paddingVertical: 20 }}>
        <Text style={{ color: "#1E8D48", fontSize: 20 }}>
          You may also like
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category name="Inhalants" />
          <Category name="Nose" />
          <Category name="Eyes" />
          <Category name="Others" />
        </ScrollView>
      </View>

      {/* <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
        <TabBar />
      </View> */}
    </SafeAreaView>
  );
};

export default PharmacyDrugScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#D1D1D1",
    paddingVertical: 20,
  },
});
