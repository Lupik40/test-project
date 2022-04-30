import React from "react";
import { IPokemonItem } from "../../types/IPokemonItem";
import PokeItem from "../PokeItem/index";
import "./styles.scss";

interface IPokemonItemParams {
  list: IPokemonItem[];
}

const PokeList: React.FC<IPokemonItemParams> = ({ list }) => (
  <ul className="pokemons">
    {list.map((item: IPokemonItem) => (
      <PokeItem item={item} key={item.id} />
    ))}
  </ul>
);

export default PokeList;
