import Image from "next/image";
import style from "../styles/CompetitionCard.module.css"; 

function CompetitionCard({emblem, title, area}) {
  return (
    <div className={style.CompetitionCard}>
      {/* <div className="emblem"> */}
      <picture>
      <img  src={emblem} alt=""style={{ maxWidth: "80px" }} />
      </picture>
      {/* </div> */}
      <div className="text">
        <h4 className="titles">{title}</h4>
        <p>{area}</p>
      </div>
    </div>
  );
}

export default CompetitionCard