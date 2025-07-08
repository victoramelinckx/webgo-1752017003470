
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio con nuestra web rápida y soporte 24/7, sin complicaciones ni estrés." cta1="Empieza Ahora" />
<How step1Title="Contáctanos Ahora" step1Desc="Reserva una consulta gratuita online." step2Title="Diseño Personalizado" step2Desc="Creamos tu web de ventas en 24 horas." step3Title="Lanzamiento Express" step3Desc="Tu sitio opera con soporte 24/7." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Ahora" subheadline="Transformamos tus recomendaciones en ventas online sin complicaciones." beneficiotitulo1="Gestión Completa" beneficio1="Nosotros manejamos todo por ti." beneficiotitulo2="Ventas Garantizadas" beneficio2="Aumenta ingresos con estrategias efectivas." />
<Services heading="Revoluciona Tus Ventas Digitalmente" description="Transformamos tus recomendaciones en ventas online efectivas." services={[{"name":"Web en 24 Horas","icon":"lightning","description":"Rápida y lista para vender."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Optimización SEO","icon":"search","description":"Mejora tu visibilidad en Google."},{"name":"Gestión de Contenido","icon":"edit","description":"Contenido atractivo y relevante."},{"name":"Estrategia de Marketing","icon":"chart-line","description":"Plan de acción para ventas digitales."},{"name":"Analítica Web","icon":"chart-bar","description":"Datos que impulsan decisiones."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en asombrosas realidades digitales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender online si solo vendo por recomendación?","respuesta":"WebGo puede crear una tienda online para ti, atrayendo nuevos clientes sin depender de recomendaciones. Te ayudamos a digitalizar tus ventas fácilmente y llegar a más personas."},{"pregunta":"¿Qué beneficios obtengo al digitalizar mi negocio con WebGo?","respuesta":"Al digitalizar con WebGo, puedes aumentar tus ventas, llegar a clientes nuevos y ahorrar tiempo. Nos encargamos del sitio web, así tú te concentras en lo que mejor haces: tu negocio."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo puede WebGo ayudarme?","respuesta":"En WebGo, nos encargamos de todo el manejo de tu sitio web. Desde la creación hasta la gestión diaria, liberándote de preocupaciones técnicas para que te centres en tu negocio."},{"pregunta":"¿Es caro crear una tienda online con WebGo?","respuesta":"WebGo ofrece soluciones asequibles para crear tu tienda online. Invertir en digitalización puede multiplicar tus ventas, haciéndolo una inversión inteligente para tu negocio."},{"pregunta":"¿Cómo sé si mi negocio está listo para vender online?","respuesta":"Si ya tienes clientes por recomendación, estás listo para más. WebGo te ayuda a dar el salto al mundo online, aumentando tu alcance y ventas con una estrategia efectiva."}]} />
<BookAppointment 
                      heading="Transforma Recomendaciones en Ventas Online" 
                      description="Con WebGo, convierte cada recomendación en una venta digital sin complicaciones. Deja que nosotros gestionemos tu sitio web mientras tú te enfocas en hacer crecer tu negocio."
                      formPostUrl="api/contact-us"
                      projectId="Wqlr3u3cnvaI6Urlfrem"
                    />
<Footer />
    </main>
  );
}
