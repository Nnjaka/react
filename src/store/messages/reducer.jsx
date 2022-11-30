import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './actions';

const initialState = {
    first: [{author: 'author1', text: 'text1'}],
    second: [{author: 'author2', text: 'text2'}],
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_CHAT: {
            return {
              ...state,
              [action.chatName]: [],
            };
          }
          case ADD_MESSAGE: {
            return {
              ...state,
              [action.chatName]: [...state[action.chatName], action.newMessage],
            };
          }
          case DELETE_CHAT: {
            const messages = { ...state };
            delete messages[action.chatName];
            return messages;
          }
      
          default:
            return state;
    }
};