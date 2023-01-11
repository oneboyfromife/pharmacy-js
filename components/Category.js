import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Category = (props) => {
  return (
    <TouchableOpacity>
      <View style={{ borderRadius: 10 }}>
        <Image source={require(props.image)} />
      </View>

      <Text style={{ fontSize: 15 }}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Category;
