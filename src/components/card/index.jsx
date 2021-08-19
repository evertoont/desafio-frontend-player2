import moment from "moment";

import { Users, CheckCard, Megaphone, DotsCard } from "../../assets";

import "./style.scss";

export function Cardbank() {

  const data_now = moment().format('DD/MM/YYYY - HH:mm');

  return (
    <div className="container_card">
      <div className="card_header">
        <CheckCard />
        <span className="date_card">
          {data_now}
        </span>
        <Users className="users_card"/>
        <span className="number_card">23</span>
        <DotsCard className="dots_card"/>
      </div>
      <div className="card_content">
        <Megaphone className="card_megaphone"/>
        <div className="info_bank">
          <p>Banco do Brasil - 031</p>
          <p>ISPB: 00381699 </p>
        </div>
      </div>
    </div>
  );
}
