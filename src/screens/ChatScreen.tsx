import { Platform } from 'react-native';
import styled from 'styled-components/native';
import ChatForm from '~/components/ChatForm';
import ChatList from '~/components/ChatList';
import useChat from '~/hooks/useChat';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.extraLarge};
`;

const ChatScreen = () => {
  const { addMessage, sections, isLoading } = useChat();

  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ChatList sections={sections} isLoading={isLoading} />
      <ChatForm addMessage={addMessage} />
    </Container>
  );
};

export default ChatScreen;
