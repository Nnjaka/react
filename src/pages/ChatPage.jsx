import { useEffect, useState } from 'react';
import { ChatList } from "../components/ChatList"
import { Messages } from "../components/MessageList/Messages"
import { MessageForm } from "../components/Form/MessageForm"
import { Navigate, useParams } from "react-router-dom"
import Alert from '@mui/material/Alert';
import style from './ChatPage.module.css';

export const ChatPage = ({ chats, addChat, messages, addMessage, deleteChat }) => {
    const [robotMessage, setRobotMessage] = useState('');

    const {chatId} = useParams();
 
    useEffect(() => {
        if(chatId && messages[chatId]?.length){
            const time = setTimeout(() => setRobotMessage(() => <Alert severity="success">{messages[chatId][messages[chatId].length-1].author} сообщение отправлено</Alert>), 1500);

            return() => clearTimeout(time);
        }
    }, [chatId, messages, addMessage])

    if(chatId && !messages[chatId]){
        return <Navigate to='/chats' replace/>
    }

    return(
        <>
            <div>{robotMessage}</div>
            <div className={style.content}>
                <div className={style.chats}>
                    <ChatList chats={chats} addChat={addChat} deleteChat={deleteChat}/>
                </div>
                <div className={style.messages}>
                    <Messages messages={chatId ? messages[chatId] : []} />
                    <MessageForm addMessage={addMessage}/>
                </div>
            </div>
        </>
    )
}