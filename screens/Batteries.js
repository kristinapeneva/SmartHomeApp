import React, { useState, useEffect } from 'react'
import { Text } from 'react-native';
import app from '../firebase'

const Batteries = ({uid}) => {
  const [batteries, setBatteries] = useState([]) 

  async function getBattery() {
    const batteriesSnapshot = await app.firestore().collection(`Users/${uid}/Batteries`).get()
    const batteries = batteriesSnapshot.docs.map(battery => battery.data())
    setBatteries(batteries)
  }

  useEffect(() => {
    getBattery();
  }, [uid])

  return (
    <>
      <Text>test</Text>
      {batteries.map((battery,i) => { return <Text key={i}>Name: {battery.name} Charged: {battery.charged}</Text> })}
    </>
  )
}

export default Batteries