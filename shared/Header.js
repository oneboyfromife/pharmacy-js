import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Header = (props) => {
  return (
    <View>
      <View>
        <Ionicons name="chevron-back" size={16} color="#1E8D48" />
        <Text>Back</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, color: "#1E8D48" }}>{props.title}</Text>
      </View>
      <View>
        <Image
          style={{ width: 36, height: 34 }}
          source={require("../assets/logo.png")}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
