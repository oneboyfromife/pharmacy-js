import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TopArticleCard = () => {
  return (
    <TouchableOpacity style={{ borderRadius: 5 }}>
      <Image source={require("../assets/TopArticle.png")} />
      <Text style={{ marginTop: 7 }}>
        Lorem ipsum dolor sit amet consect etur. Est lobortis aliquam donec
        nulla.{" "}
      </Text>
    </TouchableOpacity>
  );
};

export default TopArticleCard;

const styles = StyleSheet.create({});
