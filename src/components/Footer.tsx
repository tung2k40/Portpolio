import { Github, Mail } from "lucide-react";
import { cvData } from "../data";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-white tracking-tighter mb-6"
        >
          Tung<span className="text-orange-500">.</span>
        </a>

        <div className="flex items-center gap-6 mb-8">
          <a
            href={cvData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-orange-500 hover:bg-zinc-800 transition-all border border-zinc-800/50"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={`mailto:${cvData.personalInfo.email}`}
            className="p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-orange-500 hover:bg-zinc-800 transition-all border border-zinc-800/50"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <p className="text-zinc-600 text-sm text-center">
          &copy; {new Date().getFullYear()} {cvData.personalInfo.name}. All
          rights reserved. <br />
          Built with React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
