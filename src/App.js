import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  Database,
  GitBranch,
  Terminal,
  Layout,
} from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-8 md:py-12 md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Thanpisit Suriyaroj
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 mt-2">
              Portfolio
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-3 hover:text-blue-600 transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Bangkok, Thailand, 10600</span>
            </div>
            <a
              href="tel:0821881400"
              className="flex items-center gap-3 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>082-188-1400</span>
            </a>
            <a
              href="mailto:thanpisitsuriyaroj@gmail.com"
              className="flex items-center gap-3 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>thanpisitsuriyaroj@gmail.com</span>
            </a>
            <a
              href="https://github.com/thanpisitsu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-600 transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              <span>thanpisitsu</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="md:col-span-8 space-y-12">
          {/* Summary */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mb-6 inline-block">
              Summary
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {"  "}Full-Stack Developer with a strong background in building web
              applications from start to finish. Skilled in creating clean user
              interfaces with{" "}
              <span className="font-semibold text-slate-800">Angular</span> and{" "}
              <span className="font-semibold text-slate-800">React</span>, and
              building reliable servers using{" "}
              <span className="font-semibold text-slate-800">
                Node.js (NestJS)
              </span>{" "}
              and <span className="font-semibold text-slate-800">Golang</span>.
              Experienced in managing data with{" "}
              <span className="font-semibold text-slate-800">PostgreSQL</span>{" "}
              and using{" "}
              <span className="font-semibold text-slate-800">Docker</span> to
              make sure apps run smoothly. I enjoy solving technical problems
              and have a proven track record of delivering real-world projects,
              such as the SmartTA system for the Faculty of Engineering.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mb-8 inline-block">
              Experience
            </h3>
            <div className="space-y-10">
              <div className="relative pl-6 border-l-2 border-slate-200">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-50"></div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    SmartTA - Final Project
                  </h4>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-max mt-2 md:mt-0">
                    Jun 2025 - Mar 2026
                  </span>
                </div>
                <h5 className="text-md font-medium text-slate-600 mb-4">
                  Frontend Developer
                </h5>
                <ul className="list-disc text-slate-600 ml-4 space-y-2">
                  <li>
                    Designed and implemented a comprehensive Angular web
                    application to streamline TA hiring, budget tracking, and
                    evaluation processes for the Faculty of Engineering.
                  </li>
                  <li>
                    Produced detailed documentation and user manuals, ensuring
                    the system met academic and administrative requirements.
                  </li>
                </ul>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-200">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-50"></div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    Frontend Developer Internship
                  </h4>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-max mt-2 md:mt-0">
                    Apr 2025 - Jun 2025
                  </span>
                </div>
                <h5 className="text-md font-medium text-slate-600 mb-4">
                  AshaTech, Ladkrabang, Bangkok, Thailand
                </h5>
                <ul className="list-disc text-slate-600 ml-4 space-y-2">
                  <li>
                    Contributed to the development of responsive UI components
                    using Angular and TypeScript for client projects.
                  </li>
                  <li>
                    Collaborated within a professional development team to
                    integrate frontend features with backend services and
                    technical standards.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mb-8 inline-block">
              Education
            </h3>
            <div className="space-y-8">
              <div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                  <h4 className="text-lg font-bold text-slate-900">
                    King Mongkut's Institute of Technology Ladkrabang (KMITL)
                  </h4>
                  <span className="text-sm text-slate-500 font-medium">
                    2022 - 2026
                  </span>
                </div>
                <p className="text-slate-600">
                  Bachelor's degree in Computer Engineering{" "}
                  <span className="font-semibold text-slate-800 ml-2">
                    GPA: 3.22
                  </span>
                </p>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                  <h4 className="text-lg font-bold text-slate-900">
                    Srinakharinwirot University Prasarnmit Demonstration School
                  </h4>
                  <span className="text-sm text-slate-500 font-medium">
                    2019 - 2022
                  </span>
                </div>
                <p className="text-slate-600">Mathematic Engineering</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="md:col-span-4 space-y-10">
          {/* Tech Skills */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600" /> Technical Skills
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layout className="w-4 h-4 text-slate-400" /> Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Angular",
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "HTML5",
                    "CSS3",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-400" /> Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "NestJS", "Golang", "Java"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4 text-slate-400" /> Database
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MySQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-400" /> DevOps
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Docker Compose", "Git", "GitHub Actions"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md border border-slate-200"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Soft Skills */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Core Competencies
            </h3>
            <ul className="space-y-3">
              {[
                "Problem Solving",
                "Communication",
                "Teamwork & Collaboration",
                "Adaptability",
                "Time Management",
              ].map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-center text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} Thanpisit Suriyaroj. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
