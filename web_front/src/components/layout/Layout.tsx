import { type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 relative overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  )
}