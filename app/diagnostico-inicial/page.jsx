import Script from 'next/script';
export const metadata = {
  title: 'Agenda tu diagnóstico gratuito',
  description: 'Reserva un diagnóstico inicial gratuito de 30 minutos con Anadia AI Studio. Conversemos sobre los retos y oportunidades de inteligencia artificial en tu organización.',
  alternates: { canonical: '/diagnostico-inicial' },
};
export default function DiagnosticoInicialPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: '1rem' }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="kicker">ANADIA AI STUDIO · PRIMERA CONVERSACIÓN</div>
          <h1 style={{ marginTop: '1rem' }}>Agenda tu diagnóstico inicial gratuito.</h1>
          <p className="section-intro" style={{ maxWidth: 740 }}>
            Conversemos durante 30 minutos sobre los retos de tu organización y las oportunidades de aplicar inteligencia artificial con criterio de negocio. Elige el horario que mejor te convenga.
          </p>
          <p style={{ marginTop: '1rem' }}>Sesión gratuita · 30 minutos · Reunión por Google Meet</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="tidycal-embed" data-path="anadiaaistudio/diagnostico-inicial" aria-label="Calendario para reservar el diagnóstico inicial gratuito" />
          <Script src="https://asset-tidycal.b-cdn.net/js/embed.js" strategy="afterInteractive" />
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
            ¿No puedes ver el calendario? <a href="https://tidycal.com/anadiaaistudio/diagnostico-inicial" target="_blank" rel="noopener noreferrer">Reserva directamente en TidyCal ↗</a>
          </p>
        </div>
      </section>
    </>
  );
}
