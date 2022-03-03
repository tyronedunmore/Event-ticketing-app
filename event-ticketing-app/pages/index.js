import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ConnectWallet, useWallet } from '@web3-ui/core';

export default function Home() {
  const { connection } = useWallet();

  return (
    <div className={styles.container}>
      <Head>
        <title>NF-Tickets</title>
        <meta name="description" content="team Oracle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.web3}>
        <ConnectWallet />
        <div>{connection.ens || connection.userAddress}</div>
      </div>
      <h1 className={styles.header}>
          NF-Tickets
        </h1>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Create Tickets for an Event
        </h1>

        <div className={styles.card}>
          <p className={styles.description}>
            Enter the Name of Your Event
          </p>

          <input id={styles.event} type="text" autocomplete="name" placeholder=" Name your event" required />
        </div>

        <div className={styles.card}>
          <p className={styles.description}>
            Date of Event
          </p>
          

          <input id={styles.event} type="date" autocomplete="name" required />
        </div>

        <div className={styles.card}>
          <p className={styles.description}>
            Enter Number of Tickets to Create 
          </p>
          

          <input id={styles.event} type="text" autocomplete="name" placeholder=" Number of tickets" required />
        </div>

        <div className={styles.card} id={styles.coloredButton}>
    
          <button className={styles.button} type="button">Mint!</button>
          
        </div>
        

      </main>

      <footer className={styles.footer}>
        Team Oracle
      </footer>
    </div>
  )
}
