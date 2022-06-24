import React, { useEffect, useState } from 'react'
import Tabs  from "../../components/Tabs" 
import axios from 'axios';
 

const Post = () => {
  
   const [matches, setMatches] = useState([]);
   const [comp, setComp] = useState([]);
   const [week, setweek] = useState([]);
  const [standings, setStandings] = useState([]);
   const [location, setLocation] = useState("")
   const usePathname = () => {
     location = window.location.pathname 
    //  return location;
   };
useEffect(() => {
  usePathname()
setLocation(location);

 
    var config = {
      method: "get",
      url:
        "https://api.football-data.org//v4/" +
        `${location}` +
        "/matches?matchday=1",
      headers: {
        "X-Auth-Token": "12f41e2536a4437ca924f3d11fd95ab4",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.matches));
        setMatches(response.data.matches);
        setComp(response.data.competition.name);
        setweek(response.data.filters.matchday);
      })
      .catch(function (error) {
        console.log(error);
      });
      var config = {
        method: "get",
        url:
          "https://api.football-data.org//v4/" + `${location}` + "/standings?",
        headers: {
          "X-Auth-Token": "12f41e2536a4437ca924f3d11fd95ab4",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data.standings[0].table));
          setStandings(response.data.standings[0].table);
        })
        .catch(function (error) {
          console.log(error);
        });
},[] ,location)

  
  

  useEffect(() => {
    
  }, []);
  
  return (<Tabs comp={comp} matches={matches} week={week} standings={standings}/>)
};


export default Post;