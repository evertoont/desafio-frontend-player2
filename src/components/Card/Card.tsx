//GLOBAL - components from npm
import moment from "moment";
import { useHistory } from "react-router-dom";
//STYLES
import "./card.scss";

//COMPONENTS

//SERVICES - api, conectors...

//GLOBAL STATE - redux, env...

//ASSETS - icons, images...
import { Users, CheckCard, Megaphone, DotsCard } from "../../assets";

//Interfaces
interface CardProps {
  code: string;
  name: string;
  ispb: string;
}

export default function Card({ code, name, ispb }: CardProps) {
  //GENERAL
  const history = useHistory();
  const data_now = moment().format("DD/MM/YYYY - HH:mm");

  //STATES

  //REDUX - Selectors

  //USE EFFECTS

  //FUNCTIONS

  function handlePageInfo() {
    history.push(`/bankdetail/${code}`);
  }

  return (
    <div
      className={code ? "container_card" : "container_card disable"}
      onClick={code ? handlePageInfo : () => {}}
    >
      <div className="card_header">
        <CheckCard />
        <span className="date_card">{data_now}</span>
        <Users className="users_card" />
        <span className="number_card">23</span>
        <DotsCard className="dots_card" />
      </div>
      <div className="card_content">
        <Megaphone className="card_megaphone" />
        <div className="info_bank">
          <p>
            {name} - {code}
          </p>
          <p>ISPB: {ispb} </p>
        </div>
      </div>
    </div>
  );
}
