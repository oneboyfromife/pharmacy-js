import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const drug = ({ price }) => {
	return (
		<TouchableOpacity style={styles.singleListCotainer}>
			<View style={styles.imageContainer}>
				<Image
					source={require("../../assets/Inhalant.png")}
					style={styles.image}
				/>
			</View>
			<View style={styles.drugDetails}>
				<Text style={styles.title}>Lorem ipsum dolor sit amet </Text>
				<Text style={styles.desc}>Lorem ipsum dolor sit amet consectetur.</Text>
				<Text style={styles.price}>{price}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default drug;

const styles = StyleSheet.create({
	price: { fontSize: 20 },
	title: {
		fontWeight: "400",
		fontSize: 24,
	},
	desc: {
		fontsize: 20,
		marginVertical: 5,
	},
	singleListCotainer: {
		flexDirection: "row",
		backgroundColor: colors.white,
		alignItems: "center",
		paddingHorizontal: 15,
		marginVertical: 10,
	},
	drugDetails: {
		paddingHorizontal: 20,
	},
	image: {
		height: 120,
		width: 100,
	},
});
