export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive wealth management solutions tailored to your financial goals
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Portfolio Management</h2>
              <p className="text-lg text-gray-600 mb-6">
                We manage our own portfolios with no expensive outside money managers or mutual funds. 
                Each position and portfolio is hand-picked and customized to the individual investor.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Hand-picked individual security selection and analysis
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Customized asset allocation for each investor
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No expensive mutual funds or outside managers
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quarterly performance reporting and analysis
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Risk management and downside protection
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Advisory</h2>
              <p className="text-lg text-gray-600 mb-6">
                Strategic investment guidance and comprehensive financial planning services 
                designed to help you achieve your long-term financial objectives.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personalized investment strategy development
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Comprehensive financial planning
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Retirement and estate planning coordination
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tax-efficient investment strategies
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Ongoing consultation and support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600">
              Additional services to support your complete financial picture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Retirement Planning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive retirement income strategies including 401(k) rollovers, 
                IRA management, and distribution planning.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 401(k) and IRA optimization</li>
                <li>• Social Security planning</li>
                <li>• Distribution strategies</li>
                <li>• Healthcare cost planning</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Estate Planning</h3>
              <p className="text-gray-600 mb-4">
                Coordinate with your estate planning attorney to ensure your investment 
                strategy aligns with your legacy goals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Trust and estate coordination</li>
                <li>• Beneficiary designations</li>
                <li>• Tax-efficient transfers</li>
                <li>• Charitable giving strategies</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Owners</h3>
              <p className="text-gray-600 mb-4">
                Specialized services for business owners including succession planning 
                and executive compensation strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Business succession planning</li>
                <li>• Executive compensation</li>
                <li>• Key person insurance</li>
                <li>• Buy-sell agreements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transparent Fee Structure</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe in transparent, fair pricing that aligns our interests with yours. 
                Our fee structure is simple and straightforward with no hidden costs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-900 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">$500,000 minimum account size</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-900 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">1.00% annual management fee</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-900 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fee reductions for larger accounts</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-900 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No hidden fees or commissions</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="font-medium text-gray-700">First $1 million</span>
                  <span className="font-bold text-blue-900">1.00%</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="font-medium text-gray-700">Next $1 million</span>
                  <span className="font-bold text-blue-900">0.75%</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="font-medium text-gray-700">Next $3 million</span>
                  <span className="font-bold text-blue-900">0.50%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Above $5 million</span>
                  <span className="font-bold text-blue-900">0.40%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                *Fees are negotiable based on account size and complexity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Call us today for a free initial review of your portfolio, 
            and let us provide you with the investment assistance you need.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Get Free Portfolio Review
          </a>
        </div>
      </section>
    </div>
  )
}