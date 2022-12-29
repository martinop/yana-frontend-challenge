import { Platform } from 'react-native';
import ChatForm from '~/components/ChatForm';
import ChatList from '~/components/ChatList';
import Container from '~/components/Container';
import useChat from '~/hooks/useChat';

const ChatScreen = () => {
  const { addMessage, messages, isLoading } = useChat();

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ChatList messages={messages} isLoading={isLoading} />
      <ChatForm addMessage={addMessage} />
    </Container>
  );
};

export default ChatScreen;
