/*
Como fazer renderização condicional

Para exibirmos conteúdo usando uma condição, precisamos de uma variável declarada ou não
com useState, tanto faz. Essa variável será de tipo booleana.
*/

import { useState } from "react";

const ConditionalRender = () => {
  const x = true;

  const [name, setName] = useState("Joana");

  return (
    <div>
      {/*Quando a variável for declarada, fazemos uma simples estrutura condicional
      como essa*/}
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é false</p>}
      {/*Aqui é uma estrutura condicional mais bem elaborada*/}
      <h1>If ternário</h1>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Clica aqui!</button>
    </div>
  );
};

export default ConditionalRender;
