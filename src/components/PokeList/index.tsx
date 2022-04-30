import React from "react";
import { IPokemonItem } from "../../types/IPokemonItem";
import PokeItem from "../PokeItem/index";
import "./styles.scss";

interface IMoviesListParams {
  list: IPokemonItem[];
}

const PokeList: React.FC<IMoviesListParams> = ({ list }) => (
  <ul className="pokemons">
    {list.length > 0 ? (
      list.map((item: any) => <PokeItem item={item} key={item.id} />)
    ) : (
      <p>No pokemons!</p>
    )}
  </ul>
);

export default PokeList;
