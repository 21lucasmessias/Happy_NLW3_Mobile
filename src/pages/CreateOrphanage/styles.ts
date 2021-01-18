import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: #F2F3F5;
`;

export const ScrollView = styled.ScrollView`
`;

export const FormContainer = styled.View`
  padding: 24px;
  padding-bottom: 40px;
`;

export const Legend = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #5C8599;

  padding-bottom: 24px;
  border-bottom-width: 1px;
  border-bottom-color: #D3E2E6;

  margin-bottom: 32px;
`;

export const FormBox = styled.View`
  padding-top: 16px;
`;

export const Label = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #8FA7B3;

  padding-bottom: 8px;
`;

export const TextBox = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;

export const InfoText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 20px;
  color: #8FA7B3;
`;

export const WeekendWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 32px;
  padding-bottom: 32px;
`;

export const TextWeekend = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #8FA7B3;
`;

export const FormButton = styled.TouchableOpacity`
  flex: 1;
  height: 56px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;

  background-color: #15C3D6;
`;

export const TextButton = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 25px;
  color: #FFFFFF;
`;