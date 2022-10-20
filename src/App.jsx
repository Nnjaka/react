import { useEffect, useState } from 'react';
import './App.css';
import { Messages } from './components/Message/Messages';
import { MessageForm } from './components/Message/MessageForm';
import { Alert } from './components/Message/Alert';

export const App = () => {
  const [messages=[], setMessages] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [robotMessage, setRobotMessage] = useState('');


  useEffect(() => {
    if(authorName !== ''){
      setTimeout(() => setRobotMessage(() => `${authorName} сообщение отправлено`), 1500);
    }
  }, [authorName])

  return (
    <div className="App">
       <div className="app">
            <h1>Чат</h1>
            <Alert robotMessage={robotMessage}/>
            <MessageForm setMessages={setMessages} setAuthorName ={setAuthorName}/>
            <Messages messages={messages}/>
        </div>
    </div>
  );
}