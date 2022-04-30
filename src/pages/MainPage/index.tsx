import React, { useEffect, useState } from "react";
import PokemonContext from "../../context/PokemonContext";
import getPokemons from "../../services/getPokemons";
import { IPokemonItem } from "../../types/IPokemonItem";
import FilterBar from "../../components/FilterBar";
import PokeList from "../../components/PokeList/index";
import Loader from "../../components/Loader";
import "./styles.scss";
import IPokemonResponse from "../../types/IPokemonResponse";

const MainPage: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemonItem[]>([]);
  const [countPokemons, setCountPokemons] = useState("10");
  const [inputValue, setInputValue] = useState<string>("");
  const [typesPokemons, setTypesPokemons] = useState<string[]>([]);
  const [activeTypesPokemons, setActiveTypesPokemons] = useState<string[]>([]);
  const [loaded, setLoaded] = useState<boolean>(true);

  useEffect(() => {
    setLoaded(true);

    getPokemons(countPokemons)
      .then((response: IPokemonResponse) => {
        setLoaded(false);

        setPokemons(
          response.pokemons
            .filter((item: IPokemonItem) => item.name.includes(inputValue))
            .filter((item: IPokemonItem) =>
              activeTypesPokemons.length > 0
                ? item.types.find((item) =>
                    activeTypesPokemons.includes(item.type.name)
                  )
                : item
            )
        );

        setTypesPokemons(response.pokeTypes);
      })
      .catch((e: string) => console.log("Error: ", e));
  }, [countPokemons, inputValue, activeTypesPokemons]);

  const getActiveTypes = () =>
    activeTypesPokemons.length > 0
      ? activeTypesPokemons.join(", ")
      : "not selected";

  const getPokemonName = () => (inputValue ? inputValue : "not selected");

  return (
    <PokemonContext.Provider
      value={{
        setCountPokemons,
        inputValue,
        setInputValue,
        typesPokemons,
        setActiveTypesPokemons,
      }}
    >
      <div className="main">
        <FilterBar />
        <div className="main__filter-info">
          <p className="main__text">
            Total Pokémons: <span>{countPokemons}</span>
          </p>
          <p className="main__text">
            Active types of Pokemon:
            <span>{getActiveTypes()}</span>
          </p>
          <p className="main__text">
            Search by name:
            <span>{getPokemonName()}</span>
          </p>
          <p className="main__text">
            Pokemon found: <span>{pokemons.length}</span>
          </p>
        </div>
        {loaded ? (
          <Loader />
        ) : pokemons.length > 0 ? (
          <PokeList list={pokemons} />
        ) : (
          <p className="main__no-pokemons">No Pokémons</p>
        )}
      </div>
    </PokemonContext.Provider>
  );
};

export default MainPage;
