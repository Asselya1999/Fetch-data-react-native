import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackNavigator, ContactStackNavigator } from "./App";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                
                 />
            <Tab.Screen 
                name="Contact" 
                component={ContactStackNavigator}
               
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;