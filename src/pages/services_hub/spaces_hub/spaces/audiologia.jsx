import InformativePageMobile from "../../../../components/mobile/ui/reusables/informative_page";

const paragraphs = [
  "Realizamos estudios completos de audición en niños y adultos. Contamos con equipos especializados de última tecnología para el diagnóstico y tratamiento auditivo.",
  "Nuestro equipo de audiólogos está capacitado para detectar y tratar todo tipo de pérdidas auditivas, desde hipoacusias leves hasta profundas, brindando soluciones personalizadas para cada paciente.",
  "Ofrecemos evaluaciones audiológicas completas, adaptación de audífonos, seguimiento post-adaptación y orientación a familias para garantizar el mejor resultado auditivo posible.",
];

const AudiologiaPage = () => (
  <InformativePageMobile
    title="Audiología"
    image="https://images.unsplash.com/photo-1692160756327-f0481e950b28?w=1080"
    paragraphs={paragraphs}
    backTo="/servicios/espacios"
  />
);

export default AudiologiaPage;