import React, { useContext } from "react";
import PokemonContext from "../../context/PokemonContext";
import "./styles.scss";

interface ISizesInputParams {
  num: number;
}

const SizesInput: React.FC<ISizesInputParams> = ({ num }) => {
  const { setCountPokemons } = useContext<any>(PokemonContext);

  return (
    <label className="sizes">
      <input
        type="radio"
        className="sizes__input"
        name="sizes"
        onChange={() => setCountPokemons(num)}
      />
      <span className="sizes__span">{num}</span>
    </label>
  );
};

export default SizesInput;
