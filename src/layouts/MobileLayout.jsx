import { Outlet } from "react-router-dom";
import BottomNav from "../components/mobile/navigation/bottom_nav";

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