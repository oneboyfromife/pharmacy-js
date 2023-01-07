import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = () => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RegisterScreen")}
      style={{
        alignItems: "center",
        backgroundColor: "#1E8D48",
        borderRadius: 20,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 18, color: "white" }}>Get Started</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
