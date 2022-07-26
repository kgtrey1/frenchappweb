import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '@/Services/Auth'

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
    },
    extraReducers: builder => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state: AuthState, { payload }) => {
                state.token = payload.token
                state.refreshToken = payload.refresh_token
            },
        )
    },
})

export const { disconnect } = authSlice.actions
export default authSlice.reducer
