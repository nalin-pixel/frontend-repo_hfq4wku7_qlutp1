import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,#00C2FF33,transparent_40%),radial-gradient(circle_at_80%_0%,#00C2FF22,transparent_35%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs tracking-widest font-semibold text-neutral-500 uppercase">NexTier Solutions</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-neutral-900" style={{fontFamily:'Poppins, Inter, sans-serif'}}>
            Modern Websites, Smart Automation & Secure Digital Solutions.
          </h1>
          <p className="mt-5 text-lg text-neutral-600 max-w-xl">
            We help businesses go digital with clean websites, automated workflows, and secure online systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact" className="px-5 py-3 rounded-lg bg-[#00C2FF] text-black font-semibold shadow-sm hover:brightness-110 transition">Book Free Consultation</a>
            <a href="/services" className="px-5 py-3 rounded-lg border border-neutral-200 text-neutral-900 font-semibold hover:bg-neutral-50 transition">View Services</a>
          </div>
          <ul className="mt-8 text-sm text-neutral-500 grid sm:grid-cols-2 gap-2 max-w-md">
            <li>Clean process • Fast delivery</li>
            <li>Automation-first • Security-first</li>
            <li>Friendly support</li>
            <li>Affordable for local businesses</li>
          </ul>
        </div>
        <div className="h-[420px] sm:h-[520px] lg:h-[560px]">
          <div className="w-full h-full rounded-2xl overflow-hidden border border-neutral-200/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] bg-white/60 backdrop-blur">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
