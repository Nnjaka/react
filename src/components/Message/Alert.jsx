import style from './Alert.module.css'

export const Alert = ({robotMessage}) => {

    return(
      <div className={style.text}>
        {robotMessage}
      </div>
    )
}