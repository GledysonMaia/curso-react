/* 
O que é props

Props é outro recurso fundamental do React que permite passar valores de um componente
pai para um componente fiho. Isso será útil para carregar dados via, por exemplo,
banco de dados.
As props vem em um objeto na argumentação da função do componente.
*/
const ShowUserName = (props) => {
  return (
    <div>
      <h2>O nome do usuário: {props.name}</h2>
    </div>
  );
};

export default ShowUserName;
