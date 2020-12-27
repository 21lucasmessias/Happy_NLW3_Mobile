import styled from 'styled-components/native';

import { Animated } from 'react-native';

export const TrackBar = styled(Animated.View)`
  width: 64px;
  height: 24px;
  border-radius: 20px;
  justify-content: center;
  background-color: #F5F8FA;
  border: 1px solid #D3E2E5;
  padding-left: 6px;
`;

export const Thumb = styled(Animated.View)`
  width: 26px;
  height: 12px;
  border-radius: 20px;
`