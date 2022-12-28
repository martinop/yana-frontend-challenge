import { type FC } from 'react';
import { Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Button from '~/components/Button';
import Text from '~/components/Text';
import TextInput from '~/components/TextInput';
import { SPACING } from '~/theme';

const Title = styled(Text)`
  margin: ${(props) => `${props.theme.spacing.huge} auto`};
`;

const MainContainer = styled.KeyboardAvoidingView`
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => `0 ${props.theme.spacing.extraLarge}`};
  flex: 1;
  justify-content: space-between;
`;

const SubmitContainer = styled(SafeAreaView)`
  padding-top: ${(props) => props.theme.spacing.large};
`;

const AuthScreen: FC = () => {
  return (
    <MainContainer
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={SPACING.extraLarge}
    >
      <ScrollView>
        <Title size="large" weight="bold">
          Regístrate
        </Title>
        <TextInput inputProps={{ placeholder: 'Nombre de usuario' }} />
        <TextInput inputProps={{ placeholder: 'Correo electrónico' }} />
        <TextInput inputProps={{ placeholder: 'Contraseña' }} />
      </ScrollView>
      <SubmitContainer edges={['bottom']}>
        <Button>Crear Cuenta</Button>
      </SubmitContainer>
    </MainContainer>
  );
};

export default AuthScreen;
