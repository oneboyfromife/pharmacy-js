import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import TabBar from "../components/TabBar";
import HomeHeader from "../components/HomeHeader";
import HomeCard from "../components/HomeCard";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <HomeHeader
        OpeningTime="Opening Time: 10:00 AM"
        ClosingTime="Closing Time: 2:00 PM"
      />
      <View>
        <ImageBackground
          source={require("C:/Users/Owojori Akintunde/Documents/MOBILE/pharmacy-js/assets/HomeBanner.png")}
          style={{ width: 356, height: 93, resizeMode: "" }}
        />
      </View>
      <HomeCard />
      <TabBar />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
