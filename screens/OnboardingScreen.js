import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";

const OnboardingScreen = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/onboarding-bg.png")}
				style={styles.bg}
			>
				{/* Logo */}
				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Image
						source={require("../assets/logo.png")}
						style={{
							marginTop: 70,
							marginBottom: 60,
						}}
					/>
				</View>

				<View
					style={{
						marginVertical: 10,
						marginBottom: 25,
					}}
				>
					<Image
						source={require("../assets/onboarding-svg.png")}
						style={styles.svg}
					/>
				</View>

				<Text
					style={{
						textAlign: "center",
						marginBottom: 50,
						fontSize: 16,
						padding: 5,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
					suscipit omnis provident magni? Voluptatem, reprehenderit!
				</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate("RegisterScreen")}
					style={{
						alignItems: "center",
						backgroundColor: "#1E8D48",
						borderRadius: 20,
						padding: 10,
					}}
				>
					<Text style={{ fontSize: 18, color: "white" }}>Get Started</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	bg: {
		flex: 1,
		resizeMode: "cover",
		paddingHorizontal: 30,
	},
	logo: {},
	svg: {},
	text: {},
});
