import styles from "./Cars.module.css"

const Cars = ({ brand, color, km }) => {
  return (
    <div>
      <h2 className={styles.title_h1}>Detalhes do carro</h2>
      <ul>
        <li className={styles.lists}>Marca: {brand}</li>
        <li className={styles.lists}>Cor: {color}</li>
        <li className={styles.lists}>Quilômetros: {km}</li>
      </ul>
    </div>
  );
};

export default Cars;
