import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import SendIcon from '~/components/SendIcon';

const Input = styled.TextInput`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.large};
  font-size: ${(props) => props.theme.fontSize.normal};
  padding: ${(props) =>
    `${props.theme.spacing.large} ${props.theme.spacing.extraLarge}`};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  height: 56px;
`;

const SubmitButton = styled.TouchableOpacity`
  margin-left: ${(props) => props.theme.spacing.large};
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.lightGray
      : props.theme.colors.primary.default};
  padding: ${(props) =>
    `${props.theme.spacing.mediumPlus} ${props.theme.spacing.medium}`};
  border-radius: 100%;
`;

const SubmitContainer = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
`;

const ChatForm: FC = () => {
  const disabled = false;

  return (
    <SubmitContainer edges={['bottom']}>
      <Input placeholder="Ingresa aquí tu mensaje" />
      <SubmitButton disabled={disabled}>
        <SendIcon />
      </SubmitButton>
    </SubmitContainer>
  );
};

export default ChatForm;
