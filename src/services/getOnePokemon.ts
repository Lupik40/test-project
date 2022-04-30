import axios, { AxiosResponse } from "axios";

const getOnePokemon = (name: string): Promise<AxiosResponse> => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
};

export default getOnePokemon;
