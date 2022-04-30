import React from "react";
import TypesInput from "../TypesInput";
import "./styles.scss";

interface ITypesListParams {
  list: string[];
}

const TypesInputsList: React.FC<ITypesListParams> = ({ list }) => (
  <form action="#" className="types">
    {list.length > 0 ? (
      list.map((item: any) => <TypesInput name={item} key={item} />)
    ) : (
      <p>No types!</p>
    )}
  </form>
);

export default TypesInputsList;
