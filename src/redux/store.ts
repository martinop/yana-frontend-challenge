import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist-expo-filesystem';
import Storage from 'redux-persist-expo-filesystem';
import auth from './slices/authSlice';
import chat from './slices/chatSlice';

const persistConfig = {
  key: 'root',
  storage: Storage,
};

const reducers = combineReducers({ auth, chat });

type RootReducerState = ReturnType<typeof reducers> | undefined;

export const rootReducer = (state: RootReducerState, action: AnyAction) => {
  if (action.type === 'auth/logOut') {
    storage.removeItem('persist:root');
    return reducers(undefined, action);
  }

  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const preloadedState = {};

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState,
  devTools: __DEV__,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export { persistor };
