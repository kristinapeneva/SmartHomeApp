import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'

const RegistrationScreen = () => {
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
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Email"
                value= { email }
                onChangeText={text => setEmail(text)}
                style={styles.input}
                />
                <TextInput 
                placeholder="Password"
                value= { password }
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
                />
                <TextInput 
                placeholder="Password Confirm"
                value= { confirmPassword }
                onChangeText={text => setConfirmPassword(text)}
                style={styles.input}
                secureTextEntry
                />
            </View>
            <View>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleGoToLogin}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
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
