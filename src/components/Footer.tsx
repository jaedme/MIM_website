import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <div className="text-xl font-bold">Meixler Investment Management</div>
                <div className="text-gray-300 text-sm">Professional Investment Advisory</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing personalized investment management and financial planning services 
              to individuals and families in Show Low, Arizona and beyond.
            </p>
            <div className="text-gray-400 text-sm">
              <p>SEC Registered Investment Advisor</p>
              <p>CRD #123456789</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Show Low, AZ 85901</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">(928) 555-0123</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">info@meixlerinvestment.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h4 className="text-white font-semibold mb-3">Important Disclosures</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p>
                <strong>Investment Advisory Disclaimer:</strong> This website is for informational purposes only and does not constitute investment advice. 
                Past performance does not guarantee future results. All investments carry risk and may lose value.
              </p>
              <p>
                <strong>SEC Registration:</strong> Registration with the Securities and Exchange Commission does not imply any level of skill or training. 
                Additional information about our firm is available on the SEC&apos;s Investment Adviser Public Disclosure website at adviserinfo.sec.gov.
              </p>
              <p>
                <strong>Geographic Limitations:</strong> Services are offered to residents of states where we are properly registered or exempt from registration.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Meixler Investment Management, LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Form ADV</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}