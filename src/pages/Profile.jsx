import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeName, toggleProfile } from "../store/profile/actions";
import style from './Profile.module.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { selectName, selectVisible } from "../store/profile/selectors";

export const Profile = () => {
    const dispatch = useDispatch();

    const name = useSelector(selectName);
    const visible = useSelector(selectVisible);
    const [firstName, setFirstName] = useState('');
    console.log(name);

    return(
        <div className={style.conteiner}>
            <h2 className={style.header}>Профиль</h2>

            <div className={style.orangeLine}></div>

            <Stack direction="row" spacing={2} className={style.avatarBlock}>
                <Avatar>{name}</Avatar>
                <p className={style.name}>{name}</p>
            </Stack>

            <div className={style.orangeLine}></div>
            
            <p className={style.editProfile}>Редактировать профиль:</p>

            <div className={style.editBlock}>
                <FormGroup>
                    <FormControlLabel checked={visible} control={<Checkbox defaultChecked onClick={() => dispatch(toggleProfile())}/>} label="Режим инкогнито" />
                </FormGroup>    

                <div className={style.text}>
                    <TextField id="outlined-basic" label="Имя" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <Button className={style.button} onClick={() => dispatch(changeName(firstName))} variant="outlined">Изменить имя</Button>
            </div>
        </div>
    )
}