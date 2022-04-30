import React, { useContext, ChangeEvent, FormEvent } from "react";
import PokemonContext from "../../context/PokemonContext";
import debounce from "../../services/debounce";
import "./styles.scss";

const SearchInput: React.FC = () => {
  const { setInputValue, inpValue } = useContext<any>(PokemonContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const debounceOnChange = debounce(handleChange, 250);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form action="#" className="name" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="name__input"
        placeholder="Example: bulbasaur"
        value={inpValue}
        onChange={(e) => debounceOnChange(e)}
      />
    </form>
  );
};

export default SearchInput;
