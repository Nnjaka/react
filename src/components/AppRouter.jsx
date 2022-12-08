import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Profile } from '../pages/Profile';
import { ChatList } from '../components/ChatList/ChatList';
import { ChatPage } from '../pages/ChatPage';
import { Header } from '../components/Header/Header';
import { Articles } from '../pages/Articles';
import { SignIn } from '../pages/SignIn';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
      <Route path="profile" element={<PrivateRoute component={<Profile />} />} />
      <Route path="chats" element={<PrivateRoute />}>
        <Route index element={<ChatList />} />
        <Route path=":chatName" element={<ChatPage />} />
      </Route>
      <Route path="articles" element={<Articles />}></Route>
      <Route path="signIn" element={<PublicRoute component={<SignIn />} />} />
    </Route>
    <Route path="*" element={<div>404 page</div>} />
  </Routes>
);