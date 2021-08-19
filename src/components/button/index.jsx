import "./style.scss";

export function Button(props) {
  const { type, children, onclick, image } = props;

  return (
    <button className="button" type={type} onClick={onclick}>
      {image} {children}
    </button>
  );
}
