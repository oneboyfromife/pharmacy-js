import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";

const TabBar = () => {
  return (
    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
      <TouchableOpacity>
        <Ionicons name="home" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="cart" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="notifications" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <AntDesign name="profile" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
