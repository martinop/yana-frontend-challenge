import type { FC } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import ChatForm from '~/components/ChatForm';
import Container from '~/components/Container';

const List = styled.View`
  flex: 1;
`;

const ChatScreen: FC = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <List />
      <ChatForm />
    </Container>
  );
};

export default ChatScreen;
