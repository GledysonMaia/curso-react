// import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
// @ts-ignore
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";
import UserAbleToDrive from "./components/UserAbleToDrive";

function App() {
  // const name = "Joaquim";
  const [userName] = useState("João");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", km: 0, newCar: true },
    { id: 2, brand: "Toyota", color: "Branco", km: 1230, newCar: false },
    { id: 3, brand: "Mitsubishi", color: "Vermelho", km: 10553, newCar: false },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Guedim", age: 15, job: "Programador" },
    { id: 2, name: "Edson", age: 16, job: "Engenheiro" },
    { id: 3, name: "Maria", age: 70, job: "Cozinheira" },
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="./img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name={userName} />
      {/*destructuring*/}
      <CarDetails brand="Volkswagen" km={1000} color="Cinza" newCar={false} />
      {/*reaproveitando*/}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Preta" km={4500} newCar={false} />
      {/*loop em array de objeto*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/*fragment*/}
      <Fragment propFragment="teste" />
      {/*children*/}
      <Container myValue="testing">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <p>Este é o novo conteúdo</p>
      </Container>
      {/*executar função*/}
      <ExecuteFunction myFunction={showMessage} />
      {/*state lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/*desafio*/}
      {users.map((user) => (
        <UserDetails
        key={user.id}
        name={user.name}
        job={user.job}
        age={user.age}
      />
      ))}
    </div>
  );
}

export default App;
