import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ElectricityPrice from '../ElectricityPrice'
import Batteries from './Batteries'
import { auth } from '../firebase'

const api_key = 'pwrgqsr2ak6wbBucyx03E2MVATf2shy6mZlpiZw2'
const lat = 35.45
const lon = -82.98

const Manager = () => {

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }
    return (
        <View>
            {/* <ElectricityPrice api_key={api_key} lat={lat} lon={lon} /> 
            <Text>Email: {auth.currentUser?.email}</Text>
            <Batteries uid={auth.currentUser.uid} />
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >        
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity> */}
            <Text>Manager Screen</Text>
        </View>
    )
}

export default Manager

const styles = StyleSheet.create({})
