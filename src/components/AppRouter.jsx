import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Profile } from '../pages/Profile';
import { ChatList } from '../components/ChatList/ChatList';
import { ChatPage } from '../pages/ChatPage';
import { Header } from '../components/Header/Header';
import { Articles } from '../pages/Articles';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useEffect, useState } from 'react';
import { db, firebaseAuth, getChats } from '../services/firebase';
import { useDispatch } from 'react-redux';
import { auth } from '../store/profile/slice';
import { onValue, ref } from 'firebase/database';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const authUnsubsribe = firebaseAuth.onAuthStateChanged((user) => {
      user ? dispatch(auth(true)) :  dispatch(auth(false));
    });

    const chatsUnsubsribe = onValue(getChats(), (snapshot) => {
      const data = snapshot.val() || {};
      setChats([...Object.values(data)]);
    });

    const messagesUnsubsribe = onValue(ref(db, 'messages'), (snapshot) => {
      const data = snapshot.val() || {};
      setMessages(data);
    })

    return () => {
      authUnsubsribe();
      chatsUnsubsribe();
      messagesUnsubsribe();
    }
  }, [dispatch]);

  return (<Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
      <Route path="profile" element={<PrivateRoute component={<Profile />} />} />
      <Route path="chats" element={<PrivateRoute />}>
        <Route index element={<ChatList chats={chats} messages={messages}/>} />
        <Route path=":chatName" element={<ChatPage chats={chats} messages={messages}/>} />
      </Route>
      <Route path="articles" element={<Articles />}></Route>
      <Route path="signIn" element={<PublicRoute component={<SignIn />} />} />
      <Route path="signUp" element={<PublicRoute component={<SignUp />} />} />
    </Route>
    <Route path="*" element={<div>404 page</div>} />
  </Routes>)
};