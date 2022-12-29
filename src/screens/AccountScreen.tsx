import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import BaseAvatar from '~/components/Avatar';
import Button from '~/components/Button';
import Text from '~/components/Text';
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
  padding: ${(props) => `0 ${props.theme.spacing.large}`};
`;

const AccountScreen = () => {
  const avatar = useGetAvatar('user');

  return (
    <Container>
      <ContentContainer>
        <Avatar source={avatar} />
        <InfoContainer>
          <Text size="tiny" weight="bold" color="gray">
            Nombre de usuario
          </Text>
          <Text size="medium" weight="bold" color="black">
            test3
          </Text>
        </InfoContainer>
        <InfoContainer>
          <Text size="tiny" weight="bold" color="gray">
            Correo electrónico
          </Text>
          <Text size="medium" weight="bold" color="black">
            test@gmail.com
          </Text>
        </InfoContainer>
      </ContentContainer>
      <SafeAreaView>
        <Button variant="danger">Cerrar Sesión</Button>
      </SafeAreaView>
    </Container>
  );
};

export default AccountScreen;
