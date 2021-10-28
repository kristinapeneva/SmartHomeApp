import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Settings = () => {
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

            <View style={styles.pageTitleContainer}>
                <Text style={styles.textTitle}>Settings</Text>
            </View>
            
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.buttonOutline}
            >        
                <Text style={styles.buttonOutlineText}>Sign out</Text>
            </TouchableOpacity>

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
    textTitle: {
        fontFamily: "AbrilFatface_400Regular",
        fontSize: 40,
        lineHeight: 35,
        letterSpacing: 0.1,
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
    }
})
