import { Outlet } from "react-router-dom";
import BottomNav from "../components/mobile/BottomNav";

const MobileLayout = () => {
  return (
    <div>
      <main style={{ paddingBottom: "70px" }}>
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
};

export default MobileLayout;