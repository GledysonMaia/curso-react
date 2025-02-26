/*
Como executar funções do elemento pai no elemento filho

Ao criar uma função no estilo normal no componente pai, o App.js, sem ser arrow 
function, com qualquer que seja o código que esteja lá, na tag do componente 
filho importado iremos atribuir uma prop que também estará no componente filho,
e que essa prop pode ser usada em um evento, como no exemplo abaixo.
*/

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique aqui para executar a função</button>
    </div>
  );
};

export default ExecuteFunction;
