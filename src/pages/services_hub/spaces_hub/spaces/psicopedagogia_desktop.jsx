import InformativePageDesktop from "./informative_page_desktop";
import { spaces_texts } from "../../../../textos/spaces";

const PsicopedagogiaDesktop = () => (
  <InformativePageDesktop
    title={spaces_texts.psicopedagogia.titulo}
    image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1080"
    paragraphs={spaces_texts.psicopedagogia.parrafos}
    backTo="/servicios/espacios"
  />
);
export default PsicopedagogiaDesktop;
