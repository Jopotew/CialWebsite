import img1 from '../../../../assets/Body/Blog/Entry1/1.jpg';
import img2 from '../../../../assets/Body/Blog/Entry1/2.jpg';
import img3 from '../../../../assets/Body/Blog/Entry1/3.png';

const post = {
  title: "Leer antes de saber leer: un viaje al mundo de la primera infancia",
  author: "Lic. Juliana Lamela y Lic. María Eva Skruta",
  date: "2025",
  img: img1,
  content: (
    <div className="blog-post__content">

      <p>
        ¿Sabías que la lectura comienza mucho antes de que un niño aprenda a descifrar letras? La
        investigación <em>Reading in Early Childhood</em>, de Carlos A. Ramírez Noreña y Diana P.
        De Castro Danza, invita a reflexionar sobre este fascinante proceso, desmitificando la idea
        de que la lectura es solo una actividad formal que se aprende en el colegio. En cambio,
        propone que la lectura es una experiencia amplia y profunda que inicia en los primeros
        momentos de la vida, a través de la interacción con el entorno y las personas que rodean
        al niño.
      </p>

      <h3>Los "educadores" como mediadores</h3>
      <p>
        El concepto de "educador" se amplía más allá de los maestros, incluyendo a padres, madres,
        cuidadores, hermanos/as y pares. Estos "educadores" son, en realidad, los primeros guías
        que facilitan la conexión del niño/a con el lenguaje. A través de cuentos, rimas, gestos y
        conversaciones, se construye un puente entre el mundo del niño/a y el vasto universo de los
        signos y los símbolos.
      </p>
      <p>
        Los encuentros significativos con la lectura son fundamentales para el desarrollo integral
        de los/las niños/as. Más allá de enseñar a leer de forma mecánica, lo esencial es generar
        experiencias que despierten su curiosidad y deseo por descubrir. Cuando una persona adulta
        narra una historia con emoción, entonación y cariño, transmite mucho más que palabras:
        ofrece un sentido de pertenencia, una forma de comprender la realidad y la posibilidad de
        imaginar mundos fantásticos.
      </p>

      <img src={img3} alt="Lectura en primera infancia" className="blog-post__inline-img" />

      <h3>El vocabulario: base del aprendizaje</h3>
      <p>
        Uno de los aspectos más importantes que fortalece la lectura en la primera infancia es el
        desarrollo del vocabulario. Según las especialistas Isabel Beck, Margaret McKeown y Linda
        Kucan, en su libro <em>Bringing Words to Life</em>, un vocabulario amplio y rico constituye
        la base para comprender el mundo, interpretar nuevas ideas, comunicarse efectivamente y
        avanzar en el proceso educativo.
      </p>
      <p>
        Este conocimiento no se limita a identificar palabras aisladas o repetir sus definiciones,
        sino que se construye a partir de experiencias significativas, de la historia personal del
        niño y del contacto con el entorno. Así se desarrolla una red semántica que nutre el
        pensamiento, la imaginación y la comprensión global del mundo.
      </p>

      <img src={img2} alt="Vocabulario en primera infancia" className="blog-post__inline-img" />

      <h3>La lectura como un proceso integral</h3>
      <p>La lectura en la primera infancia es un proceso de múltiples capas:</p>
      <ul>
        <li><strong>Lectura de emociones:</strong> los bebés "leen" los sentimientos de sus cuidadores a través de sus gestos y tonos de voz.</li>
        <li><strong>Lectura de imágenes:</strong> los niños interpretan secuencias de ilustraciones, creando historias en su mente.</li>
        <li><strong>Lectura de cuentos:</strong> los cuentos tradicionales se convierten en una herramienta vital para entender las emociones y los desafíos de la vida.</li>
      </ul>
      <p>
        En definitiva, la lectura en la primera infancia permite que los niños/as construyan su
        identidad, comprendan el entorno y encuentren en los relatos una fuente de disfrute,
        conocimiento y descubrimiento personal.
      </p>

      <h3>Sugerencias para fomentar la lectura en casa</h3>
      <ul>
        <li><strong>Leer el mundo:</strong> anima a los niños a "leer" gestos, emociones, imágenes y sonidos.</li>
        <li><strong>Crea encuentros memorables:</strong> leé con entusiasmo, usando voces y entonaciones distintas.</li>
        <li><strong>Narra y conversa:</strong> contá historias familiares, anécdotas o inventá relatos juntos.</li>
        <li><strong>Usá todos los sentidos:</strong> explorá texturas, colores y formas mediante libros y el entorno.</li>
        <li><strong>Tener variedad de libros:</strong> elegí libros coloridos, organizados por categoría o dificultad.</li>
        <li><strong>Presentar materiales multisensoriales:</strong> libros con sonidos, texturas o elementos visuales.</li>
        <li><strong>Hacelo interactivo:</strong> preguntales qué ven, qué sienten o qué creen que pasará.</li>
      </ul>

      <h4>Bibliografía</h4>
      <p>
        Ramírez Noreña, C. A., & de Castro Daza, D. P. (2013). <em>La lectura en la primera infancia</em>. Grafías, (20).<br />
        Pearson, R., & Equipo JEL Aprendizaje. (2017). <em>Una forma diferente de aprender</em>. Paidós.<br />
        Beck, I. L., McKeown, M. G., & Kucan, L. (2002). <em>Bringing Words to Life: Robust Vocabulary Instruction</em>. Guilford Press.
      </p>

    </div>
  ),
};

export default post;