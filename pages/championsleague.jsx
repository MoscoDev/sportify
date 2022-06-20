import Head from 'next/head'
import { useEffect, useState } from 'react';
import AllCompetitions from '../components/AllCompetitions'
import CompetitionCard from '../components/CompetitionCard';
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
var axios = require("axios");

function championsleague() {
  

  const [standings, setStandings] = useState([])
  
useEffect(() => {
  var config = {
    method: "get",
    url: "https://api.football-data.org//v4/competitions/CL/standings",
    headers: {
      "X-Auth-Token": "12f41e2536a4437ca924f3d11fd95ab4",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.competitions));
      setStandings(response.data.standings);
    })
    .catch(function (error) {
      console.log(error);
    });

  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Champions League</title>
        <meta name="description" content="Developed By MoscDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h4>All Competitions</h4>
      {standings ? (
        <div className="competitionwrap">
          {standings?.map((standing) => (
            <div
              key={standing.group}
            >
                <p>{standing.group}</p>
                <p>{standing.table}</p>
                <p></p>
            </div>
          ))}
        </div>
      ) : (
        <div className={style.pagebody}>
          <div class={style.ldsripple}>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default championsleague