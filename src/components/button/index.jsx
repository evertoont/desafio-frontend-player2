import "./style.scss";

export function Button(props) {
  const { type, children, onclick } = props;

  return (
    <button className="button" type={type} onClick={onclick}>
      {children}
    </button>
  );
}
