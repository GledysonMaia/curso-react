/*
Como importar componentes

O componente que foi criado naquela pasta precisa ser importado
para ser usado aqui na aplicação, para isso a sintaxe usada é
import [componente] from '[caminho do componente]'
*/
// components
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*
Para importar os arquivos da maneira mais atualizada (porque o curso
ensinou de uma maneira que usava o create-react-app), o arquivo
do componente precisa ser um arquivo jsx como o App.
*/
import FirstComponent from './components/FirstComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      {/*Para aplicar no site o que tem dentro do componente, 
      escrevemos o seu nome em forma de tag, como está escrito no 
      elemento acima.*/}
    </>
  )
}

export default App
