/* 
Como fazer hooks no react
Os hooks são utilizados para guardar e/ou alterar o estado de algum
dado na nossa aplicação.

Todos os hooks começam com use, por exemplo: useState

Os hooks sempre precisam ser importados.

Para criar um hook, devemos importá-lo usando a seguinte sintaxe:
*/
import { useState } from "react";
//^           ^       ^      ^
const ManageData = () => {
  let someData = 10;

  console.log(someData);
  /*Depois se quisermos atribuir um valor "ao hook", usamos a
  sintaxe const [seuvalor, setSeuvalor] = useState(valorDoSeuValor)
  onde seuValor é o nome da "variável" que iremos guardar os dados
  e valorDoSeuValor é o valor dela*/
  const [number, setNumber] = useState(15);

  console.log(number);

  return (
    <div>
      <div>
        <p>Valor {someData}</p>
        <button onClick={() => (someData = 15)}>Botão</button>
      </div>
      <div>
        {/* Para alterar esse valor é necessário um código de
        arrow function com a função setSeuvalor e parênteses
        logo depois com um valor dentro dela*/}
        <p>Valor {number}</p>
        <button onClick={() => setNumber(25)}>Outro botão</button>
      </div>
    </div>
  );
};

export default ManageData;
