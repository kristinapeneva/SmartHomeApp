import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import {
    useFonts,
    DancingScript_400Regular
  } from "@expo-google-fonts/Dancing-script";
 import { AppLoading } from 'expo';

const FirstScreen = () => {
    let [fontsLoaded] = useFonts({
        DancingScript_400Regular,
    });
    const navigation = useNavigation()
    const handleGoToReg = () => {
            navigation.replace("Registration")
      }

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <Text style={styles.logo}>SunCharge</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleGoToReg}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        color: '#efd604',
        fontSize: 24,
        fontWeight: 700,
        fontFamily: 'DancingScript_400Regular'
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: 'blue',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'blue',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: 'blue',
        fontWeight: '700',
        fontSize: 16,
    }
})