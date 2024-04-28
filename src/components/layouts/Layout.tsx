import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Outlet />
      {!["/auth/login", "/auth/register"].includes(location.pathname) && (
        <Footer />
      )}
    </>
  );
}

export default Layout;
