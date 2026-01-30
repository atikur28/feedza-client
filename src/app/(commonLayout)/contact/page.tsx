export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-linear-to-r from-orange-400 to-red-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Feedza
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            We’re here to help you
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Get In Touch</h2>
          <p className="text-gray-700">
            Have questions, feedback, or partnership ideas? Reach out to us
            anytime.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Email:</strong> support@feedza.com
            </p>
            <p>
              <strong>Phone:</strong> +880 1865619327
            </p>
            <p>
              <strong>Address:</strong> Dhaka, Bangladesh
            </p>
            <p>
              <strong>Support Hours:</strong> Sun – Thu (9:00 AM – 6:00 PM)
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
