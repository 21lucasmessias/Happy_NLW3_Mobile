import React, { useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { LocationObject } from 'expo-location';

import {
  Container,
  Button,
  TextButton
} from './styles'
import { Dimensions } from 'react-native';

const SetOrphanageLocation: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentPosition = (route.params as LocationObject);

  const [orphanageLocation, setOrphanageLocation] = useState<LatLng>({ latitude: currentPosition?.coords.latitude || 0, longitude: currentPosition?.coords.longitude || 0 });

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
        }}

        onPress={(e) => {
          setOrphanageLocation(e.nativeEvent.coordinate)
        }}
      >
        <Marker
          draggable
          coordinate={orphanageLocation}
          onDragEnd={(e) => setOrphanageLocation(e.nativeEvent.coordinate)}
        />
      </MapView>

      <Button
        activeOpacity={0.8}
        onPress={() => navigation.navigate('CreateOrphanage', orphanageLocation)}
      >
        <TextButton>
          Próximo
        </TextButton>
      </Button>
    </Container>
  )
};

export default SetOrphanageLocation;