import {
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TextInput,
	View,
} from "react-native";
import React from "react";

const RegisterScreen = () => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				flexDirection: "column",
			}}
		>
			{/* Background */}
			<ImageBackground
				source={require("../assets/onboarding-bg.png")}
				style={{
					flex: 1,
					resizeMode: "cover",
					paddingHorizontal: 30,
				}}
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
							marginTop: 60,
							marginBottom: 20,
						}}
					/>
				</View>

				<View
					style={{
						marginBottom: 50,
					}}
				>
					<Text
						style={{
							textAlign: "center",
							fontSize: 30,
							fontWeight: "700",
						}}
					>
						Create Account
					</Text>
				</View>

				<View
					style={{
						backgroundColor: "white",
						borderColor: "1E8D48",
						borderWidth: 1,
						borderRadius: 7,
						marginBottom: 30,
					}}
				>
					<TextInput
						style={{
							paddingHorizontal: 15,
							paddingVertical: 7,
							fontSize: 18,
						}}
						underlineColorAndroid="transparent"
						placeholder="Surname"
						placeholderTextColor="#1E8D48"
						autoCapitalize="none"
					/>
				</View>

				<View
					style={{
						backgroundColor: "white",
						borderColor: "1E8D48",
						borderWidth: 1,
						borderRadius: 7,
						marginBottom: 30,
					}}
				>
					<TextInput
						style={{
							paddingHorizontal: 15,
							paddingVertical: 7,
							fontSize: 18,
						}}
						underlineColorAndroid="transparent"
						placeholder="First Name"
						placeholderTextColor="#1E8D48"
						autoCapitalize="none"
					/>
				</View>

				<View
					style={{
						backgroundColor: "white",
						borderColor: "1E8D48",
						borderWidth: 1,
						borderRadius: 7,
						marginBottom: 30,
					}}
				>
					<TextInput
						style={{
							paddingHorizontal: 15,
							paddingVertical: 7,
							fontSize: 18,
						}}
						underlineColorAndroid="transparent"
						placeholder="Email or Phone number"
						placeholderTextColor="#1E8D48"
						autoCapitalize="none"
					/>
				</View>

				<View
					style={{
						backgroundColor: "white",
						borderColor: "1E8D48",
						borderWidth: 1,
						borderRadius: 7,
						marginBottom: 30,
					}}
				>
					<TextInput
						style={{
							paddingHorizontal: 15,
							paddingVertical: 7,
							fontSize: 18,
						}}
						underlineColorAndroid="transparent"
						placeholder="Fisical code"
						placeholderTextColor="#1E8D48"
						autoCapitalize="none"
					/>
				</View>

				<TouchableOpacity
					onPress={() => navigation.navigate("LoginScreen")}
					style={{
						alignItems: "center",
						backgroundColor: "#1E8D48",
						borderRadius: 20,
						padding: 10,
						marginTop: 30,
					}}
				>
					<Text style={{ fontSize: 20, color: "white" }}>Submit</Text>
				</TouchableOpacity>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({});
