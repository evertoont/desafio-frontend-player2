//GLOBAL - components from npm
import React from "react";
import { useHistory } from "react-router-dom";
//STYLES
import "./header.scss";

//COMPONENTS
import { Button } from "../index";

//SERVICES - api, conectors...

//GLOBAL STATE - redux, env...

//ASSETS - icons, images...
import { Notifications, ArrowDown, ArrowLeft } from "../../assets";

//Interfaces
interface HeaderProps {
  title: string;
  contentButton: string;
  buttonImage: any;
  showArrow: boolean;
}

export default function Header({
  title,
  contentButton,
  buttonImage,
  showArrow = false,
}: HeaderProps) {
  //GENERAL
  const history = useHistory();

  //STATES

  //REDUX - Selectors

  //USE EFFECTS

  //FUNCTIONS
  function handleBack() {
    history.goBack();
  }

  return (
    <section className="header">
      {showArrow && <ArrowLeft className="header_back" onClick={handleBack} />}

      <h3 className="header_title">{title}</h3>

      <Button image={buttonImage}>{contentButton}</Button>
      <Notifications className="header_notifications" />
      <p className="header_info">
        Olá, <strong>Beleza Rara</strong>
      </p>

      <ArrowDown className="arrow_header" />
    </section>
  );
}
