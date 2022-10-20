import style from './Messages.module.css'

export const Messages = ({messages}) => {

    return(
      <div className={style.conteiner}>
        <div className={style.messages}>{
          messages.map((el, i) => <div key={i} className={style.message}>
            <p className={style.text}>{el.text}</p>
            <h1 className={style.author}>{el.author}</h1>
          </div>)}
        </div>
      </div>
    )
}