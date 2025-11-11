const Page = () => {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      {/* Header Section */}
      <header className="text-center py-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md">
        <h1 className="text-5xl font-bold tracking-tight">Joshua Cramer</h1>
        <p className="text-2xl mt-4 font-light">
          Bridging Technology and Human Impact
        </p>
      </header>

      {/* Bio Section */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-emerald-700">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
          I’m a web developer and casework professional passionate about using
          technology to create meaningful, user-focused experiences. My work blends
          modern web development with empathy-driven design — ensuring that every
          solution not only works beautifully but helps people in practical ways.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-20 border-t border-green-100">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-emerald-700">Skills & Tools</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg font-medium text-gray-700 max-w-4xl mx-auto">
            <li className="bg-green-100 rounded-lg py-3 shadow-sm hover:bg-green-200 transition">
              JavaScript
            </li>
            <li className="bg-green-100 rounded-lg py-3 shadow-sm hover:bg-green-200 transition">
              TypeScript
            </li>
            <li className="bg-green-100 rounded-lg py-3 shadow-sm hover:bg-green-200 transition">
              React
            </li>
            <li className="bg-green-100 rounded-lg py-3 shadow-sm hover:bg-green-200 transition">
              Next.js
            </li>
            <li className="bg-green-100 rounded-lg py-3 shadow-sm hover:bg-green-200 transition">
              HTML & CSS
            </li>
            <li className="bg-green-100 rounded-lg py-3 shadow-sm hover:bg-green-200 transition">
              Node.js
            </li>
            <li className="bg-green-100 rounded-lg py-3 shadow-sm hover:bg-green-200 transition">
              Git & GitHub
            </li>
            <li className="bg-green-100 rounded-lg py-3 shadow-sm hover:bg-green-200 transition">
              UI/UX Design
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 text-center bg-green-50">
        <h2 className="text-3xl font-semibold mb-6 text-emerald-700">Get in Touch</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-700">
          I’m always open to new opportunities, collaborations, or conversations
          about creating solutions that make a difference.
        </p>
        <a
          href="mailto:carabou2025@gmail.com"
          className="inline-block text-xl text-white bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg shadow-md transition"
        >
          carabou2025@gmail.com
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-emerald-700 text-green-50 text-center">
        <p className="text-sm">
          Built with ❤️ using Next.js & Tailwind CSS
        </p>
        <p className="text-sm mt-1">&copy; 2025 Josh Cramer</p>
      </footer>
    </div>
  );
};

export default Page;
