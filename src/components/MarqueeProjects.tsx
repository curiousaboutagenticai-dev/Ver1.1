import { Calendar, MapPin, Award } from 'lucide-react';
import { marqueeProjects } from '../data/portfolio';

export default function MarqueeProjects() {
  return (
    <section id="marquee-projects" className="py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full font-semibold mb-6">
            Portfolio Highlights
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            12 Marquee Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Groundbreaking deployments that shaped India's digital infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {marqueeProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="px-3 py-1 bg-amber-400 dark:bg-amber-500 text-slate-900 text-sm font-bold rounded-full">
                  {project.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{project.location}</span>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-600">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
