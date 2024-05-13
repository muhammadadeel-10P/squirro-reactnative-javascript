import {api} from '../api';

export const bookStoreListEndPoint = api.injectEndpoints({
  endpoints: build => ({
    bookStoreList: build.query({
      query: () => ({
        url: 'stores',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useBookStoreListQuery} = bookStoreListEndPoint;
