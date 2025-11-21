import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Admin(){
  const [counts, setCounts] = useState(null)
  const [home, setHome] = useState({hero_heading:'',hero_subheading:'',primary_cta:'Book Free Consultation',secondary_cta:'View Services'})
  const [service, setService] = useState({key:'wps',title:'',description:'',deliverables:'',benefits:''})

  useEffect(()=>{
    fetch(`${API}/api/admin/dashboard`).then(r=>r.json()).then(setCounts).catch(()=>{})
    fetch(`${API}/api/content/home`).then(r=>r.json()).then(setHome).catch(()=>{})
  },[])

  async function saveHome(e){
    e.preventDefault()
    await fetch(`${API}/api/admin/content/home`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(home)})
    alert('Homepage saved')
  }
  async function addService(e){
    e.preventDefault()
    const payload = { ...service, deliverables: service.deliverables.split('\n').filter(Boolean), benefits: service.benefits.split('\n').filter(Boolean) }
    await fetch(`${API}/api/admin/content/service`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
    alert('Service added')
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold" style={{fontFamily:'Poppins, Inter, sans-serif'}}>Admin Dashboard</h1>
            <div className="mt-6 grid gap-8">
              <form onSubmit={saveHome} className="rounded-xl border border-neutral-200 p-6">
                <div className="font-semibold">Homepage Content</div>
                <input className="mt-3 w-full px-4 py-2 rounded-lg border" value={home.hero_heading} onChange={e=>setHome({...home,hero_heading:e.target.value})} placeholder="Hero heading" />
                <textarea className="mt-3 w-full px-4 py-2 rounded-lg border" rows="3" value={home.hero_subheading} onChange={e=>setHome({...home,hero_subheading:e.target.value})} placeholder="Subheading" />
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <input className="px-4 py-2 rounded-lg border" value={home.primary_cta} onChange={e=>setHome({...home,primary_cta:e.target.value})} placeholder="Primary CTA" />
                  <input className="px-4 py-2 rounded-lg border" value={home.secondary_cta} onChange={e=>setHome({...home,secondary_cta:e.target.value})} placeholder="Secondary CTA" />
                </div>
                <button className="mt-4 px-4 py-2 rounded-lg bg-neutral-900 text-white">Save</button>
              </form>

              <form onSubmit={addService} className="rounded-xl border border-neutral-200 p-6">
                <div className="font-semibold">Add Service</div>
                <div className="grid md:grid-cols-2 gap-3 mt-3">
                  <select className="px-4 py-2 rounded-lg border" value={service.key} onChange={e=>setService({...service,key:e.target.value})}>
                    <option value="wps">WPS</option>
                    <option value="bas">BAS</option>
                    <option value="sps">SPS</option>
                  </select>
                  <input className="px-4 py-2 rounded-lg border" value={service.title} onChange={e=>setService({...service,title:e.target.value})} placeholder="Title"/>
                </div>
                <textarea className="mt-3 w-full px-4 py-2 rounded-lg border" rows="3" value={service.description} onChange={e=>setService({...service,description:e.target.value})} placeholder="Description"/>
                <div className="grid md:grid-cols-2 gap-3 mt-3">
                  <textarea className="px-4 py-2 rounded-lg border" rows="5" value={service.deliverables} onChange={e=>setService({...service,deliverables:e.target.value})} placeholder={'Deliverables (one per line)'} />
                  <textarea className="px-4 py-2 rounded-lg border" rows="5" value={service.benefits} onChange={e=>setService({...service,benefits:e.target.value})} placeholder={'Benefits (one per line)'} />
                </div>
                <button className="mt-4 px-4 py-2 rounded-lg bg-neutral-900 text-white">Add</button>
              </form>
            </div>
          </div>
          <aside>
            <div className="rounded-xl border border-neutral-200 p-6">
              <div className="font-semibold">Stats</div>
              <div className="mt-3 text-sm text-neutral-700">
                <div>Services: {counts?.counts?.services ?? 0}</div>
                <div>Case Studies: {counts?.counts?.case_studies ?? 0}</div>
                <div>Blog Posts: {counts?.counts?.blog_posts ?? 0}</div>
                <div>Contacts: {counts?.counts?.contacts ?? 0}</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
