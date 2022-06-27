import React, { useEffect, useState } from "react";
import Container from "./Container";
import styl from "../styles/Container.module.css";
import CompetitionCard from "./CompetitionCard";
import Link from "next/link";
var axios = require("axios");
function AllCompetitions() {
  const [competitions, setCompetitions] = useState([])
  const [loading, setLoading] = useState(true)
  var axios = require("axios");
useEffect(() => {
  var config = {
    method: "get",
    url: "https://api.football-data.org//v4/competitions",
    headers: {
      "X-Auth-Token": "12f41e2536a4437ca924f3d11fd95ab4",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios(config)
    .then(function (response) {
      setCompetitions(response.data.competitions)
      console.log(response.data.competitions); 
      if(competitions !== []){
            setLoading(false)
          }else{
            setLoading(true)
          };
    })
    .catch(function (error) {
      console.log(error);
    });

  }, [])
  return (
    <div>
      <h4>All Competitions</h4>
      {!loading ? (
        <div className="competitionwrap">
          {competitions?.map((competition) => (
            <Link key={competition.id}
              href={
                competition?.code !== "CL"
                  ? {
                      pathname: "/competitions/[slug]",
                      query: { slug: competition.code },
                    }
                  : { pathname: "/competitions/CL" }
              }
            >
            <a>
              <CompetitionCard
                key={competition.id}
                emblem={competition.emblem}
                title={competition.name}
                area={competition.area.name}
              />
            </a>
             </Link>
          ))}
        </div>
      ) : (
        <div style={{ display: "block", width: "632px" }}>
          <div className={styl.ldsripple}>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
// AllCompetitions.getInitialProps = async (ctx) => {
//   const headers = {
//     "X-Auth-Token": "12f41e2536a4437ca924f3d11fd95ab4",
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   };
//   const res = await fetch("https://api.football-data.org//v4/competitions", {headers});
//   const json = await res.json();
//   // console.log(json)
//   return { competitions: json.competitions };
// };

export default AllCompetitions;
