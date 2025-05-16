export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-archivo font-bold text-onyx mb-4">Cool Stuff We Do</h2>
          <p className="text-lg text-onyx/80 max-w-2xl mx-auto">
            Cloud magic for startups who want to grow without the tech headaches. We've got your back from seed round all the way to Series A/B and beyond.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-cloud text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">Cloud Architecture That Makes Sense</h3>
            <p className="text-onyx/70 flex-grow">
              We'll build you a cloud setup that doesn't require a PhD to understand. Scalable, reliable, and actually makes sense for your business.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Tell me more →</a>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-chart-line text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">Cloud Bills That Don't Make You Cry</h3>
            <p className="text-onyx/70 flex-grow">
              Say goodbye to surprise cloud bills that make your CFO panic. We'll optimize your spend without cutting corners on performance.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Yes please →</a>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-shield-alt text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">Security Without The Paranoia</h3>
            <p className="text-onyx/70 flex-grow">
              Keep the bad guys out without going overboard. We'll set up sensible security and compliance that protects your data and keeps your customers happy.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Lock it down →</a>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-cogs text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">DevOps & FinOps Magic</h3>
            <p className="text-onyx/70 flex-grow">
              Automate all the boring stuff so your team can focus on what matters. We'll make your deployment pipeline smooth and your finance team happy.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Show me how →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
