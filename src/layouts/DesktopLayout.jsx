import { Outlet } from "react-router-dom";

const DesktopLayout = () => {
  return (
    <div>
      <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
        Desktop Navbar (placeholder)
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DesktopLayout;