import moment from "moment";
import { useHistory } from "react-router-dom";

import { Users, CheckCard, Megaphone, DotsCard } from "../../assets";

import "./style.scss";

export function Cardbank({ data }) {
  const history = useHistory();
  const data_now = moment().format("DD/MM/YYYY - HH:mm");

  let code = data.code

  function handlePageInfo() {
    history.push(`/bankdetail/${code}`);
  }

  return (
    <div
      className={data.code ? "container_card" : "container_card disable"}
      onClick={code ? handlePageInfo : null}
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
            {data.name} - {data.code}
          </p>
          <p>ISPB: {data.ispb} </p>
        </div>
      </div>
    </div>
  );
}
