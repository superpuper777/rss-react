import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseData } from '../../../pages/api/dto';
import { API } from '../../../pages/api';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
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

export const { useGetPeopleByNameQuery, useLazyGetPeopleByNameQuery } =
  peopleApi;
