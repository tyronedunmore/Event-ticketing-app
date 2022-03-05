import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderMUI from '../components/header-mui.js'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DateTime from '../components/date-time.js'
import TextField from '@mui/material/TextField';


export default function Home() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className={styles.container}>
      <Head>
        <title>🎟️ NF-Tickets 🎟️</title>
        <meta name="description" content="Team Oracle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderMUI />


      <main className={styles.main}>
        <h1 className={styles.title}>
          Create Tickets for an Event
        </h1>
    <br/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>Event Name</Item>
              <TextField>Event Name</TextField>

            </Grid>
            <Grid item xs={4}>
              <Item>Event Date</Item>
              <Item><DateTime/></Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Ticket Quantity</Item>
              <TextField type="number">Event Name</TextField>

            </Grid>
          </Grid>
        </Box>
      </main>

      <footer className={styles.footer}>
        Team Oracle
      </footer>
    </div>
  )
}
