import { Sidebar, Header } from "../../components";

import "./style.scss";

export function ListBanks() {
  return (
    <main className="container_banks">
      <Sidebar/>
      <section className="content_banks">
        <Header title="Bancos" contentButton="+ Criar Banco"/>
      </section>
    </main>
  )
}
