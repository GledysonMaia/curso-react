/* 
Desestruturando props

É super comum passar mais de uma prop em um componente, e para facilitar a digitação e
não ficar sempre digitando props.algumaCoisa, o React nos permite desestruturar as
propriedades que chegam, com o recurso de destructuring.
Exemplo: se temos duas props name e age, podemos fazer assim como no exemplo: 
function MyComponent({name, age})

Como reaproveitar componentes

Vai ter situações que terá uma mesma prop repetida várias vezes com valores
diferentes, então quando quisermos adicionar algo igual para todos componentes
declarados no App.js, não precisamos ir por todas aquelas tags adicionando o
que a gente quer. Segue o exemplo abaixo
*/

const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Este carro é novo</p>}
    </div>
  );
};

export default CarDetails;
