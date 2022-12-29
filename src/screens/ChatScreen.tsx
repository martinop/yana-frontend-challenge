import { Platform } from 'react-native';
import ChatForm from '~/components/ChatForm';
import ChatList from '~/components/ChatList';
import Container from '~/components/Container';

const ChatScreen = () => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ChatList />
      <ChatForm />
    </Container>
  );
};

export default ChatScreen;
