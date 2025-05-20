export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-archivo font-bold text-onyx mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-archivo font-bold text-onyx mb-4">
          Lost? At least you’re not losing $30K a month in unused VMs anymore.
        </h2>
        <p className="text-lg text-onyx/80 mb-8">
          Don't worry though - we're better at keeping your cloud costs down than we are at keeping track of this page.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="/" 
            className="btn-primary inline-block px-8 py-4 text-lg w-full sm:w-auto text-center transform transition-all duration-300 hover:scale-105 rounded-lg shadow-lg hover:shadow-glow"
          >
            Back to Home →
          </a>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 text-lg border-2 border-pumpkin text-pumpkin rounded-lg hover:bg-pumpkin/10 transition-all w-full sm:w-auto text-center transform hover:-translate-y-1"
          >
            Need Help? →
          </a>
        </div>
      </div>
    </div>
  );
} 