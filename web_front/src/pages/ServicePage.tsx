import { Layout } from '@/components/layout/Layout'
import { ContactSection } from '@/pages/landing/ContactSection'
import grl3Url from '@/img/grl3.svg'
import rec1Url from '@/img/rec1.svg'
import rec2Url from '@/img/rec2.svg'
import rec3Url from '@/img/rec3.svg'
import rec4Url from '@/img/rec4.svg'
import rec1HoverUrl from '@/img/rec1hoover.svg'
import rec2HoverUrl from '@/img/rec2hoover.svg'
import rec3HoverUrl from '@/img/rec3hoover.svg'
import rec4HoverUrl from '@/img/rec4hoover.svg'
import projetDurableUrl from '@/img/projet durable .svg'
import accompRecrutmentUrl from '@/img/accomp recrutment .svg'
import btnRefernceUrl from '@/img/btn refernce.svg'
import referencBtnHoverUrl from '@/img/Referencbtnhoover.svg'
import targetUrl from '@/img/target.svg'
import personsUrl from '@/img/persons.svg'
import performanceUrl from '@/img/performance.svg'
import timeUrl from '@/img/time.svg'
import accCarriereUrl from '@/img/acc carriere.svg'
import managementPerformanceUrl from '@/img/management performance .svg'

const gridCards = [
  { image: rec1Url, hoverImage: rec1HoverUrl, label: 'DÉVELOPPEMENT DE PROJETS DURABLES' },
  { image: rec2Url, hoverImage: rec2HoverUrl, label: 'ACCOMPAGNEMENT RECRUTEMENT' },
  { image: rec3Url, hoverImage: rec3HoverUrl, label: 'ACCOMPAGNEMENT CARRIÈRE' },
  { image: rec4Url, hoverImage: rec4HoverUrl, label: 'MANAGEMENT & PERFORMANCE' },
]

const steps = [
  'Diagnostic & écoute',
  "Plan d'action personnalisé",
  'Accompagnement opérationnel',
  'Évaluation & suivi',
]

export function ServicePage() {
  return (
    <Layout>
      <section className="w-full bg-[#5B5A5F] font-poppins pt-36 sm:pt-40 md:pt-48 lg:pt-56" aria-label="Accompagnement">
        <div className="w-full">
          {/* 2x2 image grid */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {gridCards.map((card) => (
                <div
                  key={card.label}
                  className="group relative z-0 h-56 sm:h-52 lg:h-64 rounded-xl overflow-hidden bg-[#5B5A5F] transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-xl cursor-pointer"
                >
                  <img
                    src={card.image}
                    alt=""
                    className="w-full h-full object-contain sm:object-cover group-hover:opacity-0 transition-opacity duration-300 absolute inset-0"
                    aria-hidden
                  />
                  <img
                    src={card.hoverImage}
                    alt=""
                    className="w-full h-full object-contain sm:object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0"
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full bg-[#5B5A5F] py-12 sm:py-16 px-6 sm:px-8 lg:px-10 xl:px-12 rounded-none flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-6">
            {/* Text column */}
            <div className="flex flex-col flex-shrink-0 w-full lg:w-[480px] xl:w-[520px]">
              <h3 className="text-white font-bold text-3xl sm:text-4xl lg:text-4xl mb-4 sm:mb-5 text-left leading-[1.7] sm:leading-[1.8]">
                Chaque accompagnement est construit sur mesure selon vos besoins.
              </h3>
              <ul className="relative space-y-6 sm:space-y-8">
                <div
                  className="absolute left-[2rem] top-[2rem] w-px bg-white h-[16rem] sm:h-[18rem]"
                  aria-hidden
                  style={{ transform: 'translateX(-50%)' }}
                />
                {steps.map((label, i) => (
                  <li key={i} className="relative flex items-center gap-3 sm:gap-4">
                    <span className="w-16 h-16 rounded-full bg-[#80BDF2] text-white font-bold flex items-center justify-center flex-shrink-0 text-3xl sm:text-4xl z-10">
                      {i + 1}
                    </span>
                    <span className="text-white font-semibold text-xl sm:text-2xl md:text-2xl">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image column */}
            <div className="hidden lg:block flex-shrink-0">
              <img
                src={grl3Url}
                alt=""
                className="w-[560px] h-[410px] object-contain object-top rounded-none"
                aria-hidden
              />
            </div>

            {/* Mobile image */}
            <div className="flex lg:hidden w-full justify-center mt-8">
              <img
                src={grl3Url}
                alt=""
                className="w-full max-w-sm h-auto object-contain rounded-none"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>

      {/* DÉVELOPPEMENT DE PROJETS DURABLES - under grey part */}
      <section className="w-full bg-[#F7F7F7] font-poppins pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6 lg:px-10" aria-label="Développement de projets durables">
  <div className="w-full max-w-[1200px] mx-auto">
    <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

      {/* === DOTS === */}
      {/* 1. Dark dot — top-left, above and outside the image */}
      <span className="absolute left-[8%] top-[-25px] w-6 h-6 rounded-full bg-[#5B5A5F] z-10" aria-hidden />
      {/* 2. Beige dot — top-center, above the image */}
      <span className="absolute left-[25%] top-[-8px] w-3 h-3 rounded-full bg-[#E2C5A2] z-10" aria-hidden />
      {/* 3. Blue dot — top-right, above image near right edge */}
      <span className="absolute left-[36%] top-[-40px] w-7 h-7 rounded-full bg-[#80BDF2] z-10" aria-hidden />
      {/* 4. Blue dot — bottom-left, below image */}
      <span className="absolute left-[10%] bottom-[30px] w-3 h-3 rounded-full bg-[#80BDF2] z-10" aria-hidden />
      {/* 5. Beige dot — bottom-center, below image */}
      <span className="absolute left-[21%] bottom-[10px] w-6 h-6 rounded-full bg-[#E2C5A2] z-10" aria-hidden />

      {/* Left: image — top aligned with half of the "D" in title */}
      <div className="w-full lg:w-[34%] flex-shrink-0 lg:mt-7">
        <img src={projetDurableUrl} alt="" className="w-full h-full object-cover min-h-[250px] lg:min-h-[480px] rounded-2xl" aria-hidden />
      </div>

      {/* Text column */}
      <div className="w-full lg:w-[51%] pt-0 lg:pt-4 flex flex-col justify-center">
        <h2 className="text-[#5B5A5F] font-bold text-4xl sm:text-5xl lg:text-5xl mb-3 leading-[1.3] uppercase">
          DÉVELOPPEMENT DE<br />PROJETS DURABLES
        </h2>
        <p className="text-[#80BDF2] font-normal text-sm sm:text-base mb-3">
          Accompagnement stratégique en développement de projets à impact
        </p>
        <span className="h-px bg-[#c0c0c0] w-full mb-6" aria-hidden />
        <p className="text-[#5a5a5a] text-sm sm:text-base leading-relaxed mb-4">
          Spécialiste du développement et de la structuration de projets, j'accompagne les startups, fédérations professionnelles et PME dans la conception, le déploiement et la pérennisation de projets à forte valeur économique, sociale et environnementale.
        </p>
        <p className="text-[#5a5a5a] text-sm sm:text-base leading-relaxed mb-4">
          Mon expertise s'inscrit à l'intersection de l'économie sociale et solidaire, de l'économie circulaire et des modèles économiques durables, répondant aux enjeux de transition, d'innovation et de performance responsable.
        </p>
        <p className="text-[#5a5a5a] text-sm sm:text-base leading-relaxed mb-8">
          J'interviens sur l'ensemble du cycle de vie des projets, de l'idéation à la mise en œuvre opérationnelle, en apportant un accompagnement stratégique, méthodologique et partenarial, adapté aux spécificités de chaque organisation et à son écosystème.
        </p>
<a
            href="#"
            className="group relative inline-block self-start flex-shrink-0 overflow-hidden"
            style={{ width: '220px', height: '66px' }}
          >
          {/* Default: btn refernce.svg */}
          <img
            src={btnRefernceUrl}
            alt="Références"
            className="absolute inset-0 w-full h-full object-contain object-center group-hover:opacity-0 transition-opacity duration-200"
          />
          {/* Hover: Referencbtnhoover.svg */}
          <img
            src={referencBtnHoverUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-contain object-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            aria-hidden
          />
        </a>
      </div>
    </div>

    {/* Objectifs de l'accompagnement */}
    <div className="mt-16 sm:mt-20">
      <h2 className="text-[#5B5A5F] font-bold text-4xl sm:text-5xl text-left mb-7">
        Objectifs de l'accompagnement
      </h2>
      <span className="block h-px bg-[#CCCCCC] w-full max-w-[770px] mb-10" aria-hidden />
      <ul className="space-y-7">
        {[
          { text: 'Concevoir des projets à fort ', bold: 'impact humain, social et environnemental.' },
          { text: 'Structurer des initiatives ', bold: 'viables économiquement.' },
          { text: 'Assurer la cohérence entre ', bold: 'valeurs, actions et stratégie.' },
          { text: 'Renforcer la ', bold: "pérennité et l'évolutivité", suffix: ' des projets.' },
          { text: 'Favoriser un développement ', bold: 'responsable et durable.' },
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#80BDF2] flex-shrink-0 mt-2" aria-hidden />
            <span className="text-[#555555] text-lg leading-relaxed">
              {item.text}
              <span className="font-bold text-[#80BDF2]">{item.bold}</span>
              {'suffix' in item ? item.suffix : ''}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

      {/* ACCOMPAGNEMENT RECRUTEMENT */}
      <section className="w-full bg-[#F7F7F7] font-poppins py-16 sm:py-20 px-4 sm:px-6 lg:px-10" aria-label="Accompagnement recrutement">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Text column (left) */}
            <div className="w-full lg:w-[55%] order-2 lg:order-1 flex flex-col justify-center">
              <h2 className="text-[#5B5A5F] font-bold text-3xl sm:text-4xl lg:text-5xl mb-2 leading-[1.25] uppercase">
                ACCOMPAGNEMENT<br />RECRUTEMENT
              </h2>
              <p className="text-[#80BDF2] font-normal text-sm sm:text-lg mb-4">
                Attirer, sélectionner et intégrer les talents qui feront la différence.
              </p>
              <span className="h-px bg-[#c0c0c0] w-full max-w-[760px] mb-10" aria-hidden />
              <p className="text-[#6B7280] text-lg leading-relaxed mb-10">
                Le recrutement est un enjeu stratégique pour toute organisation. J'accompagne dirigeants, managers et équipes RH dans un processus structuré, humain et efficace, afin de garantir la rencontre entre vos besoins et les bons profils.
              </p>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-20">
                Mon approche allie écoute, analyse, évaluation et <span className="text-[#80BDF2]">accompagnement continu</span>, pour sécuriser chaque étape.
              </p>
              <div className="relative inline-block">
                <a
                  href="#"
                  className="group relative inline-block self-start flex-shrink-0 overflow-hidden"
                  style={{ width: '220px', height: '66px' }}
                >
                  <img src={btnRefernceUrl} alt="Références" className="absolute inset-0 w-full h-full object-contain object-center group-hover:opacity-0 transition-opacity duration-200" />
                  <img src={referencBtnHoverUrl} alt="" className="absolute inset-0 w-full h-full object-contain object-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" aria-hidden />
                </a>
                {/* Decorative dots: brown/gold (larger), blue (smaller) */}
                <span className="absolute left-[100%] top-[35%]  -translate-y-1/2 w-6 h-6 rounded-full bg-[#E2C5A2] z-10 hidden sm:block" aria-hidden />
                <span className="absolute left-[106%] top-[-169%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#80BDF2] z-10 hidden sm:block" aria-hidden />
              </div>

              {/* Aide à la définition des besoins — under the button, same left alignment */}
              <div className="mt-12 sm:mt-20 w-full">
                <h3 className="text-[#5B5A5F] font-bold text-2xl sm:text-4xl text-left mb-9">
                  Aide à la définition des besoins
                </h3>
                <span className="block h-px bg-[#CCCCCC] w-full max-w-[580px] mb-9" aria-hidden />
                <h4 className="text-[#5B5A5F] font-bold text-lg sm:text-2xl text-left mb-4">
                  Clarifier pour mieux recruter
                </h4>
                <p className="text-[#6B7280] text-lg   leading-relaxed mb-9">
                  Avant de lancer un recrutement, il est essentiel d'identifier précisément ce que vous recherchez. Je vous aide à :
                </p>
                <ul className="space-y-5">
                  {[
                    'Comprendre vos enjeux, votre culture et vos objectifs.',
                    'Définir le profil idéal (compétences, soft skills, expériences).',
                    'Rédiger une fiche de poste claire et ciblée.',
                    "Déterminer la meilleure stratégie d'attraction des candidats.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#80BDF2] flex-shrink-0 mt-2" aria-hidden />
                      <span className="text-[#6B7280] text-base sm:text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Image column (right) */}
            <div className="w-full lg:w-[40%] order-1 lg:order-2 flex-shrink-0">
              <img src={accompRecrutmentUrl} alt="" className="w-full h-full object-cover min-h-[280px] lg:min-h-[400px] rounded-2xl shadow-lg" aria-hidden />
            </div>
          </div>
        </div>
      </section>

{/* Sélection, intégration et suivi des talents */}
<section className="w-full bg-[#5B5A5F] font-poppins py-16 sm:py-20 px-4 sm:px-6 lg:px-10" aria-label="Sélection, intégration et suivi des talents">
  <div className="w-full px-4 sm:px-8 lg:px-16">
    {/* Title + underline: right  */}
    <div className="text-right mb-8">
      <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-5xl mb-4">
        Sélection, intégration et suivi des talents
      </h2>
      <span className="block h-px bg-[#9ca3af] w-[85%] min-w-[320px] max-w-[800px] ml-auto" aria-hidden />
    </div>
    {/* Subtitle + intro: right */}
    <div className="text-right  mb-10">
      <h3 className="text-white font-bold text-lg sm:text-4xl mb-6">
        Une démarche humaine, structurée et durable
      </h3>
      <p className="text-[#e5e7eb] text-base leading-relaxed max-w-[720px] ml-auto text-right">
        Une fois vos besoins clarifiés, j'assure un accompagnement complet pour trouver, choisir et intégrer les bons profils. Cela inclut :
      </p>
    </div>
    {/* List: fully right-aligned, text + bullet on the right */}
    <ul className="space-y-5 w-full">
      {[
        "La présélection et l'évaluation des candidats.",
        "La conduite d'entretiens structurés et orientés compétences.",
        "L'analyse du fit humain et culturel.",
        "L'aide à la prise de décision.",
        "L'accompagnement à l'intégration du nouveau talent.",
        "Un suivi post-recrutement pour assurer une adaptation durable.",
      ].map((item, i) => (
        <li key={i} className="flex items-center gap-3 justify-end">
          <span className="text-[#80BDF2] text-base sm:text-lg leading-relaxed text-right">{item}</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#80BDF2] flex-shrink-0" aria-hidden />
        </li>
      ))}
    </ul>
  </div>
</section>

      {/* Résultats attendus */}
      <section className="w-full bg-[#F7F7F7] font-poppins py-16 sm:py-20 px-4 sm:px-6 lg:px-10" aria-label="Résultats attendus">
  <div className="w-full max-w-[880px] mx-auto">
    <h2 className="text-[#5B5A5F] font-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-12 sm:mb-16">
      Résultats attendus
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
      {[
        { icon: targetUrl, bg: 'bg-[#80BDF2]', text: "Des recrutements plus pertinents et mieux alignés avec vos objectifs" },
        { icon: personsUrl, bg: 'bg-[#5B5A5F]', text: "Moins de turnover, plus d'engagement" },
        { icon: performanceUrl, bg: 'bg-[#5B5A5F]', text: "Une équipe renforcée, stable et performante" },
        { icon: timeUrl, bg: 'bg-[#80BDF2]', text: "Un gain de temps considérable dans tout le processus de sélection" },
      ].map((card, i) => (
        <div key={i} className={`relative ${card.bg} rounded-2xl pt-16 pb-8 px-4 sm:px-8 shadow-md overflow-visible flex flex-col justify-start`}>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white flex items-center justify-center p-2">
            <img src={card.icon} alt="" className="w-full h-full object-contain" aria-hidden />
          </div>
          <p className="text-white text-base sm:text-lg lg:text-2xl leading-relaxed text-left mt-4">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Accompagnement Carrière */}
      <section
  className="w-full bg-[#5B5A5F] font-poppins py-16 sm:py-20 px-4 lg:px-6"
  aria-label="Accompagnement Carrière"
>
  <div className="max-w-[1200px] mx-auto">

    {/* ===== TOP PART ===== */}
    <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-8 lg:gap-16 items-center mb-20">

      {/* IMAGE */}
      <div className="rounded-2xl overflow-hidden">
        <img
          src={accCarriereUrl}
          alt="Accompagnement carrière"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="text-right">

        <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide leading-tight">
          <span className="block">ACCOMPAGNEMENT</span>
          <span className="block mt-2">CARRIÈRE</span>
        </h2>

        <p className="text-[#80BDF2] text-base sm:text-lg leading-relaxed mt-4">
          Retrouver clarté, confiance et direction dans son parcours professionnel.
        </p>

        <span className="block h-px bg-white/60 w-full mt-4 mb-10" />

        <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
          L'évolution professionnelle est un chemin parfois complexe :
          manque de visibilité, envie de changement, perte de sens,
          besoin de renouveau…
        </p>

        <p className="text-white text-base sm:text-lg leading-relaxed mb-12">
          J'accompagne chaque personne à mieux
          <span className="text-[#80BDF2] font-semibold"> se connaître</span>,
          à identifier ses forces et à construire une trajectoire alignée
          avec ses aspirations et
          <span className="text-[#80BDF2] font-semibold"> son potentiel.</span>
        </p>

        {/* BUTTON */}
        <div className="flex justify-end">
          <a
            href="#"
            className="group relative inline-block w-[220px] h-[66px]"
          >
            <img
              src={btnRefernceUrl}
              alt="Références"
              className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-200"
            />
            <img
              src={referencBtnHoverUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-hidden
            />
          </a>
        </div>

      </div>
    </div>

    {/* ===== BOTTOM PART ===== */}

    <div className="max-w-[750px]">

      <h3 className="text-white font-bold text-2xl sm:text-3xl mb-4">
        Un accompagnement personnalisé pour avancer avec confiance.
      </h3>

      <span className="block h-px bg-white/50 w-full mb-6" />

      <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
        Je propose un coaching structuré et adapté à chaque situation :
      </p>

      <ul className="space-y-4 text-base sm:text-lg leading-relaxed list-none pl-0">
        {[
          "Clarifier vos objectifs professionnels.",
          "Identifier vos freins, vos atouts et vos motivations profondes.",
          "Développer votre confiance, votre posture et vos compétences.",
          "Prendre des décisions éclairées et alignées.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#80BDF2] flex-shrink-0 mt-2" />
            <span className="text-[#80BDF2] font-medium">{item}</span>
          </li>
        ))}
      </ul>

    </div>

  </div>
</section>

      {/* Management & Performance */}
      <section className="w-full bg-[#FFFFFF] font-poppins py-16 sm:py-20 px-4 sm:px-6 lg:px-10" aria-label="Management et Performance">
        <div className="w-full max-w-[1200px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
            {/* Left: text content */}
            <div className="order-2 lg:order-1 mt-6 lg:mt-12">
              <h2 className="text-[#5B5A5F] font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide leading-tight">
                <span className="block">MANAGEMENT</span>
                <span className="block mt-1">& PERFORMANCE</span>
              </h2>
              <p className="text-[#80BDF2] text-base sm:text-lg leading-relaxed mt-4 sm:whitespace-nowrap">
                Développer des équipes autonomes, engagées et performantes.
              </p>
              <span className="block h-px bg-[#5B5A5F]/30 w-full mt-4 mb-6" aria-hidden />
              <p className="text-[#5B5A5F] text-base sm:text-lg leading-relaxed mb-6">
                Cet accompagnement s'adresse aux dirigeants et managers souhaitant renforcer leur leadership, structurer leurs équipes et améliorer leur efficacité au quotidien.
              </p>
              <p className="text-[#5B5A5F] text-base sm:text-lg leading-relaxed mb-8">
                À travers des formations ciblées, un accompagnement de managers sur le terrain, l'optimisation des organisations et des modes de collaboration, ainsi qu'une gestion du changement maîtrisée, nous construisons ensemble des dynamiques <span className="text-[#80BDF2]">plus fluides, plus sereines et plus performantes.</span>
              </p>
            </div>

            {/* Button: separate div */}
            <div className="order-3 lg:order-3 -mt-32 lg:mt-[-10]">
              <a
                href="#"
                className="group relative inline-block w-[220px] h-[66px]"
              >
                <img src={btnRefernceUrl} alt="Références" className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-200" />
                <img src={referencBtnHoverUrl} alt="" className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden />
              </a>
            </div>

            {/* Right: image + decorative dots — shifted down to align top with title */}
            <div className="order-1 lg:order-2 relative pt-8 sm:pt-10 lg:pt-12">
              <div className="rounded-2xl overflow-hidden max-h-[320px] sm:max-h-[380px] lg:max-h-[680px]">
                <img src={managementPerformanceUrl} alt="" className="w-full h-full object-cover object-top" aria-hidden />
              </div>
              {/* Top-left: dark gray dot */}
              <span className="absolute left-[22%] top-2 w-4 h-4 rounded-full bg-[#5B5A5F] z-10 hidden sm:block" aria-hidden />
              {/* Top-right: gold/brown dot */}
              <span className="absolute right-[27%] top-6 w-2 h-2 rounded-full bg-[#E2C5A2] z-10 hidden sm:block" aria-hidden />
              {/* Top-right: light blue dot */}
              <span className="absolute right-4 top-1 w-6 h-6 rounded-full bg-[#80BDF2] z-10 hidden sm:block" aria-hidden />
              {/* Mid-right: gold/brown dot */}
              <span className="absolute left-[-10%] bottom-[8%] w-4 h-4 rounded-full bg-[#E2C5A2] z-10 hidden sm:block" aria-hidden />
              {/* Bottom-left: light blue dot */}
              <span className="absolute left-[35%] bottom-[-4%] w-2.5 h-2.5 rounded-full bg-[#80BDF2] z-10 hidden sm:block" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

    </Layout>
  )
}
