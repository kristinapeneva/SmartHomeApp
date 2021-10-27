import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import { Ionicons, Entypo } from '@expo/vector-icons'; 
import { useFonts, DancingScript_400Regular } from "@expo-google-fonts/dancing-script";
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';

const LoginScreen = () => {
    let [fontsLoaded] = useFonts({
        DancingScript_400Regular,
        AbrilFatface_400Regular,
        SourceSansPro_400Regular
    });
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home", { user })
            }
        })

        return unsubscribe
    }, [])


    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ', user.email)
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
        
            console.error(error);
    })}

    const handleGoToReg = () => {
            navigation.replace("Registration")
      }

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <View style={styles.pageTitleContainer}>
                <Text style={styles.textTitle}>Login</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.dataContainer}>
                    <Ionicons name="person" style={styles.iconData} />
                    <TextInput 
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
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.buttonOutline}
                >
                    <Text style={styles.buttonOutlineText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.linkContainer}>
                    <Text style={styles.link}>Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={handleGoToReg}
                        style={styles.button}
                    >
                    <Text style={styles.buttonLinkText}>Register</Text>
                </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    pageTitleContainer: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        backgroundColor: "#F5DF4D",
        width: "100%",
        height: "25%",
        padding: "10%",
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
        alignItems: 'center',
        marginTop: 40,
    },

    buttonContainer: {
        paddingHorizontal: "10%",
        width: '100%',
        height: "10%",
        flex: 1,
        justifyContent: 'center',
        gap: 25
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
    buttonText: {
        color: '#1d1d1e',
        fontWeight: '900',
        fontSize: 16,
        fontFamily: "SourceSansPro_400Regular",
        letterSpacing: 0.1,
    },
    buttonOutlineText: {
        color: '#1d1d1e',
        fontWeight: '900',
        fontSize: 16,
        fontFamily: "SourceSansPro_400Regular",
        letterSpacing: 0.1,
    }
})
