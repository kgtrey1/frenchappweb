import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import authSlice from '@/Store/AuthSlice'

const RootReducer = combineReducers({
    auth: authSlice,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['auth'],
}

export const store = configureStore({
    reducer: persistReducer(persistConfig, RootReducer),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    devTools: true,
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof RootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
