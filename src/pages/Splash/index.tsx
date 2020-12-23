import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Image } from 'react-native';

import {
  Container,
  BackGroundColor,
  Logo,
  Location,
  City,
  State
} from "./styles";


function Splash() {
  return (
    <>
      <StatusBar style='light' />
      <BackGroundColor>
        <Container>
          <Logo>
            <Image source={require('../../assets/Logotipo.png')} />
          </Logo>

          <Location>
            <City>
              Ponta Grossa
          </City>
            <State>
              Paraná
          </State>
          </Location>

        </Container>
      </BackGroundColor>
    </>
  )
}

export default Splash;