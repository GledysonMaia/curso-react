const Challenge = () => {
  let a = 2;
  let b = 5;

  const soma = () => {
    console.log(a + b);
  };

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={soma}>Somando</button>
    </div>
  );
};

export default Challenge;
