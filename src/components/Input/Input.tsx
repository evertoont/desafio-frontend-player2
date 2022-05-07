//GLOBAL - components from npm
import React from "react";
//STYLES
import "./input.scss";

//COMPONENTS

//SERVICES - api, conectors...

//GLOBAL STATE - redux, env...

//ASSETS - icons, images...
import { Search } from "../../assets";

//Interfaces
interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange: () => void;
  search?: Boolean;
  required: any;
}

export default function Input({
  label,
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
  search = false,
  required = false,
}: InputProps) {
  //GENERAL

  //STATES

  //REDUX - Selectors

  //USE EFFECTS

  //FUNCTIONS

  return (
    <div className="input_container">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
      {search && <Search className="search" />}
    </div>
  );
}
