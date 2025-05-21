export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-archivo font-bold text-onyx mb-4">Stuff That Buys You Time (and Peace)</h2>
          <p className="text-lg text-onyx/80 max-w-2xl mx-auto">
            We're your AWS crew—cutting spend, locking down infra, and keeping your startup alive long enough to actually raise that next round.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-cloud text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">🧠 AWS Architecture That Makes Sense</h3>
            <p className="text-onyx/70 flex-grow">
              We build startup-friendly AWS infrastructure that works — no PhD required. Think fast, reliable, and ready to scale without torching your budget.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Tell me more</a>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-chart-line text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">📉 AWS Bills That Don't Make You Cry</h3>
            <p className="text-onyx/70 flex-grow">
              No more mystery AWS invoices or surprise charges. We find the leaks, seal the holes, and give your runway a fighting chance.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Yes please</a>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-shield-alt text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">🔒 AWS Security Without The Paranoia</h3>
            <p className="text-onyx/70 flex-grow">
              We keep the compliance sharks happy without sinking your dev team. Pen testing, hardening, and AWS security that actually makes sense for startups.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Lock it down</a>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-cogs text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">⚙️ AWS DevOps & FinOps Magic</h3>
            <p className="text-onyx/70 flex-grow">
              Automate, optimize, and stop duct-taping AWS infra together. We give your team the tools to move fast and stay secure.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Show me how</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
