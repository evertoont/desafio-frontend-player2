import { Sidebar, Header, SidebarMobile } from "../../components";
import { Pencil } from "../../assets";
import mensagens from "../../mock/messagem.json";
import { getInfoBank } from "../../services/banksService";

import "./style.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function BankDetail() {
  const [bankInfo, setBankInfo] = useState([]);
  const { code } = useParams();

  useEffect(() => {
    async function handleBankData() {
      const infoBankList = await getInfoBank(code);

      setBankInfo(infoBankList);
    }

    handleBankData();
  }, [code]);

  return (
    <main className="container_banks">
      <Sidebar />
      <SidebarMobile/>
      <section className="content_banks">
        <Header
          title={bankInfo.name}
          contentButton="Editar Banco"
          buttonImage={<Pencil />}
          showArrow={true}
        />

        <section className="bank_info">
          <h4>Detalhes do Banco</h4>

          <div className="info_header">
            <div className="info_name">
              <p className="info_title">Nome do Banco</p>
              <span className="info_data">{bankInfo.name}</span>
            </div>

            <div className="info_detail">
              <div className="info_code">
                <p className="info_title">Codigo do Banco</p>
                <span className="info_data">{bankInfo.code}</span>
              </div>
              <div className="info_ispb">
                <p className="info_title">ISPB</p>
                <span className="info_data">{bankInfo.ispb}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="bank_message-list">
            {mensagens.map((mensagem) => {
              return (
                <div className="bank-message" key={mensagem.id}>
                  <span className="title_message">{mensagem.title}</span>
                  <p>{mensagem.mensagem}</p>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
