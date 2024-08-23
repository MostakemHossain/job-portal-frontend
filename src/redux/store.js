import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import companySlice from './companySlice'
import jobSlice from './jobSlice'

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import applicationSlice from './applicationSlice'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const rootReducer=combineReducers({
  auth:authSlice,
  job:jobSlice,
  company:companySlice,
  application:applicationSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})