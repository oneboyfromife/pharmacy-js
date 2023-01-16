import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../shared/Header";
import SearchBar from "../shared/SearchBar";

const BookScreen = () => {
  return (
    <View>
      <View>
        <Header title="Book Services" />
      </View>
      <View>
        <SearchBar placeholder="Search" />
      </View>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
