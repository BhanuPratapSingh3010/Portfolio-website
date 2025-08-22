import { TypeAnimation } from "react-type-animation";
import Bhanu_Image from '../images/Bhanu image.jpeg'
export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative"
    >
      {/* {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="relative text-center px-6">
        
        <img
          src={Bhanu_Image}
          alt="Bhanu Pratap Singh"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
        />

        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-500">Bhanu Pratap Singh</span>
        </h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "MERN | Prisma | PostgreSQL",
            2000,
            "Problem Solver & Tech Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-2xl font-medium text-gray-300"
          repeat={Infinity}
        />

        
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            View My Work
          </a>
          <a
            href="#resume"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

