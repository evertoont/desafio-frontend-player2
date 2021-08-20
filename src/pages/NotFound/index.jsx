import { useHistory } from "react-router-dom";
import { Logo } from "../../assets";
import "./style.scss";

export function NotFound() {
  const history = useHistory();

  setTimeout(() => {
    history.goBack()
  }, 4000);

  return (
    <div className="container_notfound">
      <img src={Logo} alt="logo" />
      <h1>404</h1>
      <h2>A pagina que você está tentando acessar não existe!</h2>
      <span>Você sera redirecionado para a pagina que estava!</span>
    </div>
  );
}
