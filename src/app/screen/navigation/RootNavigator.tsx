import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import your screens
import WelcomeScreen from "../WelcomeScreen";
import HomeScreen from "../HomeScreen";
import AboutEkeneScreen from "../AboutEkeneScreen";
import BookScreen from "../BookScreen";
import MentoringScreen from "../MentoringScreen";
import CoursesScreen from "../CoursesScreen";
import PodcastScreen from "../PodcastScreen";
import ContactScreen from "../ContactScreen";
import SettingsScreen from "../SettingsScreen";
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
                <Stack.Screen name="bookScreen" component={BookScreen} />
                <Stack.Screen name="mentoringScreen" component={MentoringScreen} />
                <Stack.Screen name="podcastScreen" component={PodcastScreen} />
                <Stack.Screen name="coursesScreen" component={CoursesScreen} />
                <Stack.Screen name="settingsScreen" component={SettingsScreen} />
                <Stack.Screen name="contactScreen" component={ContactScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;