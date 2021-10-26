import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import ElectricityPrice from '../ElectricityPrice'
import firestore from '@react-native-firebase/firestore'
import app from '../firebase'
import { ref } from 'joi'
// import { collection } from '@react-native-firebase/firestore'

const api_key = 'pwrgqsr2ak6wbBucyx03E2MVATf2shy6mZlpiZw2'
const lat = 35.45
const lon = -82.98



const HomeScreen = () => {
  const [battery, setBattery] = useState([])
  const batteriesCollectionRef = app.firestore().collection("Batteries")


  function getBattery() {
    batteriesCollectionRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      });
      setBattery(items);
    })
    
  }
  useEffect(() => {
    getBattery();
  }, [])


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
    <View style={styles.container}>
      <ElectricityPrice api_key={api_key} lat={lat} lon={lon} /> 
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})