import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import * as FileSystem from 'expo-file-system';

import { Feather } from '@expo/vector-icons';

import {
  Container,
  ImageUpload,
  Label
} from './style';

import PhotoCard from '../PhotoCard';

interface iFormImages {
  images: FileSystem.FileInfo[],
  setImages: React.Dispatch<React.SetStateAction<FileSystem.FileInfo[]>>
}

const FormImages: React.FC<iFormImages> = ({ images, setImages }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted') {
          alert('Desculpa, precisamos das permissões de câmera para que isso funcione!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const image = await FileSystem.getInfoAsync(result.uri);

      setImages([...images, image]);
    }
  };

  const delImageHandler = (index: number) => {
    let newImages = [...images];

    newImages = newImages.filter((image, ind) => ind !== index);

    setImages(newImages);
  }

  return (
    <Container>
      <Label>Fotos</Label>

      {
        images.map((image, index) => (
          <PhotoCard key={index} image={image} index={index} delImageHandler={delImageHandler} />
        ))
      }

      <ImageUpload onPress={pickImage}>
        <Feather name="plus" size={24} color="#15C5D6" />
      </ImageUpload>
    </Container>
  );
}

export default FormImages;