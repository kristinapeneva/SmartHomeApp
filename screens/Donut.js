import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Donut = ({percentage}) => {
    return (
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
    )
  }
export default Donut