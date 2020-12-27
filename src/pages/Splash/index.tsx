import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, ActivityIndicator } from 'react-native';

import { LocationGeocodedAddress } from 'expo-location';
import getLocation from '../../utils/GetLocation';

import { useNavigation, CommonActions } from '@react-navigation/native';

import {
  Container,
  BackGroundColor,
  Logo,
  Location,
  City,
  State
} from "./styles";

const Splash: React.FC = () => {
  const [adress, setAdress] = useState<LocationGeocodedAddress[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const response = await getLocation();

      if (response) {
        setAdress(response.adress)

        setTimeout(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Landing',
                  params: response.currentPosition
                },
              ]
            })
          )
        }, 3000);
      }
    })();
  }, []);

  return (
    <>
      <StatusBar style='light' />

      <BackGroundColor>
        <Container>
          <Logo>
            <Image source={require('../../assets/Logotipo.png')} />
          </Logo>

          <Location>
            {
              adress.length !== 0 ? (
                <>
                  <City>
                    {adress[0].subregion || adress[0].city}
                  </City>
                  <State>
                    {adress[0].region}
                  </State>
                </>
              ) : (
                  <ActivityIndicator size="large" color="#fff" />
                )
            }
          </Location>

        </Container>
      </BackGroundColor>
    </>
  )
}

export default Splash;