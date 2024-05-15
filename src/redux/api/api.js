import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    // prepareHeaders: (headers) => {
    //   headers.set("Content-Type", "application/json");
    //   headers.set("Accept", "application/json");
    //   headers.set("Authorization", "Token " + process.env.KEY);

    //   return headers;
    // },
  }),
  endpoints: () => ({}),
});
