import React from "react";

// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";


const Info = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Info</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Info;
