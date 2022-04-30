import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IName } from "../../types/IName";
import { IPokemonItem } from "../../types/IPokemonItem";
import getOnePokemon from "../../services/getOnePokemon";
import Loader from "../../components/Loader";
import "./styles.scss";

const PokeDetailPage: React.FC = () => {
  const { name } = useParams<IName>();
  const [pokemon, setPokemon] = useState<IPokemonItem | undefined>(undefined);

  useEffect(() => {
    getOnePokemon(name).then((response) => {
      setPokemon(response.data);
    });
  }, [name]);

  return (
    <div className="pokemon-detail">
      {pokemon ? (
        <div className="pokemon-detail__wrapper">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className="pokemon-detail__img"
          />
          <h2 className="pokemon-detail__name">{pokemon.name}</h2>
          <ul className="pokemon-detail__types">
            {pokemon.types.map((i) => (
              <li className={i.type.name}>{i.type.name}</li>
            ))}
          </ul>
          <p className="pokemon-detail__info">
            Height: <span>{pokemon.height}</span>
          </p>
          <p className="pokemon-detailn__info">
            Weight: <span>{pokemon.weight}</span>
          </p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PokeDetailPage;
