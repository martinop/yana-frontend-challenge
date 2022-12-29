import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import sleep from '~/utils/sleep';

export interface ChatMessage {
  id: number;
  message: string;
  sender: string;
  createdAt: number;
}

export type AddMessagePayload = Pick<ChatMessage, 'message' | 'sender'>;

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
}

const initialState: ChatState = {
  messages: [],
  isLoading: false,
};

export const addMessageAsync = createAsyncThunk<ChatMessage, AddMessagePayload>(
  'chat/addMessage',
  async () => {
    await sleep(2000);
    const message = {
      id: Date.now(),
      createdAt: Date.now(),
      sender: 'yana',
      message: 'Hola humano, ¿Cómo estás?',
    };
    return message;
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addMessageAsync.pending, (state, action) => {
        const userMessage = {
          id: Date.now(),
          createdAt: Date.now(),
          sender: action.meta.arg.sender,
          message: action.meta.arg.message,
        };
        state.isLoading = true;
        state.messages.push(userMessage);
      })
      .addCase(addMessageAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.messages.push(action.payload);
        state.isLoading = false;
      });
  },
});

export default chatSlice.reducer;
