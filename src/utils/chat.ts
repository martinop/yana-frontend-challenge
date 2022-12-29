import dayjs from 'dayjs';
import groupBy from 'lodash.groupby';
import type { SectionListData, DefaultSectionT } from 'react-native';

import type { ChatMessage } from '~/redux/slices/chatSlice';

export type MessagesSection = SectionListData<ChatMessage, DefaultSectionT>;
export type MessagesSections = MessagesSection[];

type MessagesByDate = (messages: ChatMessage[]) => MessagesSections;

export const getMessagesByDate: MessagesByDate = (messages) => {
  const groups = groupBy(messages, (message) =>
    dayjs(new Date(message.createdAt)).format('D-M-YYYY')
  );

  return Object.entries(groups).map(([, value]) => {
    const firstMessageTitle = dayjs(value[0]?.createdAt).format(
      'ddd D [de] MMMM - h:mm A'
    );
    return {
      title: firstMessageTitle,
      data: value,
    };
  });
};
