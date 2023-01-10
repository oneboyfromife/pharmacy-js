import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HomeHeader = (props) => {
	return (
		<View>
			<View style={{ justifyContent: "space-between", height: 38 }}>
				<Ionicons name="menu" size={34} color="black" />
				<View style={{ maxHeight: 36 }}>
					<Text>{props.OpeningTime}</Text>
					<Text>{props.ClosingTime}</Text>
				</View>
				<View>
					<Image
						style={{ width: 36, height: 34 }}
						source={require("../assets/logo.png")}
					/>
				</View>
			</View>
		</View>
	);
};

export default HomeHeader;

const styles = StyleSheet.create({});
