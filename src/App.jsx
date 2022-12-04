
// import style from './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from './components/AppRouter';
import { persistor, store } from './store/index';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />            
        </BrowserRouter>
      </Provider>
    </PersistGate>
  );
}