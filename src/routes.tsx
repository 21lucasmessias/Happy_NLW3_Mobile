import React from 'react';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import Splash from './pages/Splash';
import CreateOrphanage from './pages/CreateOrphanage';
import SetOrphanageLocation from './pages/SetOrphanageLocation';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer >
        <Navigator initialRouteName='Splash'>
          <Screen name='Splash' component={Splash} options={{ headerShown: false }} />
          <Screen name='Landing' component={Landing} options={{ headerShown: false }} />

          <Screen name='SetOrphanageLocation' component={SetOrphanageLocation} options={{
            title: 'Adicione um orfanato'
          }} />

          <Screen name='CreateOrphanage' component={CreateOrphanage} options={{
            title: 'Adicione um orfanato'
          }} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;
