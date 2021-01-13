import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

import { LocationObject } from 'expo-location';
import MapView, { Callout, Marker } from 'react-native-maps';

import Mark from '../../assets/Mark.png';

import { Entypo } from '@expo/vector-icons'

import {
  Container,
  Footer,
  TextOrphanagesFound,
  AddOrphanage,
  CustomCallout,
  TextCallout
} from './styles';

const Landing: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const currentPosition = (route.params as LocationObject);

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: currentPosition?.coords.latitude || 0,
          longitude: currentPosition?.coords.longitude || 0,
          latitudeDelta: 0.0722,
          longitudeDelta: 0.0421,
        }}

        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height
        }}>

        <Marker
          icon={Mark}

          coordinate={{
            latitude: currentPosition?.coords.latitude || 0,
            longitude: currentPosition?.coords.longitude || 0,
          }}

          calloutAnchor={{ x: 2.7, y: 0.8 }}
        >
          <Callout tooltip={true} >
            <CustomCallout>
              <TextCallout>teste</TextCallout>
            </CustomCallout>
          </Callout>
        </Marker>

      </MapView>

      <Footer>
        <TextOrphanagesFound>
          2 Orfanatos Encontrados
        </TextOrphanagesFound>
        <AddOrphanage onPress={() => navigation.navigate('SetOrphanageLocation', currentPosition)} activeOpacity={0.8}>
          <Entypo name='plus' size={15} color='#fff' />
        </AddOrphanage>
      </Footer>
    </Container>
  );
}

export default Landing;