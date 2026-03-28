import InformativePageDesktop from "./informative_page_desktop";
import { spaces_texts } from "../../../../textos/spaces";

const PsicologiaDesktop = () => (
  <InformativePageDesktop
    title={spaces_texts.psicologia.titulo}
    image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1080"
    paragraphs={spaces_texts.psicologia.parrafos}
    backTo="/servicios/espacios"
  />
);
export default PsicologiaDesktop;
