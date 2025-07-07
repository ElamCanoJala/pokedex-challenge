import { Outlet } from "react-router-dom";
import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/atoms/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
