import SearchBtn from "./search-btn";
import styles from "@/styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h4 className={styles.title}>Type here what you want to find</h4>
      <div className={styles.wrapper}>
        <div className={styles["search-container"]}>
          <input
            id="search-bar"
            className={styles["search-bar"]}
            type="text"
            /* onChange={handleInput} */
            data-testid="search-input"
          />
          <SearchBtn />
        </div>
        {/* <ErrorBtn /> */}
      </div>
    </header>
  );
}
