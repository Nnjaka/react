import style from './MessageForm.module.css'
import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send.js';
import { useParams } from "react-router-dom";

export const MessageForm = ({addMessage}) => {

    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    const { chatId } = useParams();

    const handleAddMessage = () => {
        if(chatId) {
            addMessage(chatId, {
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
