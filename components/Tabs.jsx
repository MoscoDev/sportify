import Link from "next/link";
import React, { useState } from "react";
import MatchCard from "./MatchCard";
import Standings from "./Standings";
import style from "../styles/championsleague.module.css";

const Tabs = ({comp,matches,standings,week}) => {
 
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "STANDINGS",
      content: matches ? ( <Standings standings={standings} />) : (
        <div style={{ display: "block", width: "632px" }}>
          <div class={styl.ldsripple}>
            <div></div>
            <div></div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      tabTitle: "MATCHES",
      content: matches ? (
        <MatchCard matches={matches} week={week} />
      ) : (
        <div style={{ display: "block", width: "632px" }}>
          <div class={styl.ldsripple}>
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

  return (
    <div className="tab-container">
      <div className="breadcrumbs py-2 mb-3">
        <Link href={"/"}>
          <a className="fancy-link router-link-active">All Competitions</a>
        </Link>
        <span className="mx-2">/</span>

        <span className="text-muted" style={{display:"inline-block"}}>{comp}</span>
      </div>
      <h4 className="text-primary">
        <strong>{comp}</strong>
      </h4>
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
  );
};

export default Tabs;
