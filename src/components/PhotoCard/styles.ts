import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native'

export const BorderColorPhoto = styled(LinearGradient).attrs(() => ({
  colors: ['#A1E9C5', '#FFC2D8'],
  start: [0, 1],
  end: [1, 1]
}))`
  flex: 1;
  border-radius: 20px;
  
  margin-bottom: 8px;
`;

export const BackGroundColorPhoto = styled(LinearGradient).attrs(() => ({
  colors: ['#EDFFF6', '#FCF0F4'],
  start: [0, 1],
  end: [1, 1]
}))`
  flex: 1;
  border-radius: 20px;
  margin: 1px;
`;

export const PhotoView = styled.View`
  flex-direction: row;

  height: 72px;
  margin: 1px;

  align-items: center;
  justify-content: space-between;

  padding-left: 6px;
  padding-right: 24px;
`;

export const PhotoInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PhotoViewInfoText = styled.View`
  align-items: center;
  padding-left: 16px;
`;

export const PhotoName = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #37C77F;
`;

export const PhotoSize = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #8FA7B3;
`;

export const Photo = styled(Image)`
  width: 60px;
  height: 60px;
  background-color: #8FA7B3;
  border-radius: 16px;
`;