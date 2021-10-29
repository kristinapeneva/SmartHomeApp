import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useFonts, AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';

//fetching data https://maxrozen.com/fetching-data-react-with-useeffect

export default function ElectricityPrice({api_key, lat, lon}) {
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
    SourceSansPro_400Regular
  });
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://developer.nrel.gov/api/utility_rates/v3.json?api_key=${api_key}&lat=${Number(lat)}&lon=${Number(lon)}`);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, [lat, lon]);
  if (data) {
    return <Text style={styles.electricity}>Utility name: {data.outputs.utility_name}  Utility rates ($/kWH): {data.outputs.residential}</Text>;
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
data: {
  fontFamily: "SourceSansPro_400Regular",
  fontSize: 20,
  lineHeight: 50,
  color: '#1d1d1e',
  letterSpacing: 0.1,
  margin: 10
}
})