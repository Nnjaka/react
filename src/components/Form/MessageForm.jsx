import style from './MessageForm.module.css'
import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send.js';
import { useParams } from "react-router-dom";
import { push, ref } from 'firebase/database';
import { db } from '../../services/firebase';

export const MessageForm = () => {

    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const { chatName } = useParams();

    const handleAddMessage = () => {
        if(chatName) {
            // dispatch(
            //     addMessageWithReply({
            //         chatName: chatName,
            //         message: {
            //             text: text,
            //             author: author
            //         }
            //     }
            // ));
            push(ref(db, `messages/${chatName}/messages`), {
                text: text,
                author: author
            });
        }
        setAuthor('');
        setText('');
    }
  

        return (    
            <div className={style.conteiner} >
                <h4 className={style.header}>Введите имя и текст сообщения</h4>
                <form className={style.form} >
                    <TextField 
                        id="outlined-basic" 
                        label="Имя" 
                        margin="normal"
                        variant="outlined" 
                        value={author} 
                        onChange = {(e) => {
                            setAuthor(e.target.value)
                        }}
                    />
                    <TextField 
                        id="outlined-basic" 
                        label="Сообщение" 
                        margin="normal"
                        variant="outlined" 
                        value={text} 
                        onChange = {(e) => {
                            setText(e.target.value)
                        }}
                    />
                    <Button 
                        variant="contained" 
                        endIcon={<SendIcon />}
                        onClick={() => {
                            handleAddMessage();
                        }}
                        className={style.button}
                    > Отправить</Button>
                </form>
            </div>
        );
}
