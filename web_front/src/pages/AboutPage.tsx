import { Layout } from '@/components/layout/Layout'
import { ContactSection } from '@/pages/landing/ContactSection'
import girl1 from '@/img/girl1about.svg'
import girl2 from '@/img/girl2about.svg'

export function AboutPage() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section
        className="relative w-full bg-[#333333] text-white flex items-center justify-center"
        style={{ minHeight: '720px' }}
        aria-label="Héro"
      >
        {/* Decorative dots – positioned like screenshot 1 */}
        {/* Small blue dot – upper left */}
        <span className="absolute w-3 h-3 rounded-full bg-[#80BDF2] opacity-80" style={{ top: '33%', left: '11%' }} />
        {/* Large white dot – left side, same height as title */}
        <span className="absolute w-6 h-6 rounded-full bg-[#FFFFFF] opacity-60" style={{ top: '39%', left: '12%' }} />
        {/* Small blue dot – right side, above title */}
        <span className="absolute w-4 h-4 rounded-full bg-[#80BDF2] opacity-70" style={{ top: '33%', right: '8%' }} />
        {/* Tan dot – bottom center, below title */}
        <span className="absolute w-5 h-5 rounded-full bg-[#c8956c] opacity-80" style={{ bottom: '12%', left: '65%', transform: 'translateX(-50%)' }} />

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-widest uppercase text-center px-6 py-24 sm:py-32">
          Construire du sens
        </h1>
      </section>

      {/* ── 4-box grid section (white background) ── */}
      <section className="w-full bg-[#FFFFFF] py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Box 1 – Racines & Identité */}
            <div
              className="bg-white p-10 rounded-sm"
              style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.06)' }}
            >
              <h2 className="text-[#80BDF2] text-4xl font-bold uppercase tracking-wide mb-20">
                Racines &amp; Identité
              </h2>

              <p className="text-[#5B5A5F] text-sm sm:text-xl leading-relaxed mb-10">
                Je suis née dans une petite ville sicilienne appelée Marsala, un nom que notre mer offre clairement, bercée par les soleils, la lumière de la Méditerranée et le souffle du vent marin.
              </p>

              <p className="text-[#5B5A5F] text-sm sm:text-xl leading-relaxed mb-10">
                De Tunis à Paris, mes origines tunisiennes me relient à une autre terre, à d'autres mémoires. Entre deux continents, j'ai grandi avec le plaisir d'ouvrir notre de plusieurs civilisations.
              </p>

              <p className="text-[#5B5A5F] text-sm sm:text-xl leading-relaxed">
                Mais au-delà des héritages, j'ai choisi d'écrire la mienne, une trajectoire faite de ponts, d'engagement et de sens.
              </p>
            </div>

            {/* Box 2 – Image 1 */}
            <div
              className="bg-white rounded-sm overflow-hidden"
              style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.06)' }}
            >
              <img
                src={girl1}
                alt="Manel Chouchan"
                className="w-full h-full object-cover"
                style={{ minHeight: '700px' }}
              />
            </div>

            {/* Box 3 – Image 2 */}
            <div
              className="bg-white rounded-sm overflow-hidden"
              style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.06)' }}
            >
              <img
                src={girl2}
                alt="Manel Chouchan"
                className="w-full h-full object-cover"
                style={{ minHeight: '697px' }}
              />
            </div>

            {/* Box 4 – Parcours & Engagement */}
            <div
              className="bg-white p-10 rounded-sm"
              style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.06)' }}
            >
              <h2 className="text-[#80BDF2] text-4xl font-bold uppercase tracking-wide mb-20">
                Parcours &amp; Engagement
              </h2>

              <p className="text-[#5B5A5F] text-sm sm:text-xl leading-relaxed mb-10">
                Ce chemin, je l'ai construit avec conviction dans des univers exigeants et à fort impact : le tourisme de luxe, la mode circulaire et l'entrepreneuriat engagé.
              </p>

              <p className="text-[#5B5A5F] text-sm sm:text-xl leading-relaxed mb-10">
                À chaque étape, j'ai défendu une même vision : une excellence profondément humaine, où le style rime avec responsabilité et où chaque identité trouve sa place.
              </p>

              <p className="text-[#5B5A5F] text-sm sm:text-xl leading-relaxed">
                Aujourd'hui, femme de projets et de transmission, je crée des ponts et fais circuler les idées, les talents et les énergies pour contribuer à un futur plus juste, plus beau et plus durable.
              </p>
            </div>

          </div>  
        </div>
      </section>

      {/* ── Video placeholder ── */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative w-full rounded overflow-hidden bg-[#D9D9D9]"
            style={{ paddingTop: '40%' }}
          >
           <div className="absolute inset-0 flex items-center justify-center">
  <button
    aria-label="Lire la vidéo"
    className="w-32 h-32 sm:w-35 sm:h-35 rounded-full border-4 border-white flex items-center justify-center text-white hover:border-[#80BDF2] hover:text-[#80BDF2] transition-colors duration-200"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-14 h-14 sm:w-16 sm:h-16 ml-2"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </button>
</div>
          </div>
        </div>
      </section>

      {/* ── Contact section (already exists) ── */}
      <ContactSection />
    </Layout>
  )
}