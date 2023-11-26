import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseData } from '../../../pages/api/dto';
import { HYDRATE } from 'next-redux-wrapper';
import { API } from '../../../pages/api';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPeopleByName: builder.query<
      ResponseData,
      Record<string, number | string>
    >({
      query: ({ searchTerm, currentPage }) =>
        `?search=${searchTerm}&page=${currentPage}`,
    }),
  }),
});

export const {
  useGetPeopleByNameQuery,
  useLazyGetPeopleByNameQuery,
  util: { getRunningQueriesThunk },
} = peopleApi;
export const { getPeopleByName } = peopleApi.endpoints;
