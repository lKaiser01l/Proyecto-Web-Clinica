import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../compartido/footer/footer.component";
import { HeaderComponent } from "../compartido/header/header.component";

interface BlogDato {
  id: number;
  title: string;
  description: string;
  detail: string;
  author: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, FooterComponent, FormsModule, HeaderComponent],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  searchTerm = '';
  selectedCategory = 'Todas';
  selectedBlog: BlogDato | null = null;

  blogdatos: BlogDato[] = [
    {
      id: 1,
      title: '¿Cuáles son las áreas de un laboratorio clínico?',
      description: 'La función del análisis de muestras biológicas como sangre, orina, heces y tejidos.',
      detail: `Un laboratorio clínico se divide en áreas especializadas como hematología, microbiología, bioquímica, inmunología y banco de sangre. 
Cada una cumple una función específica en el diagnóstico de enfermedades y seguimiento de tratamientos médicos.`,
      author: 'Paola Lazo Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img1.png',
      category: 'Laboratorio',
    },
    {
      id: 2,
      title: '¿Cuándo llevar a los niños a su primera visita al dentista?',
      description: 'La primera visita de los niños al odontólogo.',
      detail: `Cada vez vemos más niños muy pequeños con problemas de caries. Por eso, los odontólogos recomiendan, por un lado, iniciar la higiene bucal a edad muy temprana, incluso, antes de que aparezca el primer diente y, por otro, acudir al dentista por primera vez cuando el bebé cumpla su primer año de edad.

Al cumplir su primer año, visita al dentista

Hace años, la recomendación de los pediatras era realizar la primera revisión dental cuando la dentadura de leche, compuesta por 20 dientes, estuviera completa, es decir, alrededor de los tres años. Sin embargo, la presencia de caries en los preescolares y la aparición en niños menores de 3 años de otros problemas asociados a la primera dentición han forzado a los especialistas a cambiar la recomendación a los 12 meses, en función de establecer medidas preventivas. Tras la primera revisión, los controles se deben realizar, si todo va bien, una vez al año.

La primera visita de los niños al odontólogo

El profesional le hará una revisión de dientes y encías, verá si existen caries del biberón, se evaluarán posibles problemas como mordida cruzada, abierta o alteraciones de crecimiento y, seguramente, iniciará un historial sobre los antecedentes médicos y dentales del niño. Es el momento de corregir a tiempo malos hábitos e introducir desde temprano buenos hábitos de limpieza.

Cuando llegue el momento de acudir al dentista, los padres deben esforzarse por transmitir a su hijo una sensación de confianza y de seguridad. Es necesario que entre el niño y el dentista haya una buena relación y no se creen miedos o temores desde el principio.

Examina los dientes del bebé

Conviene tener el hábito de examinar regularmente los dientes del bebé. Ten en cuenta que los dientes saludables tienen un color blanco uniforme. Si ves manchas o puntos en los dientes, es conveniente que adelantes la visita al dentista.

Para prevenir caries en los dientes de leche, mucha higiene

Antes incluso de que aparezca el primer diente, debe realizarse la limpieza de las encías después de cada toma. Para ello, puedes usar una gasa humedecida. Cuando comience la dentición, recurre al cepillo; eso sí, al principio, sin pasta dentífrica hasta los 2 años. A partir de entonces, puedes ponerle una pequeña cantidad, siempre y cuando esté especialmente indicada para niños, es decir, con bajo contenido en flúor. Y recuerda: para prevenir que le salgan caries, no le dejes sólo con el biberón en la boca, pues el contacto prolongado con los azúcares de la leche predisponen a la aparición de caries.`,
      author: 'Claudia Mori Torres',
      image: 'assets/Imagenes-Inicio/Blog/img2.png',
      category: 'Odontología',
    },
    {
      id: 3,
      title: '¿Cómo es el desarrollo del lenguaje del bebé en sus primeros meses de nacido?',
      description: 'La comunicación de los bebés y sus primeras palabras.',
      detail: `Desde su nacimiento los bebés disponen apenas de los gestos, de algunos sonidos y del llanto para comunicarse y transmitir sus necesidades y emociones, a la gente de su entorno.

La comunicación de los bebés y sus primeras palabras

¿Cómo se comunican los bebés? Desde el nacimiento los niños se comunican con nosotros a través de gestos y sonidos. A través del llanto, por ejemplo, ya nos indican que hay algo que no les gusta o por el que se sienten molestos, que tienen hambre, miedo, dolor, etc. Por eso cuando hablamos de lenguaje del bebé, diferenciamos dos etapas: la etapa pre-lingüística y la lingüística.

¿Qué es y cómo se desarrolla la etapa pre-lingüística o no verbal? La etapa pre-lingüística o no verbal se llama así precisamente porque no hay palabras, lo que hay son sonidos, aproximaciones, gorjeos, balbuceos, llantos y sonrisas, que constituyen la primera etapa donde los niños ya se empiezan a comunicar, y dura más o menos hasta los doce meses. Los gestos y sonidos revelan el estado de ánimo del bebé, así como distintas necesidades: de comer, de tener contacto físico, de cambiar pañales, de dormir, beber, etc. Los bebés transmiten y se comunican siempre.

¿Qué señales nos indican que el lenguaje del bebé está evolucionando?¿Cómo vemos que evolucionan los niños? Pues, desde ese llanto inicial que es la primera manifestación sonora del niño, a esto le seguirá la aparición de la sonrisa como respuesta a lo que sí le gusta, sonidos guturales y vocálicos y, poco a poco empieza a distinguir entonaciones de los padres, es decir, si se refieren a alegría, sorpresa o enfado. En esta evaluación también aparecerá el balbuceo y  las primeras aproximaciones que de por sí apenas tiene un valor comunicativo pero que cada vez van ganando más intencionalidad y significado.  A esto le seguirá una jerga o lenguaje que los padres ya van identificando y esos sonidos son lo que al niño le va acercando a la palabra.

¿Por qué y para qué balbucean los bebés? El balbuceo no se provoca, por lo general, hasta aproximadamente los cuatro meses, aunque es verdad que los niños antes ya hacen algunos sonidos de manera activa. El balbuceo es su manera de ir entrenando los músculos faciales y los órganos fonatorios  para poder aprender a hablar y, también es una manera de acercarse a su lengua y a su entorno.  Además de ello, los adultos no sólo le van a dar información al hablar, sino que también van a interpretar sus vocalizaciones, dándoles un sentido en el contexto en el que está el niño. Con esto, podemos ver como los niños pasan de  vocalizaciones reflejas como es llanto, a juegos vocálicos, apreciaremos el balbuceo reduplicativo, cuando los niños repiten dos sílabas iguales (mamá, tatá), al que le seguirá el balbuceo no reduplicativo, cuando repiten sílabas diferentes que comienza a constituir una jerga, es decir, una manera de hablar en la que no dicen palabras pero realizan subidas y bajadas de tono que se parecen a la forma de hablar de los adultos.

¿Cómo se produce la transición entre el balbuceo y las primeras palabras del bebé? En su proceso de evolución entre el balbuceo y las primeras palabras, los niños empezarán, poco a poco, a imitar más sonidos de lo que dicen sus padres y a relacionar la información que les está dando su entorno sobre un objeto con el mismo. De esta manera, aparecerá la jerga de la que hablamos anteriormente y, en esa jerga, irán utilizando la unión de varios sonidos semejantes a una palabra para referirse a algo siempre  de la misma forma, por ejemplo, cuando dicen “aga”, para agua, algo que entiende la gente del entorno en el que está, y, finalmente, esos sonidos evolucionarán hasta la primera palabra.

¿Cómo los padres pueden interferir y ayudar a su bebé a comunicarse más? En esta etapa, es importante que los padres hablen con frecuencia con su bebé, responda a sus balbuceos y le hagan distintas expresiones con la cara. Hablar es algo que hacemos continuamente y que podemos poner en marcha en cualquier momento, por ejemplo, en las rutinas diarias. Son el mejor momento para enriquecer el mundo de nuestros hijos con información nueva, palabras, gestos, expresiones de cariño y éste, sin duda, es el mejor medio para el desarrollo y maduración de lenguaje. Entonces, podemos escoger enriquecer estas actividades, no sólo por el hecho de hablar, sino por todo lo que eso encierra, complicidad, cariño, seguridad, afectividad, aprendizaje, experiencia y emociones.`,
      author: 'Maria Rojas Rojas',
      image: 'assets/Imagenes-Inicio/Blog/img3.png',
      category: 'Pediatría',
    },
    {
      id: 4,
      title: '¿Cómo amamantar a mi bebé?',
      description: 'Algunos consejos para amamantar adecuadamente a nuestro bebé.',
      detail: `Compartimos con ustedes algunos consejos para amamantar adecuadamente a nuestro bebé. 

1. Antes de iniciar la lactancia materna, lavarse los pezones con agua limpia y comenzar a estimularlos.

2. Sostenga a su bebé sobre una lado de su cuerpo, el bebé debe estar acostado pecho a pecho o mentón a su seno, su boca debe estar frente a su seno a la misma altura del pezón.

3. Con su mano libre, guíe al bebé hacia su seno, toque su labio inferior con su pezón y así abrirá su boca.

4. Cuando su boca este bien abierta, acérquelo al seno, su bebé debe llevar la boca al pezón y parte de la aréola.

5. El bebé debe succionar cada seno por un tiempo no menor de 10 a 15 minutos haciéndole eliminar sus gases después de cada seno.

6. Si necesita remover de su seno la boca del bebé, introduzca su dedo meñique limpio, hacia la esquina de la boca para interrumpir la succión, así evitará lesionarse el pezón.`,
      author: 'Crisogono Rubio Valenzuela',
      image: 'assets/Imagenes-Inicio/Blog/img4.png',
      category: 'Pediatría',
    },
  ];

  categories: string[] = ['Todas', ...new Set(this.blogdatos.map(b => b.category))];

  get filteredDatos() {
    return this.blogdatos.filter(b => {
      const matchesCategory =
        this.selectedCategory === 'Todas' || b.category === this.selectedCategory;
      const matchesSearch =
        b.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        b.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

moreInfo(blogdato: BlogDato) {
  this.selectedBlog = blogdato;
  document.body.style.overflow = 'hidden'; 
}

closeInfo() {
  this.selectedBlog = null;
  document.body.style.overflow = '';
}

}
