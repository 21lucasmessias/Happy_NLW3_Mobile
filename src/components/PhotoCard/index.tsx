import React from 'react';

import {
  BorderColorPhoto,
  BackGroundColorPhoto,
  PhotoView,
  PhotoInfo,
  PhotoViewInfoText,
  PhotoName,
  PhotoSize,
  Photo,
  PhotoDel,
} from './styles';

import { AntDesign } from '@expo/vector-icons';

interface iPhotoCard {
  image: string,
  index: number,
  delImageHandler: (number: number) => void
}

const PhotoCard: React.FC<iPhotoCard> = ({ image, index, delImageHandler }) => {
  return (
    <BorderColorPhoto>
      <BackGroundColorPhoto>
        <PhotoView>
          <PhotoInfo>
            <Photo source={{ uri: image }} />
            <PhotoViewInfoText>
              <PhotoName>
                X
            </PhotoName>
              <PhotoSize>
                D
            </PhotoSize>
            </PhotoViewInfoText>
          </PhotoInfo>

          <PhotoDel onPress={() => delImageHandler(index)}>
            <AntDesign name="close" size={24} color="#FF669D" />
          </PhotoDel>
        </PhotoView>
      </BackGroundColorPhoto>
    </BorderColorPhoto>
  );
}

export default PhotoCard;