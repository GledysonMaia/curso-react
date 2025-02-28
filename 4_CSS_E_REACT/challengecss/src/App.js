import "./App.css";
import Cars from "./components/Cars"

function App() {
  const cars = [
    { id: 1, brand: "Ford", color: "Branco", km: 1000 },
    { id: 2, brand: "Volkswagen", color: "Prata", km: 12134 },
    { id: 3, brand: "Toyota", color: "Cinza", km: 0 },
  ];

  return (
    <div className="App">
      <h1>Novo desafio</h1>
      {cars.map((car) => (
        <Cars key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}
    </div>
  );
}

export default App;
