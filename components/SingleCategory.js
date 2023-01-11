import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const Category = ({ name }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={require("../assets/category-1.png")}
					style={styles.image}
				/>
			</View>

			<Text style={styles.title}>{name}</Text>
		</TouchableOpacity>
	);
};

export default Category;

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 15,
	},
	imageContainer: {
		borderRadius: 10,
	},
	title: {
		fontSize: 18,
		marginTop: 10,
	},
	image: {
		height: 220,
		width: 150,
		borderRadius: 10,
	},
});
