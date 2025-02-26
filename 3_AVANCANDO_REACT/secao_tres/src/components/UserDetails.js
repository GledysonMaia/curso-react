const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Trabalho: {job}</p>
      {age >= 18 ? <p>Pode tirar CNH</p> : <p>Não pode tirar CNH</p>}
    </div>
  );
};

export default UserDetails;
