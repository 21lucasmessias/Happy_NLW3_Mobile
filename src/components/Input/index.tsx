import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { TextLine, TextArea } from './styles';
import { TextInputProps, TextInput } from 'react-native';

interface iInput extends TextInputProps {
  name: string;
  textArea?: boolean;
}

const Input: React.FC<iInput> = ({ name, textArea, ...rest }) => {
  const refInput = useRef<TextInput>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: refInput.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    textArea ?
      <TextArea
        ref={refInput}
        defaultValue={defaultValue}
        onChangeText={(value: string) => {
          if (refInput.current) {
            (refInput.current as TextInputProps).value = value;
          }
        }}
        {...rest}
      />
      :
      <TextLine
        ref={refInput}
        defaultValue={defaultValue}
        onChangeText={(value: string) => {
          if (refInput.current) {
            (refInput.current as TextInputProps).value = value;
          }
        }}
        {...rest}
      />
  );
}

export default Input;