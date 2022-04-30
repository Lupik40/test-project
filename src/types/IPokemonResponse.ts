import { IPokemonItem } from "./IPokemonItem";

export default interface IPokemonResponse {
  pokemons: IPokemonItem[];
  pokeTypes: string[];
}
