import InformativePageMobile from "../../../../components/mobile/ui/reusables/informative_page";

import { spaces_texts } from "../../../../textos/spaces";

const RehabilitacionPage = () => (
  <InformativePageMobile
    title={spaces_texts.rehabilitacionAuditiva.titulo}
    image="https://images.unsplash.com/photo-1692160756327-f0481e950b28?w=1080"
    paragraphs={spaces_texts.rehabilitacionAuditiva.parrafos}
    backTo="/servicios/espacios"
  />
);

export default RehabilitacionPage;