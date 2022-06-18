import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Container'
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
      <Header/>
      <Container/>
      
    </div>
  )
}
