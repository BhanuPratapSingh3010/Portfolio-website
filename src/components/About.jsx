// import { useEffect } from "react";
// import Bhanu_Image from "../images/ChatGPT Image Aug 22, 2025, 04_44_52 PM.png";
// import gsap from "gsap";

// export default function About() {
//   useEffect(() => {
//     gsap.fromTo(
//       ".about-img",
//       { x: -50, opacity: 0 },
//       { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
//     );
//     gsap.fromTo(
//       ".about-title",
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
//     );
//     gsap.fromTo(
//       ".about-text",
//       { opacity: 0 },
//       { opacity: 1, duration: 1, delay: 0.6 }
//     );
//     gsap.fromTo(
//       ".about-skill",
//       { y: 20, opacity: 0 },
//       { y: 0, opacity: 1, stagger: 0.2, delay: 0.9, duration: 0.8 }
//     );
//     gsap.fromTo(
//       ".about-btn",
//       { y: 20, opacity: 0 },
//       { y: 0, opacity: 1, delay: 1.5, duration: 0.8 }
//     );
//   }, []);

//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative" id="about">
//       {/* Top subtle divider wave */}
//       <div className="absolute top-0 left-0 w-full h-16 bg-white clip-path-wave"></div>

//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        
//         {/* Profile Image */}
//         <div className="relative about-img">
//           <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
//             <img
//               src={Bhanu_Image}
//               alt="Bhanu Pratap Singh"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex-1">
//           <h3 className="about-title text-4xl font-extrabold mb-6 text-gray-900">
//             About Me
//           </h3>
//           <p className="about-text text-lg text-gray-700 leading-relaxed mb-8">
//             Hi, I’m <span className="font-semibold text-blue-600">Bhanu Pratap Singh</span>, 
//             a <b>Full-Stack Developer</b> skilled in the{" "}
//             <span className="text-blue-600">MERN stack, Prisma, and PostgreSQL</span>.  
//             I love building clean, scalable, and user-friendly applications with modern UI and efficient backend logic.
//           </p>

//           {/* Skill Highlights */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//             <div className="about-skill bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition text-center">
//               <h4 className="font-semibold text-blue-600">Frontend</h4>
//               <p className="text-sm text-gray-600">React, Tailwind, Redux</p>
//             </div>
//             <div className="about-skill bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition text-center">
//               <h4 className="font-semibold text-blue-600">Backend</h4>
//               <p className="text-sm text-gray-600">Node.js, Express, Prisma</p>
//             </div>
//             <div className="about-skill bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition text-center">
//               <h4 className="font-semibold text-blue-600">Database</h4>
//               <p className="text-sm text-gray-600">PostgreSQL, MongoDB</p>
//             </div>
//             <div className="about-skill bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition text-center">
//               <h4 className="font-semibold text-blue-600">Tools</h4>
//               <p className="text-sm text-gray-600">Git, Docker, Vercel</p>
//             </div>
//           </div>

//           {/* Resume Button */}
//           <a
//             href="#resume"
//             className="about-btn inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             View Resume
//           </a>
//         </div>
//       </div>

//       {/* Bottom subtle divider wave */}
//       <div className="absolute bottom-0 left-0 w-full h-16 bg-white clip-path-wave rotate-180"></div>
//     </section>
//   );
// }

import { useEffect } from "react";
import Bhanu_Image from "../images/Bhanu image.jpeg";
import gsap from "gsap";
import "../index.css";

export default function About() {
  useEffect(() => {
    gsap.fromTo(
      ".about-img",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      ".about-title",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      ".about-text",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.6 }
    );
    gsap.fromTo(
      ".about-skill",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, delay: 0.9, duration: 0.8 }
    );
    gsap.fromTo(
      ".about-btn",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 1.5, duration: 0.8 }
    );
  }, []);

  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
      id="about"
    >
      {/* Ripple Background */}
      <div className="ripple-background">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      {/* Top subtle divider wave */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white clip-path-wave"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Profile Image */}
        <div className="relative about-img">
          <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={Bhanu_Image}
              alt="Bhanu Pratap Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="about-title text-4xl font-extrabold mb-6 text-gray-900">
            About Me
          </h3>
          <p className="about-text text-lg text-gray-700 leading-relaxed mb-8">
            Hi, I’m{" "}
            <span className="font-semibold text-blue-600">
              Bhanu Pratap Singh
            </span>
            , a <b>Full-Stack Developer</b> skilled in the{" "}
            <span className="text-blue-600">MERN stack, Prisma, and PostgreSQL</span>.
            I love building clean, scalable, and user-friendly applications with
            modern UI and efficient backend logic.
          </p>

          {/* Skill Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="about-skill bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <h4 className="font-semibold text-blue-600">Frontend</h4>
              <p className="text-sm text-gray-600">React, Tailwind, Redux</p>
            </div>
            <div className="about-skill bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <h4 className="font-semibold text-blue-600">Backend</h4>
              <p className="text-sm text-gray-600">Node.js, Express, Prisma</p>
            </div>
            <div className="about-skill bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <h4 className="font-semibold text-blue-600">Database</h4>
              <p className="text-sm text-gray-600">PostgreSQL, MongoDB</p>
            </div>
            <div className="about-skill bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <h4 className="font-semibold text-blue-600">Tools</h4>
              <p className="text-sm text-gray-600">Git, Docker, Vercel</p>
            </div>
          </div>

          {/* Resume Button */}
          <a
            href="#resume"
            className="about-btn inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Bottom subtle divider wave */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white clip-path-wave rotate-180"></div>
    </section>
  );
}
