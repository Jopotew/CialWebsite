import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDevice } from "./hooks/useDevice";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";

import Home from "./pages/home";
import Team from "./pages/team_hub";
import News from "./pages/news_hub";
import Services from "./pages/services_hub";
import Contact from "./pages/contact";

function App() {
  const { isMobile } = useDevice();
  const Layout = isMobile ? MobileLayout : DesktopLayout;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;