import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDevice } from "./hooks/useDevice";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";

import Home from "./pages/home";
import Team from "./pages/team_hub";
import News from "./pages/news_hub";
import Services from "./pages/services_hub";
import Contact from "./pages/contact";
import OwnerPage from "./pages/team_hub/owner";
import WorkshopsPage from "./pages/services_hub";
import FamiliesPage from "./pages/services_hub/workshops/family";
import ProfessionalsPage from "./pages/services_hub/workshops/profesionals";
import EspaciosPage from "./pages/services_hub/spaces_hub";
import AudiologiaPage from "./pages/services_hub/spaces_hub/spaces/audiologia";

function App() {
  const { isMobile } = useDevice();
  const Layout = isMobile ? MobileLayout : DesktopLayout;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/lorena_valenzuela" element={<OwnerPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />

          <Route path="/services"                          element={<WorkshopsPage />} />
          <Route path="/services/talleres/familias"        element={<FamiliesPage />} />
          <Route path="/services/talleres/profesionales"   element={<ProfessionalsPage />} />
          <Route path="/services/espacios"                 element={<EspaciosPage />} />
          <Route path="/services/espacios/audiologia"      element={<AudiologiaPage />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;