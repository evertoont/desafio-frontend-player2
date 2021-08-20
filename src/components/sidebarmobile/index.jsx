import { Logo_Sidebar } from "../../assets";
import "./style.scss";

export function SidebarMobile() {
  return (
    <section className="sidebar_mobile">
      <div className="sidebar_mobile-header">
        <img src={Logo_Sidebar} alt="Logo" />
      </div>
    </section>
  );
}
