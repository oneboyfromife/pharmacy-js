import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="chevron-back" size={20} color="#1E8D48" />
        <View>
          <Text style={{ color: "#1E8D48", fontSize: 18 }}>Back</Text>
        </View>
      </TouchableOpacity>
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
