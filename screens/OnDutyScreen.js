import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OnDutyScreen = () => {
  return (
    <View>
      {/* Top */}
      <View>
        <View>
          <Header title="On duty" />
        </View>
        <View>
          <SearchBar placeholder="Search" />
        </View>
      </View>
    </View>
  );
};

export default OnDutyScreen;

const styles = StyleSheet.create({});
