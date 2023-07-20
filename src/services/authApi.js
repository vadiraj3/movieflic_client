import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	endpoints: (builder) => ({
		//get authnetication Info
		getAuth: builder.query({
			query: () => `getAuth`,
		}),
	}),
});

export const { useGetAuthQuery } = authApi;
