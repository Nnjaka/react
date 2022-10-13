import style from './Message.module.css'

export const Message = ({name}) => {

    const isNull = (name) => {
        if(((name.trim() =="") || (name.trim().length==0))){
            return 
        } else {
            return <div className={style.message}>Привет, {name}</div>
        }
    }

    return isNull(name)
}