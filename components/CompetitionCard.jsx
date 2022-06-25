import Image from "next/image";
import style from "../styles/CompetitionCard.module.css"; 

function CompetitionCard({emblem, title, area}) {
  return (
    <div className={style.CompetitionCard}>
      {/* <div className="emblem"> */}
      <Image layout="fill" src={emblem} alt="" style={{ maxWidth: "80px" }} />
      {/* </div> */}
      <div className="text">
        <h4 className="titles">{title}</h4>
        <p>{area}</p>
      </div>
    </div>
  );
}

export default CompetitionCard