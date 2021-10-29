import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import ElectricityPrice from '../ElectricityPrice'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';

const api_key = 'pwrgqsr2ak6wbBucyx03E2MVATf2shy6mZlpiZw2'
const lat = 35.45
const lon = -82.98

const Insights = () => {
    let [fontsLoaded] = useFonts({
        AbrilFatface_400Regular,
        SourceSansPro_400Regular
    });
    return (
        <View
        style={styles.container}
        behavior="padding"
        >
            <LinearGradient colors={[ "#FAEEA6", "#F5DF4D"]} style={styles.pageTitleContainer}>
            <ImageBackground source={require('../assets/circuit-board.svg')} style={{position: "absolute", width: "100%", height:"70%", top: 0, left: 0}} resizeMode="cover" />  
                <Text style={styles.textTitle}>Insights</Text>
            </LinearGradient>
            <View style={styles.content} >
            <ElectricityPrice api_key={api_key} lat={lat} lon={lon} style={styles.data} />
            </View>
        </View>
    )
}

export default Insights

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
        zIndex: 2
    },
    data: {
        fontFamily: "SourceSansPro_400Regular",
        fontSize: 20,
        lineHeight: 50,
        color: '#1d1d1e',
        letterSpacing: 0.1,
        padding: 10
    },
    content: {
        padding: "10%",
        width: "100%",
        fontFamily: "SourceSansPro_400Regular",
    }
})
