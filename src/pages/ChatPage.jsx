import { useEffect, useState } from 'react';
import { ChatList } from "../components/ChatList"
import { Messages } from "../components/MessageList/Messages"
import { MessageForm } from "../components/Form/MessageForm"
import { Navigate, useParams } from "react-router-dom"
import Alert from '@mui/material/Alert';
import style from './ChatPage.module.css';
import { useSelector } from 'react-redux';
import { selectMessages } from '../store/messages/selectors';

export const ChatPage = () => {
    const [robotMessage, setRobotMessage] = useState('');

    const {chatName} = useParams();
    const messages = useSelector(selectMessages);

    useEffect(() => {
        if(chatName && messages[chatName]?.length){
            const time = setTimeout(() => setRobotMessage(() => 
                <Alert severity="success">{messages[chatName][messages[chatName].length-1].author} сообщение отправлено</Alert>), 1500);

            return() => clearTimeout(time);
        }
    }, [chatName, messages])

    if(chatName && !messages[chatName]){
        return <Navigate to='/chats' replace/>
    }

    return(
        <>
            <div>{robotMessage}</div>
            <div className={style.content}>
                <div className={style.chats}>
                    <ChatList />
                </div>
                <div className={style.messages}>
                    <Messages messages={chatName ? messages[chatName] : []} />
                    <MessageForm />
                </div>
            </div>
        </>
    )
}