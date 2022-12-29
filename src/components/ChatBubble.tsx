import styled from 'styled-components/native';
import { ChatMessage } from '~/redux/slices/chatSlice';
import Text from './Text';

const Bubble = styled.View<Pick<ChatMessage, 'sender'>>`
  align-selft: flex-start;
  border-radius: ${(props) => props.theme.borderRadius.normal};
  padding: ${(props) =>
    `${props.theme.spacing.small} ${props.theme.spacing.large}`};
  background-color: ${(props) =>
    props.sender === 'yana'
      ? props.theme.colors.lightBlue.default
      : props.theme.colors.cyan.default};
`;

const BubbleContainer = styled.View<Pick<ChatMessage, 'sender'>>`
  align-items: ${(props) =>
    props.sender === 'yana' ? 'flex-start' : 'flex-end'};
  margin: ${(props) => props.theme.spacing.tiny} 0;
`;

type ChatBubbleProps = Pick<ChatMessage, 'sender'> & {
  children: string | React.ReactNode;
};

const ChatBubble = (props: ChatBubbleProps) => {
  const { sender, children } = props;
  const isFromYana = sender === 'yana';
  return (
    <BubbleContainer sender={sender}>
      <Bubble sender={sender}>
        {typeof children === 'string' ? (
          <Text
            size="small"
            color={isFromYana ? 'lightBlue' : 'cyan'}
            alignment={isFromYana ? 'right' : 'left'}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Bubble>
    </BubbleContainer>
  );
};

export default ChatBubble;
