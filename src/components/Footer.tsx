import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-slate-400 mb-4">
              {personalInfo.title}
            </p>
            <p className="text-slate-400 text-sm">
              Driving digital transformation and product innovation across global markets.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Back to Top
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Connect</h4>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
