import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold" style={{fontFamily:'Poppins, Inter, sans-serif'}}>About NexTier Solutions</h1>
          <p className="mt-4 text-neutral-700 max-w-3xl">We build calm, modern systems that help small businesses operate like they’re already at the next tier. Our philosophy is simple: clarity over complexity, automation over repetition, and security from day one.</p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="font-semibold">Mission</div>
              <p className="mt-2 text-neutral-700">Empower local businesses and early-stage teams with reliable digital foundations that scale.</p>
            </div>
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="font-semibold">Vision</div>
              <p className="mt-2 text-neutral-700">A world where modern websites, automation, and security are accessible and uncomplicated.</p>
            </div>
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="font-semibold">Values</div>
              <p className="mt-2 text-neutral-700">Simplicity, clarity, reliability, and a security-first mindset.</p>
            </div>
            <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="font-semibold">Founder Message</div>
              <p className="mt-2 text-neutral-700">We started NexTier to remove noise. Clean builds, honest guidance, and systems that just work.</p>
            </div>
          </div>
          <div className="mt-10 p-6 rounded-xl bg-neutral-900 text-white">
            <div className="font-semibold">Why we exist</div>
            <p className="mt-2 text-neutral-200">Most teams don’t need more tools — they need the right ones connected safely. We bring the experience, standards, and care to make that happen.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
