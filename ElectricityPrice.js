import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

//fetching data https://maxrozen.com/fetching-data-react-with-useeffect

export default function ElectricityPrice({api_key, lat, lon}) {
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
    return <Text>Utility name: {data.outputs.utility_name}  Utility rates ($/kWH): {data.outputs.residential}</Text>;
  } else {
    return null;
  }
}