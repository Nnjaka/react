import { ListItem } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { customAlphabet } from 'nanoid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ChatList.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const nanoid = customAlphabet('1234567890', 10);


export const ChatList = ({chats, addChat, deleteChat}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value) {
            addChat({
                id: nanoid(),
                name: value,
            });
            setValue('');
        }
    }

    return(
        <div className={style.conteiner}>
            <ul className={style.header}>
                {chats.map((chat) => 
                    <ListItem key={chat.id}>
                        <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                        <IconButton aria-label="delete" size="small" onClick={() => deleteChat(chat.id)}>
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