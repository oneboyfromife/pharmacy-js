import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Category = (props) => {
  return (
    <TouchableOpacity style={{ marginRight: 5 }}>
      <View style={{ borderRadius: 10 }}>
        <Image source={require("../assets/category-1.png")} />
      </View>

      <Text style={{ fontSize: 15 }}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Category;
