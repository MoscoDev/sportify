import Head from 'next/head'
import { useEffect, useState } from 'react';
import AllCompetitions from '../components/AllCompetitions'
import CompetitionCard from '../components/CompetitionCard';
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import style from "../styles/championsleague.module.css";
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
          <div class={style.standingsgroup}>
            <h5 class={style.groupname}>
              GROUP A
            </h5>
            <div class={style.standingstable}>
              <div
                class={
                  style["standing-row"] +
                  "" +
                  style["standing-header"] +
                  "" +
                  style["text-muted"]
                }
              >
                <div class="position"></div>
                <div class="team-name">Team</div>
                <div class="mp">MP</div>
                <div class="win">W</div>
                <div class="draw">D</div>
                <div class="lose">L</div>
                <div class="gf">GF</div>
                <div class="ga">GA</div>
                <div class="points">Pts</div>
              </div>
            </div>
          </div>
          {standings?.map((standing) => (
            <div key={standing.group}>
              <p>{standing.group}</p>
              <p>{standing.table}</p>
              <div class={style.standingsgroup}>
                <h5 class={style.groupname}>
                  <strong>GROUP A</strong>
                </h5>
                <div class={style.standingstable}>
                  <div
                    class={
                      style["standing-row"] +
                      "" +
                      style["standing-header"] +
                      "" +
                      style["text-muted"]
                    }
                  >
                    <div class="position"></div>
                    <div class="team-name">Team</div>
                    <div class="mp">MP</div>
                    <div class="win">W</div>
                    <div class="draw">D</div>
                    <div class="lose">L</div>
                    <div class="gf">GF</div>
                    <div class="ga">GA</div>
                    <div class="points">Pts</div>
                  </div>
                </div>
              </div>
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