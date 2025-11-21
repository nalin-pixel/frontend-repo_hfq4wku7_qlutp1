import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-extrabold text-lg" style={{fontFamily:'Poppins, Inter, sans-serif'}}>NexTier<span className="text-[#00C2FF]">.</span></a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="/services" className="hover:text-neutral-900">Services</a>
          <a href="/about" className="hover:text-neutral-900">About</a>
          <a href="/contact" className="hover:text-neutral-900">Contact</a>
          <a href="/admin" className="hover:text-neutral-900">Admin</a>
          <a href="/contact" className="px-3 py-2 rounded-md bg-[#00C2FF] text-black font-semibold">Book Free Consultation</a>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200 px-6 py-3 bg-white">
          <div className="flex flex-col gap-3 text-neutral-700">
            <a href="/services">Services</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/admin">Admin</a>
          </div>
        </div>
      )}
    </header>
  )
}
