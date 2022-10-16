import { useState } from "react"
import { Message } from "../Message/Message"
import style from './Form.module.css'

export const Form = () => {
    const [name, setName] = useState("")

   const handleChangeName = (ev) => {
        setName(ev.target.value)
    }

    return <div className={style.conteiner}>
        <div className={style.input}>
            <p className={style.name}>Введите ваше имя: </p>
            <form className={style.form}>
                <input type="text" className={style.inputField} onChange={handleChangeName}/>
            </form>
        </div>
        <Message name={name} className={style.message}/>
    </div>
}