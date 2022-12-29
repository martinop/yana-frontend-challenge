import { type AddMessagePayload } from '~/redux/slices/chatSlice';
import { addMessageAsync, ChatState } from '~/redux/slices/chatSlice';
import { useAppDispatch, useAppSelector } from './redux';

type AddMessage = Pick<AddMessagePayload, 'message'>;

interface UseChat extends ChatState {
  addMessage: (values: AddMessage) => void;
}

const useChat = (): UseChat => {
  const dispatch = useAppDispatch();

  const { messages, isLoading, userName } = useAppSelector((state) => ({
    messages: state.chat.messages,
    isLoading: state.chat.isLoading,
    userName: state.auth.user?.userName,
  }));

  function addMessage(values: AddMessage) {
    dispatch(addMessageAsync({ message: values.message, sender: userName }));
  }

  return { addMessage, messages, isLoading };
};

export default useChat;
