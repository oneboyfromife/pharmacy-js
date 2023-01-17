import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const OutlineButton = ({ title }) => {
	return (
		<TouchableOpacity style={styles.button}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

export default OutlineButton;

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		borderColor: colors.primaryGreen,
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
