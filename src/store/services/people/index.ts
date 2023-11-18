import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ResponseData } from '../../../api/dto';
import { API } from '../../../api';

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
// export const { useGetPeopleByNameQuery } = peopleApi;
