export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-36 pb-20 md:pb-28 relative overflow-hidden bg-ivory">
      {/* Background pattern with reduced opacity */}
      <div className="absolute inset-0 bg-pattern opacity-50 pointer-events-none"></div>
      
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-pumpkin opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pumpkin opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-archivo font-bold text-onyx mb-6 leading-tight">
            Your AWS Bill's <span className="text-pumpkin relative">
              Worst Enemy
              <span className="absolute bottom-2 left-0 w-full h-3 bg-pumpkin/20 -z-10"></span>
            </span>.<br className="hidden md:block" /> Your Security's New Best Friend.
          </h1>
          
          <p className="text-lg md:text-xl text-onyx/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            We help startups kill AWS waste, lock down their infra, and keep both the CFO and CISO from sending those panic Slack messages.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#contact" 
              className="btn-primary inline-block px-8 py-4 text-lg w-full sm:w-auto text-center transform transition-all duration-300 hover:scale-105 rounded-lg shadow-lg hover:shadow-glow"
            >
              Let's Talk Security →
            </a>
            <a 
              href="/tools" 
              className="inline-block px-8 py-4 text-lg border-2 border-pumpkin text-pumpkin rounded-lg hover:bg-pumpkin/10 transition-all w-full sm:w-auto text-center transform hover:-translate-y-1"
            >
              Show Me the Tools →
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center items-center gap-4 text-onyx/70">
            <div className="flex items-center">
              <i className="fas fa-check-circle text-pumpkin mr-2"></i>
              <span>Save on AWS costs</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-onyx/30 hidden sm:block"></div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-pumpkin mr-2"></i>
              <span>Lock down security</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-onyx/30 hidden sm:block"></div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-pumpkin mr-2"></i>
              <span>Scale with confidence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
