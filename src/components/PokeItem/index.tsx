import React from "react";
import { NavLink } from "react-router-dom";
import { routeDetail } from "../../routes/routes";
import { IPokemonItem } from "../../types/IPokemonItem";
import "./styles.scss";

interface IPokemontemParams {
  item: IPokemonItem;
}

const PokeItem: React.FC<IPokemontemParams> = ({ item }) => (
  <li className="pokemon">
    <NavLink to={routeDetail(item.name)} className="pokemon__wrapper">
      <img
        src={item.sprites.other.dream_world.front_default}
        alt={item.name}
        className="pokemon__img"
      />
      <h2 className="pokemon__name">{item.name}</h2>
      <ul className="pokemon__types">
        {item.types.map((i) => (
          <li className={i.type.name} key={i.type.name}>
            {i.type.name}
          </li>
        ))}
      </ul>
    </NavLink>
  </li>
);

export default PokeItem;
