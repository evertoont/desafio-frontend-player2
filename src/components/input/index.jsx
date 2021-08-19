import { Search } from "../../assets";

import "./style.scss";

export function Input(props) {
  const {
    label,
    type,
    placeholder,
    id,
    name,
    value,
    onChange,
    search = false,
    required = false,
  } = props;

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
