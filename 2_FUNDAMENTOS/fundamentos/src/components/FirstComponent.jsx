/*
Como criar componentes 

Para criar componentes precisamos criar uma variável constante com
o componente nessa forma de arrow function.
O que estiver dentro do return será código HTML.

Os componentes devem estar numa pasta chamada Components, ele é um
arquivo de JSX. Os nomes dos arquivos devem estar em camel 
letters, as primeiras letras das palavras em maiúscula.

O código do componente retorna elementos HTML de sua escolha, como o
exemplo abaixo:
*/
const FirstComponent = () => {
  return (
    <div>
      <h1>Meu primeiro componente</h1>
    </div>
  );
};

export default FirstComponent;
