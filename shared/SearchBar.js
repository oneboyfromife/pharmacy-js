import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const SearchBar = (props) => {
	const [searchText, setSearchText] = useState("");

	return (
		<View style={styles.container}>
			<Ionicons
				name="ios-search"
				size={20}
				color="gray"
				style={styles.searchIcon}
			/>
			<TextInput
				placeholder={props.placeholder}
				style={styles.input}
				value={searchText}
				onChangeText={(text) => setSearchText(text)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		borderWidth: 1,
		borderColor: "black",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: "50%",
		backgroundColor: colors.white,
		marginTop: 15,
	},
	searchIcon: {
		width: 20,
		height: 20,
		marginRight: 10,
	},
	input: {
		flex: 1,
		fontSize: 20,
	},
});

export default SearchBar;
