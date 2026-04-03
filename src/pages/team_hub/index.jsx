import { useDevice } from "../../hooks/useDevice";
import TeamMobile from "./team_mobile";
import TeamDesktop from "./team_desktop";

const Team = () => {
  const { isMobile } = useDevice();
  return isMobile ? <TeamMobile /> : <TeamDesktop />;
};

export default Team;
