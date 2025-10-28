import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

function Layout() {
  return (
    <div className="p-d-flex p-flex-column min-h-screen">
      <header className="p-d-flex">
        <h1 className="ml-5 font-bold">Celtaced</h1>
        <Navbar />
      </header>
      <main className="p-flex-grow-1 p-p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
