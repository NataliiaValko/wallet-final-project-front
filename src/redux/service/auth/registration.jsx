import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newUser = createApi({
  reducerPath: 'newUser',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://adamants-wallet-project-back.herokuapp.com/api/users/',
  }),
  tagTypes: ['newUser'],
  endpoints: builder => ({
    createNewUser: builder.mutation({
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

export const { useCreateNewUserMutation } = newUser;
