import briefcaseUrl from '@/img/briefcase.svg'
import changeManagementUrl from '@/img/change-management.svg'
import recruitmentUrl from '@/img/recruitment.svg'
import ph1Url from '@/img/ph1.svg'
import pht2Url from '@/img/pht2.svg'
import pht3Url from '@/img/pht3.svg'

const cards = [
  {
    image: ph1Url,
    icon: changeManagementUrl,
    title: 'Management & Performance',
    description: "Accompagnement des dirigeants et des équipes pour renforcer la performance et le leadership. Développement des compétences, optimisation des structures et conduite du changement.",
    link: '#',
  },
  {
    image: pht2Url,
    icon: recruitmentUrl,
    title: "Développement de projets durables dans l'économie sociale et solidaire",
    description: "Une approche humaine et stratégique pour structurer et faire grandir vos projets à impact. Accompagnement dans la définition des besoins, la sélection des candidats et l'intégration des talents.",
    link: '#',
  },
  {
    image: pht3Url,
    icon: briefcaseUrl,
    title: 'Recrutement & Évolution professionnelle',
    description: "Pour les personnes en transition ou en quête de nouveaux défis : accompagnement personnalisé dans la construction de votre projet professionnel et la concrétisation de vos aspirations.",
    link: '#',
  },
]

export function InterventionSection() {
  return (
    <section className="w-full bg-white font-poppins" aria-label="Chiffres et champs d'intervention">
      {/* Grey line above stats: does not touch left, touches right edge */}
      <div className="w-full pt-10 sm:pt-14 pl-32 sm:pl-56 md:pl-72 lg:pl-96 xl:pl-[28rem]">
        <div className="h-px bg-[#969696]/40 w-full" aria-hidden />
      </div>
      {/* Stats */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 lg:gap-24">
        <div className="text-center">
          <div className="text-[#5B5A5F] font-bold text-3xl sm:text-4xl md:text-5xl">+100</div>
          <div className="text-[#969696] text-sm sm:text-base mt-1">candidats accompagnés</div>
        </div>
        <div className="text-center">
          <div className="text-[#5B5A5F] font-bold text-3xl sm:text-4xl md:text-5xl">+50</div>
          <div className="text-[#969696] text-sm sm:text-base mt-1">partenaires satisfaits</div>
        </div>
        <div className="text-center">
          <div className="text-[#5B5A5F] font-bold text-3xl sm:text-4xl md:text-5xl">+13 ans</div>
          <div className="text-[#969696] text-sm sm:text-base mt-1">d&apos;expérience</div>
        </div>
      </div>

      {/* Nos champs d'interventions - title centered between the lines */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
          <div className="h-px flex-1 max-w-[140px] sm:max-w-[70px] bg-[#80BDF2]" aria-hidden />
          <h2 className="text-[#80BDF2] text-2xl sm:text-3xl text-center shrink-0 px-2">
            Nos champs d&apos;interventions
          </h2>
          <div className="h-px flex-1 max-w-[140px] sm:max-w-[70px] bg-[#80BDF2]" aria-hidden />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group bg-white border border-gray-200 rounded-none overflow-visible shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] flex flex-col"
            >
              <div className="relative h-72 sm:h-80 md:h-96 bg-gray-100 overflow-visible">
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-full object-cover object-center"
                  aria-hidden
                />
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#80BDF2] group-hover:bg-white flex items-center justify-center p-4 shadow-md z-10 transition-colors duration-300">
                  <img src={card.icon} alt="" className="w-full h-full object-contain group-hover:invert group-hover:sepia group-hover:hue-rotate-[180deg]" aria-hidden />
                </div>
              </div>
              <div className="p-7 sm:p-8 flex-1 flex flex-col items-center text-center pt-12 sm:pt-14 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="w-full max-w-[320px] h-[5.5rem] sm:h-[6rem] flex items-center justify-center mb-3 shrink-0">
                  <h3 className="text-black group-hover:text-[#80BDF2] font-bold text-base sm:text-lg md:text-xl w-full text-center">{card.title}</h3>
                </div>
                <p className="text-[#969696] text-sm sm:text-base leading-relaxed flex-1 mb-4 w-full max-w-[320px] text-left">{card.description}</p>
                <a
                  href={card.link}
                  className="text-black group-hover:text-[#80BDF2] font-semibold text-sm sm:text-base hover:underline"
                >
                  Voir plus
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
