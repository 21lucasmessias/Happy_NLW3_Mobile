import React, { useEffect, useRef, useState } from 'react';

import { Animated } from 'react-native';

import {
  TrackBar,
  Thumb
} from './styles';

interface iSwitch {
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const Switch: React.FC<iSwitch> = ({ state, setState }) => {
  const animateColorTrackBarValue = useRef(new Animated.Value(0)).current;
  const interpolateTrackBarColor = animateColorTrackBarValue.interpolate({
    inputRange: [0, 24],
    outputRange: ['rgb(255, 255, 255)', 'rgb(57, 204, 131)']
  })

  const animateColorThumbValue = useRef(new Animated.Value(0)).current;
  const interpolateThumbColor = animateColorThumbValue.interpolate({
    inputRange: [0, 24],
    outputRange: ['rgb(143, 167, 179)', 'rgb(255, 255, 255)']
  })

  const toggleSwitch = () => {
    setState(!state)

    Animated.timing(animateColorTrackBarValue, {
      toValue: state ? 0 : 24,
      duration: 500,
      useNativeDriver: false
    }).start();

    Animated.timing(animateColorThumbValue, {
      toValue: state ? 0 : 24,
      duration: 500,
      useNativeDriver: false
    }).start();
  }

  return (
    <TrackBar onTouchEnd={toggleSwitch} style={[{ backgroundColor: interpolateTrackBarColor }]}>
      <Thumb style={[{
        backgroundColor: interpolateThumbColor,
        transform: [
          {
            translateX: animateColorThumbValue
          }
        ]
      }]}>

      </Thumb>
    </TrackBar>
  );
}

export default Switch;