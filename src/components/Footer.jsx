function Footer () {
  return (
    <footer className="bg-gray-50 w-full border-t border-gray-200 fixed bottom-0">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-serif mb-3">Myster</h2>
          <p className="text-sm text-gray-600 max-w-xs">Crafted for the discerning eye. Our philosophy is rooted in the pursuit of essential beauty and timeless functionality.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Explore</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Our Story</li>
            <li>Sustainability</li>
            <li>Bespoke Services</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Support</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Journal</h3>
          <p className="text-sm text-gray-600 mb-4">Subscribe to receive seasonal updates and atelier notes.</p>

          <form className="relative max-w-sm" >
            <input
              type="email"
              aria-label="Email address"
              placeholder="Email Address"
              className="w-full pr-12 p-3 border border-gray-300 rounded bg-white text-sm text-gray-700 focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="absolute top-1/2 -translate-y-1/2 right-1 p-2 text-gray-700 hover:text-gray-900"
              aria-label="Subscribe"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-sm text-gray-600">
          <div>© 2024 Myster. All rights reserved. Crafted for the discerning.</div>
          <div className="flex items-center gap-6">
            <div>Instagram</div>
            <div>Pinterest</div>
            <div>LinkedIn</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer