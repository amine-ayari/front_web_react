import { Layout } from '@/components/layout/Layout'
import { useState } from 'react'
import girl4Url from '@/img/girl4.svg'
import diagnosticBtnUrl from '@/img/diagnostic.svg'
import diagnosticBtnHoverUrl from '@/img/diagnosticbtnhoover.svg'
import packBtnUrl from '@/img/pack.svg'
import packBtnHoverUrl from '@/img/packHOOVER.svg'
import logoUrl from '@/img/logo.svg'
import timeUrl from '@/img/time 1.svg'
import creditCardUrl from '@/img/credit-card.svg'
import playUrl from '@/img/play.svg'
import { ContactSection } from '@/pages/landing/ContactSection'

// ─── Time slots 08:00 → 18:00, every 30 min ──────────────────────────────────
const ALL_TIMES: string[] = []
for (let h = 8; h <= 18; h++) {
  ALL_TIMES.push(`${String(h).padStart(2, '0')}:00`)
  if (h < 18) ALL_TIMES.push(`${String(h).padStart(2, '0')}:30`)
}

const VISIBLE_COUNT = 4

// ─── French labels ────────────────────────────────────────────────────────────
const MONTH_NAMES_FR = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
]
const DAY_NAMES_FR = [
  'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi',
]

// ─── Build calendar grid ──────────────────────────────────────────────────────
type CellMonth = 'prev' | 'current' | 'next'
interface CalCell { day: number; month: CellMonth }

function getCalendarWeeks(year: number, month: number): CalCell[][] {
  const firstDow    = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrev  = new Date(year, month, 0).getDate()

  const cells: CalCell[] = []

  for (let i = firstDow - 1; i >= 0; i--)
    cells.push({ day: daysInPrev - i, month: 'prev' })

  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ day: d, month: 'current' })

  let trailing = 1
  while (cells.length % 7 !== 0)
    cells.push({ day: trailing++, month: 'next' })

  const weeks: CalCell[][] = []
  for (let i = 0; i < cells.length; i += 7)
    weeks.push(cells.slice(i, i + 7))
  return weeks
}

// ─── Component ────────────────────────────────────────────────────────────────
export function CoachingPage() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [modalOpen,    setModalOpen]    = useState<'diagnostic' | 'pack' | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [startIndex,   setStartIndex]   = useState(0)
  const [calYear,      setCalYear]      = useState(today.getFullYear())
  const [calMonth,     setCalMonth]     = useState(today.getMonth())

  const closeModal = () => {
    setModalOpen(null)
    setSelectedDate(null)
    setSelectedTime(null)
    setStartIndex(0)
    setCalYear(today.getFullYear())
    setCalMonth(today.getMonth())
  }

  const canScrollUp   = startIndex > 0
  const canScrollDown = startIndex + VISIBLE_COUNT < ALL_TIMES.length
  const visibleTimes  = ALL_TIMES.slice(startIndex, startIndex + VISIBLE_COUNT)

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null)
    setStartIndex(0)
  }

  const goToPrevMonth = () => {
    const d = new Date(calYear, calMonth - 1, 1)
    const minMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    if (d >= minMonth) { setCalYear(d.getFullYear()); setCalMonth(d.getMonth()) }
  }
  const goToNextMonth = () => {
    const d = new Date(calYear, calMonth + 1, 1)
    setCalYear(d.getFullYear()); setCalMonth(d.getMonth())
  }

  // col index 0=Sun, 6=Sat
  const isCellDisabled = (cell: CalCell, colIndex: number): boolean => {
    if (cell.month !== 'current') return true
    if (colIndex === 0 || colIndex === 6) return true        // weekend
    const cellDate = new Date(calYear, calMonth, cell.day)
    return cellDate < today                                   // past
  }

  const isCellToday = (cell: CalCell): boolean =>
    cell.month === 'current' &&
    calYear  === today.getFullYear() &&
    calMonth === today.getMonth()    &&
    cell.day === today.getDate()

  const isCellSelected = (cell: CalCell): boolean =>
    !!selectedDate &&
    cell.month === 'current' &&
    selectedDate.getFullYear() === calYear  &&
    selectedDate.getMonth()    === calMonth &&
    selectedDate.getDate()     === cell.day

  const weeks = getCalendarWeeks(calYear, calMonth)

  const selectedLabel = selectedDate
    ? `${DAY_NAMES_FR[selectedDate.getDay()]} ${selectedDate.getDate()} ${MONTH_NAMES_FR[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`
    : ''

  const isAtMinMonth = calYear === today.getFullYear() && calMonth === today.getMonth()

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full font-poppins bg-white">
        <img src={girl4Url} alt="Coaching" className="block w-full h-auto" style={{ marginTop: '-10px' }} />

        <div className="relative z-10 flex justify-center -mt-16 sm:-mt-24 md:-mt-36 lg:-mt-[550px] pb-20 sm:pb-28 md:pb-40 lg:pb-[250px] px-4 sm:px-0">
          <div className="w-full sm:w-[98%] max-w-[600px] sm:max-w-[1100px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl px-6 sm:px-20 py-10 sm:py-12 text-center">
            <p className="text-sm sm:text-base md:text-lg text-[#5B5A5F] leading-relaxed mb-6">
              Trouver les bonnes solutions ne devrait pas être un parcours compliqué.
              C'est pourquoi je propose un accompagnement structuré, clair et pensé
              pour offrir un maximum de valeur dès la première séance. Que vous ayez
              besoin d'un diagnostic précis, d'un plan d'action immédiat ou d'un suivi
              plus approfondi pour transformer durablement vos pratiques managériales et RH.
            </p>
            <p className="text-base sm:text-lg font-bold text-[#333333] mb-8">
              Vous trouverez ici une offre adaptée à votre situation et à vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center">
              <button onClick={() => setModalOpen('diagnostic')} className="group relative inline-block w-full sm:w-auto" style={{ width: '280px', height: '66px' }}>
                <img src={diagnosticBtnUrl}      alt="Diagnostic" className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-200" />
                <img src={diagnosticBtnHoverUrl} alt=""           className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden />
              </button>
              <button onClick={() => setModalOpen('pack')} className="group relative inline-block w-full sm:w-auto" style={{ width: '280px', height: '66px' }}>
                <img src={packBtnUrl}      alt="Pack" className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-200" />
                <img src={packBtnHoverUrl} alt=""     className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactSection title="Demande Personnalisée" />

      {/* ── Modal ─────────────────────────────────────────────────────────────── */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10">✕</button>

            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-0">

              {/* ── Left: details ─────────────────────────────────────────── */}
              <div className="pr-0 md:pr-12">
                <div className="mb-8 p-6 border-2 border-[#80BDF2] rounded-2xl flex items-center justify-center h-32 w-32 mx-auto">
                  <img src={logoUrl} alt="MC" className="w-16 h-16" />
                </div>
                <div className="h-px bg-[#D9D9D9] mb-8 md:-ml-12 md:w-[calc(100%+6rem)]" />
                <div className="flex flex-col items-start mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-[#80BDF2] flex items-center justify-center flex-shrink-0 mb-3">
                    <img src={logoUrl} alt="MC" className="w-8 h-8" />
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Meet avec Manoel Chouchain</p>
                  <h3 className="font-bold text-lg text-[#000000]">
                    {modalOpen === 'diagnostic' ? 'Diagnostic & Actions prioritaires' : "Pack d'accompagnement - 5 séances"}
                  </h3>
                </div>

                {modalOpen === 'diagnostic' ? (
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3"><img src={timeUrl} alt="" className="w-5 h-5" /><span className="text-[#969696]">60 à 90 minutes</span></div>
                    <div className="flex items-start gap-3"><img src={playUrl} alt="" className="w-5 h-5 flex-shrink-0" /><span className="text-[#969696]">Informations sur la conférence en ligne fournies à la confirmation.</span></div>
                    <div className="flex items-center gap-3"><img src={creditCardUrl} alt="" className="w-5 h-5" /><span className="text-[#969696]">130 €</span></div>
                    <div className="space-y-2 text-xs text-[#969696]">
                      <p>- Faire le point sur la <strong className="text-[#5B5A5F]">situation actuelle.</strong></p>
                      <p>- Identifier les <strong className="text-[#5B5A5F]">problématiques clés.</strong></p>
                      <p>- Définir les <strong className="text-[#5B5A5F]">premières actions</strong> concrètes.</p>
                      <p>- Proposer un plan d'accompagnement <strong className="text-[#5B5A5F]">adapté.</strong></p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3"><img src={timeUrl} alt="" className="w-5 h-5" /><span className="text-[#969696]">60 à 90 minutes</span></div>
                    <div className="flex items-start gap-3"><img src={playUrl} alt="" className="w-5 h-5 flex-shrink-0" /><span className="text-[#969696]">Informations sur la conférence en ligne fournies à la confirmation</span></div>
                    <div className="flex items-center gap-3"><img src={creditCardUrl} alt="" className="w-5 h-5" /><span className="text-[#969696]">Consultation diagnostic : 150€</span></div>
                    <div className="flex items-center gap-3"><img src={creditCardUrl} alt="" className="w-5 h-5" /><span className="text-[#969696]">Pack 5 séances : 650€</span></div>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-start gap-2"><span className="flex-shrink-0 text-gray-600">•</span><span className="text-gray-600">5 séances de 1h (ou 1h30 selon votre choix)</span></li>
                      <li className="flex items-start gap-2"><span className="flex-shrink-0 text-gray-600">•</span><span className="text-gray-600">Agenda flexible sur 1 à 3 mois</span></li>
                      <li className="flex items-start gap-2"><span className="flex-shrink-0 text-gray-600">•</span><span className="text-gray-600">Support entre les séances (optionnel : e-mail / WhatsApp)</span></li>
                      <li className="flex items-start gap-2"><span className="flex-shrink-0 text-gray-600">•</span><span className="text-gray-600">Livrables possibles : documents, templates RH, outils management</span></li>
                    </ul>
                    <div className="mt-4 -mx-12 border-t border-gray-200" />
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-start gap-2"><span className="flex-shrink-0 text-gray-500">–</span><span className="text-gray-600">Mettre en place les <strong className="text-[#5B5A5F]">actions définies.</strong></span></li>
                      <li className="flex items-start gap-2"><span className="flex-shrink-0 text-gray-500">–</span><span className="text-gray-600"><strong className="text-[#5B5A5F]">Développer</strong> les compétences managériales.</span></li>
                      <li className="flex items-start gap-2"><span className="flex-shrink-0 text-gray-500">–</span><span className="text-gray-600">Ajuster les <strong className="text-[#5B5A5F]">stratégies RH.</strong></span></li>
                      <li className="flex items-start gap-2"><span className="flex-shrink-0 text-gray-500">–</span><span className="text-gray-600"><strong className="text-[#5B5A5F]">Suivre</strong> la progression et lever les blocages.</span></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* ── Right: calendar + time ─────────────────────────────────── */}
              <div className="flex flex-col md:border-l-2 md:border-[#D9D9D9] md:pl-12 md:-my-12 md:-mr-12 md:py-12 md:pr-12">
                <h4 className="font-bold text-lg text-[#5B5A5F] mb-6 text-center md:text-left">Sélectionnez la date et l'heure</h4>

                <div className="flex flex-col md:flex-row gap-4 md:items-start">

                  {/* ── Calendar ────────────────────────────────────────── */}
                  <div className={selectedDate ? 'w-full md:flex-shrink-0 md:w-auto' : 'w-full'}>

                    {/* Month nav */}
                    <div className="flex items-center justify-between mb-3 px-1">
                      <button
                        onClick={goToPrevMonth}
                        disabled={isAtMinMonth}
                        className={`text-lg px-2 transition-colors ${isAtMinMonth ? 'text-gray-200 cursor-default' : 'text-[#80BDF2] hover:text-[#5aaee0] cursor-pointer'}`}
                      >
                        ‹
                      </button>
                      <p className="text-center text-gray-500 text-base font-medium">
                        {MONTH_NAMES_FR[calMonth]} {calYear}
                      </p>
                      <button
                        onClick={goToNextMonth}
                        className="text-lg px-2 text-[#80BDF2] hover:text-[#5aaee0] cursor-pointer transition-colors"
                      >
                        ›
                      </button>
                    </div>

                    <table className={`border-collapse w-full ${selectedDate ? "md:w-[260px]" : ""}`} style={{ height: '262px' }}>
                      <thead>
                        <tr>
                          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                            <th key={d} className="border border-gray-200 text-center text-xs font-normal text-gray-500 px-0.5">{d}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {weeks.map((week, wi) => (
                          <tr key={wi} style={{ height: '44px' }}>
                            {week.map((cell, di) => {
                              const disabled   = isCellDisabled(cell, di)
                              const isToday    = isCellToday(cell)
                              const isSelected = isCellSelected(cell)

                              return (
                                <td key={di} className="border border-gray-200 text-center py-1 px-0.5">
                                  <button
                                    onClick={() => {
                                      if (!disabled)
                                        handleDateSelect(new Date(calYear, calMonth, cell.day))
                                    }}
                                    disabled={disabled}
                                    className={`rounded-full flex items-center justify-center mx-auto font-normal transition-colors
                                      ${selectedDate ? 'md:w-7 md:h-7 md:text-xs w-9 h-9 text-base' : 'w-9 h-9 text-base'}
                                      ${
                                        disabled
                                          ? 'text-gray-300 cursor-default'
                                          : isSelected
                                          ? 'bg-[#C8E6FA] text-[#80BDF2] font-semibold'
                                          : isToday
                                          ? 'border-2 border-[#80BDF2] text-[#80BDF2] font-semibold hover:bg-[#EBF6FF] cursor-pointer'
                                          : 'text-gray-700 hover:bg-gray-100 cursor-pointer'
                                      }`}
                                  >
                                    {cell.day}
                                  </button>
                                </td>
                              )
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* ── Time Slots ──────────────────────────────────────── */}
                  {selectedDate && (
                    <div className="w-full md:flex-1 md:min-w-[150px] mt-0 md:mt-1">
                      <p className="text-xs font-semibold text-[#5B5A5F] mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                        {selectedLabel}
                      </p>
                      <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-lg px-6 py-3 mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600 whitespace-nowrap">Disponibilité en temps</span>
                      </div>

                      {/* Up arrow */}
                      <button
                        onClick={() => { if (canScrollUp) setStartIndex(i => i - 1) }}
                        disabled={!canScrollUp}
                        className={`w-full flex items-center justify-center py-1 mb-1 rounded transition-colors ${canScrollUp ? 'text-[#80BDF2] hover:bg-[#EBF6FF] cursor-pointer' : 'text-gray-200 cursor-default'}`}
                        aria-label="Scroll up"
                      >
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                          <path d="M1 9L8 2L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      <div className="space-y-2">
                        {visibleTimes.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`w-full flex items-center justify-center gap-2 border rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                              selectedTime === time
                                ? 'border-[#80BDF2] bg-[#EBF6FF] text-[#80BDF2]'
                                : 'border-gray-200 text-[#80BDF2] hover:border-[#80BDF2] hover:bg-[#EBF6FF]'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                            {time}
                          </button>
                        ))}
                      </div>

                      {/* Down arrow */}
                      <button
                        onClick={() => { if (canScrollDown) setStartIndex(i => i + 1) }}
                        disabled={!canScrollDown}
                        className={`w-full flex items-center justify-center py-1 mt-1 rounded transition-colors ${canScrollDown ? 'text-[#80BDF2] hover:bg-[#EBF6FF] cursor-pointer' : 'text-gray-200 cursor-default'}`}
                        aria-label="Scroll down"
                      >
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                          <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}