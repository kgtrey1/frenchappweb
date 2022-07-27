import { createApi } from '@reduxjs/toolkit/query/react'

import { axiosBaseQuery } from '@/services'
import * as Types from '@/services/auth-types'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: axiosBaseQuery('auth'),
    endpoints: (builder) => ({
        login: builder.mutation<Types.AuthResponse, Types.AuthRequest>({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                data: body,
            }),
        }),
    }),
})

export const { useLoginMutation } = authApi
