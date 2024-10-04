import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pokemon } from "./types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }), // adjust the baseUrl as needed
  endpoints: (builder) => ({
    getPokemonByName: builder.query<pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
