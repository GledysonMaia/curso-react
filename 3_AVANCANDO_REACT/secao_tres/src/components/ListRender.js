/*
Como renderizar listas em React

Para renderizar listas precisamos usar aquela estrutura de useState
que aprendemos.
Primeiro criamos um componente, importamos o useState do React e
criamos uma constante com a sintaxe de exemplo: const [nome] = 
useState(["ex1", "ex2", "ex3"]) onde ex1 2 e 3 são os exemplos de
valores e nome é o nome da lista.
*/

import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Gledyson", "Liduina", "Cleudo"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Jubileu", age: 69 },
    { id: 2, name: "Jubiscreu", age: 42 },
    { id: 3, name: "Jabiraca", age: 21 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      {/*Depois disso utlizamos o método map para renderizar
        cada item da lista e atribuímos um parâmetro i na arrow
        function e um parâmetro key no JSX para dar uma identificação
        para cada elemento, assim não terá um erro no console do 
        navegador, segue a sintaxe*/}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user, i) => (
          <li key={user.id}>
            {user.name}, {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
