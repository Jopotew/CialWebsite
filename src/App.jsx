import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDevice } from "./hooks/useDevice";

import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";

// páginas base
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const { isMobile } = useDevice();

  const Layout = isMobile ? MobileLayout : DesktopLayout;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;