import { Alert, CircularProgress, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/firebase";
import style from './SignIn.module.css';


export const SignUp = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);

        try{
            setLoading(true);
            await signUp(login, password);
            navigate('/signIn');
           
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('error');
            }
        } finally {
            setLoading(false);
        }
    }

    return(
        <>
        {loading && <CircularProgress />}
        {error && <Alert severity="error">{error}</Alert>}
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
                    type="email"
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
                    Create User
                </Button>
            </form>
            </div>  
        </>
    )
}