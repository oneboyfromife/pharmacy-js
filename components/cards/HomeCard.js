import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeCard = (props) => {
  return (
    <View>
      <View>
        <Image source={props.image} />
      </View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({});
