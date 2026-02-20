import btnTravailUrl from '@/img/btn travail.svg'
import btnTravail2Url from '@/img/btn travail2.svg'
import girl1Url from '@/img/girl1.svg'
import reconnuUrl from '@/img/Reconnu.svg'
import { useState } from 'react'

export function Hero() {
  const [btnHover, setBtnHover] = useState(false)
  const [cardHover, setCardHover] = useState(false)

  return (
    <section
      className="relative w-full min-h-[85vh] sm:min-h-[88vh] flex items-center overflow-hidden pb-8 sm:pb-12 border-0"
      style={{
        background: 'linear-gradient(90deg, #d4e4f4 0%, #dce8f5 15%, #e5eef8 35%, #eef4fb 55%, #f5f9fd 75%, #fafcff 100%)',
        marginTop: '-100px',
        paddingTop: 'calc(100px + 60px)',
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-20 xl:gap-28 border-0">

        {/* Left: headline + CTA */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none text-left order-2 lg:order-1 flex flex-col items-start pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40">
          <h1 className="font-poppins font-bold text-[#5B5A5F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] leading-[1.22] mb-8 sm:mb-10">
            Accompagner les
            <br />
            talents et les leaders
            <br />
            <span className="whitespace-nowrap">vers la performance et</span>
            <br />
            la sérénité
          </h1>
          <a
            href="#contact"
            className="inline-block mt-8 sm:mt-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#80BDF2] focus:ring-offset-2 rounded-full overflow-hidden transition-opacity hover:opacity-90"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            <img
              src={btnHover ? btnTravail2Url : btnTravailUrl}
              alt="Travaillons ensemble"
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto max-w-full"
            />
          </a>
        </div>

        {/* Right: woman + info cards */}
        <div className="flex-1 relative w-full max-w-[320px] sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl min-h-[280px] sm:min-h-[360px] md:min-h-[420px] flex items-start justify-start order-1 lg:order-2 lg:ml-12 xl:ml-16 pt-0 -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10 border-0">

          {/* Decorative dots */}
          <div
            className="absolute bottom-[18%] left-[12%] sm:left-[15%] w-2 sm:w-3 h-2 sm:h-3 rounded-full z-0"
            style={{ backgroundColor: '#c4a574' }}
          />
          <div
            className="absolute bottom-[22%] left-[18%] sm:left-[22%] w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full z-0"
            style={{ backgroundColor: '#80BDF2' }}
          />
          <div
            className="absolute bottom-[10%] sm:bottom-[8%] -left-[4%] sm:-left-[6%] w-5 sm:w-5 h-5 sm:h-5 rounded-full z-0"
            style={{ backgroundColor: '#E2C5A2' }}
            aria-hidden
          />

          {/* +13 ans d'expérience card */}
          <div
            className="absolute top-12 sm:top-24 md:top-28 left-0 sm:left-[-36%] md:left-[-32%] lg:left-[-30%] z-0 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer overflow-visible origin-top"
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)}
          >
            <div
              className={`hero-plus13-card-inner card-expand-enter card-expand-origin relative w-full bg-white rounded-[9px] shadow-none ${cardHover ? 'overflow-visible' : 'overflow-hidden'}`}
              style={{
                paddingBottom: cardHover ? `${(253 / 298) * 100}%` : `${(110 / 298) * 100}%`,
              }}
            >
              <div className="absolute inset-0 top-0 left-0 right-0 flex flex-col overflow-hidden">
                <div
                  className="flex-shrink-0 flex items-start gap-4 sm:gap-5 pt-3 sm:pt-4 pr-4 sm:pr-5 pl-3 sm:pl-4 pb-2 min-h-[3.5rem] sm:min-h-[4rem] transition-[opacity,visibility] duration-300 ease-in-out"
                  style={{
                    opacity: cardHover ? 0 : 1,
                    visibility: cardHover ? 'hidden' : 'visible',
                  }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-[#5B5A5F] text-xl sm:text-2xl md:text-5xl leading-tight">+13</div>
                    <div className="text-[#969696] text-sm sm:text-base mt-1">ans d&apos;expérience</div>
                  </div>
                </div>
                <div
                  className="flex-shrink-0 px-4 sm:px-5 overflow-hidden transition-[opacity,max-height] duration-300 ease-in-out"
                  style={{
                    opacity: cardHover ? 1 : 0,
                    maxHeight: cardHover ? '200px' : '0',
                    paddingTop: cardHover ? 0 : 0,
                    marginTop: cardHover ? '-2.25rem' : 0,
                    paddingBottom: cardHover ? '1.5rem' : 0,
                  }}
                >
                  <p className="text-[#969696] text-[15px] sm:text-xs leading-relaxed mb-0">
                    Née entre la Sicile et la Tunisie, j&apos;ai développé une sensibilité aux cultures et aux territoires. J&apos;ai construit ma carrière dans des secteurs exigeants – tourisme de luxe, mode circulaire et entrepreneuriat – avec la conviction que l&apos;excellence reste humaine et responsable.
                  </p>
                  <p className="text-[#5B5A5F] text-[12px] sm:text-xs text-center pt-4">@manelchouchan</p>
                </div>
              </div>
              <div
                className="star-circle-transition absolute w-[18.12%] aspect-square pointer-events-none"
                style={{
                  left: cardHover ? '50%' : '23.09%',
                  top: cardHover ? '0' : '46.18%',
                  transform: 'translate(-50%, -50%)',
                }}
                aria-hidden
              >
                <svg viewBox="0 0 54 54" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(-41.8 -23.8)">
                    <circle cx="68.8" cy="50.8" r="27" fill="#80BDF2"/>
                    <path d="M68.8 33.7474C59.3827 33.7474 51.7474 41.3827 51.7474 50.8C51.7474 60.2173 59.3827 67.8526 68.8 67.8526C78.2173 67.8526 85.8526 60.2173 85.8526 50.8C85.8526 41.3827 78.2173 33.7474 68.8 33.7474ZM68.8 63.5895C61.7381 63.5895 56.0105 57.8619 56.0105 50.8C56.0105 43.7381 61.7381 38.0105 68.8 38.0105C75.8619 38.0105 81.5895 43.7381 81.5895 50.8C81.5895 57.8619 75.8619 63.5895 68.8 63.5895ZM71.9334 46.49L68.8 40.1442L65.6687 46.49L58.6643 47.5088L63.7332 52.4477L62.5353 59.4201L68.8 56.129L75.0626 59.4222L73.8668 52.4498L78.9335 47.511L71.9334 46.49Z" fill="white"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Woman image */}
          <div className="hero-woman-image-wrap relative z-10 flex justify-start items-start mt-20 sm:mt-24 md:mt-28 shrink-0 w-[345px] sm:w-[400px] md:w-[455px] lg:w-[515px] xl:w-[560px] border-0 outline-none [box-shadow:none]">
            <img
              src={girl1Url}
              alt=""
              className="object-contain object-left-top h-[400px] sm:h-[465px] md:h-[530px] lg:h-[600px] xl:h-[655px] w-full max-w-none border-0 outline-none block align-top"
              style={{ boxShadow: 'none' }}
              aria-hidden
            />
          </div>

          {/* Reconnu par partenaires card */}
          <div className="absolute bottom-[12%] sm:bottom-[15%] right-0 lg:right-4 z-10 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] drop-shadow-lg">
            <img
              src={reconnuUrl}
              alt="Reconnu par plusieurs partenaires"
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  )
}