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

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function App() {
	return (
		// <DrugsScreen />
		<NavigationContainer>
			<BottomTab.Navigator>
				<BottomTab.Screen
					name="Home"
					component={PharmacyDrugScreen}
					options={{ title: "Pharmacy Drugs" }}
				/>
				<BottomTab.Screen name="Cart" component={CartScreen} />
				<BottomTab.Screen name="Services" component={ServicesScreen} />
				<BottomTab.Screen name="Notification" component={NotificationScreen} />
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}

export default App;
