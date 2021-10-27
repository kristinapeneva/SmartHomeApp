import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

import Manager from './Manager';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{showIcon: true,
        tabStyle: {width: "100%", bottom: 0, elevation: 0, backgroundColor: "#939597", height: 90, shadowColor: "#000", shadowOffset: {width:0, height:3}, shadowOpacity: 0.3, shadowRadius: 4.65, color: "white"}}} >
            <Tab.Screen name="Manager" options={{tabBarIcon: ({ focused, color, size }) => { return <Ionicons name="home" size={24} color="black" />}}} component={Manager} />
            <Tab.Screen name="Settings" options={{header: () => null}} component={Settings} />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    tabNavigation: {
        position: "absolute",
        width: 300,
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 6,
        backgroundColor: "yellow",
        borderRadius: 15,
        height: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    }
})