import { useState } from "react";
import PageContainer from "../components/common/PageContainer";
import Tabs from "../components/common/Tabs";
import GeneralSettings from "../components/settings/GeneralSettings";
import PrivacySettings from "../components/settings/PrivacySettings";
import NotificationSettings from "../components/settings/NotificationSettings";

const paneles = {
  General: GeneralSettings,
  Privacidad: PrivacySettings,
  Notificaciones: NotificationSettings,
};

export default function Configuracion() {
  const [activa, setActiva] = useState("General");
  const Panel = paneles[activa];

  return (
    <PageContainer maxWidth={1000}>
      <div className="w3-card w3-round w3-white">
        <div className="w3-container w3-padding-16 w3-theme-d2">
          <h2><i className="fa fa-cogs"></i> Configuración de la cuenta</h2>
        </div>
        <Tabs pestanas={Object.keys(paneles)} activa={activa} onCambiar={setActiva} />
        <Panel />
      </div>
    </PageContainer>
  );
}
