import { Button } from "../index";
import { Notifications, ArrowDown, ArrowLeft } from "../../assets";

import "./style.scss";
import { useHistory } from "react-router-dom";

export function Header(props) {
  const { title, contentButton, showArrow = false } = props;

  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <section className="header">
      {showArrow && <ArrowLeft className="header_back" onClick={handleBack} />}

      <h3 className="header_title">{title}</h3>

      <Button>{contentButton}</Button>
      <Notifications className="header_notifications" />
      <p className="header_info">
        Olá, <strong>Beleza Rara</strong>
      </p>

      <ArrowDown className="arrow_header" />
    </section>
  );
}
