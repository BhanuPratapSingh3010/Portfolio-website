
import { useEffect } from "react";
import gsap from "gsap";

const projects = [
  {
    id: 1,
    title: "Pixify - Social Media App",
    img: "https://plus.unsplash.com/premium_photo-1720032304972-1f1142e73253?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    description:
      "A social media platform where users can create posts and chat in real-time using Socket.IO. Deployed on Vercel (frontend) and Render (backend).",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Tailwind"],
    github: "https://github.com/BhanuPratapSingh3010/Pixify-frontend",
    live: "https://pixify-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "FlavourFusion - Recipe Web App",
    img: "https://plus.unsplash.com/premium_photo-1677619680553-732e8e153db2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    description:
      "A recipe web application showcasing recipes from a dummy API. Designed with a modern, responsive interface using React and Tailwind CSS.",
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/BhanuPratapSingh3010/Recipe-App",
    live: "https://flavourfusion-brown.vercel.app/",
  },
];

export default function Projects() {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".projects-title",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3 }
    );
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100" id="projects">
      <div className="container mx-auto px-6">
        <h3 className="projects-title text-4xl font-extrabold text-center mb-16 text-gray-900">
           Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
            >
              {/* Image */}
              <div className="overflow-hidden ">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-60 object-fill transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

            
              <div className="p-6 flex flex-col justify-between">
                <h4 className="text-2xl font-semibold mb-3 text-gray-900">
                  {p.title}
                </h4>
                <p className="text-gray-700 mb-4">{p.description}</p>

                
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-blue-50 text-blue-600 font-medium rounded-full shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
