// import { useEffect, useState } from 'react';
import { ChatList } from "../components/ChatList"
import { Messages } from "../components/MessageList/Messages"
import { MessageForm } from "../components/Form/MessageForm"
import { Navigate, useParams } from "react-router-dom"
// import Alert from '@mui/material/Alert';
import style from './ChatPage.module.css';

export const ChatPage = ({chats, messages}) => {
    // const [robotMessage, setRobotMessage] = useState('');

    const {chatName} = useParams();
    // const messages = useSelector(selectMessages);


    if(chatName && !messages[chatName]){
        return <Navigate to='/chats' replace/>
    }

    const prepareMassages = [...Object.values((chatName && messages[chatName].messages) || {})];

    return(
        <>
            {/* <div>{robotMessage}</div> */}
            <div className={style.content}>
                <div className={style.chats}>
                    <ChatList chats={chats}/>
                </div>
                <div className={style.messages}>
                    <Messages messages={prepareMassages} />
                    <MessageForm />
                </div>
            </div>
        </>
    )
}