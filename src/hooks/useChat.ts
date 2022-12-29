import { useCallback } from 'react';
import { type AddMessagePayload } from '~/redux/slices/chatSlice';
import { addMessageAsync, ChatState } from '~/redux/slices/chatSlice';
import { useAppDispatch, useAppSelector } from './redux';

type AddMessage = Pick<AddMessagePayload, 'message'>;

export interface UseChat extends ChatState {
  addMessage: (values: AddMessage) => void;
}

const useChat = (): UseChat => {
  const dispatch = useAppDispatch();

  const { messages, isLoading, userName } = useAppSelector((state) => ({
    messages: state.chat.messages,
    isLoading: state.chat.isLoading,
    userName: state.auth.user?.userName,
  }));

  const addMessage = useCallback(
    (value: AddMessage) =>
      dispatch(addMessageAsync({ message: value.message, sender: userName })),
    [userName]
  );

  return { addMessage, messages, isLoading };
};

export default useChat;
