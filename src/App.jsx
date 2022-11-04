
// import style from './App.css';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList';
import { useState } from 'react';
import { ChatPage } from './pages/ChatPage';
import { Header } from './components/Header/Header';

const defaultChats = [
  {
    id: '1',
    name: 'first',
  },
  {
    id: '2',
    name: 'second',
  }
]

const defaultMessages = {
  '1': [{author: 'author1', text: 'text1'}],
  '2': [{author: 'author2', text: 'text2'}],
}

export const App = () => {
  const [chats, setChats] = useState(defaultChats);
  const [messages, setMessages] = useState(defaultMessages);

  const addChat = (newChat) => {
    setChats([
      ...chats, newChat
    ])
    setMessages({
      ...messages, [newChat.id]: [],
    });
  };

  const addMessage = (chatId, newMessage) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  const deleteChat = (chatId) => {
    const needChats = chats.filter((elem) => elem.id !== chatId);
    delete messages[chatId];
    setChats([...needChats]);
    setMessages({ ...messages });
  }

  return (
    <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
      <Route path="profile" element={<Profile />} />
      <Route path="chats">
        <Route index element={<ChatList chats={chats} addChat={addChat} deleteChat={deleteChat}/>}/>
        <Route
          path=":chatId"
          element={
            <ChatPage
              chats={chats}
              addChat={addChat}
              messages={messages}
              addMessage={addMessage}
              deleteChat={deleteChat}
            />
          }
        />
      </Route>
    </Route>
    <Route path="*" element={<div>404 page</div>} />
  </Routes>
  );
}