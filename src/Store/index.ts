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

import authSlice from '@/store/slice-auth'
import authApi from '@/services/auth-service'

const RootReducer = combineReducers({
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['authApi'],
}

export const store = configureStore({
    reducer: persistReducer(persistConfig, RootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
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
    }).concat([authApi.middleware]),
    devTools: true,
})

export type RootState = ReturnType<typeof RootReducer>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
