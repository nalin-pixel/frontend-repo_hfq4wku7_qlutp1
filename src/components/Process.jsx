export default function Process(){
  const steps = ['Discover', 'Build', 'Automate', 'Secure', 'Scale'];
  return (
    <section className="py-14 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900" style={{fontFamily:'Poppins, Inter, sans-serif'}}>Our Process</h2>
        <div className="mt-8 grid sm:grid-cols-5 gap-4">
          {steps.map((s, i)=> (
            <div key={i} className="rounded-xl bg-white border border-neutral-200 p-4 text-center shadow-sm">
              <div className="text-sm text-neutral-500">Step {i+1}</div>
              <div className="mt-1 font-semibold">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
