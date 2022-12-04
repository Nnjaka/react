import { NavLink, Outlet } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const navigate = [
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
];

export const Header = () => {
  return (
    <>
      <Paper>
        <MenuList sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          {navigate.map((item, idx) => (
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
        <Outlet />
      </main>
    </>
  );
};