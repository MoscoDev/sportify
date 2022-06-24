import Head from "next/head";
import AllCompetitions from "../components/AllCompetitions";
import Header from "../components/Header";
import Standings from "../components/Standings";
import Tabs from "../components/Tabs";
import styles from "../styles/Home.module.css";
import style from "../styles/Container.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sportify</title>
        <meta name="description" content="Developed By MoscDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AllCompetitions />
    </div>
  );
}
