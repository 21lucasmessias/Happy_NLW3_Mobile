import React from 'react';

import * as FileSystem from 'expo-file-system';

import {
  BorderColorPhoto,
  BackGroundColorPhoto,
  PhotoView,
  PhotoInfo,
  PhotoViewInfoText,
  PhotoName,
  PhotoSize,
  Photo
} from './styles';

import { AntDesign } from '@expo/vector-icons';

interface iPhotoCard {
  image: FileSystem.FileInfo,
  index: number,
  delImageHandler: (number: number) => void
}

const PhotoCard: React.FC<iPhotoCard> = ({ image, index, delImageHandler }) => {
  return (
    <BorderColorPhoto>
      <BackGroundColorPhoto>
        <PhotoView>
          <PhotoInfo>
            <Photo source={{ uri: image.uri }} />
            <PhotoViewInfoText>
              <PhotoName>
                {image.uri.split('/')[image.uri.split('/').length - 1].split('.')[0].substr(0, 15)}.jpg
              </PhotoName>
              <PhotoSize>
                {(image.size as number) / 1000}kbs
              </PhotoSize>
            </PhotoViewInfoText>
          </PhotoInfo>

          <AntDesign onPress={() => delImageHandler(index)} name="close" size={24} color="#FF669D" />

        </PhotoView>
      </BackGroundColorPhoto>
    </BorderColorPhoto>
  );
}

export default PhotoCard;