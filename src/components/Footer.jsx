export default function Footer(){
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="font-bold text-neutral-900" style={{fontFamily:'Poppins, Inter, sans-serif'}}>NexTier Solutions</div>
          <p className="mt-2 text-neutral-600">Empowering Digital Growth, Securely.</p>
          <div className="mt-3 text-neutral-500">San Francisco, CA</div>
          <div className="mt-1"><a href="mailto:hello@nextier.solutions" className="text-neutral-700 hover:text-neutral-900">hello@nextier.solutions</a></div>
          <div className="mt-1"><a href="https://wa.me/15550102025" className="text-neutral-700 hover:text-neutral-900">WhatsApp</a></div>
        </div>
        <div>
          <div className="font-semibold text-neutral-900">Company</div>
          <ul className="mt-2 space-y-2 text-neutral-600">
            <li><a href="/about" className="hover:text-neutral-900">About</a></li>
            <li><a href="/services" className="hover:text-neutral-900">Services</a></li>
            <li><a href="/contact" className="hover:text-neutral-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-neutral-900">Legal</div>
          <ul className="mt-2 space-y-2 text-neutral-600">
            <li><a href="#" className="hover:text-neutral-900">Privacy</a></li>
            <li><a href="#" className="hover:text-neutral-900">Terms</a></li>
            <li><a href="#" className="hover:text-neutral-900">Security</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-neutral-900">Get in touch</div>
          <p className="mt-2 text-neutral-600">Have a project? Let’s talk.</p>
          <a href="/contact" className="inline-block mt-3 px-4 py-2 rounded-lg bg-neutral-900 text-white">Book a call</a>
        </div>
      </div>
      <div className="text-center text-neutral-500 text-xs py-4">© {new Date().getFullYear()} NexTier Solutions. All rights reserved.</div>
    </footer>
  );
}
