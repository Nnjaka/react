import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { messagesReducer } from './messages/slice';
import { profileReducer } from './profile/slice';
import { articlesReducer } from './articles/slice';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['articles', 'profile'],
// };

const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  articles: articlesReducer,
});

// const persisredReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// export const persistor = persistStore(store);