import React, { useEffect, useState } from "react";
import style from "../styles/championsleague.module.css";
import styles from "../styles/Container.module.css";
import Image from "next/image"
var axios = require("axios");

function Standings({ standings }) {
  return (
    <div
      style={{ margin: "0 auto", display: "flex", justifyContent: "center" }}
    >
      <div className={style.standingsgroup} style={{ overflowX: "scroll" }}>
        <h5 className={style.groupname}></h5>
        <div className={style.standingstable}>
          <div
            className={
              style["standing-row"] +
              " " +
              style["standing-header"] +
              " " +
              style["text-muted"]
            }
          >
            <div className={style["position"]}></div>
            <div className={style["team-name"]}>Team</div>
            <div className={style["mp"]}>MP</div>
            <div className="win">W</div>
            <div className={style["draw"]}>D</div>
            <div className={style["lose"]}>L</div>
            <div className={style["gf"]}>GF</div>
            <div className={style["ga"]}>GA</div>
            <div className={style["points"]}>Pts</div>
          </div>
          {standings?.map((standing) => (
            <div className={style["standing-row"]} key={standing.team.id}>
              <div className={style["position"]}>{standing.position}</div>
              <div
                className={style["team-name"]}
                style={{ alignItems: "center", fontWeight: "600" }}
              >
                <Image
                  src={standing.team.crest}
                  alt=""
                  width={"30px"}
                  height={"auto"}
                />

                {standing.team.name}
              </div>
              <div className={style["mp"]}>{standing.playedGames}</div>
              <div className="win">{standing.won}</div>
              <div className={style["draw"]}>{standing.draw}</div>
              <div className={style["lose"]}>{standing.lost}</div>
              <div className={style["gf"]}>{standing.goalsFor}</div>
              <div className={style["ga"]}>{standing.goalsAgainst}</div>
              <div className={style["points"]}>{standing.goalDifference}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Standings;
