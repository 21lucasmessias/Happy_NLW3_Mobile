import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
                   
  justify-content: center;
  align-items: center;
`;

export const BackGroundColor = styled(LinearGradient).attrs(() => ({
  colors: ['#00C7C7', '#2AB5D1']
}))`
  flex: 1;
`;

export const Logo = styled.View`
  position: absolute;
  flex: 1;
`;

export const Location = styled.View`
  flex: 4;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 120px;
`;

export const City = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;

  text-align: center;

  color: #FFFFFF;
`;

export const State = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  text-align: center;

  color: #FFFFFF;
`;

