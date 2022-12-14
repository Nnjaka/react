import { ListItem } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './ChatList.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import { useSelector } from "react-redux";
// import { selectChats } from "../../store/messages/selectors";
import { ref, set, remove } from "firebase/database";
import { db } from "../../services/firebase";
import { nanoid } from "nanoid";

export const ChatList = ({chats}) => {
    const [value, setValue] = useState('');

    // const chats = useSelector(
    //     selectChats,
    //     (prev, next) => prev.length === next.length
    //     );

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value) {
            set(ref(db, `chats/${value}`), {
                id: nanoid(), 
                name: value,
            });

            set(ref(db, `messages/${value}`), {
                id: nanoid(), 
                name: value,
            });
        }
    }

    const handleDelete = (chatName) => {
        remove(ref(db, `chats/${chatName}`), {
            name: value,
        });
    }

    return(
        <div className={style.conteiner}>
            <ul className={style.header}>
                {chats.map((chat) => 
                    <ListItem key={chat.id}>
                        <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
                        <IconButton aria-label="delete" size="small" onClick={() => handleDelete(chat.name)}>
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