import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DoctorScreen = () => {
  return (
    <View>
      <View>
        <View>
          <Header title="Doctors" />
        </View>
        <View>
          <SearchBar placeholder="Search" />
        </View>
      </View>
    </View>
  );
};

export default DoctorScreen;

const styles = StyleSheet.create({});
