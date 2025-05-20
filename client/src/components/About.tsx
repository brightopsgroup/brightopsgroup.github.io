export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-archivo font-bold text-onyx mb-6">Who's Slashing Your AWS Bill?</h2>
            <p className="text-lg text-onyx/80 mb-6">
              We're BrightOps Group – a bunch of AWS nerds who actually make this tech stuff fun.
            </p>
            <p className="text-lg text-onyx/80 mb-8">
              We saw too many startups banging their heads against complicated AWS setups, so we decided to fix that.
              Think of us as your AWS-whispering friends who happen to know cost optimization and security inside out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory rounded-lg p-6 text-center hover:shadow-md transition-shadow transform hover:-rotate-1">
              <div className="mb-4 text-pumpkin">
                <i className="fas fa-check-circle text-4xl"></i>
              </div>
              <h3 className="font-archivo font-semibold text-lg text-onyx mb-3">No BS. Just Results.</h3>
              <p className="text-onyx/70">We skip the fancy jargon and deliver stuff that actually works for your startup.</p>
            </div>
            
            <div className="bg-ivory rounded-lg p-6 text-center hover:shadow-md transition-shadow transform hover:-rotate-1">
              <div className="mb-4 text-pumpkin">
                <i className="fas fa-comment-dots text-4xl"></i>
              </div>
              <h3 className="font-archivo font-semibold text-lg text-onyx mb-3">Human Language Only</h3>
              <p className="text-onyx/70">We translate AWS-speak into words normal humans can understand. Revolutionary, right?</p>
            </div>
            
            <div className="bg-ivory rounded-lg p-6 text-center hover:shadow-md transition-shadow transform hover:-rotate-1">
              <div className="mb-4 text-pumpkin">
                <i className="fas fa-coins text-4xl"></i>
              </div>
              <h3 className="font-archivo font-semibold text-lg text-onyx mb-3">Money Stays In Your Pocket</h3>
              <p className="text-onyx/70">We're weirdly obsessed with making your AWS bill smaller. Your CFO will thank us.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
