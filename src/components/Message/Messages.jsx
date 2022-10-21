import style from './Messages.module.css';
import Stack from '@mui/material/Stack';

export const Messages = ({messages}) => {

    return(

      <Stack spacing={2}>
        <div className={style.messages}>{
          messages.map((el, i) => <div key={i} className={style.message}>
            <p className={style.text}>{el.text}</p>
            <h1 className={style.author}>{el.author}</h1>
          </div>)}
        </div>
      </Stack>
    )
}