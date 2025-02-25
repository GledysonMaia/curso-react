/* 
Desestruturando props

É super comum passar mais de uma prop em um componente, e para facilitar a digitação e
não ficar sempre digitando props.algumaCoisa, o React nos permite desestruturar as
propriedades que chegam, com o recurso de destructuring.
Exemplo: se temos duas props name e age, podemos fazer assim como no exemplo: 
function MyComponent({name, age})
*/

const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
