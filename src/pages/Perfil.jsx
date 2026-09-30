import PageContainer from "../components/common/PageContainer";
import Avatar from "../components/common/Avatar";
import AdCard from "../components/common/AdCard";
import EventCard from "../components/common/EventCard";
import ProfileCard from "../components/profile/ProfileCard";
import PhotoGrid from "../components/profile/PhotoGrid";
import PostComposer from "../components/posts/PostComposer";
import PostCard from "../components/posts/PostCard";
import { publicacionesPerfil } from "../data/publicaciones";
import { IMG } from "../constants";

const datosPerfil = [
  { icono: "fa-pencil", texto: "Diseñador UI" },
  { icono: "fa-home", texto: "Londres, Reino Unido" },
  { icono: "fa-birthday-cake", texto: "1 de abril, 1988" },
  { icono: "fa-users", texto: "1.2k seguidores · 345 siguiendo" },
];

export default function Perfil() {
  return (
    <PageContainer maxWidth={1400}>
      <div className="w3-row">
        <div className="w3-col m3">
          <ProfileCard avatar="avatar3.png" datos={datosPerfil}>
            <button className="w3-button w3-block w3-theme-d2 w3-margin-bottom">
              <i className="fa fa-pencil"></i> Editar perfil
            </button>
          </ProfileCard>
          <br />
          <div className="w3-card w3-round w3-white">
            <div className="w3-container">
              <p><i className="fa fa-camera"></i> Fotos</p>
              <PhotoGrid fotos={["lights.jpg", "nature.jpg", "mountains.jpg"]} columna="w3-third" />
            </div>
          </div>
        </div>

        <div className="w3-col m7">
          <div className="w3-card w3-round w3-white w3-margin-bottom">
            <img src={IMG + "forest.jpg"} alt="Portada" style={{ width: "100%", maxHeight: 200, objectFit: "cover" }} />
            <div className="w3-container w3-padding">
              <h3>Juan Pérez <span className="w3-opacity w3-medium">@juanperez</span></h3>
              <p>Diseñador UI/UX. Amante del café y la fotografía. #w3css</p>
            </div>
          </div>

          <PostComposer titulo="¿Qué estás pensando?" textoInicial="Comparte algo..." />

          {publicacionesPerfil.map((p) => (
            <PostCard key={p.id} {...p} />
          ))}
        </div>

        <div className="w3-col m2">
          <EventCard encabezado="Próximos eventos" icono="fa-calendar" nombre="Reunión de diseño" hora="Viernes 15:00" />
          <br />
          <AdCard />
        </div>
      </div>
    </PageContainer>
  );
}
