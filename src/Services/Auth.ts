import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type AuthRequest = {
    username: string
    password: string
}

type AuthResponse = {
    token: string
    refresh_token: string
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://owyaa.frenchappweb.com/api/v1/auth',
    }),
    endpoints: builder => ({
        login: builder.mutation<AuthResponse, AuthRequest>({
            query: body => ({
                url: '/login',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useLoginMutation } = authApi
