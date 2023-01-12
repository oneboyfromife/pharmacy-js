import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SummarySingleList = ({ title, price }) => {
	return (
		<View style={styles.list}>
			<Text style={title === "Total" ? styles.totalList : styles.title}>
				{title}
			</Text>
			<Text style={title === "Total" ? styles.totalPrice : styles.price}>
				{price}
			</Text>
		</View>
	);
};

export default SummarySingleList;

const styles = StyleSheet.create({
	list: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10,
	},
	title: {
		fontSize: 18,
	},
	price: {
		fontSize: 18,
		fontWeight: "500",
	},
	totalList: {
		fontWeight: "bold",
		fontSize: 20,
	},
	totalPrice: {
		fontSize: 22,
		fontWeight: "bold",
	},
});
