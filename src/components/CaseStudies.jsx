export default function CaseStudies(){
  const cases = [
    {title:'Neighborhood Bistro', tag:'Restaurant', desc:'Website + booking + WhatsApp ordering.', metrics:['+37% bookings','50% faster response time']},
    {title:'Harborview Clinic', tag:'Clinic', desc:'Appointments + CRM + autoresponders.', metrics:['7 hours/week saved','+22% show-up rate']},
    {title:'Northstar Coaching', tag:'Coaching', desc:'Lead capture + email automation.', metrics:['3x lead-to-call rate','+18% revenue in 90 days']},
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900" style={{fontFamily:'Poppins, Inter, sans-serif'}}>Recent Work, Real Results</h2>
          <p className="text-neutral-600 mt-2 max-w-2xl">Examples that mirror common local business needs. Practical outcomes, not vanity metrics.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i)=> (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">{c.tag}</div>
              <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-neutral-600">{c.desc}</p>
              <div className="mt-4 grid gap-2">
                {c.metrics.map((m, j)=> (
                  <div key={j} className="text-sm px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-700">{m}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
