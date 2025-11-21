export default function CTA(){
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center rounded-2xl bg-neutral-900 text-white p-12">
        <h2 className="text-3xl md:text-4xl font-bold" style={{fontFamily:'Poppins, Inter, sans-serif'}}>Let’s Upgrade Your Business.</h2>
        <p className="mt-3 text-neutral-300">Clean websites. Smart automations. Security by default.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/contact" className="px-5 py-3 rounded-lg bg-[#00C2FF] text-black font-semibold shadow-sm hover:brightness-110 transition">Get Started</a>
          <a href="/services" className="px-5 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition">View Services</a>
        </div>
      </div>
    </section>
  );
}
