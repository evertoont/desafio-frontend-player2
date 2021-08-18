import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Home,
  Megaphone,
  User,
  Users,
  SignOut,
  Logo_Sidebar,
  ArrowDown,
} from "../../assets";
import "./style.scss";

export function Sidebar() {
  const [openDisparos, setOpenDisparos] = useState(false);
  const [openGrupos, setOpenGrupos] = useState(false);
  const [openContatos, setOpenContatos] = useState(false);

  const history = useHistory();

  function handleLogout() {
    history.push("/");
  }

  return (
    <section className="sidebar">
      <div className="sidebar_header">
        <img src={Logo_Sidebar} alt="Logo" />
        <h2>Informem-se</h2>
      </div>

      <div className="sidebar_item">
        <div className="sidebar_primary_item">
          <Home />
          <p>Inicio</p>
        </div>
      </div>

      <div className="sidebar_item">
        <div
          className="sidebar_primary_item"
          onClick={() => setOpenDisparos(!openDisparos)}
        >
          <Megaphone />
          <p>Disparos</p>
          <ArrowDown className={openDisparos ? "arrow  reverse" : "arrow"} />
        </div>

        {openDisparos && (
          <ul className="sidebar_sub_item">
            <li>Disparos</li>
            <li>Criar Disparos</li>
          </ul>
        )}
      </div>

      <div className="sidebar_item">
        <div
          className="sidebar_primary_item"
          onClick={() => setOpenGrupos(!openGrupos)}
        >
          <User />
          <p>Grupos</p>
          <ArrowDown className={openGrupos ? "arrow  reverse" : "arrow"} />
        </div>

        {openGrupos && (
          <ul className="sidebar_sub_item">
            <li>Lista de Grupos</li>
            <li>Criar Grupos</li>
          </ul>
        )}
      </div>

      <div className="sidebar_item">
        <div
          className="sidebar_primary_item"
          onClick={() => setOpenContatos(!openContatos)}
        >
          <Users />
          <p>Contatos</p>
          <ArrowDown className={openContatos ? "arrow  reverse" : "arrow"} />
        </div>

        {openContatos && (
          <ul className="sidebar_sub_item">
            <li>Contatos</li>
            <li>Adicionar Contatos</li>
          </ul>
        )}
      </div>

      <div className="sidebar_item logout" onClick={handleLogout}>
        <div className="sidebar_primary_item">
          <SignOut />
          <p>Sair</p>
        </div>
      </div>
    </section>
  );
}
