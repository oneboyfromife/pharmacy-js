import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TabBar = () => {
  return (
    <View style={{ justifyContent: "space-between" }}>
      <TouchableOpacity>
        <Ionicons name="home" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="cart" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="notification" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="profile" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
