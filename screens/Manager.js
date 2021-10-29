import React, {useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity, ImageBackground } from 'react-native'
import styled from "styled-components/native"
import PropTypes from 'prop-types';

import Batteries from './Batteries'
import { auth } from '../firebase'
import app from '../firebase'
import Svg, {G, circle, Circle} from 'react-native-svg'
import Donut from './Donut'
import CircularProgress from 'react-native-circular-progress-indicator';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';
import { LinearGradient } from 'expo-linear-gradient';





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
        <View
        style={styles.container}
        behavior="padding"
        >

            <LinearGradient colors={[ "#FAEEA6", "#F5DF4D"]} style={styles.pageTitleContainer}>
            <ImageBackground source={require('../assets/circuit-board.svg')} style={{position: "absolute", width: "100%", height:"70%", top: 0, left: 0}} resizeMode="cover" />  
                <Text style={styles.textTitle}>Manager</Text>
            </LinearGradient>



                <AnimatedCircularProgress
                margin={20}
                size={160}
                width={10}
                fill={batteryPercentage}
                tintColor="#F5DF4D"
                rotation={360}
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#2a2a28" />
            {/* <Donut activeColor="white" passiveColor="grey" baseColor="black" width={100} radius={50} percent={70} duration={1000} /> */}
            {/* <Progress.Circle size={100} tickness={3}  progress={0.4} /> */}
            <Batteries uid={auth.currentUser.uid} />
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
        gap: 20
        
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
})
