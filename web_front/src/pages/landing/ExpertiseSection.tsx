import { useState } from 'react'
import girl2Url from '@/img/girl2.svg'
import passonactionUrl from '@/img/passonaction.svg'
import passonactionHoverUrl from '@/img/passonactionhooverd.svg'

export function ExpertiseSection() {
  const [btnHover, setBtnHover] = useState(false)

  return (
    <section
      className="w-full bg-[#5B5A5F] text-left py-10 sm:py-12 md:py-14 lg:py-16 font-poppins"
      aria-labelledby="expertise-title"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row items-stretch gap-12 sm:gap-16 lg:gap-20 xl:gap-24">
        {/* Left column: image + text with one grey line above (like screenshot) + button */}
        <div className="flex-1 flex flex-col items-start max-w-xl">
          <img
            src={girl2Url}
            alt=""
            className="w-full h-auto object-cover object-top rounded-lg max-h-[520px] sm:max-h-[580px] md:max-h-[640px]"
            aria-hidden
          />
          <div className="mt-6">
            <div className="w-[95%] max-w-[290px] h-px bg-white/30 mb-4" aria-hidden />
            <p className="text-white font-poppins font-bold text-lg sm:text-xl leading-snug">
              Explorez mes
              <br />
              domaines d&apos;expertise
            </p>
          </div>
          <a
            href="#contact"
            className="inline-block mt-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#80BDF2] focus:ring-offset-2 focus:ring-offset-[#5B5A5F] rounded overflow-hidden transition-all duration-200 hover:opacity-90 hover:scale-105"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            <img
              src={btnHover ? passonactionHoverUrl : passonactionUrl}
              alt="Passons à l'action"
              className="h-11 sm:h-12 w-auto max-w-full"
            />
          </a>
        </div>

        {/* Right column: title + thin line + paragraphs */}
        <div className="flex-1 flex flex-col justify-start min-w-0 pt-0 -mt-2">
          <h2
            id="expertise-title"
            className="font-poppins font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl leading-tight uppercase tracking-tight mb-0"
          >
            Spécialiste en
            <br />
            management et
            <br />
            accompagnement
            <br />
            professionnel
          </h2>
          <div className="w-full max-w-md h-px bg-white/30 my-5 sm:my-6" aria-hidden />
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-4 font-poppins">
            Forte d&apos;une expérience dans le conseil, l&apos;événementiel et la communication, Manel Chouchan accompagne aujourd&apos;hui entrepreneurs, marques et institutions dans le développement de projets responsables et performants.
          </p>
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed mb-4 font-poppins">
            Après avoir fondé et dirigé <span className="text-[#80BDF2] font-semibold">BCS Agency</span>, elle met désormais son expertise au service de structures désireuses de conjuguer <span className="text-[#80BDF2] font-semibold">stratégie</span>, <span className="text-[#80BDF2] font-semibold">durabilité</span> et <span className="text-[#80BDF2] font-semibold">impact</span>.
          </p>
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed font-poppins">
            Son approche repose sur trois piliers : <span className="text-[#80BDF2] font-semibold">clarté</span>, <span className="text-[#80BDF2] font-semibold">méthode</span> et <span className="text-[#80BDF2] font-semibold">engagement</span>, afin de construire des stratégies solides et alignées avec vos valeurs.
          </p>
        </div>
      </div>
    </section>
  )
}
