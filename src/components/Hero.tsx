import { Github, Linkedin, Mail, Twitter, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[120vh] flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-25 dark:opacity-10 blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-300 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-25 dark:opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] bg-amber-300 dark:bg-amber-900 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-25 dark:opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            {personalInfo.bio}
          </p>

          <div className="flex justify-center gap-6 mb-12 animate-fade-in-up animation-delay-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up animation-delay-600"
          >
            View My Work
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400 dark:text-slate-600" />
      </div>
    </section>
  );
}
