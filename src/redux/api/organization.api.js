import { api } from "./api.js";

export const organizationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOrganisation: builder.mutation({
      query: (data) => {
        return {
          headers: {
            Authorization: "Token " + process.env.KEY,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetOrganisationMutation } = organizationApi;
