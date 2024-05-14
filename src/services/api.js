import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//Not useing env due to test failure. In order to load variables from .env use below code
// Config.BASE_URL
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  prepareHeaders: headers => {
    headers.set('accept', 'application/json');
    return headers;
  },
});

const baseQueryWithInterceptors = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    console.error(result.error);
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptors,
  endpoints: () => ({}),
});
