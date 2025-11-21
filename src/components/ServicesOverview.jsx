export default function ServicesOverview() {
  const items = [
    {
      key: 'wps',
      title: 'Website Presence System (WPS)',
      desc: 'Clean, fast websites built for trust and conversion. Mobile-first, SEO-ready, analytics-enabled.',
      points: ['Pages: Home / About / Services / Contact', 'Booking + WhatsApp CTAs', 'Google Maps + Contact form', 'Google Business Profile', 'Fast hosting + CDN', 'Performance-optimized'],
    },
    {
      key: 'bas',
      title: 'Business Automation System (BAS)',
      desc: 'Automate lead capture, routing, scheduling, and reporting. Spend time on work, not admin.',
      points: ['Zapier/Make integrations', 'CRM setup (HubSpot/Zoho/Airtable)', 'Appointment workflows', 'Payment notifications', 'Email nurture sequences', 'Review/feedback automation'],
    },
    {
      key: 'sps',
      title: 'Security Protection System (SPS)',
      desc: 'Security-first. Hardening, monitoring, backups, and incident readiness with digital forensics.',
      points: ['HTTPS/SSL', 'Cloudflare WAF + DDoS', 'Malware removal & hardening', 'Backups: daily/weekly', 'VAPT-lite scans', 'Email spoofing protection'],
    }
  ];

  return (
    <section className="py-14 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900" style={{fontFamily:'Poppins, Inter, sans-serif'}}>Three Core Systems</h2>
          <p className="text-neutral-600 mt-2 max-w-2xl">Simple, modular building blocks for your digital growth. Start with your website, automate operations, and protect it all.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card) => (
            <div key={card.key} className="rounded-xl bg-white border border-neutral-200 p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-neutral-900">{card.title}</h3>
              <p className="mt-2 text-neutral-600">{card.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600 list-disc list-inside">
                {card.points.map((p, i) => (<li key={i}>{p}</li>))}
              </ul>
              <div className="mt-5">
                <a href={`/services#${card.key}`} className="text-[#00C2FF] font-semibold">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
