import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e){
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      message: form.get('message'),
      source: 'website'
    }
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Failed')
      setStatus('Thanks — we received your message.')
      e.currentTarget.reset()
    } catch(err){
      setStatus('Something went wrong. Please try WhatsApp or email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="py-10">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold" style={{fontFamily:'Poppins, Inter, sans-serif'}}>Contact</h1>
            <p className="mt-3 text-neutral-700">Tell us a bit about your business and what you’re trying to solve. We’ll reply within one business day.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <input name="name" required placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"/>
              <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"/>
              <input name="phone" placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"/>
              <textarea name="message" required placeholder="How can we help?" rows="5" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"></textarea>
              <button disabled={loading} className="w-full px-5 py-3 rounded-lg bg-neutral-900 text-white font-semibold disabled:opacity-60">{loading? 'Sending…' : 'Send message'}</button>
              {status && <div className="text-sm text-neutral-600">{status}</div>}
            </form>
          </div>
          <div className="space-y-4">
            <a href="https://wa.me/15550102025" className="block px-5 py-3 rounded-lg bg-[#00C2FF] text-black font-semibold text-center">WhatsApp</a>
            <a href="mailto:hello@nextier.solutions" className="block px-5 py-3 rounded-lg border border-neutral-300 text-center">Email</a>
            <div className="rounded-xl overflow-hidden border border-neutral-200">
              <iframe title="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086658262188!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1610000000000"></iframe>
            </div>
            <div className="text-sm text-neutral-600">We send an auto‑response confirming we received your message.</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
