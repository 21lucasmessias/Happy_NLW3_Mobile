import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 32px;
`;

export const ImageUpload = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 0.5);
  border: 1px dashed #96D2F0;
  border-radius: 20px;

  height: 56px;
  margin-bottom: 64px;

  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #8FA7B3;

  padding-bottom: 8px;
`;