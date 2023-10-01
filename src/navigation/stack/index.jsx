import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Landing } from "@screens";

const { Navigator, Screen } = createNativeStackNavigator()

export const AppStack = () => {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Screen name="Landing" component={Landing} />
                <Screen name="Home" component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}