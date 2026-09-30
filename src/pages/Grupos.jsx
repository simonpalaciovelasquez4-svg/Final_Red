import { useState } from "react";
import PageContainer from "../components/common/PageContainer";
import GroupList from "../components/groups/GroupList";
import GroupSearch from "../components/groups/GroupSearch";
import { misGrupos, gruposSugeridos } from "../data/grupos";

export default function Grupos() {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");

  const coincide = (g) => g.nombre.toLowerCase().includes(filtro);

  return (
    <PageContainer maxWidth={1200}>
      <div className="w3-row-padding">
        <div className="w3-col m6">
          <GroupList
            titulo="Mis grupos"
            icono="fa-group"
            claseCabecera="w3-theme-d2"
            grupos={misGrupos.filter(coincide)}
            accion={{ texto: "Ver grupo", clase: "w3-theme-d2" }}
            pie={
              <div className="w3-container w3-padding-16">
                <button className="w3-button w3-block w3-theme-l1">
                  <i className="fa fa-plus"></i> Crear nuevo grupo
                </button>
              </div>
            }
          />
        </div>

        <div className="w3-col m6">
          <GroupList
            titulo="Grupos sugeridos"
            icono="fa-star"
            claseCabecera="w3-theme-d1"
            grupos={gruposSugeridos.filter(coincide)}
            accion={{ texto: "Unirse", clase: "w3-green", icono: "fa-plus" }}
          />
          <br />
          <GroupSearch
            valor={busqueda}
            onCambiar={setBusqueda}
            onBuscar={() => setFiltro(busqueda.toLowerCase())}
          />
        </div>
      </div>
    </PageContainer>
  );
}
