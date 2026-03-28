import InformativePageDesktop from "./informative_page_desktop";
import { spaces_texts } from "../../../../textos/spaces";

const PsicomotricidadDesktop = () => (
  <InformativePageDesktop
    title={spaces_texts.psicomotricidad.titulo}
    image="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1080"
    paragraphs={spaces_texts.psicomotricidad.parrafos}
    backTo="/servicios/espacios"
  />
);
export default PsicomotricidadDesktop;
