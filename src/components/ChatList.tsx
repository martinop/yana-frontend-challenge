import { ListRenderItem, SectionList } from 'react-native';
import styled from 'styled-components/native';
import { type UseChat } from '~/hooks/useChat';
import type { ChatMessage } from '~/redux/slices/chatSlice';
import { MessagesSection } from '~/utils/chat';
import ChatBubble from './ChatBubble';
import DotsAnimation from './DotsAnimation';
import Text from './Text';

type ChatListProps = Pick<UseChat, 'sections' | 'isLoading'>;

const MessagesSectionList = styled(
  SectionList as typeof SectionList<ChatMessage>
).attrs(() => ({
  contentContainerStyle: {
    flexDirection: 'column-reverse',
  },
}))`
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

const SectionHeader = styled(Text)`
  padding: ${(props) => props.theme.spacing.medium};
`;

type SectionHeaderProps = (info: { section: MessagesSection }) => JSX.Element;

const renderSectionHeader: SectionHeaderProps = ({ section }) => {
  return (
    <SectionHeader size="tiny" color="gray">
      {section.title}
    </SectionHeader>
  );
};

const renderItem: ListRenderItem<ChatMessage> = ({ item }) => (
  <ChatBubble sender={item.sender}>{item.message}</ChatBubble>
);

const ChatList = (props: ChatListProps) => {
  const { sections, isLoading } = props;
  return (
    <MessagesSectionList
      keyExtractor={(item: ChatMessage) => item.id.toString()}
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      initialNumToRender={10}
      stickySectionHeadersEnabled={false}
      inverted
      renderSectionFooter={() => (isLoading ? <DotsAnimation /> : null)}
    />
  );
};

export default ChatList;
