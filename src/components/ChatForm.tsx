import { memo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import SendIcon from '~/components/SendIcon';

import { type UseChat } from '~/hooks/useChat';
import { COLORS } from '~/theme';

type ChatFormProps = Pick<UseChat, 'addMessage' | 'isLoading'>;

const Input = styled.TextInput`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.large};
  font-size: ${(props) => props.theme.fontSize.medium};
  padding: ${(props) =>
    `${props.theme.spacing.large} ${props.theme.spacing.extraLarge}`};
`;

const SubmitButton = styled.TouchableOpacity`
  margin-left: ${(props) => props.theme.spacing.large};
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.lightGray
      : props.theme.colors.primary.default};
  padding: ${(props) =>
    `${props.theme.spacing.mediumPlus} ${props.theme.spacing.medium}`};
  border-radius: ${(props) => props.theme.borderRadius.full};
`;

const SubmitContainer = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
`;

const ChatForm = (props: ChatFormProps) => {
  const { addMessage, isLoading } = props;
  const [text, setText] = useState('');

  function onSubmit() {
    addMessage({ message: text });
    setText('');
  }

  const disabled = text.length === 0 || isLoading;

  return (
    <SubmitContainer edges={['bottom']}>
      <Input
        placeholder="Ingresa aquí tu mensaje"
        value={text}
        onChangeText={setText}
        style={{
          shadowColor: COLORS.black,
          shadowOffset: {
            width: 0,
            height: 3.5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
        }}
      />
      <SubmitButton disabled={disabled} activeOpacity={0.7} onPress={onSubmit}>
        <SendIcon />
      </SubmitButton>
    </SubmitContainer>
  );
};

export default memo(ChatForm);
