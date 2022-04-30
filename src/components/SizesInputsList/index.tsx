import React from "react";
import SizesInput from "../SizesInput";
import "./styles.scss";

interface ISizesInputsListParams {
  list: number[];
}

const SizesInputsList: React.FC<ISizesInputsListParams> = ({ list }) => (
  <form action="#" className="sizes">
    {list.length > 0 ? (
      list.map((item) => <SizesInput num={item} key={item} />)
    ) : (
      <li>No sizes!</li>
    )}
  </form>
);

export default SizesInputsList;
