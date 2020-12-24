import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, ActivityIndicator } from 'react-native';

import { LocationObject, LocationGeocodedAddress } from 'expo-location';
import getLocation from '../../utils/GetLocation';

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
      const response = await getLocation();

      if (response) {
        setAdress(response.adress)
        setLocation(response.currentPosition);

        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } else {
        setLoading(false);
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