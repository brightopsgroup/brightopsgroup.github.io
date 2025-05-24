export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-onyx text-ivory bg-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-archivo font-bold mb-6">Why Founders Breathe Easier After Talking to Us</h2>
            <p className="text-lg text-ivory/80 mb-8">We're not your average cloud consultants. Here's why startups like working with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-pumpkin rounded-lg p-6 hover:bg-onyx/80 transition-colors hover:-translate-y-1 transform hover:shadow-glow">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-pumpkin">
                  <i className="fas fa-rocket text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-archivo font-semibold text-lg mb-2">Startup DNA</h3>
                  <p className="text-ivory/70">We get startup culture. Speed, agility, limited resources—been there. We work the way you do.</p>
                </div>
              </div>
            </div>
            
            <div className="border border-pumpkin rounded-lg p-6 hover:bg-onyx/80 transition-colors hover:-translate-y-1 transform hover:shadow-glow">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-pumpkin">
                  <i className="fas fa-shield-alt text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-archivo font-semibold text-lg mb-2">Security First</h3>
                  <p className="text-ivory/70">We speak both security and startup.</p>
                </div>
              </div>
            </div>
            
            <div className="border border-pumpkin rounded-lg p-6 hover:bg-onyx/80 transition-colors hover:-translate-y-1 transform hover:shadow-glow">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-pumpkin">
                  <i className="fas fa-cloud text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-archivo font-semibold text-lg mb-2">Cloud Experts</h3>
                  <p className="text-ivory/70">We live and breathe cloud platforms. From cost optimization to security, we know them inside and out.</p>
                </div>
              </div>
            </div>
            
            <div className="border border-pumpkin rounded-lg p-6 hover:bg-onyx/80 transition-colors hover:-translate-y-1 transform hover:shadow-glow">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-pumpkin">
                  <i className="fas fa-user-friends text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-archivo font-semibold text-lg mb-2">Actual Humans</h3>
                  <p className="text-ivory/70">We're real people who answer emails, explain things clearly, and don't hide behind tech jargon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
