import { useEffect, useState } from "react";
import { Sidebar, Header, Input, Cardbank, Loading, SidebarMobile } from "../../components";

import { getDataBank } from "../../services/banksService";

import "./style.scss";

export function ListBanks() {
  const [dataBanks, setDataBanks] = useState([]);
  const [nameBank, setNameBank] = useState("");

  useEffect(() => {
    async function handleBankData() {
      const dataBanksList = await getDataBank();

      setDataBanks(dataBanksList);
    }

    handleBankData();
  }, []);

  const banksLowerCase = nameBank.toLowerCase();

  const bankFiltered = dataBanks.filter((data) =>
    data.fullName.toLowerCase().includes(banksLowerCase)
  );

  return (
    <main className="container_banks">
      <Sidebar />
      <SidebarMobile />
      <section className="content_banks">
        <Header title="Bancos" contentButton="+ Criar Banco" />

        <div className="banks_list-header">
          <div className="bank_list-amount">
            <h4>Bancos</h4>
            <span>{bankFiltered.length} bancos</span>
          </div>

          <Input
            className="bank_list-input"
            placeholder="Digite o nome do banco"
            type="text"
            search={true}
            value={nameBank}
            onChange={(event) => setNameBank(event.target.value)}
          />
        </div>
        <div className="container_list-banks">
          {dataBanks.length > 0 ? (
            bankFiltered.map((data) => {
              return <Cardbank key={data.ispb} data={data} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </section>
    </main>
  );
}
