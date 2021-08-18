import "./style.scss";

export function Input(props) {
  const {label, type, placeholder, id, name, required=true} = props

  return (
    <div className="input_container">
      <label className="label" htmlFor={id}>{label}</label>
      <input className="input" type={type} placeholder={placeholder} id={id} name={name} required={required}/>
    </div>
  );
}
