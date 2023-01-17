import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../shared/Header";
import SearchBar from "../shared/SearchBar";
import ServicesCategory from "../components/category/ServicesCategory";
import { colors } from "../constants/colors";

const BookScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Header title="Book Services" />
        </View>
        <View>
          <SearchBar placeholder="Search" />
        </View>
      </View>

      <ServicesCategory title="Services" />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 20,
              color: colors.primaryGreen,
              fontWeight: "500",
            }}
          >
            Daily updates
          </Text>
          <Text
            style={{
              marginBottom: 15,
              fontSize: 15,
              color: colors.gray,
            }}
          >
            Symptoms of Covid 19 you need to watch out for
          </Text>
          <Text style={{ fontWeight: "bold" }}>01-11-2022</Text>
        </View>
        <View>
          <Image source={require("../assets/covid-19.png")} />
        </View>
      </View>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
