import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient';


const Settings = () => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }
    return (
        <View
        style={styles.container}
        behavior="padding"
        >

            <LinearGradient colors={[ "#FAEEA6", "#F5DF4D"]} style={styles.pageTitleContainer}>
            <ImageBackground source={require('../assets/circuit-board.svg')} style={{position: "absolute", width: "100%", height:"70%", top: 0, left: 0}} resizeMode="cover" />  
                <Text style={styles.textTitle}>Settings</Text>
            </LinearGradient>
            <View style={styles.content} >
                <Text>Email: {auth.currentUser?.email}</Text>

                <TouchableOpacity
                    onPress={handleSignOut}
                    style={styles.buttonOutline}
                >        
                    <Text style={styles.buttonOutlineText}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Settings

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
    textTitle: {
        fontFamily: "AbrilFatface_400Regular",
        fontSize: 40,
        lineHeight: 35,
        letterSpacing: 0.1,
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
    },
    content: {
        padding: "10%",
        width: "100%"
    }
})
