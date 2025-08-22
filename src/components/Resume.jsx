import { GraduationCap, Briefcase, Code, Award } from "lucide-react";

export default function Resume() {
  return (
    <section className="py-20 bg-gray-50" id="resume">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Resume
        </h3>

        {/* Resume Card */}
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-800">
              Bhanu Pratap Singh
            </h2>
            <p className="text-gray-600 mt-1">
              Lucknow, Uttar Pradesh, India
            </p>
            <p className="text-gray-600">
              📱 <span className="font-medium">+91 6393461213</span> | ✉️{" "}
              <a
                href="mailto:singh.bhanupratap3010@gmail.com"
                className="text-blue-500 hover:underline"
              >
                singh.bhanupratap3010@gmail.com
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://www.linkedin.com/in/bhanu-pratap-singh-a76431171"
                className="text-blue-500 hover:underline mr-4"
              >
                LinkedIn
              </a>
              |
              <a
                href="https://github.com/BhanuPratapSingh3010"
                className="text-blue-500 hover:underline ml-4"
              >
                GitHub
              </a>
            </p>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="flex items-center gap-2 text-2xl font-semibold mb-4">
              <Code className="w-6 h-6 text-blue-500" /> Professional Summary
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Versatile and detail-oriented Full-Stack Developer with expertise
              in MERN stack, Prisma, and PostgreSQL. Skilled in delivering
              scalable, user-friendly solutions with a focus on clean code,
              performance optimization, and agile practices. Strong problem-solving
              skills and team collaboration experience.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="flex items-center gap-2 text-2xl font-semibold mb-6">
              <GraduationCap className="w-6 h-6 text-blue-500" /> Education
            </h4>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded shadow-sm">
                <p className="font-bold">
                  B.N College of Engineering and Technology
                </p>
                <p className="text-gray-600">
                  B.Tech in Computer Science (2019 - 2023)
                </p>
              </div>
              <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded shadow-sm">
                <p className="font-bold">St. Antony's Inter College</p>
                <p className="text-gray-600">Class 12th (2018 - 2019)</p>
              </div>
              <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded shadow-sm">
                <p className="font-bold">St. Antony's Inter College</p>
                <p className="text-gray-600">Class 10th (2016 - 2017)</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="flex items-center gap-2 text-2xl font-semibold mb-6">
              <Code className="w-6 h-6 text-blue-500" /> Skills
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "Redux",
                "Tailwind CSS",
                "MUI",
                "Bootstrap",
                "Node.js",
                "Express.js",
                "REST APIs",
                "Prisma",
                "MongoDB",
                "PostgreSQL",
                "Git",
                "GitHub",
                "Docker",
                "Vercel",
                "Heroku",
                "Render",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-full text-sm shadow-sm hover:bg-blue-100 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="flex items-center gap-2 text-2xl font-semibold mb-6">
              <Briefcase className="w-6 h-6 text-blue-500" /> Professional
              Experience
            </h4>
            <div className="p-6 bg-gray-50 border-l-4 border-blue-500 rounded shadow-sm">
              <p className="font-bold">
                Full-Stack Developer Intern | <a href="https://drive.google.com/file/d/1BfjKvoncVAQxPFxWXiRwQJqW34OVXBv8/view">Wire Wings IT Solutions</a>
              </p>
              <p className="text-gray-600 text-sm">Jan 2025 – Mar 2025</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                <li>
                  Developed and maintained client & in-house apps using React.js,
                  Node.js, PostgreSQL.
                </li>
                <li>Built responsive UIs with Tailwind CSS.</li>
                <li>Integrated backend APIs to enhance app functionality.</li>
                <li>Collaborated with cross-functional teams for timely delivery.</li>
                <li>
                  Delivered <b>Scrilla</b>, an e-commerce platform, on time with
                  high-quality standards.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="flex items-center gap-2 text-2xl font-semibold mb-6">
              <Code className="w-6 h-6 text-blue-500" /> Projects
            </h4>
            <ul className="space-y-3">
              <li>
                <b>Pixify - Social Media App:</b> Real-time posts & chat with
                Socket.IO (Deployed on Vercel/Render).{" "}
                <a
                  href="https://github.com/BhanuPratapSingh3010/Pixify-frontend"
                  className="text-blue-500 hover:underline ml-2"
                >
                  GitHub
                </a>
              </li>
              <li>
                <b>FlavourFusion - Recipe App:</b> Food recipe app with React.js,
                dummy API & Tailwind.{" "}
                <a
                  href="https://github.com/BhanuPratapSingh3010/Recipe-App"
                  className="text-blue-500 hover:underline ml-2"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="flex items-center gap-2 text-2xl font-semibold mb-4">
              <Award className="w-6 h-6 text-blue-500" /> Certifications
            </h4>
            <p className="text-gray-700"><a href="https://www.hackerrank.com/certificates/5d2afe6b4f17">SQL Intermediate Certification</a> </p>
          </div>

          {/* Download Button */}
          <div className="text-center pt-6">
            <a
              href="https://drive.google.com/file/d/1lsajlOHYXGEqM40AtOIchxn8zlZWi_X7/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
             Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
