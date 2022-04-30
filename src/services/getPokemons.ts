import axios from "axios";
import { IPokemonItem } from "../types/IPokemonItem";

const getPokemons = async (limit: string) => {
  let pokemons = [];
  let pokeTypes: string[] = [];

  const setPokeType = (types: IPokemonItem["types"]): void => {
    types.forEach((type) => {
      if (!pokeTypes.includes(type.type.name)) {
        pokeTypes.push(type.type.name);
      }
    });
  };

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );

  for (const item of response.data.results) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${item.name}`
    );

    pokemons.push(response.data);
    setPokeType(response.data.types);
  }

  return { pokemons, pokeTypes };
};

export default getPokemons;
