import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const user = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://adamants-wallet-project-back.herokuapp.com/api/users/',
  }),
  tagTypes: ['userAPI'],
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
