import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ArticleCard = () => {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", padding: 5, marginRight: 5 }}
    >
      <Image source={require("../assets/article.png")} />
      <Text>
        Lorem ipsum dolor sit amet consectetur. Eget facilisis placerat orci
        egestas lacus placerat imperdiet dictum viverra. Sollicitudin massa.
      </Text>
    </TouchableOpacity>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({});
