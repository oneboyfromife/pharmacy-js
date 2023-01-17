import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

const PharmacyRatingCard = (rating) => {
  return (
    <TouchableOpacity style={{ flexDirection: "row" }}>
      <View>
        <Image source={require("../assets/covid-19.png")} />
      </View>
      <View style={{ flexDirection: "column", paddingLeft: 5 }}>
        <Text style={{ marginBottom: 10 }}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
        <Text style={{ color: colors.gray, fontSize: 15 }}>Roma City</Text>
        <AirbnbRating count={{ rating }} defaultRating={5} size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default PharmacyRatingCard;

const styles = StyleSheet.create({});
