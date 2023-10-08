import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  "x-rapidapi-host": import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST,
  "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    // getCryptos: builder.query({
    //   query: (count) => createRequest(`/coins?limit=${count}`),
    // }),

    getCryptos: builder.query({
      query: (count) =>
        createRequest(`/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${count}&offset=0`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCoinExchanges: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}/exchanges`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timePeriod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetCoinExchangesQuery,
} = cryptoApi;
