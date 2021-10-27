import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import { AntDesign } from '@expo/vector-icons';
import { useFonts, DancingScript_400Regular } from "@expo-google-fonts/dancing-script";
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';
 import { AppLoading } from 'expo';

const FirstScreen = () => {
    let [fontsLoaded] = useFonts({
        DancingScript_400Regular,
        AbrilFatface_400Regular,
        SourceSansPro_400Regular
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
            <View style={styles.topContainer}>
                <Text style={styles.logo}>SunSockets</Text>
                <Image source={require("../assets/illustration.svg")} style={styles.illustration} />
                <Text style={styles.firstLine}>Charge. Use.</Text>
                <Text style={styles.secondLine}>Check your savings.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleGoToReg}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Get Started <AntDesign name="arrowright" size={16} /></Text>
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
        justifyContent: 'space-around',
        // alignItems: 'center',
    },
    logo: {
        color: '#F5DF4D',
        fontSize: 24,
        fontWeight: 700,
        fontFamily: 'DancingScript_400Regular'
    },
    illustration: {
        height: 300,
        width:300
    },

    buttonContainer: {
        paddingHorizontal: "10%",
        width: '100%',
        height: "25%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 40,
    },
    topContainer: {
        padding: '10%',
        width: '100%',
        height: '80%',
        backgroundColor: '#F5DF4D',
        justifyContent: 'center',
        marginTop: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 6,
    },

    buttonOutline: {
        backgroundColor: '#F5DF4D',
        marginTop: 5,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 6,
    },
    buttonOutlineText: {
        color: '#1d1d1e',
        fontWeight: '900',
        fontSize: 16,
        fontFamily: "SourceSansPro_400Regular",
        letterSpacing: 0.1,
    },
    firstLine: {
        fontFamily: "SourceSansPro_400Regular",
        fontSize: 20,
        lineHeight: 50,
        color: '#1d1d1e',
        letterSpacing: 0.1,
    },
    secondLine: {
        fontFamily: "AbrilFatface_400Regular",
        fontSize: 40,
        lineHeight: 35,
        letterSpacing: 0.1,
    },
})