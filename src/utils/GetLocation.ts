
import { requestPermissionsAsync, getCurrentPositionAsync, reverseGeocodeAsync } from 'expo-location';

export default async function getLocation() {
  let { status } = await requestPermissionsAsync();

  if (status !== 'granted') {
    alert('Permission to access location was denied');

    return false;
  }

  let currentPosition = await getCurrentPositionAsync({ accuracy: 4 });

  let adress = await reverseGeocodeAsync({ latitude: currentPosition.coords.latitude, longitude: currentPosition.coords.longitude });

  return { adress, currentPosition }
}