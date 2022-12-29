import { useMemo } from 'react';
import { useCallback } from 'react';
import { type AddMessagePayload } from '~/redux/slices/chatSlice';
import { addMessageAsync } from '~/redux/slices/chatSlice';
import { getMessagesByDate, type MessagesSections } from '~/utils/chat';
import { useAppDispatch, useAppSelector } from './redux';

type AddMessage = Pick<AddMessagePayload, 'message'>;

export interface UseChat {
  addMessage: (values: AddMessage) => void;
  sections: MessagesSections;
  isLoading: boolean;
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

  const sections = useMemo(() => getMessagesByDate(messages), [messages]);

  return { addMessage, sections, isLoading };
};

export default useChat;
