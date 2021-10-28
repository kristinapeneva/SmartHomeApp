import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity } from 'react-native'
import styled from "styled-components/native"
import PropTypes from 'prop-types';
import ElectricityPrice from '../ElectricityPrice'
import Batteries from './Batteries'
import { auth } from '../firebase'
import Svg, {G, circle, Circle} from 'react-native-svg'
import Donut from './Donut'
import CircularProgress from 'react-native-circular-progress-indicator';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';
import app from '../firebase'

const api_key = 'pwrgqsr2ak6wbBucyx03E2MVATf2shy6mZlpiZw2'
const lat = 35.45
const lon = -82.98



const Manager = () => {
    const uid = auth.currentUser.uid
    const [batteries, setBatteries] = useState([]) 

    async function getBattery() {
      const batteriesSnapshot = await app.firestore().collection(`Users/${uid}/Batteries`).get()
      const batteries = batteriesSnapshot.docs.map(battery => battery.data())
      setBatteries(batteries)
    }
  
    useEffect(() => {
      getBattery();
    }, [uid])

    const batteryPercentage = batteries.map((battery) => { return battery.charged })

    return (
        <View style={styles.container} behavior="padding" >
            <ElectricityPrice api_key={api_key} lat={lat} lon={lon} />
            <Donut percentage={batteryPercentage} />
        </View>
    )
}

export default Manager

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
