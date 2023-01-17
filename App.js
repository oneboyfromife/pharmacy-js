// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PharmacyDrugScreen from "./screens/PharmacyDrugScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "./screens/CartScreen";
import ServicesScreen from "./screens/ServicesScreen";
import NotificationScreen from "./screens/NotificationScreen";
import DrugsScreen from "./screens/DrugsScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "./constants/colors";
import ProductScreen from "./screens/ProductScreen";
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function App() {
	return (
		// <ProductScreen />
		<NavigationContainer>
			<BottomTab.Navigator>
				<BottomTab.Screen
					name="Home"
					component={PharmacyDrugScreen}
					options={{
						title: "Pharmacy Drugs",
						tabBarLabel: "Home",
						tabBarIcon: () => (
							<Ionicons name="home" color={colors.primaryGreen} size={20} />
						),
					}}
				/>
				<BottomTab.Screen
					name="Cart"
					component={CartScreen}
					options={{
						title: "Cart",
						tabBarLabel: "Cart",
						tabBarIcon: () => (
							<Ionicons name="cart" color={colors.primaryGreen} size={20} />
						),
					}}
				/>
				<BottomTab.Screen
					name="Services"
					component={ServicesScreen}
					options={{
						title: "Services",
						tabBarLabel: "Services",
						tabBarIcon: () => (
							<MaterialIcons
								name="miscellaneous-services"
								size={20}
								color={colors.primaryGreen}
							/>
						),
					}}
				/>
				<BottomTab.Screen
					name="Notification"
					component={NotificationScreen}
					options={{
						title: "Notification",
						tabBarLabel: "Notification",
						tabBarIcon: () => (
							<Ionicons
								name="notifications"
								color={colors.primaryGreen}
								size={20}
							/>
						),
						tabBarBadge: 1,
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}

export default App;
