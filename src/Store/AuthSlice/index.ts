import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    token?: string
    refreshToken?: string
}

const initialState: AuthState = {
    token: undefined,
    refreshToken: undefined,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        disconnect: (state: AuthState) => {
            state.token = undefined
            state.refreshToken = undefined
        },
        login: (state: AuthState, action: PayloadAction<{ name: string }>) => {
            state.token = action.payload.name
        },
    },
})

export const { disconnect, login } = authSlice.actions
export default authSlice.reducer
