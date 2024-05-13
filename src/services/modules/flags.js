import {api} from '../api';

export const countryEndPoint = api.injectEndpoints({
  endpoints: build => ({
    countryData: build.query({
      query: params => {
        return {
          url: `https://restcountries.com/v3.1/alpha/${params.code}`,
          method: 'GET',
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {useCountryDataQuery} = countryEndPoint;
