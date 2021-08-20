import { useHistory } from "react-router-dom";
import { encode as base64_encode } from "base-64";
import { Logo, Image_aside } from "../../assets";
import { Input, Button } from "../../components";

import { store } from "../../auth/store";
import moment from "moment";

import "./style.scss";
import { useEffect } from "react";

export function Home() {
  const history = useHistory();

  useEffect(() => {
    const login = localStorage.getItem("TOKEN_LOGIN");

    if (login) {
      history.push("/banks");
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const token = base64_encode(moment().format("LTS"));

    store.dispatch({
      type: "TOKEN_LOGIN",
      playload: token,
    });
  };

  return (
    <div className="home_page">
      <main className="home_login">
        <div className="container_login">
          <img className="home_logo" src={Logo} alt="logo" />
          <p className="login_slogan">
            Dispare mensagens quando e para quem você quiser.
          </p>

          <form className="home_form" onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              label="E-mail"
              id="email"
              name="email"
              // required={true}
            />
            <Input
              type="password"
              placeholder="Digite sua senha"
              label="Senha"
              name="senha"
              id="password"
              // required={true}
            />
            <Button type="submit">Entrar</Button>

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
          src={Image_aside}
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
