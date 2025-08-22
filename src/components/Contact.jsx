import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-extrabold mb-6 text-gray-900">Get In Touch</h3>
        <p className="mb-12 text-lg text-gray-700 max-w-2xl mx-auto">
          Let's collaborate and build something amazing together!  
          I'm always open to discussing projects, creative ideas, or opportunities.
        </p>

         {/* Contact Card} */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-500 mb-2" />
              <a href="mailto:singh.bhanupratap3010@gmail.com" className="hover:text-blue-600 font-medium">
                singh.bhanupratap3010@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-500 mb-2" />
              <p className="font-medium">+91 6393461213</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-500 mb-2" />
              <p className="font-medium">Lucknow, India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/bhanu-pratap-singh-a76431171"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/BhanuPratapSingh3010"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full shadow hover:bg-black transition"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="mailto:singh.bhanupratap3010@gmail.com"
            className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            ✉️ Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
