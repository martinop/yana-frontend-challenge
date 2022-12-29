import styled from 'styled-components/native';
import { type UseChat } from '~/hooks/useChat';

type ChatListProps = Pick<UseChat, 'messages' | 'isLoading'>;

const List = styled.View`
  flex: 1;
`;
const ChatList = (props: ChatListProps) => {
  const { messages, isLoading } = props;
  console.log(messages);
  return <List />;
};

export default ChatList;
