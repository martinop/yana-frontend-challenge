import type { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Button from '~/components/Button';
import Text from '~/components/Text';
import { useGetAvatar } from '~/hooks/useGetAvatar';
import { SPACING } from '~/theme';

const Container = styled.View`
  flex: 1;
  padding: ${(props) => `0 ${props.theme.spacing.large}`};
`;

const ContentContainer = styled.View`
  flex: 1;
`;

const InfoContainer = styled.View`
  margin-top: ${(props) => props.theme.spacing.big};
`;

const Avatar = styled.Image`
  width: ${SPACING.huge * 2}px;
  height: ${SPACING.huge * 2}px;
  background-color: #c4c4c4;
  border-radius: 100%;
  margin: ${(props) => `${props.theme.spacing.huge} auto 0 auto`};
  margin-bottom: ${(props) => props.theme.spacing.extraLarge};
`;

const AccountScreen: FC = () => {
  const avatar = useGetAvatar('yana');

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
