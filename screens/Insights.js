import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Insights = () => {
    return (
        <View
        style={styles.container}
        behavior="padding"
        >
            <View style={styles.pageTitleContainer}>
                <Text style={styles.textTitle}>Insights</Text>
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
})
