import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeName, toggleProfile } from "../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch();

    const name = useSelector((state) => state.name);
    const visible = useSelector((state) => state.visible);
    const [firstName, setFirstName] = useState('');

    return(
        <>
            <h2>Профиль</h2>
            <p>visible:</p>
            <input type='checkbox' checked={visible} />
            <button onClick={() => dispatch(toggleProfile())}>Изменить видимость</button>
            <br />
            <p>name: {name}</p>
            <p>Изменить имя</p>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <button onClick={() => dispatch(changeName(firstName))}>изменить имя</button>
        </>
    )
}