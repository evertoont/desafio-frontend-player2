//GLOBAL - components from npm
import React from "react";
//STYLES
import "./button.scss";

//Interfaces
interface buttonProps {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onclick?: () => void;
  image?: any;
}

//COMPONENTS

//SERVICES - api, conectors...

//GLOBAL STATE - redux, env...

//ASSETS - icons, images...

export default function Button({
  type,
  children,
  onclick,
  image,
}: buttonProps) {
  //GENERAL

  //STATES

  //REDUX - Selectors

  //USE EFFECTS

  //FUNCTIONS

  return (
    <button className="button" type={type} onClick={onclick}>
      {image} {children}
    </button>
  );
}
