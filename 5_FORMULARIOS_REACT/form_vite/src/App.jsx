import { useState } from "react";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Forms</h2>
      {/* 1 - criação de forms */}
      <MyForm />
    </>
  );
}

export default App;
