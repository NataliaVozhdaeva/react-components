import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h4 className={styles.title}>Type here what you want to find</h4>
        <div className={styles.wrapper}>
          <div className={styles['search-container']}>
            <input
              id="search-bar"
              className={styles['search-bar']}
              type="text"
              /* onChange={handleInput} */
              data-testid="search-input"
            />
            <button
              type="button"
              className={styles.btn} /* onClick={searchHandler} */
              /*  onClick={console.log('hi')} */
            >
              Search
            </button>
          </div>
          {/* <ErrorBtn /> */}
        </div>
      </header>
      <main>
        <div className={styles['main-wrapper']} data-testid="main-screen">
          <div className={styles['wrapper-outlet']}></div>
        </div>
      </main>
    </div>
  );
}
