import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
// import Header from "../components/shared/Header";
import Button from "../components/button/Button";
import OutlineButton from "../components/button/OutlineButton";

const TherapyScreen = () => {
	return (
		<View style={styles.container}>
			{/* <Header title="Therapy" /> */}

			{/* Body */}
			<View style={{ paddingVertical: 10, alignItems: "center" }}>
				<View style={{ marginVertical: 20 }}>
					<ImageBackground
						source={require("../assets/therapy-video.png")}
						style={{ alignItems: "center", justifyContent: "center" }}
					>
						<Image source={require("../assets/Vector.png")} />
					</ImageBackground>
				</View>

				<View>
					<View style={{ marginBottom: 10 }}>
						<Button title="Accept Therapy" />
					</View>
					<View>
						<OutlineButton title="Reject Therapy" />
					</View>
				</View>
			</View>
		</View>
	);
};

export default TherapyScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
});
