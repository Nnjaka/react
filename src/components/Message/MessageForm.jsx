import style from './MessageForm.module.css'
import React, { useState } from "react";

export const MessageForm = ({setMessages, setAuthorName}) => {
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    return (
        <div className={style.conteiner}>
            <h4 className={style.header}>Введите имя и текст сообщения</h4>
            <form className={style.form}>
                <input 
                    type="text" 
                    value={author} 
                    onChange = {(e) => {
                        setAuthor(e.target.value)
                    }}
                    className={style.inputField}  
                    placeholder="Имя"/>
                <input 
                    type="text" 
                    value={text} 
                    onChange = {(e) => {
                        setText(e.target.value)
                    }}
                    className={style.inputField} 
                    placeholder="Сообщение"/>
                <button 
                    type="button"
                    onClick={() => {
                        setMessages((pervstate) => [...pervstate, {
                            text: text,
                            author: author
                        },])
                        setAuthorName((author))
                    }}
                    
                >Отправить</button>
            </form>
        </div>
    )
}
