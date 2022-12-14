// import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './SignIn.module.css';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { logIn } from "../services/firebase";
import { CircularProgress } from "@mui/material";



export const SignIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setError('');
      setLoading(true);
  

      try {
        await logIn(login, password);
        navigate('/chats');
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('error');
        }
      } finally {
        setLoading(false);
      }
    };

    return(
        <>
        {loading && <CircularProgress />}
        {error && <Alert severity="error">{error}</Alert>}
        <div className={style.form}>
            <h2>Sigh In</h2>
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
                    Sign In
                </Button>
            </form>
            </div>  
        </>
    )
}