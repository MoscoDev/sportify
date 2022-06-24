import AllCompetitions from "../components/AllCompetitions";
import CompetitionCard from "../components/CompetitionCard";
import Header from "../components/Header";
import styl from "../styles/Container.module.css";
import styles from "../styles/Home.module.css";
import style from "../styles/championsleague.module.css";

function Tab({ standings }) {
  return (
    <div className="tabs effect-3">
      <input type="radio" id="tab-1" name="tab-effect-3" checked="checked" />
      <span>STANDINGS</span>

      <input type="radio" id="tab-2" name="tab-effect-3" />
      <span>MATCHES</span>

      {/* <input type="radio" id="tab-3" name="tab-effect-3" />
      <span>Book Mark</span>

      <input type="radio" id="tab-4" name="tab-effect-3" />
      <span>Upload</span>

      <input type="radio" id="tab-5" name="tab-effect-3" />
      <span>Settings</span> */}

      <div className="line ease"></div>

      <div className="tab-content">
        <section id="tab-item-1">
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
            <div class={styl.ldsripple}>
              "loading"
              <div>loading</div>
              <div></div>
            </div>
          )}
        </section>
        <section id="tab-item-2">
          <div class={styl.ldsripple}>
            <div></div>
            <div></div>
          </div>
        </section>
        {/* <section id="tab-item-3">
          <h1>Three</h1>
        </section>
        <section id="tab-item-4">
          <h1>Four</h1>
        </section>
        <section id="tab-item-5">
          <h1>Five</h1>
        </section> */}
      </div>
    </div>
  );
}

export default Tab;
