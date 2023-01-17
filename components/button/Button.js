import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const Button = ({ title }) => {
	return (
		<TouchableOpacity style={styles.button}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: colors.primaryGreen,
		borderColor: colors.borderGray,
		paddingHorizontal: 40,
		justifyContent: "center",
		height: 50,
		borderRadius: "50%",
	},
	title: {
		fontSize: 18,
		color: colors.white,
		fontWeight: "bold",
	},
});
