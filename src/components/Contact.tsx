export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Business?</h2>
          <p className="mt-4 text-xl text-gray-300">
            Kontaktiert uns und wie sprechen über die nächsten Schritt!
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-[#0ea4c4] focus:border-[#0ea4c4]"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-[#0ea4c4] focus:border-[#0ea4c4]"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-[#0ea4c4] focus:border-[#0ea4c4]"
                placeholder="Tell us about your project..."
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#0ea4c4] text-white py-3 px-4 rounded-md hover:bg-[#0ea4c4]/80 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}