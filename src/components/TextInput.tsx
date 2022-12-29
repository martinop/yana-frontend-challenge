import { Controller, FieldError, UseControllerProps } from 'react-hook-form';
import { View, type TextInputProps as InputProps } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '~/theme';

interface TextInputProps<T> {
  inputProps?: InputProps &
    UseControllerProps<T> & {
      error?: FieldError | undefined;
    };
}

const Input = styled.TextInput`
  background-color: ${(props) => props.theme.colors.lightBlue.default};
  border-radius: ${(props) => props.theme.borderRadius.extraLarge};
  font-size: ${(props) => props.theme.fontSize.medium};
  padding: ${(props) => props.theme.spacing.extraLarge};
  margin-top: ${(props) => props.theme.spacing.medium};
`;

const Error = styled.Text`
  color: ${(props) => props.theme.colors.red.text};
  padding: ${(props) =>
    `${props.theme.spacing.small} ${props.theme.spacing.extraLarge}`};
`;

const TextInput = <T,>(props: TextInputProps<T>) => {
  const {
    inputProps: { control, name, error, ...restInputProps },
  } = props;
  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            {...restInputProps}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            placeholderTextColor={COLORS.gray}
            value={value}
          />
        )}
        name={name}
      />
      {error && <Error>{error.message}</Error>}
    </View>
  );
};

export default TextInput;
