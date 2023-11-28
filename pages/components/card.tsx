"use client";
import { getResource } from "@/services/api";
import { useEffect, useState } from "react";
import { Item, Pokemon } from "@/services/interfaces";
import { useSelector } from "react-redux";
import styles from "@/styles/Home.module.css";

export default function Card({ name, url }: Item) {
  /*   const [details, setDetails] = useState<Pokemon>({
    name: '',
    img: '',
    abilities: [],
  });

  useEffect(() => {
    getDataDetails(url);
  }, []);

  const getDataDetails = (value: string) => {
    getResource(value).then((body) => {
      setDetails({
        name: body.name,
        img: body.sprites.other.dream_world.front_default,
        abilities: body.abilities,
      });
    });
  };
 
console.log('details ', details) */
  return (
    <div className={styles.card} data-testid="card-element">
      <span className={styles.name}>{name}</span>
      {/*      <img
          className={styles.view}
          src= {data ? data.sprites.other.dream_world.front_default : ''} 
          width="100"
        /> */}
    </div>
  );
}
