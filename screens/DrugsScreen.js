import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Image,
	ScrollView,
} from "react-native";
import React from "react";
import SearchBar from "../shared/SearchBar";
import { colors } from "../constants/colors";
import Drug from "../components/drug/drug";

const DrugsScreen = () => {
	return (
		<SafeAreaView>
			<View>
				<View style={styles.searchBar}>
					<SearchBar placeholder="Search" />
				</View>
				<ScrollView style={styles.drugList}>
					<Drug />
					<Drug />
					<Drug />
					<Drug />
					<Drug />
					<Drug />
					<Drug />
					<Drug />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default DrugsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	drugList: {
		backgroundColor: "#E3E3E3",
	},
	price: { fontSize: 20 },
	title: {
		fontWeight: "bold",
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
	},
	drugDetails: {
		paddingHorizontal: 20,
	},
	image: {
		height: 120,
		width: 100,
	},
	searchBar: {
		marginHorizontal: 15,
		marginBottom: 15,
		backgroundColor: colors.white,
	},
});
