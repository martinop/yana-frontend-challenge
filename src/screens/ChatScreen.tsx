import { Platform } from 'react-native';
import ChatForm from '~/components/ChatForm';
import ChatList from '~/components/ChatList';
import Container from '~/components/Container';
import useChat from '~/hooks/useChat';

const ChatScreen = () => {
  const { addMessage, sections, isLoading } = useChat();

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ChatList sections={sections} isLoading={isLoading} />
      <ChatForm addMessage={addMessage} />
    </Container>
  );
};

export default ChatScreen;
