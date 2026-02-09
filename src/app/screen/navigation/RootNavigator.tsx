import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import your screens
import WelcomeScreen from "../WelcomeScreen";
import HomeScreen from "../HomeScreen";
import AboutEkeneScreen from "../AboutEkeneScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="welcome"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="welcome" component={WelcomeScreen} />
                <Stack.Screen name="homeScreen" component={HomeScreen} />
                <Stack.Screen name="aboutEkeneScreen" component={AboutEkeneScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;