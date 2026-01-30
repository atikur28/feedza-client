export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-linear-to-r from-orange-400 to-red-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Feedza</h1>
          <p className="text-lg md:text-xl opacity-90">
            Discover & Order Delicious Meals
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Who We Are */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Feedza</strong> is a modern food ordering platform that
            connects customers with trusted food providers. Our goal is to make
            discovering, ordering, and enjoying meals simple, fast, and
            reliable.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To simplify food ordering through technology while empowering
              providers and ensuring customers enjoy transparent and seamless
              experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a trusted digital food ecosystem where customers,
              providers, and administrators work together effortlessly.
            </p>
          </div>
        </div>

        {/* Roles */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Platform Roles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Customers</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Browse meals & providers</li>
                <li>Add to cart & place orders</li>
                <li>Track order status</li>
                <li>Leave reviews</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Providers</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Manage menu items</li>
                <li>View incoming orders</li>
                <li>Update order status</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Admins</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Manage users</li>
                <li>Oversee orders</li>
                <li>Moderate platform content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
          <h3 className="text-2xl font-semibold mb-2">Our Commitment</h3>
          <p className="text-gray-700 leading-relaxed">
            Feedza is built with performance, security, and scalability in mind.
            We are committed to delivering reliable food experiences and
            continuously improving our platform.
          </p>
        </div>
      </section>
    </div>
  );
}
