import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';



import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';

import Home from './pages/home';

import Nosotros from './pages/team/story';  
import Equipo from './pages/team/all/Equipo'
import Owner from './pages/team/owner';

import Noticias from './pages/news';

import Contacto from './pages/contact';


import Talleres from './pages/services/workshop/front';
import TalleresPadres from './pages/services/workshop/parents';
import TalleresProfesionales from './pages/services/workshop/pros';


import Blog from './pages/blog/blog_front'
import BlogEntry1 from './pages/blog/blog_entries/BlogEntry1';



import Psicomotricidad from './pages/services/spaces/psicomotricidad'
import Psicopedagogia from './pages/services/spaces/psicopedagogia';
import Audiologia from './pages/services/spaces/audiologia';
import Psicologia from './pages/services/spaces/psicologia';
import Fonoaudiologia from './pages/services/spaces/fonoaudiologia';
import RehabAuditiva from './pages/services/spaces/rehab_auditiva';





function App() {
  return (
    <HelmetProvider>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/talleres" element={<Talleres />} />
        <Route path="/talleres/padres" element={<TalleresPadres />} />
        <Route path="/talleres/profesionales" element={<TalleresProfesionales />} />

        <Route path="/psicopedagogia" element={<Psicopedagogia />} />
        <Route path="/audiologia" element={<Audiologia />} />
        <Route path="/psicomotricidad" element={<Psicomotricidad />} />
        <Route path="/psicologia" element={<Psicologia />} />
        <Route path="/fonoaudiologia" element={<Fonoaudiologia />} />
        <Route path="/rehab_auditiva" element={<RehabAuditiva />} />
        <Route path="/lorena_valenzuela" element={<Owner/>} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<BlogEntry1 />} />
        <Route path="/blog/*" element={<div>Página no encontrada</div>} />


      </Routes>
      <Footer /> 
    </Router>
    </HelmetProvider>
  );
}

export default App;
