export default function Testimonials(){
  const items=[
    {name:'Maya R.', role:'Clinic Manager', quote:'We finally run on one system. Patients book faster and our team gets time back.'},
    {name:'Andre C.', role:'Cafe Owner', quote:'Clean site, WhatsApp orders, and analytics that actually help. Simple and solid.'},
    {name:'Sofia K.', role:'Founder, SaaS', quote:'They automate the boring parts and take security seriously. It just works.'},
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900" style={{fontFamily:'Poppins, Inter, sans-serif'}}>What Clients Say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t,i)=> (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-neutral-700">“{t.quote}”</p>
              <div className="mt-4 text-sm text-neutral-500">{t.name} • {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
