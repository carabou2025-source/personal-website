const Page = () => {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      {/* Header Section */}
      <header className="text-center py-16 bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md">
        <h1 className="text-5xl font-bold tracking-tight">Josh Cramer</h1>
        <p className="text-2xl mt-3 font-light">IT & Program Coordinator</p>
        <div className="mt-6 space-x-4 text-sm">
          <span>📞 (442) 677-5544</span>
          <span>•</span>
          <a
            href="mailto:carabou2025@gmail.com"
            className="hover:underline text-green-100"
          >
            ✉️ carabou2025@gmail.com
          </a>
          <span>•</span>
          <a
            href="https://linkedin.com/in/joshuacramer2025"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-green-100"
          >
            🌐 linkedin.com/in/joshuacramer2025
          </a>
          <span>•</span>
          <span>📍 Bay Area, CA</span>
        </div>
      </header>

      {/* Summary Section */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-emerald-700">
          Career Summary
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Versatile professional blending technical, operational, and community
          development expertise. Former software engineer turned program
          coordinator with proven success in CDL compliance, IT systems
          development, and workforce reentry initiatives. Skilled in coordinating
          teams, managing data systems, and optimizing programs that support both
          people and performance. Committed to professionalism, punctuality, and
          continual improvement, maintaining excellence under full legal compliance.
        </p>
      </section>

      {/* Expertise Section */}
      <section className="bg-white py-20 border-t border-green-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-emerald-700">
            Core Expertise
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-base font-medium text-gray-700">
            {[
              "Case Management",
              "Program Development",
              "Community Outreach",
              "Client Advocacy",
              "Legal Coordination",
              "Reentry & Probation Support",
              "HIPAA / OSHA Compliance",
              "Workforce & CDL Licensing",
              "Data Systems & Recordkeeping",
              "Policy Development",
              "Leadership & Mentorship",
              "Cultural Sensitivity",
            ].map((item) => (
              <li
                key={item}
                className="bg-green-100 rounded-lg py-3 shadow-sm hover:bg-green-200 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="px-6 py-20 bg-green-50 border-t border-green-100">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-emerald-700">
            Technical Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-base font-medium text-gray-700">
            {[
              "Software Integration",
              "Database Management",
              "XML / HTML / JavaScript",
              "UNIX / SQL Environments",
              "Data Security & Fraud Detection",
              "Network Setup & Troubleshooting",
              "Quality Assurance",
              "Technical Documentation",
              "IT Project Management",
              "Systems Consulting",
            ].map((skill) => (
              <li
                key={skill}
                className="bg-white rounded-lg py-3 shadow-sm hover:bg-green-100 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-20 bg-white border-t border-green-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center text-emerald-700">
            Professional Experience
          </h2>

          <div className="space-y-10">
            {/* CDL & Workforce Development */}
            <div className="bg-green-50 shadow
