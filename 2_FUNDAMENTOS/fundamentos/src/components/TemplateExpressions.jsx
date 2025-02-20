const TemplateExpressions = () => {
  const name = "Guedim";
  const data = {
    age: 31,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>
        Você tem {data.age} anos e trabalha como {data.job}
      </p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;
