import { type FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Button from '~/components/Button';
import Text from '~/components/Text';
import TextInput from '~/components/TextInput';
import { SPACING } from '~/theme';
import { authSchema } from '~/utils/schemas';
import useAuth from '~/hooks/useAuth';

const Title = styled(Text)`
  margin: ${(props) => `${props.theme.spacing.huge} auto`};
`;

const MainContainer = styled.KeyboardAvoidingView`
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.extraLarge};
  flex: 1;
  justify-content: space-between;
`;

const SubmitContainer = styled(SafeAreaView)`
  padding-top: ${(props) => props.theme.spacing.large};
`;

export interface UserSubmitForm {
  email: string;
  userName: string;
  password: string;
}

const defaultValues: UserSubmitForm = {
  email: '',
  userName: '',
  password: '',
};

const AuthScreen: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<UserSubmitForm>({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(authSchema),
  });

  const { signUp } = useAuth();

  const onSubmit = signUp;

  return (
    <MainContainer
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={SPACING.extraLarge}
    >
      <ScrollView>
        <Title size="large" weight="bold">
          Regístrate
        </Title>
        <TextInput
          inputProps={{
            placeholder: 'Nombre de usuario',
            control,
            name: 'userName',
            error: errors.userName,
          }}
        />
        <TextInput
          inputProps={{
            placeholder: 'Correo electrónico',
            control,
            name: 'email',
            error: errors.email,
          }}
        />
        <TextInput
          inputProps={{
            placeholder: 'Contraseña',
            control,
            name: 'password',
            autoComplete: 'password-new',
            secureTextEntry: true,
            error: errors.password,
          }}
        />
      </ScrollView>
      <SubmitContainer edges={['bottom']}>
        <Button disabled={!isValid} onPress={handleSubmit(onSubmit)}>
          Crear Cuenta
        </Button>
      </SubmitContainer>
    </MainContainer>
  );
};

export default AuthScreen;
