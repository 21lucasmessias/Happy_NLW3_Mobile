import { TextInput } from 'react-native';
import styled from 'styled-components/native';

interface iTextInput {
  refer?: string | ((instance: TextInput | null) => void) | React.RefObject<TextInput> | null | undefined
}

export const TextLine = styled(TextInput).attrs<iTextInput>(
  ({ refer }) => ({
    ref: refer
  })
) <iTextInput>`
  border: 1px solid;
  border-radius: 20px;
  
  border-color: ${true ? '#D3E2E6' : '#A1E9C5'};

  text-decoration-line: none;

  padding-left: 24px;
  padding-right: 24px;
  padding-top: 18px;
  padding-bottom: 18px;

  height: 56px;

  background-color: #FFFFFF;
  
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  color: #5C8599;
`;

export const TextArea = styled(TextLine)`
  height: 111px;
`