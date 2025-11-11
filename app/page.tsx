const Page = () => {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      {/* Header Section */}
      <header className="text-center py-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md">
        <h1 className="text-5xl font-bold tracking-tight">Joshua C. Cramer</h1>
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
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "HTML & CSS",
              "Node.js",
              "Git & GitHub",
              "UI/UX Design",
            ].map((skill) => (
              <li
                key={skill}
                className="bg-green-100 rounded-lg py-3 shadow-sm hover:bg-green-200 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-20 bg-green-50 border-t border-green-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center text-emerald-700">
            Experience & Résumé
          </h2>

          <div className="space-y-10">
            {/* Experience 1 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-semibold text-emerald-700">
                  Case Manager / Tech Specialist
                </h3>
                <p className="text-gray-500 text-sm mt-1 md:mt-0">
                  Community Impact Organization | 2020 – Present
                </p>
              </div>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Developed digital tracking systems improving case response times by 30%.</li>
                <li>Used data visualization tools to measure client outcomes and resource efficiency.</li>
                <li>Trained staff on using secure web platforms for client record management.</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-semibold text-emerald-700">
                  Front-End Developer
                </h3>
                <p className="text-gray-500 text-sm mt-1 md:mt-0">
                  Freelance / Project-Based | 2018 – 2020
                </p>
              </div>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Designed and developed responsive websites using React, Tailwind, and Next.js.</li>
                <li>Collaborated with clients to deliver UX-focused web applications.</li>
                <li>Implemented SEO and accessibility best practices for improved performance.</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-semibold text-emerald-700">
                  IT Support & Data Coordinator
                </h3>
                <p className="text-gray-500 text-sm mt-1 md:mt-0">
                  Tech Outreach Services | 2016 – 2018
                </p>
              </div>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Maintained and optimized database systems used across multiple departments.</li>
                <li>Supported internal teams with troubleshooting, reporting, and automation tools.</li>
                <li>Introduced cloud-based tools that reduced paperwork and increased collaboration.</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/resume.pdf"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Résumé
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 text-center bg-white border-t border-green-100">
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
