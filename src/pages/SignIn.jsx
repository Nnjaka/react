// import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../store/profile/slice";
import style from './SignIn.module.css';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);

        if (login === 'gb' && password === 'gb'){
            dispatch(auth(true));
            navigate(-1);
        } else {
            setError(true);
            setLogin('');
            setPassword('');
        }
    }

    return(
        <>
        {error && <Alert severity="error">Неверный логин или пароль</Alert>}
        <div className={style.form}>
            <h2>Sigh Up</h2>
            <form onSubmit={handleSubmit} className={style.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setLogin(e.target.value)} 
                    value={login}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={style.submit}
                    onClick={handleSubmit}
                >
                    Sign In
                </Button>
            </form>
            </div>  
        </>
    )
}