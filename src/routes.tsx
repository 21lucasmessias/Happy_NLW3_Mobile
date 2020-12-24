import React, { useState } from 'react';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LocationObject } from 'expo-location';

import Landing from './pages/Landing';
import Splash from './pages/Splash';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<LocationObject>()

  if (loading) {
    return (
      <Splash setLoading={setLoading} setLocation={setLocation} />
    )
  }

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer >
        <Navigator initialRouteName='Landing'>
          <Screen name='Landing' component={Landing} options={{ headerShown: false }} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;
