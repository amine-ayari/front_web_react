import { useState, useEffect } from 'react'
import pub1Url from '@/img/pub1.svg'
import pub2Url from '@/img/pub2.svg'
import pub3Url from '@/img/pub 3.svg'

const recoLogos = [pub1Url, pub2Url, pub3Url]

interface ContactSectionProps {
  title?: string
}

export function ContactSection({ title = 'Me Contacter' }: ContactSectionProps = {}) {
  const [recoIndex, setRecoIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => {
      setRecoIndex((i) => (i + 1) % recoLogos.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="contact" className="w-full bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 font-poppins" aria-labelledby="contact-title">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
          <div className="h-px flex-1 max-w-[140px] sm:max-w-[220px] bg-[#80BDF2]" aria-hidden />
          <h2 id="contact-title" className="text-[#80BDF2]  text-2xl sm:text-3xl text-center shrink-0 px-2">
            {title}
          </h2>
          <div className="h-px flex-1 max-w-[140px] sm:max-w-[220px] bg-[#80BDF2]" aria-hidden />
        </div>
        <form className="space-y-5 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-transparent bg-[#F6F6F6] text-[#5B5A5F] placeholder-gray-500 focus:border-[#80BDF2] focus:ring-2 focus:ring-[#80BDF2]/30 outline-none transition"
              placeholder="Ton Nom *"
              aria-label="Ton Nom"
            />
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-transparent bg-[#F6F6F6] text-[#5B5A5F] placeholder-gray-500 focus:border-[#80BDF2] focus:ring-2 focus:ring-[#80BDF2]/30 outline-none transition"
              placeholder="Ton Email *"
              aria-label="Ton Email"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-lg border border-transparent bg-[#F6F6F6] text-[#5B5A5F] placeholder-gray-500 focus:border-[#80BDF2] focus:ring-2 focus:ring-[#80BDF2]/30 outline-none transition"
              placeholder="Ton Téléphone *"
              aria-label="Ton Téléphone"
            />
            <input
              type="text"
              name="sector"
              required
              className="w-full px-4 py-3 rounded-lg border border-transparent bg-[#F6F6F6] text-[#5B5A5F] placeholder-gray-500 focus:border-[#80BDF2] focus:ring-2 focus:ring-[#80BDF2]/30 outline-none transition"
              placeholder="Ton Secteur D'activité *"
              aria-label="Ton Secteur D'activité"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-transparent bg-[#F6F6F6] text-[#5B5A5F] placeholder-gray-500 focus:border-[#80BDF2] focus:ring-2 focus:ring-[#80BDF2]/30 outline-none transition resize-y min-h-[320px]"
            placeholder="Ton Message *"
            aria-label="Ton Message"
          />
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="px-8 py-3.5 rounded-lg bg-[#80BDF2] text-white font-semibold hover:bg-[#6baae0] transition-colors inline-flex items-center gap-2"
            >
              Envoyer un message →
            </button>
          </div>
        </form>
      </div>

      {/* Reconnu par + logos: wider than the form above */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-14 sm:mt-16">
        <p className="text-center text-[#969696] text-lg sm:text-xl mb-6">
          Reconnu par
        </p>
        <div className="flex justify-center items-center min-h-[140px] sm:min-h-[200px] md:min-h-[240px]">
          <img
            key={recoIndex}
            src={recoLogos[recoIndex]}
            alt=""
            className="max-h-24 sm:max-h-36 md:max-h-44 lg:max-h-52 w-auto object-contain animate-fadeIn"
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}
