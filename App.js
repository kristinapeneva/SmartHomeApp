import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import FirstScreen from './screens/FirstScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="First" options={{header: () => null}} component={FirstScreen} />
        <Stack.Screen name="Login" options={{header: () => null}} component={LoginScreen} />
        <Stack.Screen name="Registration" options={{header: () => null}} component={RegistrationScreen} />
        <Stack.Screen name="Home" options={{header: () => null}} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
