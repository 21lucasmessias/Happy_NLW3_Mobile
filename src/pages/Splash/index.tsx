import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { LocationObject, LocationGeocodedAddress, requestPermissionsAsync, getCurrentPositionAsync, reverseGeocodeAsync } from 'expo-location';

import { Image, ActivityIndicator } from 'react-native';

import {
  Container,
  BackGroundColor,
  Logo,
  Location,
  City,
  State
} from "./styles";

interface iSplash {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setLocation: React.Dispatch<React.SetStateAction<LocationObject | undefined>>
}

const Splash: React.FunctionComponent<iSplash> = ({ setLoading, setLocation }) => {
  const [adress, setAdress] = useState<LocationGeocodedAddress[]>([]);

  useEffect(() => {
    (async () => {
      let { status } = await requestPermissionsAsync();

      if (status !== 'granted') {
        alert('Permission to access location was denied');

        return;
      }

      let currentPosition = await getCurrentPositionAsync({ accuracy: 4 });

      setAdress(await reverseGeocodeAsync({ latitude: currentPosition.coords.latitude, longitude: currentPosition.coords.longitude }));

      setTimeout(() => {
        setLocation(currentPosition);
        setLoading(false);
      }, 3000);
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