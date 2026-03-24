import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDevice } from "./hooks/useDevice";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";

import Home from "./pages/home";
import Team from "./pages/team_hub";
import Services from "./pages/services_hub";
import Contact from "./pages/contact";
import OwnerPage from "./pages/team_hub/owner";
import WorkshopsPage from "./pages/services_hub";
import FamiliesPage from "./pages/services_hub/workshops/family";
import ProfessionalsPage from "./pages/services_hub/workshops/profesionals";
import EspaciosPage from "./pages/services_hub/spaces_hub";
import AudiologiaPage from "./pages/services_hub/spaces_hub/spaces/audiologia";
import FonoaudiologiaPage from "./pages/services_hub/spaces_hub/spaces/fonoaudiologia";
import PsicologiaPage from "./pages/services_hub/spaces_hub/spaces/psicologia";
import PsicomotricidadPage from "./pages/services_hub/spaces_hub/spaces/psicomotricidad";
import RehabilitacionPage from "./pages/services_hub/spaces_hub/spaces/rehabilitacion";
import NovedadesPage      from "./pages/novedades";
import NoticiasListPage   from "./pages/novedades/news";
import BlogListPage       from "./pages/novedades/blog";
import BlogPostPage       from "./pages/novedades/blog/blog_post_page";

function App() {
  const { isMobile } = useDevice();
  const Layout = isMobile ? MobileLayout : DesktopLayout;

  return (
    <BrowserRouter basename="/CialWebsite/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"                                        element={<Home />} />
          <Route path="/equipo"                                  element={<Team />} />
          <Route path="/equipo/lorena-valenzuela"                element={<OwnerPage />} />
          <Route path="/novedades"                   element={<NovedadesPage />} />
          <Route path="/novedades/noticias"          element={<NoticiasListPage />} />
          <Route path="/novedades/blog"              element={<BlogListPage />} />
          <Route path="/novedades/blog/:slug"        element={<BlogPostPage />} />
          <Route path="/servicios"                               element={<Services />} />
          <Route path="/servicios/talleres"                      element={<WorkshopsPage />} />
          <Route path="/servicios/talleres/familias"             element={<FamiliesPage />} />
          <Route path="/servicios/talleres/profesionales"        element={<ProfessionalsPage />} />
          <Route path="/servicios/espacios"                      element={<EspaciosPage />} />
          <Route path="/servicios/espacios/audiologia"           element={<AudiologiaPage />} />
          <Route path="/servicios/espacios/fonoaudiologia"      element={<FonoaudiologiaPage />} />
          <Route path="/servicios/espacios/psicologia"          element={<PsicologiaPage />} />
          <Route path="/servicios/espacios/psicomotricidad"     element={<PsicomotricidadPage />} />
          <Route path="/servicios/espacios/rehabilitacion-auditiva"      element={<RehabilitacionPage />} />
          <Route path="/contacto"                                element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;