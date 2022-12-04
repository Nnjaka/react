import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Profile } from '../pages/Profile';
import { ChatList } from '../components/ChatList/ChatList';
import { ChatPage } from '../pages/ChatPage';
import { Header } from '../components/Header/Header';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
      <Route path="profile" element={<Profile />}/>
      <Route path="chats" >
        <Route index element={<ChatList />} />
        <Route path=":chatName" element={<ChatPage />} />
      </Route>
    </Route>
    <Route path="*" element={<div>404 page</div>} />
  </Routes>
);