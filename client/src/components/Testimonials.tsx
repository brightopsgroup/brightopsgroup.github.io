export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-archivo font-bold text-onyx mb-4">People Who Stopped Crying Over Their AWS Bill</h2>
          <p className="text-lg text-onyx/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what folks say after working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Testimonial 1 */}
          <div className="mb-10 bg-ivory rounded-lg p-6 relative transform hover:-rotate-1 transition-transform hover:shadow-glow">
            <div className="absolute top-0 right-0 h-20 w-20 bg-pumpkin/10 rounded-bl-full"></div>
            <div className="text-pumpkin mb-4">
              <i className="fas fa-quote-left text-3xl"></i>
            </div>
            <p className="text-onyx/80 mb-6 text-lg">
              "BrightOps saved us enough to extend runway by 3 months. Worth it for that alone."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pumpkin/20 rounded-full flex items-center justify-center text-pumpkin">
                <span className="font-archivo font-bold text-lg">JS</span>
              </div>
              <div className="ml-4">
                <h4 className="font-archivo font-semibold text-onyx">Jamie S.</h4>
                <p className="text-sm text-onyx/60">Founder @ FintechApp</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="mb-10 bg-ivory rounded-lg p-6 relative transform hover:rotate-1 transition-transform hover:shadow-glow">
            <div className="absolute top-0 right-0 h-20 w-20 bg-pumpkin/10 rounded-bl-full"></div>
            <div className="text-pumpkin mb-4">
              <i className="fas fa-quote-left text-3xl"></i>
            </div>
            <p className="text-onyx/80 mb-6 text-lg">
              "I was losing sleep over our cloud security until BrightOps came in. Now our setup is rock solid, and I actually understand how it all works!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pumpkin/20 rounded-full flex items-center justify-center text-pumpkin">
                <span className="font-archivo font-bold text-lg">RL</span>
              </div>
              <div className="ml-4">
                <h4 className="font-archivo font-semibold text-onyx">Riley L.</h4>
                <p className="text-sm text-onyx/60">Tech Lead @ DataCorp</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-ivory rounded-lg p-6 relative transform hover:-rotate-1 transition-transform hover:shadow-glow">
            <div className="absolute top-0 right-0 h-20 w-20 bg-pumpkin/10 rounded-bl-full"></div>
            <div className="text-pumpkin mb-4">
              <i className="fas fa-quote-left text-3xl"></i>
            </div>
            <p className="text-onyx/80 mb-6 text-lg">
              "Working with BrightOps is like having a secret weapon. They helped us migrate to a multi-cloud setup without any downtime. Our investors were blown away!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pumpkin/20 rounded-full flex items-center justify-center text-pumpkin">
                <span className="font-archivo font-bold text-lg">AJ</span>
              </div>
              <div className="ml-4">
                <h4 className="font-archivo font-semibold text-onyx">Alex J.</h4>
                <p className="text-sm text-onyx/60">CTO @ SaaSify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
