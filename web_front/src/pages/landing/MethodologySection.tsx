import grl3Url from '@/img/grl3.svg'

const steps = [
  'Diagnostic & écoute',
  "Plan d'action personnalisé",
  'Accompagnement opérationnel',
  'Évaluation & suivi',
]

export function MethodologySection() {
  return (
    <section className="w-full bg-white font-poppins" aria-label="Méthodologie">
      {/* Méthodologie - title between lines like Nos champs d'interventions */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
          <div className="h-px flex-1 max-w-[140px] sm:max-w-[70px] bg-[#80BDF2]" aria-hidden />
          <h2 className="text-[#80BDF2] text-2xl sm:text-3xl text-center shrink-0 px-2">
            Méthodologie
          </h2>
          <div className="h-px flex-1 max-w-[140px] sm:max-w-[70px] bg-[#80BDF2]" aria-hidden />
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 flex justify-center">
        <div className="w-full max-w-[1440px] bg-[#5B5A5F] py-12 sm:py-16 px-6 sm:px-8 lg:px-12 rounded-none flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
          <div className="flex-1 flex flex-col w-full">
            <h3 className="text-white font-bold text-3xl sm:text-4xl lg:text-4xl mb-14 text-left max-w-xl leading-[1.7] sm:leading-[1.8]">
              Chaque accompagnement est construit sur mesure selon vos besoins.
            </h3>
            <ul className="relative space-y-12 sm:space-y-14">
              {/* Vertical white line: thin, through center of circles, from center 1 to center 4 only */}
              <div className="absolute left-[2rem] top-[4rem] w-px bg-white h-[17rem] sm:h-[26rem]" aria-hidden style={{ transform: 'translateX(-50%)' }} />
              {steps.map((label, i) => (
                <li key={i} className="relative flex items-center gap-5">
                  <span className="w-16 h-16 rounded-full bg-[#80BDF2] text-white font-bold flex items-center justify-center flex-shrink-0 text-2xl sm:text-3xl z-10">
                    {i + 1}
                  </span>
                  <span className="text-white font-semibold text-xl sm:text-2xl">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex items-start justify-center lg:justify-end w-full lg:mr-14">
            <img
              src={grl3Url}
              alt=""
              className="w-[452px] max-w-full h-[540px] object-contain object-center rounded-none"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  )
}
