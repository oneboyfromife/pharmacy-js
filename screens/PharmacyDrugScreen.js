import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../shared/Header";
import SearchBar from "../shared/SearchBar";
import TabBar from "../components/TabBar";
import Category from "../components/category/SingleCategory";
import { colors } from "../constants/colors";
import ScrollbarCategory from "../components/category/ScrollbarCategory";

const PharmacyDrugScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.screenContainer}>
				<View style={{ marginHorizontal: 15 }}>
					<SearchBar placeholder="Search" />
				</View>

				{/* To implement the gray spacing under the search component in the UI */}

				{/* Category */}
				<View style={styles.category}>
					<ScrollbarCategory title="Category" />
					<ScrollbarCategory title="You may also like" />
				</View>

				{/* <View style={{ backgroundColor: "white", paddingVertical: 20 }}>
					<Text style={{ color: "#1E8D48", fontSize: 20 }}>
						You may also like
					</Text>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<Category name="Inhalants" />
						<Category name="Nose" />
						<Category name="Eyes" />
						<Category name="Others" />
					</ScrollView>
				</View> */}
			</View>

			{/* <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
        <TabBar />
      </View> */}
		</SafeAreaView>
	);
};

export default PharmacyDrugScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	screenContainer: {
		flex: 1,
		backgroundColor: colors.white,
	},
	category: {
		flexDirection: "column",
		marginTop: 10,
	},
});
