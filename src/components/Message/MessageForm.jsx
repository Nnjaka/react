import style from './MessageForm.module.css'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send.js';
import { useTheme } from '@emotion/react';

export const MessageForm = ({setMessages, setAuthorName}) => {
    const theme = useTheme();

    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
  

        return (
            <div className={style.conteiner} style={{background:theme.palette.primary.main}}>
                <h4 className={style.header}>Введите имя и текст сообщения</h4>
                <form className={style.form}>
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
                            setMessages((pervstate) => [...pervstate, {
                                text: text,
                                author: author
                            },])
                            setAuthorName((author))
                        }}
                        className={style.button}
                    > Отправить</Button>
                </form>
            </div>
        )
}
