
// import style from './App.css';
import { Provider } from 'react-redux';
import { AppRouter } from './components/AppRouter';
import {  store } from './store/index';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    // <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />            
        </BrowserRouter>
      </Provider>
    // </PersistGate>
  );
}