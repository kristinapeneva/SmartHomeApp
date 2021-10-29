import React, {useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity } from 'react-native'
import styled from "styled-components/native"
import PropTypes from 'prop-types';
import ElectricityPrice from '../ElectricityPrice'
import Batteries from './Batteries'
import { auth } from '../firebase'
import app from '../firebase'
import Svg, {G, circle, Circle} from 'react-native-svg'
import Donut from './Donut'
import CircularProgress from 'react-native-circular-progress-indicator';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';

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
        <View
        style={styles.container}
        behavior="padding"
        >
            {/* <ElectricityPrice api_key={api_key} lat={lat} lon={lon} /> 
            <Text>Email: {auth.currentUser?.email}</Text>
            <Batteries uid={auth.currentUser.uid} />
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >        
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity> */}
            {/* <View style={styles.pageTitleContainer}>
                <Text style={styles.textTitle}>Home</Text>
            </View> */}

                {/* <CircularProgress
                    marginTop={90}
                    variant="determinate"
                    radius={90}
                    value={85}
                    maxValue={100}
                    textColor = {'#222'}
                    fontSize={20}
                    valueSuffix={"%"}
                    inActiveStrokeColor={"#2ecc71"}
                    inActiveStrokeOpacity={0.2}
                /> */}

{/* <CircularProgress
  value={90}
  valuePrefix={'$'}
  inActiveStrokeColor={'#2ecc71'}
  inActiveStrokeOpacity={0.2}
/> */}



<AnimatedCircularProgress
  size={120}
  width={15}
  fill={batteryPercentage}
  tintColor="#00e0ff"
  rotation={360}
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#3d5875" />
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
