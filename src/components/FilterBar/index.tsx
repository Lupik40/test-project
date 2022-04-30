import React, { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";
import SizesButtonList from "../SizesInputsList/";
import SearchInput from "../SearchInput";
import TypesInputsList from "../TypesInputsList/";
import "./styles.scss";

const FilterBar: React.FC = () => {
  const countPokemons = [10, 20, 50];
  const { typesPokemons } = useContext<any>(PokemonContext);

  return (
    <div className="filter-bar">
      <div className="filter-bar__wrapper">
        <p className="filter-bar__name">Count pokemons</p>
        <SizesButtonList list={countPokemons} />
      </div>
      <div className="filter-bar__wrapper">
        <p className="filter-bar__name">Name</p>
        <SearchInput />
      </div>
      <div className="filter-bar__wrapper">
        <p className="filter-bar__name">Types</p>
        <TypesInputsList list={typesPokemons} />
      </div>
    </div>
  );
};

export default FilterBar;
