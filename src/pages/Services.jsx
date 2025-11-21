import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Section({id, title, desc, deliverables, benefits, examples}){
  return (
    <section id={id} className="py-12 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold" style={{fontFamily:'Poppins, Inter, sans-serif'}}>{title}</h2>
        <p className="mt-3 text-neutral-700">{desc}</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div>
            <div className="font-semibold text-neutral-900">Deliverables</div>
            <ul className="mt-2 space-y-2 text-neutral-700 list-disc list-inside">
              {deliverables.map((d,i)=> <li key={i}>{d}</li>)}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-neutral-900">Benefits</div>
            <ul className="mt-2 space-y-2 text-neutral-700 list-disc list-inside">
              {benefits.map((b,i)=> <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <div className="font-semibold text-neutral-900">Micro‑examples</div>
          <ul className="mt-2 space-y-2 text-neutral-700 list-disc list-inside">
            {examples.map((e,i)=> <li key={i}>{e}</li>)}
          </ul>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-neutral-50 border border-neutral-200">
          <div className="font-semibold">FAQ</div>
          <p className="mt-2 text-sm text-neutral-700">How long does it take? Typical projects take 2–4 weeks depending on scope. We ship fast with clarity and security by default.</p>
        </div>
      </div>
    </section>
  )
}

export default function Services(){
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold" style={{fontFamily:'Poppins, Inter, sans-serif'}}>Services</h1>
          <p className="mt-3 text-neutral-700">Clarity over complexity. We focus on outcomes: visibility, time saved, and protection.</p>
        </div>
        <Section
          id="wps"
          title="Website Presence System (WPS)"
          desc="Modern, clean digital presence for businesses. Built for speed, clarity, and trust."
          deliverables={["Home/About/Services/Contact pages","Mobile-first UI","Booking/WhatsApp CTAs","Google Maps + contact form","Google Business Profile setup","Basic SEO foundations","Analytics setup","Fast hosting + CDN","Performance-optimized builds"]}
          benefits={["Professional credibility","Better local discovery","Higher conversion","Maintainable and fast"]}
          examples={["Restaurant: menu + booking + WhatsApp","Clinic: services + appointment form","Contractor: quote form + maps"]}
        />
        <Section
          id="bas"
          title="Business Automation System (BAS)"
          desc="Automations to save time and generate consistent workflows using tools like Zapier, Make, Airtable, Zoho, HubSpot."
          deliverables={["WhatsApp autoresponders","CRM setup and routing","Lead capture → CRM flows","Appointment workflows","Payment notification automation","Email nurture sequences","Review / feedback automation","Dashboard reporting automation","Funnel automation"]}
          benefits={["7+ hours/week saved","Faster follow‑ups","Cleaner pipeline","More consistent revenue"]}
          examples={["Clinic: form → CRM → SMS reminders","Coaching: lead magnet → email nurture","Retail: payment → Slack/Email alerts"]}
        />
        <Section
          id="sps"
          title="Security Protection System (SPS)"
          desc="Security-first digital presence. Includes digital forensics, foundational cybersecurity, and ongoing protection."
          deliverables={["HTTPS/SSL","Cloudflare firewall + DDoS","Malware removal","Security hardening","Daily/weekly backups","Basic VAPT-lite scans","Email spoofing protection","Incident recovery support","Digital Forensics (log review, compromise analysis, threat tracing)","Uptime + vulnerability monitoring"]}
          benefits={["Reduced risk","Stronger trust","Faster recovery","Compliance support"]}
          examples={["Compromise triage and cleanup","DMARC/SPF/DKIM setup","Firewall + bot filtering"]}
        />
        <div className="max-w-5xl mx-auto px-6 py-10 text-center">
          <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-[#00C2FF] text-black font-semibold">Book a Free Consultation</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
