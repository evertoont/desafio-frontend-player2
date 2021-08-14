import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.svg";
import image_aside from "../../assets/image_aside.svg";
import { Input, Button } from "../../components";

import "./style.scss";

export function Home() {
  const history = useHistory();

  const handleBanksPage = (event) => {
    event.preventDefault();

    history.push("/banks");
  };

  return (
    <div className="home_page">
      <main className="home_login">
        <div className="container_login">
          <img className="home_logo" src={logo} alt="logo" />
          <p className="login_slogan">
            Dispare mensagens quando e para quem você quiser.
          </p>

          <form className="home_form">
            <Input
              type="text"
              placeholder="Digite seu e-mail"
              label="E-mail"
              id="email"
              name="email"
            />
            <Input
              type="password"
              placeholder="Digite sua senha"
              label="Senha"
              name="senha"
              id="password"
            />
            <Button type="submit" onclick={handleBanksPage}>
              Entrar
            </Button>

            <span>
              Não tem uma conta? <strong>Cadastre-se</strong>
            </span>
          </form>
        </div>
        <footer className="copyright">
          Copyright © 2010-2021 - Informem-se Company S.L. All rights reserved.
        </footer>
      </main>
      <aside className="home_aside">
        <img
          className="aside_image"
          src={image_aside}
          alt="homem no computador"
        />
        <div className="aside_text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sapien mi, commodo ut pellentesque non, fermentum at risus. Sed eu
            augue sit amet leo scelerisque cursus vitae ac dolor
          </span>
        </div>
      </aside>
    </div>
  );
}
