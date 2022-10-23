import { useEffect, useState } from 'react';
import './App.css';
import { Messages } from './components/Message/Messages';
import { MessageForm } from './components/Message/MessageForm';
import { createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const App = () => {
  const darkTheme = createTheme({
    palette:{
      mode: 'light',
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      },
      text:{
        primary: '#E8F3F9',
      }
    }
  })

  const lightTheme = createTheme({
    palette:{
      mode: 'light',
    }
  })

  const [messages=[], setMessages] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [robotMessage, setRobotMessage] = useState('');
  const [isDark, setIsDark] = useState(false);

  const chats = [{
    id: 1,
    name: "Name1"
  },
  {
    id: 2,
    name: "Name2"
  }]

  useEffect(() => {
    if(authorName !== ''){
      setTimeout(() => setRobotMessage(() => <Alert severity="success">{authorName} сообщение отправлено</Alert>), 1500);
    }
  }, [authorName]) 

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Box className="App">
        <Container>
              <Button className="theme" variant='primary' onClick={() => {setIsDark(pervstate => !pervstate)}} style={{ margin: 20 }}>Изменить тему</Button>
              <h1>Чат</h1>
              <div>{robotMessage}</div>
              <div className="content">
                <List dense sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }} chats={chats}>
                  {chats.map((value, key) => {
                  const labelId = `checkbox-list-secondary-label-${value.id}`;
                  return (
                    <ListItem
                      key={key}
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText id={labelId} primary={value.name} />
                      </ListItemButton>
                    </ListItem>
                  );
                  })}
                </List>
                <MessageForm setMessages={setMessages} setAuthorName ={setAuthorName}/>
              </div>
              <div>
                <Messages messages={messages}/>
              </div>
          </Container>
      </Box>
    </ThemeProvider>
  );
}