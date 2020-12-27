import React from 'react';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import Splash from './pages/Splash';
import AddOrphanage from './pages/AddOrphanage';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer >
        <Navigator initialRouteName='AddOrphanage'>
          <Screen name='Splash' component={Splash} options={{ headerShown: false }} />
          <Screen name='Landing' component={Landing} options={{ headerShown: false }} />
          <Screen name='AddOrphanage' component={AddOrphanage} options={{
            title: 'Adicione um orfanato'
          }} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;
