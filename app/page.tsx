"use client";

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
            <div className="bg-green-50 shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-semibold text-emerald-700">
                  CDL & Workforce Development Program Manager
                </h3>
                <p className="text-gray-500 text-sm mt-1 md:mt-0">
                  Jericho Project — Brisbane, CA | Jun 2023 – May 2024
                </p>
              </div>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>
                  Directed CDL licensing, workforce placement, and compliance processes for program participants.
                </li>
                <li>
                  Partnered with DMV and state agencies to streamline documentation and scheduling systems.
                </li>
                <li>
                  Designed IT infrastructure improvements to enhance data security and efficiency.
                </li>
                <li>
                  Mentored reentry participants, promoting successful workforce reintegration.
                </li>
              </ul>
            </div>

            {/* Program Coordinator */}
            <div className="bg-green-50 shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-semibold text-emerald-700">
                  Program Coordinator / Case Manager
                </h3>
                <p className="text-gray-500 text-sm mt-1 md:mt-0">
                  Community Employment Programs — San Francisco, CA | 2021 – 2023
                </p>
              </div>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>
                  Provided case management for reentry and employment program participants.
                </li>
                <li>
                  Built secure databases to manage client records and track outcomes.
                </li>
                <li>
                  Partnered with housing, recovery, and community services to improve participant success.
                </li>
              </ul>
            </div>

            {/* Software Engineer */}
            <div className="bg-green-50 shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-semibold text-emerald-700">
                  Software Engineer / Systems Developer
                </h3>
                <p className="text-gray-500 text-sm mt-1 md:mt-0">
                  Symitar — San Diego, CA | 2000 – 2002
                </p>
              </div>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>
                  Developed custom financial applications for credit unions using proprietary programming languages.
                </li>
                <li>
                  Built transaction tracking and fraud prevention systems still in active use today.
                </li>
              </ul>
            </div>

            {/* Conversion Programmer */}
            <div className="bg-green-50 shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-semibold text-emerald-700">
                  Conversion Programmer / Senior Consultant
                </h3>
                <p className="text-gray-500 text-sm mt-1 md:mt-0">
                  Jack Henry & Associates — San Diego, CA | 2002 – 2007
                </p>
              </div>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>
                  Managed nationwide system conversions and database migrations for financial institutions.
                </li>
                <li>
                  Built web-based loan application systems integrating XML, HTML, and JavaScript.
                </li>
                <li>
                  Promoted for outstanding technical accuracy and client satisfaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 py-20 bg-green-50 border-t border-green-100 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-emerald-700">
          Education
        </h2>
        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong>Bachelor’s Degree | Computer Information Science</strong> – Coleman College (2000 – 2002)
          </p>
          <p>
            <strong>Community Health Worker Certificate</strong> – JRP Code Tenderloin (In Progress)
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 text-center bg-white border-t border-green-100">
        <h2 className="text-3xl font-semibold mb-6 text-emerald-700">
          Get in Touch
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-700">
          Open to collaborations, workforce initiatives, or IT consulting opportunities.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Email Button */}
          <a
            href="mailto:carabou2025@gmail.com"
            className="inline-block text-xl text-white bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg shadow-md transition"
          >
            ✉️ Email Josh
          </a>

          {/* Download Resume Button */}
          <a
            href="/JoshCramerResume.pdf"
            download
            className="inline-block text-xl text-emerald-700 border border-emerald-600 hover:bg-emerald-100 px-6 py-3 rounded-lg shadow-md transition"
          >
            📄 Download Résumé (PDF)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-emerald-700 text-green-50 text-center">
        <p className="text-sm">Built with ❤️ using Next.js & Tailwind CSS</p>
        <p className="text-sm mt-1">&copy; 2025 Josh Cramer</p>
      </footer>
    </div>
  );
};

export default Page;
