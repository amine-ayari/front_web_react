import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoUrl from '@/img/logo.svg'
import phoneUrl from '@/img/phone.svg'

const navItems: { href: string; label: string }[] = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/#contact', label: 'Contact' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/coaching', label: 'Coaching' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-transparent w-full absolute top-0 left-0 right-0 z-50 border-0 shadow-none">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 flex flex-wrap items-center justify-between gap-2 sm:gap-4 border-0">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 min-w-0 flex-1 justify-start ml-2 sm:ml-6 md:ml-14 lg:ml-20">
          <div className="flex-shrink-0">
            <img
              src={logoUrl}
              alt="MC Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
            />
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins font-bold">
            <img
              src={phoneUrl}
              alt=""
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 flex-shrink-0"
              aria-hidden
            />
            <span className="flex items-baseline gap-1 whitespace-nowrap">
              <span className="text-[#80BDF2]">+33</span>
              <span className={location.pathname === '/services' ? 'text-white' : 'text-[#5a6b7a]'}> 6 71 65 60 97</span>
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-20 flex-shrink-0"
          aria-label="Navigation principale"
        >
          {navItems.map(({ href, label }) => {
            const isActive = location.pathname === href || (href === '/#contact' && location.hash === '#contact')
            const onServicePage = location.pathname === '/services'
            const isWhiteLink = onServicePage && !isActive
            return (
              <Link
                key={label}
                to={href}
                className={`text-lg lg:text-xl xl:text-2xl font-poppins font-bold no-underline transition-colors whitespace-nowrap ${
                  isActive ? 'text-[#80BDF2]' : isWhiteLink ? 'text-white hover:text-white/90' : 'text-[#5a6b7a] hover:text-[#80BDF2]'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg text-[#5a6b7a] hover:text-[#80BDF2] hover:bg-[#80BDF2]/10 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span
            className={`block w-6 h-0.5 bg-current rounded transition-transform ${
              menuOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current rounded my-1 transition-opacity ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current rounded transition-transform ${
              menuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <nav
            className="md:hidden w-full flex flex-col gap-2 py-4 border-t border-[#80BDF2]/20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
            aria-label="Navigation mobile"
          >
            {navItems.map(({ href, label }) => {
              const isActive = location.pathname === href
              const onServicePage = location.pathname === '/services'
              const isWhiteLink = onServicePage && !isActive
              return (
                <Link
                  key={label}
                  to={href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 px-4 text-lg font-poppins font-bold no-underline transition-colors block ${
                    isActive ? 'text-[#80BDF2]' : isWhiteLink ? 'text-white hover:text-white/90' : 'text-[#5a6b7a] hover:text-[#80BDF2]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        )}

        {/* Spacer for desktop to center nav */}
        <div className="hidden md:block min-w-0 flex-1" aria-hidden />
      </div>
    </header>
  )
}
