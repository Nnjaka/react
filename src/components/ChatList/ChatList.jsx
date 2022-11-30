import { ListItem } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ChatList.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/messages/actions";
import { selectChats } from "../../store/messages/selectors";

export const ChatList = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const chats = useSelector(
        selectChats,
        (prev, next) => prev.length === next.length
        );

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value) {
            dispatch(addChat(value));
            setValue('');
        }
    }

    return(
        <div className={style.conteiner}>
            <ul className={style.header}>
                {chats.map((chat) => 
                    <ListItem key={chat.id}>
                        <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
                        <IconButton aria-label="delete" size="small" onClick={() => dispatch(deleteChat(chat.name))}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </ListItem>
                )}
            </ul>
            <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" size="small" label="Имя чата" variant="outlined" value={value} onChange={(e) => setValue(e.target.value)} />
                <Button onClick={handleSubmit}>Создать чат</Button>
            </Stack>
        </div>
    )
};