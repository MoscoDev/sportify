import style from "../styles/CompetitionCard.module.css"; 

function CompetitionCard({emblem, title, area}) {
  return (
    <div className={style.CompetitionCard}>
      {/* <div className="emblem"> */}
        <img src={emblem} alt="" width={80}/>
      {/* </div> */}
      <div className="text">
        <h4 className="title">{title}</h4>
        <p>{area}</p>
      </div>
    </div>
  );
}

export default CompetitionCard