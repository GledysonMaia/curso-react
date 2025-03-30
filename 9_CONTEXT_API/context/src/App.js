import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <h1>Início do projeto Context API</h1>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/info"element={<Info />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
