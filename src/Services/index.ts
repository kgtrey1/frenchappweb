import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { BaseQueryFn } from '@reduxjs/toolkit/query/react'

import { API_URL } from '@/config/api'
import { RootState } from '@/store'
import setupMocks from '@/config/mocks'

const instance = axios.create({
    baseURL: API_URL,
})

if (__DEV__) {
    setupMocks(instance)
}

export const axiosBaseQuery = (
    endpoint: string,
): BaseQueryFn<AxiosRequestConfig<any>, unknown, unknown> => {
    const queryFn: BaseQueryFn<
        AxiosRequestConfig<any>,
        unknown,
        unknown
    > = async (args, api, extraOptions) => {
        const { token } = (api.getState() as RootState).auth

        if (token !== undefined) {
            args.headers = {
                ...args.headers,
            }
        }
        args.url = `${endpoint}/${args.url}`
        try {
            const result = await instance(args)

            return result
        } catch (e) {
            const error = e as AxiosError

            return {
                error: {
                    status: error.response?.status,
                    data: error.response?.data || error.message,
                },
            }
        }
    }
    return queryFn
}

export default instance
