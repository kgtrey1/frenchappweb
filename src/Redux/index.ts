import { combineReducers, configureStore } from '@reduxjs/toolkit'
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
import storage from 'redux-persist/lib/storage'

const RootReducer = combineReducers({})

const persistConfig = {
    key: 'root',
    storage,
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
export type AppState = ReturnType<typeof RootReducer>
export default RootReducer
