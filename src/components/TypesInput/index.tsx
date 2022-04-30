import React, { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";
import "./styles.scss";

interface ITypesInputParams {
  name: string;
}

const TypesInput: React.FC<ITypesInputParams> = ({ name }) => {
  const { setActiveTypesPokemons } = useContext<any>(PokemonContext);

  const handleChange = () => {
    setActiveTypesPokemons((prev: any) =>
      prev.includes(name)
        ? prev.filter((item: any) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <label className="types">
      <input type="checkbox" className="types__input" onChange={handleChange} />
      <span className="types__name">{name}</span>
    </label>
  );
};

export default TypesInput;
