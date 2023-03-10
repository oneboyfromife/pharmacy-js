import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import TabBar from "../components/TabBar";
import HomeHeader from "../components/HomeHeader";
import HomeCard from "../components/cards/HomeCard";

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			{/* <HomeHeader
				OpeningTime="Opening Time: 10:00 AM"
				ClosingTime="Closing Time: 2:00 PM"
			/> */}
			<View style={{ marginTop: 5 }}>
				<ImageBackground
					source={require("../assets/HomeBanner.png")}
					style={{ width: 356, height: 93, resizeMode: "cover" }}
				/>
				<TouchableOpacity style={{ backgroundColor: "#000000" }}>
					<Text style={{ fontSize: 10, color: "white" }}>Open</Text>
				</TouchableOpacity>
			</View>

			<View style={{}}>
				<View>
					<ImageBackground source={require("../assets")}>
						<Text>Pharmacy Drugs</Text>
					</ImageBackground>
				</View>
			</View>

			<TouchableOpacity></TouchableOpacity>

			<TabBar />
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
	},
});
