import IconSVG from './IconSVG';

export default function Tools() {
  return (
    <>
      {/* Tools Header */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-archivo font-bold text-onyx mb-6 leading-tight">
              Our GitHub Tools
            </h1>
            <p className="text-lg md:text-xl text-onyx/80 mb-8 max-w-xl mx-auto">
              Free, simple cloud tools that make your life easier
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/" className="inline-block px-6 py-3 text-lg border-2 border-pumpkin text-pumpkin rounded-md hover:bg-pumpkin/10 transition-colors w-full sm:w-auto text-center">
                Back to Home
              </a>
              <a 
                href="https://github.com/BrightOpsGroup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-block px-6 py-3 text-lg w-full sm:w-auto text-center"
              >
                Visit Our GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {/* Tool 1 */}
              <div className="bg-ivory rounded-lg p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-onyx rounded-full flex items-center justify-center mr-4 shadow-md">
                    <IconSVG type="cost" className="w-8 h-8" color="#ff8c42" />
                  </div>
                  <h2 className="text-2xl font-archivo font-bold text-onyx">Roi - FinOps CLI</h2>
                </div>
                <p className="text-onyx/80 mb-4">
                  A simple command-line tool to identify cost savings in your AWS, Azure, or GCP environment. 
                  Find idle resources, right-sizing opportunities, and reserved instance recommendations.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/BrightOpsGroup/roi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-pumpkin font-medium hover:underline"
                  >
                    <i className="fab fa-github mr-2"></i>
                    GitHub Repository
                  </a>
                </div>
              </div>
              
              {/* Tool 2 */}
              <div className="bg-ivory rounded-lg p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-onyx rounded-full flex items-center justify-center mr-4 shadow-md">
                    <IconSVG type="security" className="w-8 h-8" color="#ff8c42" />
                  </div>
                  <h2 className="text-2xl font-archivo font-bold text-onyx">Security CLI</h2>
                </div>
                <p className="text-onyx/80 mb-4">
                  A lightweight security scanner for cloud environments. Checks for common misconfigurations, 
                  insecure permissions, and compliance issues. Generates easy-to-read reports to help fix problems.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/BrightOpsGroup/security-cli" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-pumpkin font-medium hover:underline"
                  >
                    <i className="fab fa-github mr-2"></i>
                    GitHub Repository
                  </a>
                </div>
              </div>
              
              {/* Tool 3 */}
              <div className="bg-ivory rounded-lg p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-onyx rounded-full flex items-center justify-center mr-4 shadow-md">
                    <IconSVG type="cloud" className="w-8 h-8" color="#ff8c42" />
                  </div>
                  <h2 className="text-2xl font-archivo font-bold text-onyx">Cloud Mapper</h2>
                </div>
                <p className="text-onyx/80 mb-4">
                  Visualize your cloud infrastructure with simple, understandable diagrams. 
                  Great for explaining your architecture to teammates or documenting your setup.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/BrightOpsGroup/cloud-mapper" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-pumpkin font-medium hover:underline"
                  >
                    <i className="fab fa-github mr-2"></i>
                    GitHub Repository
                  </a>
                </div>
              </div>
              
              {/* Tool 4 */}
              <div className="bg-ivory rounded-lg p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-onyx rounded-full flex items-center justify-center mr-4 shadow-md">
                    <IconSVG type="devops" className="w-8 h-8" color="#ff8c42" />
                  </div>
                  <h2 className="text-2xl font-archivo font-bold text-onyx">Deploy Buddy</h2>
                </div>
                <p className="text-onyx/80 mb-4">
                  Simplify your deployment process. Pre-built templates for common deployment scenarios 
                  that work with GitHub Actions, GitLab CI, and other CI/CD platforms.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/BrightOpsGroup/deploy-buddy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-pumpkin font-medium hover:underline"
                  >
                    <i className="fab fa-github mr-2"></i>
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 md:py-20 bg-pumpkin text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-archivo font-bold mb-6">Want Expert Help with These Tools?</h2>
            <p className="text-lg md:text-xl mb-8">
              Our team can help you implement and customize these tools for your specific cloud environment. 
              We also offer training sessions to help your team get the most out of our tools.
            </p>
            <a href="/#contact" className="inline-block bg-white text-pumpkin px-8 py-3 rounded-md font-archivo font-medium text-lg hover:bg-opacity-90 transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}