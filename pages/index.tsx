import Head from "next/head";
import Header from "./components/header";
import Card from "./components/card";
import { Provider } from "react-redux";
import { getResource } from "@/services/api";
import { FetchBody, Item } from "@/services/interfaces";
import store from "@/store/store";

import styles from "@/styles/Home.module.css";
import Link from "next/link";

export const getServerSideProps = async () => {
  const data = await getResource("");
  const pokeList = data.results;

  return {
    props: {
      pokeList,
    },
  };
};

export default function Home({ pokeList }: FetchBody) {
  const currentPokeList = pokeList;
  return (
    <Provider store={store}>
      <Head>
        <title>Pokemons in Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main>
          <div className={styles["main-wrapper"]} data-testid="main-screen">
            <div className={styles["wrapper-outlet"]}>
              <div className={styles["card-container"]}>
                {currentPokeList.map((item: Item) => {
                  return (
                    <Link href={`/pokemon/${item.name}`} key={item.name}>
                      <Card {...item} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Provider>
  );
}
