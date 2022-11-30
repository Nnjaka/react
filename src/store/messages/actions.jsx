export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';

export const addChat = (chatName) => ({
    type: ADD_CHAT,
    chatName,
})

export const addMessage = (chatName, newMessage) => ({
    type: ADD_MESSAGE,
    chatName, 
    newMessage
})

export const deleteChat = (chatName) => ({
    type: DELETE_CHAT,
    chatName,
})