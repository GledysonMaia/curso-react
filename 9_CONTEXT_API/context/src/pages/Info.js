import React from "react";

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Info = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h1>Info</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Info;
