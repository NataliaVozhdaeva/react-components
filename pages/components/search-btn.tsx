"use client";
import styles from "@/styles/Home.module.css";

export default function SearchBtn() {
  const clickHandler = () => {
    console.log("hi");
  };

  return (
    <button
      type="button"
      className={styles.btn} /* onClick={searchHandler} */
      onClick={clickHandler}
    >
      Search
    </button>
  );
}
