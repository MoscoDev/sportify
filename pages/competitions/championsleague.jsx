import Head from "next/head";
import { useEffect, useState } from "react";
import styl from "../../styles/Container.module.css";
import style from "../../styles/championsleague.module.css";
import Link from "next/link";

var axios = require("axios");

function Championsleague() {
  const [standings, setStandings] = useState([]);
  const [matches, setMatches] = useState([]);

const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "STANDINGS",
      title: "STANDINGS",
      content: (
        <>
          {standings ? (
            standings?.map((standing) => (
              <div className={style.standingsgroup} key={standing.group}>
                <h5 className={style.groupname}>{standing.group}</h5>
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
                </div>
              </div>
            ))
          ) : (
            <div className={styl.ldsripple}>
              <div></div>
              <div></div>
            </div>
          )}
        </>
      ),
    },
    {
      id: 2,
      tabTitle: "MATCHES",
      title: "MATCHES",
      content: (
        <div style={{ display: "block", width: "632px" }}>
          <div className={styl.ldsripple}>
            <div></div>
            <div></div>
          </div>
        </div>
      ),
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  
    
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
        
        setStandings(response.data.standings);
      })
      .catch(function (error) {
        console.log(error);
      });
     
  }, []);
  return (
    <div>
      {/* <Head>
         <title>Champions League</title>
         <meta name="description" content="Developed By MoscDev" />
         <link rel="icon" href="/favicon.ico" />
        
      </Head> */}
      <div className="breadcrumbs py-2 mb-3">
        <Link href={"/"}>
          <a className="fancy-link router-link-active">All Competitions</a>
        </Link>
        <span className="mx-2">/</span>
        <span className="text-muted">Champions League</span>
      </div>
      <h4 className="text-primary">
        <strong>Champions League</strong>
      </h4>
      <div>
        <div
          className="tabs"
          style={{
            backgroundColor: "#DD7C00",
            height: "53px",
            padding: "0 15px",
          }}
        >
          {tabs.map((tab, i) => (
            <button
              style={{ fontSize: "20px", lineHeight: "24px" }}
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
            >
              {tab.tabTitle}
            </button>
          ))}
        </div>
        <div>
          {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div>
                  <div>{tab.content}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div>
    //   <Head>
    //     <title>Champions League</title>
    //     <meta name="description" content="Developed By MoscDev" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    // </div>
  );
}

export default Championsleague;
