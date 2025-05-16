export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-archivo font-bold text-onyx mb-4">Say Hello!</h2>
            <p className="text-lg text-onyx/80 max-w-2xl mx-auto">
              Ready to make your cloud life way more awesome? Drop us a line and let's chat about how we can help your startup soar.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-onyx text-ivory p-6 md:p-8">
                <h3 className="text-xl font-archivo font-semibold mb-6">Where To Find Us</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-pumpkin">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-archivo font-medium">Email</h4>
                      <a href="mailto:brightopsgroup@gmail.com" className="text-ivory/80 hover:text-pumpkin transition-colors">brightopsgroup@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-pumpkin">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-archivo font-medium">Location</h4>
                      <p className="text-ivory/80">South Jordan, UT</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-archivo font-medium mb-4">Let's Connect</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/brightops-group" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full border border-pumpkin flex items-center justify-center text-pumpkin hover:bg-pumpkin hover:text-white transition-colors" 
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-6 md:p-8">
                <h3 className="text-xl font-archivo font-semibold text-onyx mb-6">Drop Us a Line</h3>
                {/* Formspree form integration */}
                <form action="https://formspree.io/f/brightopsgroup@gmail.com" method="POST" className="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-onyx font-medium mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pumpkin focus:border-pumpkin bg-ivory/50" 
                        required 
                        placeholder="Jane Awesome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-onyx font-medium mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pumpkin focus:border-pumpkin bg-ivory/50" 
                        required 
                        placeholder="jane@coolstartup.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-onyx font-medium mb-2">What's This About?</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pumpkin focus:border-pumpkin bg-ivory/50" 
                      required 
                      placeholder="Cloud help, FinOps magic, or just saying hi"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-onyx font-medium mb-2">Tell Us More</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pumpkin focus:border-pumpkin bg-ivory/50" 
                      required
                      placeholder="What's your cloud situation? How can we help? The more details, the better!"
                    ></textarea>
                  </div>
                  
                  <div className="mb-4 text-center">
                    <p className="text-sm text-onyx/60 mb-4">
                      To finalize this form, you'll need to connect it to a form handling service like Formspree or Netlify Forms when deploying to GitHub Pages.
                    </p>
                    <p className="text-sm text-onyx/60 mb-4">
                      In the meantime, you can email us directly at <a href="mailto:brightopsgroup@gmail.com" className="text-pumpkin hover:underline">brightopsgroup@gmail.com</a>
                    </p>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-pumpkin text-white py-3 rounded-md font-archivo font-medium hover:bg-pumpkin/90 transition-colors transform hover:-translate-y-1"
                  >
                    Send It Our Way!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
