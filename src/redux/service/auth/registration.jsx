import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const user = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://adamants-wallet-project-back.herokuapp.com/api/users/',
  }),
  tagTypes: ['user'],
  endpoints: builder => ({
    createUser: builder.mutation({
      query: ({ email, password }) => ({
        url: `/registration`,
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const { useCreateUserMutation } = user;
