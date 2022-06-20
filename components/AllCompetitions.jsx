import React, { useEffect, useState } from "react";
import Container from "./Container";
import style from "../styles/Container.module.css";
import CompetitionCard from "./CompetitionCard";
var axios = require("axios");
function AllCompetitions() {
  const [competitions, setCompetitions] = useState([])
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
      console.log(JSON.stringify(response.data.competitions));
      setCompetitions(response.data.competitions)
    })
    .catch(function (error) {
      console.log(error);
    });

  }, [])
  //    useEffect(() => {
  //      // const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //      // const res = await data.json();
  //      // setninja(res);
  //       var axios = require("axios");

  //       var config = {
  //         method: "get",
  //         url: "https://api.football-data.org//v4/competitions",
  //         headers: {
  //           "X-Auth-Token": "12f41e2536a4437ca924f3d11fd95ab4",
  //             "Content-Type": "application/json",
  //             "Access-Control-Allow-Origin": "*",
  //             "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",

  //         },
  //       };

  //     //  console.log(competitions);
  //    }, []);
  return (
    <div className={style.container}>
      
        <h4>All Competitions</h4>
        {competitions ? (
          <div className="competitionwrap">
            {competitions?.map((competition) => (
              <CompetitionCard
                key={competition.id}
                emblem={competition.emblem}
                title={competition.name}
                area={competition.area.name}
              />
            ))}
          </div>
        ) : (<div className={style.pagebody}>
          <div class={style.ldsripple}>
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
