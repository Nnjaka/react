import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './../../store/profile/slice';
import { Button } from '@mui/material';

const nav = [
  {
    name: 'Главная страница',
    path: '/',
  },
  {
    name: 'Чаты',
    path: '/chats',
  },
  {
    name: 'Профиль',
    path: '/profile',
  },
  {
    name: 'Новости',
    path: '/articles',
  },
];

export const Header = () => {
  const isAuth = useSelector((state) => state.profile.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(auth(false));
  }

  const handleLogin = () => {
    navigate('/signin');
  }

  return (
    <>
      <Paper>
        <MenuList sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          {nav.map((item, idx) => (
            <MenuItem key={idx}>
              <NavLink 
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? 'orange' : 'black',
                })}
              >
                {item.name}
              </NavLink>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
      <main>
        <div style={{float: "right"}}>
          {isAuth ? (<Button onClick={handleLogout}>Logout</Button>) :
          (!isAuth && (<Button onClick={handleLogin}>Login</Button>))}
        </div>
        <Outlet />
      </main>
    </>
  );
};