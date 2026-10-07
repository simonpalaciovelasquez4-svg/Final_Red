import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ user, onLogout }) {
  return (
    <>
      <Navbar user={user} onLogout={onLogout} />
      <Outlet />
      <br />
      <Footer />
    </>
  );
}
