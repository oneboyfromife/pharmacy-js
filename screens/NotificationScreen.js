import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import NotificationCard from "../components/cards/NotificationCard";

const NotificationScreen = () => {
	return (
		<View>
			<ScrollView>
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
				<NotificationCard />
			</ScrollView>
		</View>
	);
};

export default NotificationScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
	},
});
