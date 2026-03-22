import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./entry.css";

const posts = {
  "estimulacion-auditiva-temprana": {
    title: "Estimulación auditiva temprana en bebés",
    img: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=1080",
    author: "Lic. María Lorena Valenzuela",
    date: "15 de marzo, 2025",
    paragraphs: [
      "Los primeros meses de vida son cruciales para el desarrollo del sistema auditivo. El cerebro del bebé está en una etapa de máxima plasticidad neurológica, lo que significa que cada experiencia sonora deja una huella duradera.",
      "La estimulación auditiva temprana no requiere equipos especiales ni conocimientos técnicos. Hablarle al bebé, cantarle, nombrar los objetos del entorno y responder a sus vocalizaciones son prácticas cotidianas con un impacto enorme.",
      "Cuando existe una pérdida auditiva no detectada, estas experiencias se pierden silenciosamente. Por eso el screening neonatal es fundamental: permite identificar el problema antes de los tres meses y comenzar la intervención antes de los seis.",
      "En CIAL acompañamos a las familias desde el diagnóstico, brindando orientación y las herramientas necesarias para que el hogar se convierta en el primer y más importante espacio de estimulación.",
    ],
  },
  "lenguaje-y-juego": {
    title: "El juego como motor del lenguaje",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1080",
    author: "Lic. Ana Swchab",
    date: "2 de marzo, 2025",
    paragraphs: [
      "El juego es el lenguaje natural de los niños. A través de él no solo se divierten, sino que desarrollan habilidades cognitivas, sociales y comunicativas que sientan las bases del lenguaje oral y escrito.",
      "Entre los 2 y los 5 años, el juego simbólico —ese en el que el niño usa una caja como auto o una escoba como caballo— es especialmente poderoso para el desarrollo del lenguaje. Permite al niño explorar significados, practicar palabras y construir narrativas.",
      "Como adultos, nuestra participación en el juego tiene un impacto directo. Seguir la iniciativa del niño, nombrar lo que hace, hacer preguntas abiertas y expandir sus producciones son estrategias simples que potencian enormemente el desarrollo comunicativo.",
      "En fonoaudiología utilizamos el juego como herramienta terapéutica central, porque cuando el niño está motivado y comprometido, el aprendizaje ocurre de forma natural y duradera.",
    ],
  },
  "hipoacusia-preguntas-frecuentes": {
    title: "Hipoacusia: preguntas frecuentes",
    img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1080",
    author: "Lic. María Sol Trasarti",
    date: "18 de febrero, 2025",
    paragraphs: [
      "La hipoacusia es la disminución de la capacidad auditiva. Puede ser leve, moderada, severa o profunda, y afectar uno o ambos oídos. Es la discapacidad sensorial más frecuente en el mundo.",
      "¿Cuáles son las causas? Pueden ser genéticas, infecciosas (rubéola, citomegalovirus), relacionadas con complicaciones en el parto, exposición a ruidos fuertes o simplemente el envejecimiento natural.",
      "¿Cómo se detecta? El método más confiable en recién nacidos es el screening auditivo neonatal, que se realiza antes del alta hospitalaria. En adultos, una audiometría es el estudio de referencia.",
      "¿Tiene tratamiento? Sí. Dependiendo del tipo y grado, el tratamiento puede incluir audífonos, implante coclear y rehabilitación auditiva. Cuanto antes se detecta e interviene, mejores son los resultados.",
    ],
  },
  "implante-coclear-vida-cotidiana": {
    title: "Implante coclear: la vida cotidiana después",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1080",
    author: "Lic. Belén Montecino",
    date: "5 de febrero, 2025",
    paragraphs: [
      "Recibir el implante coclear es solo el comienzo del camino. La rehabilitación auditiva posterior es lo que determina en gran medida los resultados que cada persona puede alcanzar.",
      "Los primeros meses son de adaptación: el cerebro necesita aprender a interpretar las señales eléctricas del implante como sonidos con significado. Este proceso lleva tiempo y requiere trabajo constante.",
      "La familia juega un rol fundamental. Un entorno rico en lenguaje, con adultos que hablan claro, nombran el mundo y responden a las producciones del niño, acelera enormemente el proceso de rehabilitación.",
      "En CIAL acompañamos este proceso con sesiones individuales de rehabilitación auditiva, orientación familiar y coordinación con el equipo médico, siempre con el objetivo de maximizar el potencial comunicativo de cada paciente.",
    ],
  },
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return (
      <div className="blog-post-page">
        <Link to="/noticias/blog" className="blog-post-page__back">
          <ChevronLeft size={18} />
          <span>Blog</span>
        </Link>
        <div className="blog-post-page__not-found">
          <p>Post no encontrado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <Link to="/noticias/blog" className="blog-post-page__back">
        <ChevronLeft size={18} />
        <span>Blog</span>
      </Link>

      <img src={post.img} alt={post.title} className="blog-post-page__img" />

      <div className="blog-post-page__content">
        <h1 className="blog-post-page__title">{post.title}</h1>

        <div className="blog-post-page__meta">
          <span className="blog-post-page__author">{post.author}</span>
          <span className="blog-post-page__date">{post.date}</span>
        </div>

        <div className="blog-post-page__body">
          {post.paragraphs.map((p, i) => (
            <p key={i} className="blog-post-page__paragraph">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;