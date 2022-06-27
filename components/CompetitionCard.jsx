import Image from "next/image";
import style from "../styles/CompetitionCard.module.css"; 

function CompetitionCard({emblem, title, area, flag}) {
  return (
    <div className={style.CompetitionCard}>
      {/* <div className="emblem"> */}
     
      <img  src={emblem || flag} alt=""style={{ maxWidth: "80px" }} />
      {/* </div> */}
      <div className="text">
        <h4 className="titles">{title}</h4>
        <p>{area}</p>
      </div>
    </div>
  );
}

export default CompetitionCard