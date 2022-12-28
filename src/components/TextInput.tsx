import { type FC } from 'react';
import { type TextInputProps as InputProps } from 'react-native';
import styled from 'styled-components/native';

type TextInputProps = {
  inputProps?: InputProps;
};

const Input = styled.TextInput`
  background-color: ${(props) => props.theme.colors.lightBlue.default};
  border-radius: ${(props) => props.theme.borderRadius.extraLarge};
  font-size: ${(props) => props.theme.fontSize.medium};
  padding: ${(props) => props.theme.spacing.extraLarge};
  margin-top: ${(props) => props.theme.spacing.medium};
`;

const TextInput: FC<TextInputProps> = (props) => {
  const { inputProps } = props;
  return <Input {...inputProps} />;
};

export default TextInput;
