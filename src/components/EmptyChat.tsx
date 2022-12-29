import styled from 'styled-components/native';
import { useGetAvatar } from '~/hooks/useGetAvatar';
import BaseAvatar from './Avatar';
import Text from './Text';

const Container = styled.View`
  padding: ${(props) => props.theme.spacing.big};
`;

const Avatar = styled(BaseAvatar)`
  margin-bottom: ${(props) => props.theme.spacing.extraLarge};
`;

const EmptyChat = () => {
  const avatar = useGetAvatar('yana');
  return (
    <Container>
      <Avatar source={avatar} />
      <Text weight="bold">El chat se encuentra vacio.</Text>
    </Container>
  );
};

export default EmptyChat;
