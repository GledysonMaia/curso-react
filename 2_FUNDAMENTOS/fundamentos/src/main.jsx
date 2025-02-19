import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
O que é JSX

JSX é como se fosse o HTML do react.
É onde serão declaradas as tags HTML que serão exibidas no navegador.
O JSX fica no return do componente.
Algumas diferenças para o HTML é, por exemplo: class é className
porque o JSX tem instruções semelhantes ao HTML e JavaScript, então 
tem que ter nomes diferentes.
O JSX pode ter apenas um elemento pai.
*/