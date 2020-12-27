import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #000;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 32px;
  left: 24px;
  right: 24px;


  border-radius: 20px;

  background-color: #fff;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TextOrphanagesFound = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;

  padding-left: 24px;
  color: #8FA7B3;
`

export const AddOrphanage = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: #15C3D6;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
`

export const CustomCallout = styled.View`
  width: 160px;
  height: 46px;

  padding: 0 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;

  justify-content: space-between;
`
export const TextCallout = styled.Text`
  color: #0089a5;
  font-size: 14px;
`