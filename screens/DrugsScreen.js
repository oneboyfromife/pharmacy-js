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
import Drug from "../components/drug/Drug";

const DrugsScreen = () => {
	return (
		<SafeAreaView>
			<View>
				<View style={styles.searchBar}>
					<SearchBar placeholder="Search" />
				</View>
				<ScrollView style={styles.drugList}>
					<Drug price="$200.60" />
					<Drug price="$20.16" />
					<Drug price="$30.15" />
					<Drug price="$150.60" />
					<Drug price="$30.60" />
					<Drug price="$90.20" />
					<Drug price="$70.60" />
					<Drug price="$200.60" />
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
