import styles from './page.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className="card-container">
        Check the url, this page is not found
      </div>
      <img src="/img/404.gif" alt="" width="200" />
    </div>
  );
}
