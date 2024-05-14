import {api} from '../api';

export const countryEndPoint = api.injectEndpoints({
  endpoints: build => ({
    countryData: build.query({
      query: params => {
        return {
          url: `${process.env.API_COUNTRIES}${'flag/unicode'}`,
          method: 'POST',
          body: {
            iso2: params.code,
          },
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {useCountryDataQuery} = countryEndPoint;
