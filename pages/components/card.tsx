import styles from "@/styles/Home.module.css";

export default function Card() {
  return (
    <div className={styles.card} data-testid="card-element">
      <span className={styles.name}>{/* {pokemonName} */}vvverev</span>
      {/*      <img
          className={styles.view}
          src= {data ? data.sprites.other.dream_world.front_default : ''} 
          width="100"
        /> */}
    </div>
  );
}
