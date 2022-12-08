import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    first: [{id: 1, author: 'author1', text: 'text1'}],
    second: [{id: 2, author: 'author2', text: 'text2'}],
};

const messagesSLice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addChat: (state, action) => {
      state[action.payload] = [];
    },
    addMessage: (state, action) => {
      const { author, text } = action.payload.message;
      state[action.payload.chatName].push({
        id: nanoid(),
        author,
        text,
      });
    },
    deleteChat: (state, action) => {
      delete state[action.payload];
    },
  },
});

let timeout;

export const addMessageWithReply = createAsyncThunk(
  'messages/addMessageWithReply',
  (payload, { dispatch }) => {
    const { chatName, message } = payload;

    dispatch(addMessage({ chatName, message }));
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      dispatch(
        addMessage({
          chatName: chatName,
          message: { text: 'Сообщение от бота', author: 'Bot' },
        })
      );
    }, 1500);
  }
);

export const { addChat, addMessage, deleteChat } = messagesSLice.actions;
export const messagesReducer = messagesSLice.reducer;