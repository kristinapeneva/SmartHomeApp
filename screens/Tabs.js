import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react'

import Manager from './Manager';
import Settings from './Settings';
import Insights from './Insights';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{showLabel: false, showIcon: true,
        tabStyle: {width: "100%", bottom: 0, elevation: 0, backgroundColor: "#939597", shadowColor: "#000", shadowOffset: {width:0, height:3}, shadowOpacity: 0.3, shadowRadius: 4.65, color: "white"}}} >
            <Tab.Screen name="Insights" options={{header: () => null, tabBarIcon: ({ focused, color, size }) => { return <MaterialIcons name="insights" size={24} color={focused ? "#F5DF4D" : "#2a2a28"} />}}} component={Insights} />
            <Tab.Screen name="Manager" options={{header: () => null, tabBarIcon: ({ focused, color, size }) => { return <Ionicons name="home" size={24} color={focused ? "#F5DF4D" : "#2a2a28"} />}}} component={Manager} />
            <Tab.Screen name="Settings" options={{header: () => null, tabBarIcon: ({ focused, color, size }) => { return <Ionicons name="settings" size={24} color={focused ? "#F5DF4D" : "#2a2a28"} />}}} component={Settings} />
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