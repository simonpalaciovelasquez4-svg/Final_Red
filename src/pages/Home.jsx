import PageContainer from "../components/common/PageContainer";
import Accordion from "../components/common/Accordion";
import AlertaCerrable from "../components/common/AlertaCerrable";
import AdCard from "../components/common/AdCard";
import EventCard from "../components/common/EventCard";
import ProfileCard from "../components/profile/ProfileCard";
import PhotoGrid from "../components/profile/PhotoGrid";
import InterestTags from "../components/profile/InterestTags";
import FriendRequest from "../components/profile/FriendRequest";
import PostComposer from "../components/posts/PostComposer";
import PostCard from "../components/posts/PostCard";
import { publicacionesInicio } from "../data/publicaciones";

const datosPerfil = [
  { icono: "fa-pencil", texto: "Diseñador UI" },
  { icono: "fa-home", texto: "Londres, Reino Unido" },
  { icono: "fa-birthday-cake", texto: "1 de abril, 1988" },
];

const secciones = [
  { id: "grupos", titulo: "Mis grupos", icono: "fa-circle-o-notch", contenido: <p>Aún no tienes grupos.</p> },
  { id: "eventos", titulo: "Mis eventos", icono: "fa-calendar-check-o", contenido: <p>No hay eventos próximos.</p> },
  {
    id: "fotos",
    titulo: "Mis fotos",
    icono: "fa-users",
    contenido: (
      <>
        <br />
        <PhotoGrid fotos={["lights.jpg", "nature.jpg", "mountains.jpg", "forest.jpg", "snow.jpg", "nature.jpg"]} />
      </>
    ),
  },
];

const intereses = ["Noticias", "Juegos", "Amigos", "Comida", "Diseño", "Arte", "Fotos"];

export default function Home() {
  return (
    <PageContainer maxWidth={1400}>
      <div className="w3-row">
        <div className="w3-col m3">
          <ProfileCard avatar="avatar3.png" datos={datosPerfil} />
          <br />
          <Accordion secciones={secciones} />
          <br />
          <InterestTags intereses={intereses} />
          <br />
          <AlertaCerrable titulo="¡Hey!">
            Hay personas viendo tu perfil. Descubre quiénes son.
          </AlertaCerrable>
        </div>

        <div className="w3-col m7">
          <div className="w3-row-padding">
            <div className="w3-col m12">
              <PostComposer titulo="Comparte cómo te sientes" textoInicial="Estado: Feliz" />
            </div>
          </div>
          {publicacionesInicio.map((p) => (
            <PostCard key={p.id} {...p} />
          ))}
        </div>

        <div className="w3-col m2">
          <EventCard encabezado="Próximos eventos:" imagen="forest.jpg" nombre="Vacaciones" hora="Viernes 15:00" />
          <br />
          <FriendRequest nombre="Jane Doe" avatar="avatar6.png" />
          <br />
          <AdCard />
        </div>
      </div>
    </PageContainer>
  );
}
