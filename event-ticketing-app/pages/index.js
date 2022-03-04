import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { ConnectWallet, useWallet } from '@web3-ui/core';

export default function Home() {
  const { connection } = useWallet();
  let [event, setEvent] = useState({});

  const validDate = (e) => {
    let curDate = new Date();
    let tempDate = new Date(e.target.value);

    if(curDate <= tempDate) {
      setEvent({...event, 'date': e.target.value})
    } else {
      alert('invalid date')
    }
  }

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

        <form className={styles.main}>
          <div className={styles.card}>
            <p className={styles.description}> Enter the Name of Your Event </p>

            <input className={styles.event} type="text" autoComplete="name" placeholder="Name your event" onChange={(e) => { 
              setEvent({'title': e.target.value})
            }} required />
          </div>

          <div className={styles.card}>
            <p className={styles.description}> Date of Event </p>

            <input id="date" className={styles.event} type="date" autoComplete="name" onChange={validDate} required />
          </div>

          <div className={styles.card}>
            <p className={styles.description}> Number of Tickets </p>

            <input className={styles.event} type="text" autoComplete="name" placeholder="Number of tickets" 
              onChange={(e) => { 
                setEvent({...event, 'tickets': Number(e.target.value)})
            }} required />
          </div>

           <input type="submit" className={styles.fancyButton} onClick={(e) => {alert(JSON.stringify(event))}}/>
        </form>
      </main>

      <footer className={styles.footer}>
        Team Oracle
      </footer>
    </div>
  )
}
