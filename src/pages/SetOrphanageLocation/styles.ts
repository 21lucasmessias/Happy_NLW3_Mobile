import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const Button = styled.TouchableOpacity`
  height: 56px;

  position: absolute;
  bottom: 40px;
  left: 24px;
  right: 24px;

  align-items: center;
  justify-content: center;

  background-color: #15C3D6;
  border-radius: 20px;
`;

export const TextButton = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 25px;
  color: #FFFFFF;
`;