import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      {/* 1 - criação de forms */}
      <MyForm
        user={{
          name: "João",
          email: "joao@gmail.com",
          bio: "Sou um advogado",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
