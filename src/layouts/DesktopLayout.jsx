import { Outlet } from "react-router-dom";
import Navbar from "../components/desktop/navigation/navbar";

const DesktopLayout = () => {
  return (
    <div>
      <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DesktopLayout;