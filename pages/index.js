import Head from 'next/head'
import AllCompetitions from '../components/AllCompetitions'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sportify</title>
        <meta name="description" content="Developed By MoscDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AllCompetitions />
    </div>
  );
}
