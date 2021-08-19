import { Sidebar, Header, Input } from "../../components";

import "./style.scss";

export function ListBanks() {
  return (
    <main className="container_banks">
      <Sidebar />
      <section className="content_banks">
        <Header title="Bancos" contentButton="+ Criar Banco" />

        <div className="banks_list-header">
          <div className="bank_list-amount">
            <h4>Bancos</h4>
            <span>200 bancos</span>
          </div>

          <Input
            className="bank_list-input"
            placeholder="Digite o nome do banco"
            type="text"
            search={true}
          />
        </div>
        <div className="container_list-banks">
          
        </div>
      </section>
    </main>
  );
}
