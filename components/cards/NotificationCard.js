import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const NotificationCard = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={require("../../assets/drug.jpg")} style={styles.image} />
			</View>
			<View style={styles.info}>
				<View style={styles.details}>
					<Text style={styles.messageType}>Completed</Text>
					<Text style={styles.time}>23mins ago</Text>
				</View>
				<Text style={styles.message}>
					Lorem ipsum dolor sit amet consec tetur. Eget facilisis placerat orci
				</Text>
			</View>
		</View>
	);
};

export default NotificationCard;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 20,
		paddingHorizontal: 10,
		alignItems: "center",
		shadowColor: "#000",
		shadowOpacity: 0.2,
		paddingVertical: 15,
		marginHorizontal: 10,
		shadowOffset: { width: -2, height: 4 },
	},
	image: {
		height: 100,
		width: 100,
	},
	details: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 5,
	},
	messageType: {
		color: colors.primaryGreen,
		fontSize: 15,
	},
	info: {
		paddingHorizontal: 10,
	},
	message: {
		fontSize: 20,
	},
});
