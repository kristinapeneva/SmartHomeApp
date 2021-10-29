import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../firebase'
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import { useFonts, DancingScript_400Regular } from "@expo-google-fonts/dancing-script";
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';
 import { AppLoading } from 'expo';



const RegistrationScreen = () => {

    let [fontsLoaded] = useFonts({
        AbrilFatface_400Regular,
        SourceSansPro_400Regular
    });
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] =  useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with: ', user.email)
        })
        .catch(error => alert(error.message))
    }

    const handleGoToLogin = () => {
        navigation.replace("Login")
  }


    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <LinearGradient colors={[ "#FAEEA6", "#F5DF4D"]} style={styles.pageTitleContainer}>
            <ImageBackground source={require('../assets/circuit-board.svg')} style={{position: "absolute", width: "100%", height:"70%", top: 0, left: 0}} resizeMode="cover" />    
                <Text style={styles.textTitle}>Sign Up</Text>
            </LinearGradient>
            <View style={styles.pageBottomContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.dataContainer}>
                    <Ionicons name="person" style={styles.iconData} />
                    <TextInput 
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    value= { email }
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    />
                </View>
                <View style={styles.dataContainer}>
                    <Entypo name="lock" style={styles.iconData} />
                    <TextInput 
                    placeholder="Password"
                    value= { password }
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                    />
                </View>
                <View style={styles.dataContainer}>
                    <Entypo name="lock-open" style={styles.iconData} />
                    <TextInput 
                    placeholder="Password Confirm"
                    value= { confirmPassword }
                    onChangeText={text => setConfirmPassword(text)}
                    style={styles.input}
                    secureTextEntry
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={styles.buttonOutline}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
                <View style={styles.linkContainer}>
                    <Text style={styles.link}>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={handleGoToLogin}
                        style={styles.buttonLink}
                    >
                        <Text style={styles.buttonLinkText}>Login here.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    pageTitleContainer: {
        width: "100%",
        height: "25%",
        padding: "10%",
        justifyContent: "center",
        borderColor: "rgba( 255, 255, 255, 0.4 )",
        borderRightWidth: 7,

        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomRightRadius: 50,
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
    pageBottomContainer: {
        height: "100%",
        width:"100%",
        justifyContent: "space-between",
        paddingBottom: 30
    },
    label: {
        fontFamily: "SourceSansPro_400Regular",
        fontSize: 20,
        lineHeight: 50,
        color: '#1d1d1e',
        letterSpacing: 0.1,
        lineHeight: 20
    },
    dataContainer: {
        flexDirection: "row",
        alignItems: "bottom",
        borderColor: "#939597",
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "solid",
        marginBottom: 20
    },
    iconData: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 22,
        backgroundColor: "transperant",
        color: "#939597",
    },

    textTitle: {
        fontFamily: "AbrilFatface_400Regular",
        fontSize: 40,
        lineHeight: 35,
        letterSpacing: 0.1,
    },
    inputContainer: {
        width: '100%',
        padding: "10%",
    },
    input: {
        fontSize: 20,
        backgroundColor: 'transperant',
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        outline: "none",
        fontFamily: "SourceSansPro_400Regular",
    },
    buttonContainer: {
        width: '100%',
        flex:1,
        alignItems: 'center',
        paddingBottom: 30
    },

    buttonContainer: {
        paddingHorizontal: "10%",
        width: '100%',
        // height: "10%",
        flex: 1,
        justifyContent: 'center',
        gap: 25,
        paddingBottom: 30
    },

    link: {
        fontFamily: "SourceSansPro_400Regular",
        fontSize: 14
    },
    linkContainer: {
        flexDirection: "row",
        gap: 10
    },
    buttonLinkText: {
        fontWeight: 900,
        textDecorationLine: 'underline'
    },
    buttonOutline: {
        backgroundColor: '#2a2a28',
        marginTop: 5,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: "rgba( 255, 255, 255, 0.4 )",
        borderRightWidth: 3,

        borderBottomWidth: 1,
        borderStyle: "solid",
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
    buttonOutlineText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 20,
        fontFamily: "SourceSansPro_400Regular",
        letterSpacing: 0.1,
    }
})
