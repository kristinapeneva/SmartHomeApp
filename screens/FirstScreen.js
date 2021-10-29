import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native'
import { auth } from '../firebase'
import { AntDesign } from '@expo/vector-icons';
import { useFonts, DancingScript_400Regular } from "@expo-google-fonts/dancing-script";
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';
import { LinearGradient } from 'expo-linear-gradient';
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
            
            {/* <ImageBackground source={require('../assets/circuit-board.svg')} style={{position: "absolute", width: "100%", height:"100%", top: 0, left: 0}} resizeMode="repeat" /> */}
            <LinearGradient colors={[ "#FAEEA6", "#F5DF4D"]} style={styles.topContainer}>
                <ImageBackground source={require('../assets/circuit-board.svg')} style={{position: "absolute", width: "100%", height:"70%", top: 0, left: 0}} resizeMode="cover" />
                <View >
                <Text style={styles.logo}>Cahaya</Text>
                <Image source={require("../assets/illustration.svg")} style={styles.illustration} width={300} height={300} resizeMode="cover"/>
                <Text style={styles.firstLine}>Off-Grid Energy</Text>
                <Text style={styles.secondLine}>Management</Text>
                </View>
            </LinearGradient>
            
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleGoToReg}
                    style={[styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}><AntDesign name="arrowright" size={30} /></Text>
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
        color: '#2a2a28',
        fontSize: 45,
        fontWeight: 500,
        fontFamily: 'DancingScript_400Regular',
        marginBottom: 10
    },
    illustration: {
        height: 300,
        width:300
    },

    buttonContainer: {
        paddingHorizontal: "10%",
        width: '100%',
        height: "15%",
        flex: 1,
        alignItems: "center"
        // marginTop: 40,
    },
    topContainer: {
        padding: '10%',
        width: '100%',
        height: '85%',
        gap: 10,
        borderColor: "rgba( 255, 255, 255, 0.4 )",
        borderRightWidth: 7,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomRightRadius: 150,
        // borderBottomLeftRadius: 30,
        marginTop: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 7,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,

        elevation: 6,
    },

    buttonOutline: {
        backgroundColor: '#2a2a28',
        // borderColor: "rgba( 255, 255, 255, 0.4 )",
        // borderRightWidth: 2,
        // borderBottomWidth: 2,
        width: 100,
        height:100,
        borderRadius: 50,
        // shadowColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -50,
        // shadowOffset: {
        //     width: 3,
        //     height: 7,
        // },
        // shadowOpacity: 0.3,
        // shadowRadius: 4.65,

        // elevation: 10,
    },
    buttonOutlineText: {
        color: '#fff',
        fontWeight: '900',
        fontFamily: "SourceSansPro_400Regular",
        letterSpacing: 0.1,
    },
    firstLine: {
        fontFamily: "SourceSansPro_400Regular",
        fontSize: 20,
        lineHeight: 50,
        color: '#1d1d1e',
        letterSpacing: 0.1,
        marginTop: 10,
    },
    secondLine: {
        fontFamily: "AbrilFatface_400Regular",
        fontSize: 50,
        lineHeight: 35,
        letterSpacing: 0.1,
    },
})