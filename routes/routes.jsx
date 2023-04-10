import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import Details from "../pages/Details";
import Special from "../pages/Special";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
            options={{ headerShown: false,
                tabBarIcon: () => {
                    return <Image source={require('../images/Home.png')} style={{width: 25, height: 25, paddingTop: 10}}/>
                }
            }}
            />
            <Tab.Screen name="Special" component={Special} 
            options={{ headerShown: false,
                tabBarIcon: () => {
                    return <Image source={require('../images/Special.png')} style={{width: 25, height: 25, paddingTop: 10}}/>
                }
            }}
            />
        </Tab.Navigator>
);
}

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name="Detalhes" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}