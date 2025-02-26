/*
A prop children

Ela é usada quando queremos colocar elementos dentro da tag do componente. Por exemplo:
uma tag p dentro deste componente estaria como <Container><p>Exemplo</p></Container>
Para isso funcionar precisamos desestruturar o componente e adicionar a prop children
nele. Segue a sintaxe
*/

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o título do container</h2>
      {children}
      <p>O valor é: {myValue}</p>
    </div>
  );
};

export default Container;
