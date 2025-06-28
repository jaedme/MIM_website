export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Investment Management for Your Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Meixler Investment Management provides personalized wealth management 
              and investment advisory services in Show Low, Arizona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Meixler Investment Management?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide personalized investment strategies designed to preserve and grow your wealth over the long term.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">20-Year Track Record</h3>
              <p className="text-gray-600">
                Two decades of proven investment success with CFA certification and SEC registration.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Graham-Dodd Philosophy</h3>
              <p className="text-gray-600">
                Investment philosophy rooted in the value-based Graham-Dodd school with Austrian Economic influence.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hand-Picked Portfolios</h3>
              <p className="text-gray-600">
                We manage our own portfolios - no expensive outside money managers. Each position is hand-picked and customized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Investment Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive wealth management solutions for individuals and families
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Management</h3>
              <p className="text-gray-600 mb-6">
                We manage our own portfolios with no expensive outside money managers or mutual funds. Each position and portfolio is hand-picked and customized to the individual investor.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Hand-picked individual security selection</li>
                <li>• Customized portfolio construction</li>
                <li>• No expensive mutual funds or outside managers</li>
                <li>• Personalized risk management</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Advisory</h3>
              <p className="text-gray-600 mb-6">
                Strategic investment guidance and financial planning tailored to your specific goals and risk tolerance.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Personalized investment strategies</li>
                <li>• Financial planning and analysis</li>
                <li>• Retirement planning</li>
                <li>• Estate planning coordination</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/services" 
              className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Building Your Financial Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Call us today for a free initial review of your portfolio, and let us provide you with the investment assistance you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Get Free Portfolio Review
            </a>
            <a 
              href="/about" 
              className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors"
            >
              Learn About Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}