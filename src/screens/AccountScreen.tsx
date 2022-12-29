import { Alert, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import BaseAvatar from '~/components/Avatar';
import Button from '~/components/Button';
import Text from '~/components/Text';
import useAuth from '~/hooks/useAuth';
import { useGetAvatar } from '~/hooks/useGetAvatar';

const ContentContainer = styled.View`
  flex: 1;
`;

const InfoContainer = styled.View`
  margin-top: ${(props) => props.theme.spacing.big};
`;

const Avatar = styled(BaseAvatar)`
  margin-bottom: ${(props) => props.theme.spacing.extraLarge};
  background-color: ${(props) => props.theme.colors.lightGray};
`;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.extraLarge};
`;

const AccountScreen = () => {
  const avatar = useGetAvatar('user');
  const { user, logOut } = useAuth();

  function onLogout() {
    Alert.alert('Quieres cerrar sesión?', 'Toda tu informacion desaparecera', [
      {
        text: 'Cerrar Sesión',
        onPress: logOut,
        style: 'destructive',
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Container>
      <ContentContainer>
        <Avatar source={avatar} />
        <InfoContainer>
          <Text size="tiny" weight="bold" color="gray">
            Nombre de usuario
          </Text>
          <Text size="medium" weight="bold" color="black">
            {user.userName}
          </Text>
        </InfoContainer>
        <InfoContainer>
          <Text size="tiny" weight="bold" color="gray">
            Correo electrónico
          </Text>
          <Text size="medium" weight="bold" color="black">
            {user.email}
          </Text>
        </InfoContainer>
      </ContentContainer>
      <SafeAreaView>
        <Button variant="danger" onPress={onLogout}>
          Cerrar Sesión
        </Button>
      </SafeAreaView>
    </Container>
  );
};

export default AccountScreen;
