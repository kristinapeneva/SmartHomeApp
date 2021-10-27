import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Picker } from 'react-native'
import { auth } from '../firebase'
import { NavigationContainer } from '@react-navigation/native';
import ElectricityPrice from '../ElectricityPrice'
import { Feather } from '@expo/vector-icons';
import firestore from '@react-native-firebase/firestore'
import app from '../firebase'
import { ref } from 'joi'
import Batteries from './Batteries'
import DropDownPicker from 'react-native-dropdown-picker'
import Manager from './Manager'
import Tabs from '../screens/Tabs'


// import { collection } from '@react-native-firebase/firestore'


const HomeScreen = () => {

  const [battery, setBattery] = useState([])
  const [selectedBattery, setSelectedBattery] = useState("battery1");
  // const batteriesCollectionRef = app.firestore().collection("Batteries")


  // function getBattery() {
  //   batteriesCollectionRef.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data())
  //     });
  //     setBattery(items);
  //   })
    
  // }
  // useEffect(() => {
  //   getBattery();
  // }, [])

  // const handleAddBattery = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       navigation.replace("AddBattery")
  //     })
  //     .catch(error => alert(error.message))
  // }

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
      {/* <View style={styles.pageTitleContainer}> */}
        {/* <Picker
          selectedValue={selectedBattery}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedBattery(itemValue)}
        >
            <Picker.Item label="battery1" value="battery1" />
            <Picker.Item label="battery2" value="battery2" />
        </Picker> */}

        {/* <Text style={styles.textTitle}>Energy Manager</Text> */}

        {/* <TouchableOpacity
          // onPress={handleAddBattery}
          style={styles.buttonAdd}
          >        
        <Feather name="plus" size={20} />
      </TouchableOpacity> */}
      {/* </View> */}

        <Tabs style={{height: 100}} />

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "yellow",
    height: "100%",
    width: "100%",
    // justifyContent: 'space-between',
    // alignItems: 'center'
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
  batteriesMenu: {
    height: "20%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttonAdd: {
    borderColor: '#939597',
    color: "#939597",
    borderStyle: "solid",
    borderWidth: 1,
    fontSize: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
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