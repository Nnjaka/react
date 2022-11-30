import { nanoid } from 'nanoid';

export const selectMessages = (state) => state.messages;
export const selectChats = (state) =>
  Object.keys(state.messages).map((chatName) => ({
    id: nanoid(),
    name: chatName,
  }));