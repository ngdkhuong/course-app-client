import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn } from '../auth/authSlice';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_SERVER_URI,
    }),
    endpoints: (builder) => ({
        // gọi api refresh token khi chuyển trang
        refreshToken: builder.query({
            query: (data) => ({
                url: 'refresh',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
        loadUser: builder.query({
            query: (data) => ({
                url: 'me',
                method: 'GET',
                credentials: 'include' as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled; // fulfill này là 1 callback func khi thành công trong hàm bất đòng bộ nó chờ userLoggedIn() trả về data có key accessToken và user mới thực hiện
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.activationToken,
                            user: result.data.user,
                        }),
                    );
                } catch (error: any) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;
