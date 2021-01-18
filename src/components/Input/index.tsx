import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { TextLine, TextArea } from './styles';
import { TextInputProps, TextInput } from 'react-native';

interface iInput extends TextInputProps {
  name: string;
  textArea?: boolean;
}

const Input: React.FC<iInput> = ({ name, textArea, ...rest }) => {
  const refInput = useRef<TextInput | null>(null);
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
      <TextArea ref={refInput} {...rest} />
      :
      <TextLine ref={refInput} {...rest} />
  );
}

export default Input;